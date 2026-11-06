"use client";

import { motion } from "motion/react";
import { ease } from "@/lib/motion";

type Point = { x: number; y: number };

const SPARKS = [0, 0.08, 0.16, 0.24];

/** Light that flies from Pip's hand into the app, so every change has a visible source. */
export function Sparks({ from, to, lift = 220 }: { from: Point; to: Point; lift?: number }) {
  const mid = { x: (from.x + to.x) / 2, y: Math.min(from.y, to.y) - lift };
  return (
    <>
      {SPARKS.map((delay) => (
        <motion.span
          key={delay}
          aria-hidden
          className="pointer-events-none absolute block size-5 -translate-x-1/2 -translate-y-1/2 rounded-control bg-accent shadow-glow"
          initial={{ left: from.x, top: from.y, opacity: 0, scale: 0.4 }}
          animate={{
            left: [from.x, mid.x, to.x],
            top: [from.y, mid.y, to.y],
            opacity: [0, 1, 0],
            scale: [0.4, 1.2 - delay * 2, 0.3],
          }}
          transition={{ duration: 0.9, ease: ease.inOut, delay }}
        />
      ))}
    </>
  );
}
