"use client";

import { useEffect } from "react";

export type DeckActions = {
  next: () => void;
  previous: () => void;
  first: () => void;
  last: () => void;
  toggleNotes: () => void;
  toggleFullscreen: () => void;
  openPrint: () => void;
};

const keyToAction: Record<string, keyof DeckActions> = {
  ArrowRight: "next",
  ArrowDown: "next",
  PageDown: "next",
  " ": "next",
  Enter: "next",
  ArrowLeft: "previous",
  ArrowUp: "previous",
  PageUp: "previous",
  Backspace: "previous",
  Home: "first",
  End: "last",
  n: "toggleNotes",
  N: "toggleNotes",
  f: "toggleFullscreen",
  F: "toggleFullscreen",
  p: "openPrint",
  P: "openPrint",
};

const INTERACTIVE_TAGS = new Set(["BUTTON", "INPUT", "TEXTAREA", "SELECT", "A"]);
const TEXT_ENTRY_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT"]);
const ACTIVATION_KEYS = new Set([" ", "Enter"]);

/** Space and Enter press a focused control, and typing belongs to text fields. Arrows still move the deck. */
function belongsToControl(event: KeyboardEvent): boolean {
  const target = event.target as HTMLElement | null;
  if (!target) return false;
  if (TEXT_ENTRY_TAGS.has(target.tagName)) return true;
  return ACTIVATION_KEYS.has(event.key) && INTERACTIVE_TAGS.has(target.tagName);
}

/** Keyboard controls for the deck. Keys pressed on a control belong to that control. */
export function useDeckKeys(actions: DeckActions) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (belongsToControl(event)) return;
      const action = keyToAction[event.key];
      if (!action) return;
      event.preventDefault();
      actions[action]();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [actions]);
}

export function toggleFullscreen(): void {
  const request = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  request.catch(() => undefined);
}
