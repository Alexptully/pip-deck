"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { slides } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { HologramConnectedProvider, useDeckSync } from "@/lib/pip-sync";
import { findExtendedScreen, placeOnScreen } from "@/lib/screens";
import { toggleFullscreen, useDeckKeys } from "@/lib/use-deck-keys";
import { useDeckNavigation } from "@/lib/use-deck-navigation";
import { Mist, mistFor } from "@/components/mist/Mist";
import { slideComponents } from "@/components/slides/registry";
import { Grain } from "./Grain";
import { NotesPanel } from "./NotesPanel";
import { SlideFrame } from "./SlideFrame";
import { Stage } from "./Stage";

export const printHref = process.env.NEXT_PUBLIC_SINGLE_FILE
  ? "#print"
  : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/print/`;

export const hologramHref = process.env.NEXT_PUBLIC_SINGLE_FILE
  ? "#pip"
  : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/pip/`;

/**
 * Opens Pip's hologram screen in its own window and, where the browser allows it, moves that
 * window onto the extended display. The window opens first so the click still counts as the
 * presenter's own, then it moves once the screens are known.
 */
function openHologramWindow() {
  const href = hologramHref.startsWith("#") ? `${window.location.pathname}${hologramHref}` : hologramHref;
  const hologram = window.open(href, "pip-hologram", "popup,width=960,height=540");
  if (!hologram) return;
  void findExtendedScreen().then((screen) => (screen ? placeOnScreen(hologram, screen) : undefined));
}

export function Deck() {
  const { position, next, previous, first, last } = useDeckNavigation(slides);
  const [notesOpen, setNotesOpen] = useState(false);
  const meta = slides[position.index];
  const SlideBody = slideComponents[meta.id];

  const actions = useMemo(
    () => ({
      next,
      previous,
      first,
      last,
      toggleNotes: () => setNotesOpen((open) => !open),
      toggleFullscreen,
      openPrint: () => window.location.assign(printHref),
      openHologram: openHologramWindow,
    }),
    [next, previous, first, last],
  );
  useDeckKeys(actions);
  const deckPosition = useMemo(() => ({ slideId: meta.id, step: position.step }), [meta.id, position.step]);
  const hologramConnected = useDeckSync({
    position: deckPosition,
    onNavigate: (direction) => (direction === "next" ? next() : previous()),
  });

  return (
    <HologramConnectedProvider value={hologramConnected}>
      <Stage>
        <Mist setting={mistFor(meta, position.step)} />
        <AnimatePresence mode="wait">
          <motion.div
            key={meta.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.quick, ease: ease.soft }}
          >
            <SlideFrame meta={meta}>
              <SlideBody step={position.step} />
            </SlideFrame>
          </motion.div>
        </AnimatePresence>
        <Grain />
      </Stage>
      {notesOpen ? (
        <NotesPanel
          meta={meta}
          next={slides[position.index + 1]}
          index={position.index}
          total={slides.length}
          step={position.step}
          hologramConnected={hologramConnected}
        />
      ) : null}
    </HologramConnectedProvider>
  );
}
