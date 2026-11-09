"use client";

import { AnimatePresence, motion, useTransform, type MotionValue } from "motion/react";
import { useId } from "react";
import { useStill } from "@/components/primitives/Still";

export type PipMood = "smile" | "talk" | "listen" | "think" | "happy" | "curious" | "excited" | "mystery";
type FaceMood = Exclude<PipMood, "mystery">;
export type PipReach = "none" | "left" | "right" | "wave";

type PipProps = {
  height: number;
  mood?: PipMood;
  reach?: PipReach;
  /** Moves the mouth with Pip's voice. Pass the live loudness (0 to 1) while a line plays. */
  voiceLevel?: MotionValue<number>;
  /** Eyes drift from side to side, as if Pip is taking in the room. */
  glance?: boolean;
  /** Talking moves only the mouth, so Pip keeps its expression while it speaks. */
  talking?: boolean;
  className?: string;
};

/** Pip is out of focus until it is introduced, then condenses into a sharp drawing. */
const MYSTERY_BLUR = 5;

const BODY = "M120 36 C 140 72, 200 112, 200 176 A 80 80 0 0 1 40 176 C 40 112, 100 72, 120 36 Z";

const handPositions: Record<PipReach, { left: [number, number]; right: [number, number] }> = {
  none: { left: [22, 238], right: [218, 238] },
  left: { left: [-26, 176], right: [218, 238] },
  right: { left: [22, 238], right: [266, 176] },
  wave: { left: [22, 238], right: [258, 140] },
};

const mouthPaths: Record<Exclude<FaceMood, "talk">, { d: string; filled: boolean }> = {
  smile: { d: "M98 204 Q120 226 142 204", filled: false },
  listen: { d: "M112 210 Q120 216 128 210", filled: false },
  think: { d: "M104 212 L136 208", filled: false },
  happy: { d: "M94 202 Q120 236 146 202 Z", filled: true },
  curious: { d: "M114 210 A 6 6 0 1 0 126 210 A 6 6 0 1 0 114 210 Z", filled: true },
  excited: { d: "M92 200 Q120 244 148 200 Z", filled: true },
};

/** While Pip talks, the mouth opens with the loudness of the recording. */
function TalkingMouth({ voiceLevel, still }: { voiceLevel?: MotionValue<number>; still: boolean }) {
  const ry = useTransform(() => 3 + (voiceLevel?.get() ?? 0) * 11);
  if (voiceLevel && !still) {
    return <motion.ellipse cx={120} cy={210} rx={12} ry={ry} className="fill-accent/30 stroke-accent" strokeWidth={4} />;
  }
  return (
    <motion.ellipse
      cx={120}
      cy={210}
      rx={12}
      initial={false}
      animate={still ? { ry: 8 } : { ry: [4, 10, 5, 9, 4] }}
      transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      className="fill-accent/30 stroke-accent"
      strokeWidth={4}
    />
  );
}

function Mouth({ mood, still, voiceLevel }: { mood: FaceMood; still: boolean; voiceLevel?: MotionValue<number> }) {
  if (mood === "talk") return <TalkingMouth voiceLevel={voiceLevel} still={still} />;
  const mouth = mouthPaths[mood];
  return (
    <path
      d={mouth.d}
      className={mouth.filled ? "fill-accent/30 stroke-accent" : "stroke-accent"}
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={mouth.filled ? undefined : "none"}
    />
  );
}

/** Where the eyes look, and how big they are, for each mood. */
const eyeShapes: Record<FaceMood, { x: number; y: number; height: number; tallRight?: boolean }> = {
  smile: { x: 0, y: 0, height: 30 },
  talk: { x: 0, y: 0, height: 30 },
  listen: { x: 0, y: -6, height: 30 },
  think: { x: 8, y: -4, height: 26 },
  happy: { x: 0, y: 0, height: 30 },
  curious: { x: 4, y: -4, height: 30, tallRight: true },
  excited: { x: 0, y: -4, height: 38 },
};

/** Happy eyes squeeze shut into little arches. */
function HappyEyes() {
  return (
    <g className="stroke-accent" strokeWidth={6} strokeLinecap="round" fill="none">
      <path d="M82 172 Q92 152 102 172" />
      <path d="M138 172 Q148 152 158 172" />
    </g>
  );
}

function OpenEyes({ mood, still, glance }: { mood: FaceMood; still: boolean; glance: boolean }) {
  const eye = eyeShapes[mood];
  const top = 167 + eye.y - eye.height / 2;
  const rightHeight = eye.tallRight ? eye.height + 10 : eye.height;
  return (
    <motion.g
      initial={false}
      animate={glance && !still ? { x: [0, -10, -10, 10, 10, 0] } : { x: 0 }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.rect
        initial={false}
        animate={{ x: 84 + eye.x, y: top, height: eye.height }}
        width={16}
        rx={8}
        className="fill-accent"
      />
      <motion.rect
        initial={false}
        animate={{ x: 140 + eye.x, y: top - (rightHeight - eye.height) / 2, height: rightHeight }}
        width={16}
        rx={8}
        className="fill-accent"
      />
    </motion.g>
  );
}

function Eyes({ mood, still, glance = false }: { mood: FaceMood; still: boolean; glance?: boolean }) {
  return (
    <motion.g
      initial={false}
      animate={still ? { scaleY: 1 } : { scaleY: [1, 1, 0.1, 1, 1] }}
      transition={{ duration: 4.2, repeat: Infinity, times: [0, 0.9, 0.93, 0.96, 1] }}
      style={{ originX: "120px", originY: "168px" }}
    >
      {mood === "happy" ? <HappyEyes /> : <OpenEyes mood={mood} still={still} glance={glance} />}
    </motion.g>
  );
}

/** Before the audience meets Pip, its face is a question mark. */
function MysteryFace({ still }: { still: boolean }) {
  return (
    <motion.text
      x={120}
      y={222}
      textAnchor="middle"
      className="fill-accent font-display text-[104px] font-bold"
      initial={false}
      animate={still ? { opacity: 1 } : { opacity: [0.65, 1, 0.65] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      ?
    </motion.text>
  );
}

/** The face swaps with a short fade, so the reveal reads as Pip coming into focus. */
type FaceProps = {
  mood: PipMood;
  still: boolean;
  voiceLevel?: MotionValue<number>;
  glance?: boolean;
  talking?: boolean;
};

function Face({ mood, still, voiceLevel, glance, talking }: FaceProps) {
  const mystery = mood === "mystery";
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.g
        key={mystery ? "mystery" : "face"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: still ? 0 : 0.5 }}
      >
        {mystery ? (
          <MysteryFace still={still} />
        ) : (
          <>
            <Eyes mood={mood} still={still} glance={glance} />
            <Mouth mood={talking ? "talk" : mood} still={still} voiceLevel={voiceLevel} />
          </>
        )}
      </motion.g>
    </AnimatePresence>
  );
}

type HandProps = { at: [number, number]; still: boolean; phase: number; waving?: boolean };

function handMotion({ at, still, waving }: HandProps) {
  if (still) return { cx: at[0], cy: at[1] };
  if (waving) return { cx: [at[0] - 20, at[0] + 20, at[0] - 20], cy: [at[1], at[1] - 10, at[1]] };
  return { cx: at[0], cy: [at[1], at[1] - 8, at[1]] };
}

/** A waving hand swings side to side; a resting one bobs gently. */
function Hand(props: HandProps) {
  const { phase, waving } = props;
  return (
    <motion.circle
      r={15}
      initial={false}
      animate={handMotion(props)}
      transition={{
        cx: waving ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        cy: waving
          ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
          : { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: phase },
      }}
      className="fill-accent/15 stroke-accent"
      strokeWidth={4}
    />
  );
}

/** Pip, drawn in lines of light because line drawings read best on a fog screen. */
export function Pip(props: PipProps) {
  const { height, mood = "smile", reach = "none", voiceLevel, glance, talking, className = "" } = props;
  const still = useStill();
  const id = useId().replace(/:/g, "");
  const hands = handPositions[reach];
  return (
    <motion.svg
      viewBox="-40 20 320 240"
      height={height}
      width={(height * 320) / 240}
      className={`overflow-visible ${className}`}
      role="img"
      aria-label="Pip, a droplet-shaped holographic character"
      initial={false}
      animate={{
        y: still ? 0 : [0, -10, 0],
        filter: mood === "mystery" ? `blur(${MYSTERY_BLUR}px)` : "blur(0px)",
      }}
      transition={{
        y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
        filter: { duration: still ? 0 : 1.2, ease: "easeOut" },
      }}
    >
      <defs>
        <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id={`scan-${id}`} width="8" height="7" patternUnits="userSpaceOnUse">
          <rect width="8" height="1.6" className="fill-accent/25" />
        </pattern>
        <clipPath id={`body-${id}`}>
          <path d={BODY} />
        </clipPath>
      </defs>
      <g filter={`url(#glow-${id})`}>
        <path d={BODY} className="fill-accent/10" />
        <rect x={30} y={30} width={180} height={240} fill={`url(#scan-${id})`} clipPath={`url(#body-${id})`} />
        <path d={BODY} className="stroke-accent" strokeWidth={5} fill="none" strokeLinejoin="round" />
        <path
          d="M74 140 Q 80 112 100 98"
          className="stroke-accent/60"
          strokeWidth={5}
          strokeLinecap="round"
          fill="none"
        />
        <Face mood={mood} still={still} voiceLevel={voiceLevel} glance={glance} talking={talking} />
        <Hand at={hands.left} still={still} phase={0} />
        <Hand at={hands.right} still={still} phase={0.8} waving={reach === "wave"} />
      </g>
    </motion.svg>
  );
}

/** Where Pip's hand sits inside its own drawing, as a fraction of its rendered box. */
export function pipHandOffset(reach: PipReach): { x: number; y: number } {
  const [x, y] = handPositions[reach].right;
  return { x: (x + 40) / 320, y: (y - 20) / 240 };
}
