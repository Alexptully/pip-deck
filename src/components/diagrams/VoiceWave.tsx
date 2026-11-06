"use client";

import { motion } from "motion/react";
import { useStill } from "@/components/primitives/Still";

const BARS = [0.3, 0.6, 0.9, 0.5, 1, 0.7, 0.4, 0.8, 0.55, 0.95, 0.35, 0.65, 0.45, 0.85, 0.3, 0.6, 0.75, 0.4];

/** A voice waveform, the sign that Rosa is talking rather than typing. */
export function VoiceWave({ height = 80 }: { height?: number }) {
  const still = useStill();
  return (
    <div className="flex items-center gap-[7px]" style={{ height }} aria-hidden>
      {BARS.map((level, index) => (
        <motion.span
          key={index}
          className="block w-[7px] rounded-control bg-accent"
          initial={false}
          animate={
            still
              ? { height: level * height }
              : { height: [level * height * 0.3, level * height, level * height * 0.5] }
          }
          transition={{ duration: 0.9, repeat: Infinity, repeatType: "mirror", delay: index * 0.05 }}
        />
      ))}
    </div>
  );
}
