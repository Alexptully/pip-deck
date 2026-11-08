"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { duration, ease } from "@/lib/motion";
import { useStill } from "./Still";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  rise?: number;
  show?: boolean;
  /** "slow" for a dramatic entrance. */
  pace?: "base" | "slow";
};

/** Fades and lifts its children into place. Every entrance in the deck goes through here. */
function revealTransition(still: boolean, pace: "base" | "slow", delay: number) {
  if (still) return { duration: 0, delay: 0 };
  return { duration: duration[pace], ease: ease.soft, delay };
}

export function Reveal({ children, className, delay = 0, rise = 24, show = true, pace = "base" }: RevealProps) {
  const still = useStill();
  const hidden = { opacity: 0, y: rise };
  const shown = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={still ? false : hidden}
      animate={show ? shown : hidden}
      transition={revealTransition(still, pace, delay)}
    >
      {children}
    </motion.div>
  );
}
