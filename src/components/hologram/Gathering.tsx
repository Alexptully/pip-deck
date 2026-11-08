"use client";

import { motion } from "motion/react";
import { seededRandom } from "@/components/mist/mist-field";

/** How long the light takes to gather before Pip appears in it. */
export const GATHER_SECONDS = 1.2;

const random = seededRandom(11);
const SPARKS = Array.from({ length: 36 }, () => ({
  x: (random() - 0.5) * 1100,
  y: (random() - 0.5) * 700,
  size: 6 + random() * 14,
  delay: random() * 0.5,
}));

/** Light drifting in once toward the center of the fog, where Pip is about to appear. */
export function Gathering() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2" aria-hidden>
      {SPARKS.map((spark, index) => (
        <motion.span
          key={index}
          className="absolute block rounded-control bg-accent shadow-glow"
          style={{ width: spark.size, height: spark.size }}
          initial={{ x: spark.x, y: spark.y, opacity: 0 }}
          animate={{ x: [spark.x, spark.x * 0.15], y: [spark.y, spark.y * 0.15], opacity: [0, 0.9, 0] }}
          transition={{ duration: GATHER_SECONDS + 0.4 - spark.delay, delay: spark.delay, ease: "easeIn" }}
        />
      ))}
    </div>
  );
}
