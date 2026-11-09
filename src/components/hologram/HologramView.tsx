"use client";

import { AnimatePresence, motion, type TargetAndTransition } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { hologramCopy, pipCueBeforeDeck, pipCueFor, type PipCue } from "@/content/content";
import { relayBase } from "@/lib/pip-link";
import { useHologramSync, type DeckPosition } from "@/lib/pip-sync";
import { pipVoiceLevel, speakAsPip, stopPip, unlockPipVoice, usePipSpeaking } from "@/lib/use-pip-voice";
import { fullscreenOnExtendedScreen } from "@/lib/screens";
import { toggleFullscreen } from "@/lib/use-deck-keys";
import { Mist } from "@/components/mist/Mist";
import { Stage } from "@/components/deck/Stage";
import { Pip } from "@/components/pip/Pip";
import { GATHER_SECONDS, Gathering } from "./Gathering";
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

/** Plays a cue's line once each time the deck lands on that slide and step, and stops it when the deck moves on. */
function useCueVoice(cue: PipCue, key: string, started: boolean) {
  useEffect(() => {
    if (!started || !cue.speak || !cue.line) return;
    const line = cue.line;
    const wait = 1100 + (cue.forming ? GATHER_SECONDS * 1000 : 0);
    const timer = window.setTimeout(() => speakAsPip(line), wait);
    return () => {
      window.clearTimeout(timer);
      stopPip();
    };
  }, [cue, key, started]);
}

/** The mist only fades in once Pip is on screen, so the fog projector shows nothing before that. */
function FogMist({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="mist"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        >
          <Mist setting={FOG_MIST} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function PipOnFog({ cue }: { cue: PipCue }) {
  const entranceDelay = cue.forming ? GATHER_SECONDS : 0;
  return (
    <AnimatePresence>
      {cue.show ? (
        <motion.div
          key="pip"
          className="absolute inset-0 grid place-items-center pb-[120px]"
          initial={{ opacity: 0, scale: 0.85, filter: "blur(18px)" }}
          animate={{ opacity: [0, 0.7, 0.3, 1], scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(18px)" }}
          transition={{ duration: 1.4, delay: entranceDelay, ease: [0.22, 1, 0.36, 1] }}
        >
          <GestureBody cue={cue} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

type Gesture = NonNullable<PipCue["gesture"]> | "still";

/** How Pip's whole body moves for each gesture. A hop plays once; a nod repeats while Pip listens. */
const gestures: Record<Gesture, TargetAndTransition> = {
  still: { y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  bounce: {
    y: [0, -90, 0, -36, 0],
    scaleY: [1, 1.06, 0.9, 1.03, 1],
    transition: { duration: 1.3, delay: 0.9, ease: "easeOut" },
  },
  nod: { y: [0, 16, 0, 16, 0], transition: { duration: 1.4, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" } },
  lean: { y: 24, scale: 1.07, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

/** Pip tilts its head while it's curious and talks with its whole body, not just its mouth. */
function GestureBody({ cue }: { cue: PipCue }) {
  const talking = usePipSpeaking();
  const tilt = cue.mood === "curious" ? 9 : 0;
  return (
    <motion.div
      initial={false}
      animate={{ ...gestures[cue.gesture ?? "still"], rotate: tilt }}
      style={{ originY: 0.85 }}
    >
      <Pip
        height={680}
        mood={cue.mood}
        reach={cue.reach ?? "none"}
        glance={cue.glance}
        talking={talking}
        voiceLevel={pipVoiceLevel}
      />
    </motion.div>
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

/** A small grey dot while a dropped Wi-Fi link reconnects. It only shows once Pip is on screen. */
function LinkStatus({ pipShowing, relayLinked }: { pipShowing: boolean; relayLinked: boolean }) {
  if (pipShowing && relayBase() && !relayLinked) {
    return (
      <span
        className="fixed bottom-4 right-4 size-3 rounded-control bg-text-faint"
        aria-label="Reconnecting to the deck"
      />
    );
  }
  return null;
}

/** The second screen: Pip alone on black, following the deck, for the fog projector. */
export function HologramView() {
  const { position, navigate, relayLinked } = useHologramSync();
  const [started, setStarted] = useState(false);
  const [mirrored, setMirrored] = useState(false);
  const [captions, setCaptions] = useState(false);
  const cue = position ? pipCueFor(position.slideId, position.step) : pipCueBeforeDeck;
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
    void fullscreenOnExtendedScreen();
    setStarted(true);
  };

  return (
    <>
      <div className="fixed inset-0" style={{ transform: mirrored ? "scaleX(-1)" : undefined }}>
        <Stage tone="void">
          <FogMist show={cue.show} />
          {cue.forming ? <Gathering key={key} /> : null}
          <PipOnFog cue={cue} />
          {captions ? <Caption line={cue.line} /> : null}
        </Stage>
      </div>
      {started ? <LinkStatus pipShowing={cue.show} relayLinked={relayLinked} /> : null}
      {started ? null : <StartScreen onStart={start} />}
    </>
  );
}
