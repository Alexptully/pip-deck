"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId } from "react";
import { useStill } from "@/components/primitives/Still";

export type PipMood = "smile" | "talk" | "listen" | "think" | "mystery";
type FaceMood = Exclude<PipMood, "mystery">;
export type PipReach = "none" | "left" | "right";

type PipProps = {
  height: number;
  mood?: PipMood;
  reach?: PipReach;
  className?: string;
};

/** Pip is out of focus until it is introduced, then condenses into a sharp drawing. */
const MYSTERY_BLUR = 5;

const BODY = "M120 36 C 140 72, 200 112, 200 176 A 80 80 0 0 1 40 176 C 40 112, 100 72, 120 36 Z";

const handPositions: Record<PipReach, { left: [number, number]; right: [number, number] }> = {
  none: { left: [22, 238], right: [218, 238] },
  left: { left: [-26, 176], right: [218, 238] },
  right: { left: [22, 238], right: [266, 176] },
};

function Mouth({ mood, still }: { mood: FaceMood; still: boolean }) {
  if (mood === "talk") {
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
  const paths: Record<Exclude<FaceMood, "talk">, string> = {
    smile: "M98 204 Q120 226 142 204",
    listen: "M112 210 Q120 216 128 210",
    think: "M104 212 L136 208",
  };
  return <path d={paths[mood]} className="stroke-accent" strokeWidth={5} strokeLinecap="round" fill="none" />;
}

function Eyes({ mood, still }: { mood: FaceMood; still: boolean }) {
  const lookX = mood === "think" ? 8 : 0;
  const lookY = mood === "listen" ? -6 : 0;
  return (
    <motion.g
      initial={false}
      animate={still ? { scaleY: 1 } : { scaleY: [1, 1, 0.1, 1, 1] }}
      transition={{ duration: 4.2, repeat: Infinity, times: [0, 0.9, 0.93, 0.96, 1] }}
      style={{ originX: "120px", originY: "168px" }}
    >
      <rect x={84 + lookX} y={152 + lookY} width={16} height={30} rx={8} className="fill-accent" />
      <rect x={140 + lookX} y={152 + lookY} width={16} height={30} rx={8} className="fill-accent" />
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
function Face({ mood, still }: { mood: PipMood; still: boolean }) {
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
            <Eyes mood={mood} still={still} />
            <Mouth mood={mood} still={still} />
          </>
        )}
      </motion.g>
    </AnimatePresence>
  );
}

function Hand({ at, still, phase }: { at: [number, number]; still: boolean; phase: number }) {
  return (
    <motion.circle
      r={15}
      initial={false}
      animate={still ? { cx: at[0], cy: at[1] } : { cx: at[0], cy: [at[1], at[1] - 8, at[1]] }}
      transition={{
        cx: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        cy: { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: phase },
      }}
      className="fill-accent/15 stroke-accent"
      strokeWidth={4}
    />
  );
}

/** Pip, drawn in lines of light because line drawings read best on a fog screen. */
export function Pip({ height, mood = "smile", reach = "none", className = "" }: PipProps) {
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
        <Face mood={mood} still={still} />
        <Hand at={hands.left} still={still} phase={0} />
        <Hand at={hands.right} still={still} phase={0.8} />
      </g>
    </motion.svg>
  );
}

/** Where Pip's hand sits inside its own drawing, as a fraction of its rendered box. */
export function pipHandOffset(reach: PipReach): { x: number; y: number } {
  const [x, y] = handPositions[reach].right;
  return { x: (x + 40) / 320, y: (y - 20) / 240 };
}
