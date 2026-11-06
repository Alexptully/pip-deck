"use client";

import { useCallback, useEffect, useState } from "react";
import type { SlideMeta } from "@/content/content";

export type Position = { index: number; step: number };

function indexFromHash(slides: SlideMeta[]): number {
  const id = window.location.hash.replace("#", "");
  const found = slides.findIndex((slide) => slide.id === id);
  return Math.max(found, 0);
}

function nextPosition(slides: SlideMeta[], { index, step }: Position): Position {
  if (step < slides[index].steps - 1) return { index, step: step + 1 };
  if (index < slides.length - 1) return { index: index + 1, step: 0 };
  return { index, step };
}

function previousPosition(slides: SlideMeta[], { index, step }: Position): Position {
  if (step > 0) return { index, step: step - 1 };
  if (index > 0) return { index: index - 1, step: slides[index - 1].steps - 1 };
  return { index, step };
}

/** Slide and build-step position, kept in sync with a plain #slide-id in the address. */
export function useDeckNavigation(slides: SlideMeta[]) {
  const [position, setPosition] = useState<Position>({ index: 0, step: 0 });

  useEffect(() => {
    const sync = () => setPosition({ index: indexFromHash(slides), step: 0 });
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [slides]);

  useEffect(() => {
    const id = slides[position.index].id;
    if (window.location.hash !== `#${id}`) window.history.replaceState(null, "", `#${id}`);
  }, [position.index, slides]);

  const next = useCallback(() => setPosition((current) => nextPosition(slides, current)), [slides]);
  const previous = useCallback(() => setPosition((current) => previousPosition(slides, current)), [slides]);
  const first = useCallback(() => setPosition({ index: 0, step: 0 }), []);
  const last = useCallback(() => setPosition({ index: slides.length - 1, step: 0 }), [slides]);

  return { position, next, previous, first, last };
}
