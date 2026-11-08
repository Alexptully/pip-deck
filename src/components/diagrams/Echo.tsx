"use client";

import { motion } from "motion/react";
import { useStill } from "@/components/primitives/Still";

const SIZE = { width: 1100, height: 900 };
const CENTER = { x: 560, y: 430 };
const MAX_RADIUS = 540;
const RING_COUNT = 3;
/** Seconds for one ring to travel from the center to the edge. */
const TRAVEL = 4.8;
const RING_GAP = TRAVEL / RING_COUNT;

/** Things in the room the pulse finds: each one answers with a small echo when a ring reaches it. */
const NOTICED = [
  { id: "a", x: 300, y: 250 },
  { id: "b", x: 850, y: 210 },
  { id: "c", x: 930, y: 560 },
  { id: "d", x: 240, y: 640 },
  { id: "e", x: 640, y: 760 },
  { id: "f", x: 720, y: 330 },
];

function distanceFromCenter(point: { x: number; y: number }) {
  return Math.hypot(point.x - CENTER.x, point.y - CENTER.y);
}

/** When the next ring reaches this point, counted within one ring gap. */
function hitDelay(point: { x: number; y: number }) {
  return ((distanceFromCenter(point) / MAX_RADIUS) * TRAVEL) % RING_GAP;
}

function StillEcho() {
  return (
    <>
      {[0.3, 0.6, 0.9].map((share) => (
        <circle
          key={share}
          cx={CENTER.x}
          cy={CENTER.y}
          r={MAX_RADIUS * share}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2}
          opacity={0.5 * (1 - share)}
        />
      ))}
      {NOTICED.map((point, index) => (
        <circle key={point.id} cx={point.x} cy={point.y} r={7} fill="var(--color-accent)" opacity={index % 2 ? 0.9 : 0.25} />
      ))}
    </>
  );
}

function LiveEcho() {
  const rings = Array.from({ length: RING_COUNT }, (_, index) => index * RING_GAP);
  return (
    <>
      {rings.map((delay) => (
        <motion.circle
          key={delay}
          cx={CENTER.x}
          cy={CENTER.y}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2}
          initial={{ r: 0, opacity: 0 }}
          animate={{ r: [0, MAX_RADIUS], opacity: [0.55, 0] }}
          transition={{ duration: TRAVEL, ease: "linear", repeat: Infinity, delay }}
        />
      ))}
      {NOTICED.map((point) => (
        <g key={point.id}>
          <motion.circle
            cx={point.x}
            cy={point.y}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={1.5}
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: [0, 0, 56], opacity: [0, 0.7, 0] }}
            transition={{ duration: RING_GAP, times: [0, 0.05, 0.6], repeat: Infinity, delay: hitDelay(point) }}
          />
          <motion.circle
            cx={point.x}
            cy={point.y}
            r={7}
            fill="var(--color-accent)"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: RING_GAP, times: [0, 0.08, 0.7], repeat: Infinity, delay: hitDelay(point) }}
          />
        </g>
      ))}
    </>
  );
}

/**
 * Pip before it has a face: a pulse that spreads through the mist and lights up what it finds,
 * the way echolocation picks up a room.
 */
export function Echo({ className }: { className?: string }) {
  const still = useStill();
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${SIZE.width} ${SIZE.height}`}
      width={SIZE.width}
      height={SIZE.height}
      className={className}
    >
      <circle cx={CENTER.x} cy={CENTER.y} r={9} fill="var(--color-accent)" />
      {still ? <StillEcho /> : <LiveEcho />}
    </svg>
  );
}
