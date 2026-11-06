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
};

/** Fades and lifts its children into place. Every entrance in the deck goes through here. */
export function Reveal({ children, className, delay = 0, rise = 24, show = true }: RevealProps) {
  const still = useStill();
  const hidden = { opacity: 0, y: rise };
  const shown = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={still ? false : hidden}
      animate={show ? shown : hidden}
      transition={{ duration: still ? 0 : duration.base, ease: ease.soft, delay: still ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
