import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const EM_DASH = String.fromCharCode(0x2014);
const SKIP_DIRS = new Set(["node_modules", ".next", "out", "dist", ".git"]);
const TEXT_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".mjs", ".css", ".md", ".json", ".html", ".txt"]);

function listFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (SKIP_DIRS.has(name)) return [];
    if (statSync(path).isDirectory()) return listFiles(path);
    return TEXT_EXTENSIONS.has(extname(name)) ? [path] : [];
  });
}

function findDashes(path) {
  return readFileSync(path, "utf8")
    .split("\n")
    .flatMap((line, index) => (line.includes(EM_DASH) ? [`${path}:${index + 1}`] : []));
}

const hits = listFiles(process.cwd()).flatMap(findDashes);

if (hits.length > 0) {
  console.error(`Found ${hits.length} em dash(es):\n${hits.join("\n")}`);
  process.exit(1);
}
console.log("Em dash scan: clean.");
