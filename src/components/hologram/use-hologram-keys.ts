"use client";

import { useEffect } from "react";

export type HologramActions = {
  fullscreen: () => void;
  mirror: () => void;
  captions: () => void;
  next: () => void;
  previous: () => void;
};

const keyToAction: Record<string, keyof HologramActions> = {
  f: "fullscreen",
  F: "fullscreen",
  m: "mirror",
  M: "mirror",
  c: "captions",
  C: "captions",
  ArrowRight: "next",
  PageDown: "next",
  " ": "next",
  ArrowLeft: "previous",
  PageUp: "previous",
};

/** Keys for the hologram window. Arrows here move the deck, in case the presenter clicks the wrong window. */
export function useHologramKeys(actions: HologramActions) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const action = keyToAction[event.key];
      if (!action) return;
      event.preventDefault();
      actions[action]();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [actions]);
}
