"use client";

import { motion } from "motion/react";
import type { SVGProps } from "react";
import { duration, ease } from "@/lib/motion";
import { useStill } from "./Still";

type DrawPathProps = Omit<
  SVGProps<SVGPathElement>,
  "ref" | "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"
> & {
  d: string;
  delay?: number;
  seconds?: number;
};

/** An SVG path that draws itself in, the way every diagram line in the deck arrives. */
export function DrawPath({ d, delay = 0, seconds = duration.draw, ...rest }: DrawPathProps) {
  const still = useStill();
  return (
    <motion.path
      d={d}
      initial={still ? false : { pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: still ? 0 : seconds, ease: ease.inOut, delay: still ? 0 : delay }}
      {...(rest as object)}
    />
  );
}
