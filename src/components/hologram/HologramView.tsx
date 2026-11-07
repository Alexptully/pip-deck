"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { hologramCopy, pipCueFor, type PipCue } from "@/content/content";
import { useHologramSync, type DeckPosition } from "@/lib/pip-sync";
import { speakAsPip, unlockPipVoice } from "@/lib/use-pip-voice";
import { toggleFullscreen } from "@/lib/use-deck-keys";
import { Mist } from "@/components/mist/Mist";
import { Stage } from "@/components/deck/Stage";
import { Pip } from "@/components/pip/Pip";
import { Gathering } from "./Gathering";
import { useHologramKeys } from "./use-hologram-keys";

const FOG_MIST = { x: 960, width: 520, strength: 0.3 };

function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="fixed inset-0 z-10 grid place-items-center bg-void p-10 text-text">
      <div className="max-w-xl">
        <h1 className="text-5xl font-semibold">{hologramCopy.title}</h1>
        <p className="mt-6 text-xl text-text-muted">{hologramCopy.help}</p>
        <button
          type="button"
          onClick={onStart}
          className="mt-10 cursor-pointer rounded-control bg-text px-8 py-4 text-xl font-semibold text-surface"
        >
          {hologramCopy.start}
        </button>
        <dl className="mt-12 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-base text-text-muted">
          {hologramCopy.keys.map((item) => (
            <div key={item.keys} className="contents">
              <dt className="font-semibold text-text">{item.keys}</dt>
              <dd>{item.does}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function cueKey(position: DeckPosition | null): string {
  return position ? `${position.slideId}-${position.step}` : "none";
}

/** Speaks a cue's line once each time the deck lands on that slide and step. */
function useCueVoice(cue: PipCue, key: string, started: boolean) {
  useEffect(() => {
    if (!started || !cue.speak || !cue.line) return;
    const line = cue.line;
    const timer = window.setTimeout(() => speakAsPip(line), 1100);
    return () => window.clearTimeout(timer);
  }, [cue, key, started]);
}

function PipOnFog({ cue }: { cue: PipCue }) {
  return (
    <AnimatePresence>
      {cue.show ? (
        <motion.div
          key="pip"
          className="absolute inset-0 grid place-items-center pb-[120px]"
          initial={{ opacity: 0, scale: 0.85, filter: "blur(18px)" }}
          animate={{ opacity: [0, 0.7, 0.3, 1], scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(18px)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Pip height={680} mood={cue.mood} reach={cue.reach ?? "none"} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Caption({ line }: { line?: string }) {
  return (
    <AnimatePresence mode="wait">
      {line ? (
        <motion.p
          key={line}
          className="type-lead absolute inset-x-[200px] bottom-[70px] text-center text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {line}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

/** The second screen: Pip alone on black, following the deck, for the fog projector. */
export function HologramView() {
  const { position, navigate } = useHologramSync();
  const [started, setStarted] = useState(false);
  const [mirrored, setMirrored] = useState(false);
  const [captions, setCaptions] = useState(false);
  const cue = position ? pipCueFor(position.slideId, position.step) : { show: false, mood: "smile" as const };
  const key = cueKey(position);
  useCueVoice(cue, key, started);

  const actions = useMemo(
    () => ({
      fullscreen: toggleFullscreen,
      mirror: () => setMirrored((value) => !value),
      captions: () => setCaptions((value) => !value),
      next: () => navigate("next"),
      previous: () => navigate("previous"),
    }),
    [navigate],
  );
  useHologramKeys(actions);

  const start = () => {
    unlockPipVoice();
    toggleFullscreen();
    setStarted(true);
  };

  return (
    <>
      <div className="fixed inset-0" style={{ transform: mirrored ? "scaleX(-1)" : undefined }}>
        <Stage tone="void">
          <Mist setting={FOG_MIST} />
          {cue.forming ? <Gathering /> : null}
          <PipOnFog cue={cue} />
          {captions ? <Caption line={cue.line} /> : null}
        </Stage>
      </div>
      {started && !position ? (
        <p className="fixed inset-x-0 bottom-6 text-center text-base text-text-faint">{hologramCopy.waiting}</p>
      ) : null}
      {started ? null : <StartScreen onStart={start} />}
    </>
  );
}
