"use client";

import { motion } from "motion/react";
import { Card } from "@/components/primitives/Card";
import { useStill } from "@/components/primitives/Still";

function Cursor() {
  const still = useStill();
  return (
    <motion.span
      className="ml-1 inline-block h-[34px] w-[3px] translate-y-[6px] bg-text"
      initial={false}
      animate={still ? { opacity: 1 } : { opacity: [1, 0, 1] }}
      transition={{ duration: 1.1, repeat: Infinity }}
    />
  );
}

/** The empty prompt box today's builders open with. */
export function PromptBox({ placeholder }: { placeholder: string }) {
  return (
    <Card className="type-body px-10 py-8 text-text-faint">
      {placeholder}
      <Cursor />
    </Card>
  );
}
