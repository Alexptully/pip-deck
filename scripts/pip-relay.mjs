// The hologram relay. The deck posts where it is here, and Pip's hologram screen on a
// second computer listens with server-sent events. It keeps only the newest position,
// so a screen that opens late catches up at once. No dependencies, so it runs anywhere
// Node does. `npm run dev` and `npm run present` start it; `npm run relay` runs it alone.
// The same pattern as the Fold with Nara kiosk relay.
import http from "node:http";
import os from "node:os";
import { pathToFileURL } from "node:url";

export const RELAY_PORT = 3002;
const MAX_BODY = 16 * 1024;
const PING_MS = 15000;

/** The laptop's addresses on the local network, for the second computer to type or scan. */
export function lanAddresses() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((entry) => entry && entry.family === "IPv4" && !entry.internal)
    .map((entry) => entry.address);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY) reject(new Error("too large"));
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

// Within one deck the higher number wins; between two open decks the newer action wins,
// so an old tab's heartbeat can't pull Pip back. Matches isNewer in src/lib/pip-link.ts.
function isNewer(next, current) {
  if (!current) return true;
  if (current.deck !== next.deck) return next.at > current.at;
  return next.seq > current.seq;
}

function isMessage(value) {
  return (
    typeof value?.deck === "string" &&
    typeof value?.seq === "number" &&
    typeof value?.at === "number" &&
    typeof value?.slideId === "string"
  );
}

function sendJson(res, status, value) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(value));
}

function createRelay(log) {
  let latest = null;
  const holograms = new Set();

  const push = (res, message) => res.write(`event: position\ndata: ${JSON.stringify(message)}\n\n`);

  const listen = (req, res) => {
    res.writeHead(200, {
      "content-type": "text/event-stream",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
    });
    res.write("retry: 3000\n\n");
    holograms.add(res);
    if (latest) push(res, latest);
    log(`Pip hologram screen connected (${holograms.size} open)`);
    req.on("close", () => {
      holograms.delete(res);
      log(`Pip hologram screen left (${holograms.size} open)`);
    });
  };

  const receive = async (req, res) => {
    const message = JSON.parse(await readBody(req));
    if (!isMessage(message)) return sendJson(res, 400, { ok: false });
    if (isNewer(message, latest)) {
      latest = message;
      for (const client of holograms) push(client, message);
    }
    sendJson(res, 200, { ok: true, holograms: holograms.size });
  };

  const status = (req, res) =>
    sendJson(res, 200, { holograms: holograms.size, addresses: lanAddresses(), slide: latest?.slideId ?? null });

  const ping = setInterval(() => {
    for (const client of holograms) client.write(": ping\n\n");
  }, PING_MS);

  return {
    routes: { "GET /events": listen, "POST /state": receive, "GET /status": status },
    stop: () => clearInterval(ping),
  };
}

function allowAnyOrigin(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  if (req.method !== "OPTIONS") return false;
  res.writeHead(204, {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
  });
  res.end();
  return true;
}

/** Starts the relay. If the port is taken, it says so and the deck keeps running. */
export function startRelay({ port = RELAY_PORT, log = console.log } = {}) {
  const relay = createRelay(log);
  const server = http.createServer((req, res) => {
    if (allowAnyOrigin(req, res)) return;
    const url = new URL(req.url ?? "/", "http://relay");
    const route = relay.routes[`${req.method} ${url.pathname}`];
    if (!route) return sendJson(res, 404, { ok: false });
    Promise.resolve(route(req, res, url)).catch(() => sendJson(res, 400, { ok: false }));
  });
  server.on("error", (error) => {
    relay.stop();
    const reason = error.code === "EADDRINUSE" ? `port ${port} is already in use` : error.message;
    log(`Hologram relay didn't start: ${reason}. The deck still works; a second computer won't follow it.`);
  });
  server.on("close", relay.stop);
  server.listen(port);
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startRelay();
  console.log(`Hologram relay listening on port ${RELAY_PORT}.`);
}
