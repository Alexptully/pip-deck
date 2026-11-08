"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { SlideId } from "@/content/content";
import { isNewer, isPositionMessage, openChannel, relayBase, type PositionMessage } from "./pip-link";

/**
 * Keeps Pip's hologram screen on the same slide as the deck, in a second window of this
 * browser (BroadcastChannel) or on a second computer (the relay from `npm run present`).
 */
const HEARTBEAT_MS = 2000;
const PRESENCE_TIMEOUT_MS = 5000;
const RELAY_RETRY_MS = 5000;

const HELLO = "pip-hologram:hello";
const HERE = "pip-hologram:here";

export type DeckPosition = { slideId: SlideId; step: number };
type Direction = "next" | "previous";
type NavigateMessage = { type: "pip-hologram:navigate"; direction: Direction };

function isNavigate(value: unknown): value is NavigateMessage {
  return (value as NavigateMessage | null)?.type === "pip-hologram:navigate";
}

/** Posts to the relay, backing off for a few seconds when it isn't running. Resolves to the hologram count. */
function createRelayPoster() {
  const base = relayBase();
  let quietUntil = 0;
  return async (message: PositionMessage): Promise<number> => {
    if (!base || Date.now() < quietUntil) return 0;
    try {
      const response = await fetch(`${base}/state`, {
        method: "POST",
        headers: { "content-type": "text/plain" },
        body: JSON.stringify(message),
      });
      const body = (await response.json()) as { holograms?: number };
      return body.holograms ?? 0;
    } catch {
      quietUntil = Date.now() + RELAY_RETRY_MS;
      return 0;
    }
  };
}

type DeckSyncInput = { position: DeckPosition; onNavigate: (direction: Direction) => void };

/** Deck side: shares every slide and build step, and reports whether any hologram screen is following. */
export function useDeckSync({ position, onNavigate }: DeckSyncInput): boolean {
  const sendRef = useRef<(position: DeckPosition) => void>(() => undefined);
  const navigateRef = useRef(onNavigate);
  const [windowSeen, setWindowSeen] = useState(0);
  const [relayCount, setRelayCount] = useState(0);
  const [now, setNow] = useState(0);

  useEffect(() => {
    navigateRef.current = onNavigate;
  });

  useEffect(() => {
    const channel = openChannel();
    const postToRelay = createRelayPoster();
    const deck = Math.random().toString(36).slice(2);
    let seq = 0;
    let latest: PositionMessage | null = null;
    const publish = (message: PositionMessage) => {
      channel?.postMessage(message);
      void postToRelay(message).then(setRelayCount);
    };
    sendRef.current = (next) => {
      seq += 1;
      latest = { deck, seq, at: Date.now(), ...next };
      publish(latest);
    };
    if (channel) {
      channel.onmessage = (event: MessageEvent<unknown>) => {
        if (event.data === HELLO && latest) channel.postMessage(latest);
        if (event.data === HERE) setWindowSeen(Date.now());
        if (isNavigate(event.data)) navigateRef.current(event.data.direction);
      };
    }
    const beat = window.setInterval(() => {
      setNow(Date.now());
      if (latest) void postToRelay(latest).then(setRelayCount);
    }, HEARTBEAT_MS);
    return () => {
      window.clearInterval(beat);
      channel?.close();
    };
  }, []);

  useEffect(() => {
    sendRef.current(position);
  }, [position]);

  const windowOpen = windowSeen > 0 && now - windowSeen < PRESENCE_TIMEOUT_MS;
  return windowOpen || relayCount > 0;
}

/** Follows the relay's event stream, reopening it if the browser gives up. */
function listenToRelay(onMessage: (message: PositionMessage) => void, onLink: (linked: boolean) => void) {
  const base = relayBase();
  if (!base || typeof EventSource === "undefined") return () => undefined;
  let source: EventSource | null = null;
  let retry: ReturnType<typeof setTimeout> | undefined;
  let stopped = false;
  const open = () => {
    source = new EventSource(`${base}/events`);
    source.onopen = () => onLink(true);
    source.addEventListener("position", (event) => {
      const value: unknown = JSON.parse((event as MessageEvent<string>).data);
      if (isPositionMessage(value)) onMessage(value);
    });
    source.onerror = () => {
      onLink(false);
      if (source?.readyState !== EventSource.CLOSED || stopped) return;
      retry = setTimeout(open, RELAY_RETRY_MS);
    };
  };
  open();
  return () => {
    stopped = true;
    clearTimeout(retry);
    source?.close();
  };
}

/** Hologram side: follows the deck from this browser or from the relay, whichever speaks first and newest. */
export function useHologramSync(): {
  position: DeckPosition | null;
  navigate: (direction: Direction) => void;
  relayLinked: boolean;
} {
  const channelRef = useRef<BroadcastChannel | null>(null);
  const [message, setMessage] = useState<PositionMessage | null>(null);
  const [relayLinked, setRelayLinked] = useState(false);

  useEffect(() => {
    const take = (next: PositionMessage) => setMessage((current) => (isNewer(next, current) ? next : current));
    const channel = openChannel();
    channelRef.current = channel;
    if (channel) {
      channel.onmessage = (event: MessageEvent<unknown>) => {
        if (isPositionMessage(event.data)) take(event.data);
      };
      channel.postMessage(HELLO);
    }
    const beat = () => channel?.postMessage(HERE);
    beat();
    const timer = window.setInterval(beat, HEARTBEAT_MS);
    const stopRelay = listenToRelay(take, setRelayLinked);
    return () => {
      window.clearInterval(timer);
      channel?.close();
      stopRelay();
    };
  }, []);

  const navigate = (direction: Direction) =>
    channelRef.current?.postMessage({ type: "pip-hologram:navigate", direction } satisfies NavigateMessage);
  const position = message ? { slideId: message.slideId, step: message.step } : null;
  return { position, navigate, relayLinked };
}

/** True while a hologram screen is following, so the deck lets Pip's voice come from the fog screen instead. */
const HologramConnectedContext = createContext(false);
export const HologramConnectedProvider = HologramConnectedContext.Provider;
export function useHologramConnected(): boolean {
  return useContext(HologramConnectedContext);
}
