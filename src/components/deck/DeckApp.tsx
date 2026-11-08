"use client";

import { useEffect, useState } from "react";
import { HologramView } from "@/components/hologram/HologramView";
import { Deck } from "./Deck";
import { PrintDeck } from "./PrintDeck";

type View = "deck" | "print" | "pip";

const views: Record<string, View> = { "#print": "print", "#pip": "pip" };

/**
 * Picks the view from the address: #print and #pip are used by the single-file build.
 * Nothing renders until the address is read, so the deck never rewrites #pip before it is seen.
 */
export function DeckApp() {
  const [view, setView] = useState<View | null>(null);

  useEffect(() => {
    const sync = () => setView(views[window.location.hash] ?? "deck");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  if (view === null) return null;
  if (view === "print") return <PrintDeck />;
  if (view === "pip") return <HologramView />;
  return <Deck />;
}
