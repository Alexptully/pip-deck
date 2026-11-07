"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { SlideId } from "@/content/content";

/**
 * The deck and the hologram window talk over a BroadcastChannel, which links any windows of
 * the same site in the same browser. The presenter opens both on one laptop and drags the
 * hologram window onto the fog projector.
 */
const CHANNEL = "pip-deck";
const HEARTBEAT_MS = 1500;
const PRESENCE_TIMEOUT_MS = 4000;

export type DeckPosition = { slideId: SlideId; step: number };

type Message =
  | { type: "position"; position: DeckPosition }
  | { type: "request-position" }
  | { type: "hologram-here" }
  | { type: "navigate"; direction: "next" | "previous" };

function openChannel(): BroadcastChannel | null {
  return typeof BroadcastChannel === "undefined" ? null : new BroadcastChannel(CHANNEL);
}

type DeckSyncInput = { position: DeckPosition; onNavigate: (direction: "next" | "previous") => void };

/** Deck side: shares the current slide and build step, and reports whether a hologram window is listening. */
export function useDeckSync({ position, onNavigate }: DeckSyncInput): boolean {
  const channelRef = useRef<BroadcastChannel | null>(null);
  const positionRef = useRef(position);
  const navigateRef = useRef(onNavigate);
  const [lastSeen, setLastSeen] = useState(0);
  const [now, setNow] = useState(0);

  useEffect(() => {
    positionRef.current = position;
    navigateRef.current = onNavigate;
  });

  useEffect(() => {
    const channel = openChannel();
    channelRef.current = channel;
    if (!channel) return;
    const handlers: Record<Message["type"], (message: Message) => void> = {
      "request-position": () => channel.postMessage({ type: "position", position: positionRef.current }),
      "hologram-here": () => setLastSeen(Date.now()),
      navigate: (message) => {
        if (message.type === "navigate") navigateRef.current(message.direction);
      },
      position: () => undefined,
    };
    channel.onmessage = (event: MessageEvent<Message>) => handlers[event.data.type]?.(event.data);
    const clock = window.setInterval(() => setNow(Date.now()), HEARTBEAT_MS);
    return () => {
      window.clearInterval(clock);
      channel.close();
    };
  }, []);

  useEffect(() => {
    channelRef.current?.postMessage({ type: "position", position });
  }, [position]);

  return lastSeen > 0 && now - lastSeen < PRESENCE_TIMEOUT_MS;
}

/** Hologram side: follows the deck's position and lets the deck know a hologram window is open. */
export function useHologramSync(): {
  position: DeckPosition | null;
  navigate: (direction: "next" | "previous") => void;
} {
  const channelRef = useRef<BroadcastChannel | null>(null);
  const [position, setPosition] = useState<DeckPosition | null>(null);

  useEffect(() => {
    const channel = openChannel();
    channelRef.current = channel;
    if (!channel) return;
    channel.onmessage = (event: MessageEvent<Message>) => {
      if (event.data.type === "position") setPosition(event.data.position);
    };
    channel.postMessage({ type: "request-position" });
    const beat = () => channel.postMessage({ type: "hologram-here" });
    beat();
    const timer = window.setInterval(beat, HEARTBEAT_MS);
    return () => {
      window.clearInterval(timer);
      channel.close();
    };
  }, []);

  const navigate = (direction: "next" | "previous") => channelRef.current?.postMessage({ type: "navigate", direction });
  return { position, navigate };
}

/** True while a hologram window is open, so the deck lets Pip's voice come from the fog screen instead. */
const HologramConnectedContext = createContext(false);
export const HologramConnectedProvider = HologramConnectedContext.Provider;
export function useHologramConnected(): boolean {
  return useContext(HologramConnectedContext);
}
