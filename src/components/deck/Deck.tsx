"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { slides } from "@/content/content";
import { duration, ease } from "@/lib/motion";
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
    }),
    [next, previous, first, last],
  );
  useDeckKeys(actions);

  return (
    <>
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
        />
      ) : null}
    </>
  );
}
