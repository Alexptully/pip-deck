import type { SlideId } from "@/content/content";

/**
 * How the deck reaches Pip's hologram screen. A window in the same browser hears it over a
 * BroadcastChannel. A second computer on the same Wi-Fi hears it through the relay that
 * `npm run present` starts on the presenting laptop (scripts/pip-relay.mjs).
 */

export const CHANNEL_NAME = "pip-deck";
export const RELAY_PORT = 3002;

export type PositionMessage = {
  /** A new id each time the deck page loads, so a reloaded deck takes over at once. */
  deck: string;
  /** Rises with every message from one deck, so late or doubled copies are ignored. */
  seq: number;
  /** When the deck made this message. With two decks open, the newest action wins. */
  at: number;
  slideId: SlideId;
  step: number;
};

/** True when `next` should replace what the hologram is showing from `current`. */
export function isNewer(next: PositionMessage, current: PositionMessage | null): boolean {
  if (!current) return true;
  if (current.deck !== next.deck) return next.at > current.at;
  return next.seq > current.seq;
}

export function isPositionMessage(value: unknown): value is PositionMessage {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Partial<PositionMessage>;
  return (
    typeof candidate.deck === "string" &&
    typeof candidate.seq === "number" &&
    typeof candidate.at === "number" &&
    typeof candidate.slideId === "string"
  );
}

/** Where the relay runs: the machine serving the deck, on the relay port. Hosted https copies can't reach a laptop. */
export function relayBase(): string | null {
  if (typeof window === "undefined" || window.location.protocol !== "http:") return null;
  return `http://${window.location.hostname}:${RELAY_PORT}`;
}

export function openChannel(): BroadcastChannel | null {
  return typeof BroadcastChannel === "undefined" ? null : new BroadcastChannel(CHANNEL_NAME);
}
