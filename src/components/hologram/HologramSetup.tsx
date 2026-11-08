"use client";

import { useEffect, useState } from "react";
import { hologramSetup } from "@/content/content";
import { relayBase } from "@/lib/pip-link";
import { QrCode } from "@/components/diagrams/QrCode";

/**
 * The team's setup page for the hologram, opened on the presenting laptop: the address for
 * the second computer, as a code to scan, and how many hologram screens are following.
 */

type RelayInfo = { holograms: number; addresses: string[]; slide: string | null };
type RelayState = { kind: "checking" } | { kind: "off" } | { kind: "on"; info: RelayInfo };

const POLL_MS = 2000;
const HOLOGRAM_PATH = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/pip/`;

function useRelayInfo(): RelayState {
  const [state, setState] = useState<RelayState>({ kind: "checking" });
  useEffect(() => {
    const base = relayBase();
    let stopped = false;
    const check = async () => {
      try {
        if (!base) throw new Error("no relay");
        const info = (await (await fetch(`${base}/status`)).json()) as RelayInfo;
        if (!stopped) setState({ kind: "on", info });
      } catch {
        if (!stopped) setState({ kind: "off" });
      }
    };
    void check();
    const timer = window.setInterval(() => void check(), POLL_MS);
    return () => {
      stopped = true;
      window.clearInterval(timer);
    };
  }, []);
  return state;
}

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

/** The address the second computer should use: this laptop's Wi-Fi address when the page is open on the laptop itself. */
function secondComputerUrl(state: RelayState): string | null {
  if (typeof window === "undefined") return null;
  const { hostname, port, origin } = window.location;
  if (!LOCAL_HOSTS.has(hostname)) return `${origin}${HOLOGRAM_PATH}`;
  const address = state.kind === "on" ? state.info.addresses[0] : undefined;
  return address ? `http://${address}:${port || "80"}${HOLOGRAM_PATH}` : null;
}

function Status({ relay }: { relay: RelayState }) {
  if (relay.kind === "checking") return null;
  if (relay.kind === "off") {
    return <p className="mt-8 bg-surface-raised px-6 py-4 text-lg text-text">{hologramSetup.relayOff}</p>;
  }
  const rows = [
    { key: hologramSetup.deckLabel, value: relay.info.slide ?? hologramSetup.notStarted },
    { key: hologramSetup.hologramsLabel, value: String(relay.info.holograms) },
  ];
  return (
    <section className="mt-8 rounded-card bg-surface-raised px-6 py-5 shadow-card">
      <h2 className="text-xl font-semibold">{hologramSetup.statusTitle}</h2>
      <dl className="mt-3 grid grid-cols-[200px_1fr] gap-y-1 text-lg">
        {rows.map((row) => (
          <div key={row.key} className="contents">
            <dt className="text-text-muted">{row.key}</dt>
            <dd className={`font-semibold ${row.value === "0" ? "text-text-muted" : "text-accent"}`}>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function HologramSetup() {
  const relay = useRelayInfo();
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => setUrl(secondComputerUrl(relay)), 0);
    return () => window.clearTimeout(timer);
  }, [relay]);

  return (
    <main className="fixed inset-0 overflow-auto bg-surface px-6 py-12 text-text">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-semibold">{hologramSetup.heading}</h1>
        <p className="mt-4 max-w-3xl text-xl text-text-muted">{hologramSetup.intro}</p>
        <Status relay={relay} />
        <section className="mt-8 flex items-center gap-8 rounded-card bg-surface-raised p-6 shadow-card">
          <div className="shrink-0 rounded-card bg-paper p-3">
            {url ? <QrCode value={url} size={170} /> : <div className="size-[170px]" />}
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold">{hologramSetup.secondComputer.name}</h2>
            <p className="mt-2 text-lg text-text-muted">{hologramSetup.secondComputer.line}</p>
            <p className="mt-3 break-all text-xl font-semibold text-accent">{url ?? hologramSetup.noNetwork}</p>
          </div>
        </section>
        <section className="mt-5 rounded-card bg-surface-raised p-6 shadow-card">
          <h2 className="text-2xl font-semibold">{hologramSetup.thisLaptop.name}</h2>
          <p className="mt-2 text-lg text-text-muted">{hologramSetup.thisLaptop.line}</p>
          <a
            href={HOLOGRAM_PATH}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-lg underline underline-offset-4"
          >
            {hologramSetup.openHere}
          </a>
        </section>
        <ul className="mt-10 list-disc space-y-2 pl-6 text-lg text-text-muted">
          {hologramSetup.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
