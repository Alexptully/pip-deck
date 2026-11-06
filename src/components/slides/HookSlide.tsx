"use client";

import { motion } from "motion/react";
import { hookSlide } from "@/content/content";
import { duration } from "@/lib/motion";
import { Bubble } from "@/components/primitives/Bubble";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { useStill } from "@/components/primitives/Still";
import { PromptBox } from "@/components/diagrams/PromptBox";
import { Pip } from "@/components/pip/Pip";

export function HookSlide({ step }: { step: number }) {
  const still = useStill();
  const talking = step >= 1;
  return (
    <div className="relative h-full">
      <Heading className="max-w-[1300px]">{hookSlide.heading}</Heading>
      <div className="mt-16 grid grid-cols-2 gap-[140px]">
        <motion.div
          initial={false}
          animate={{ opacity: talking ? 0.35 : 1 }}
          transition={{ duration: still ? 0 : duration.base }}
        >
          <Reveal delay={0.2}>
            <p className="type-lead mb-8 text-text">{hookSlide.boxLabel}</p>
            <PromptBox placeholder={hookSlide.boxPlaceholder} />
          </Reveal>
        </motion.div>
        <Reveal show={talking}>
          <div className="flex items-start justify-between gap-6">
            <p className="type-lead mb-8 text-text">{hookSlide.talkLabel}</p>
            <Pip height={110} mood="talk" />
          </div>
          <div className="flex flex-col gap-4">
            {hookSlide.talk.map((line, index) => (
              <Reveal
                key={line.text}
                show={talking}
                delay={0.3 + index * 0.35}
                className={line.who === "pip" ? "self-start" : "self-end"}
              >
                <Bubble speaker={line.who === "pip" ? "Pip" : "Rosa"} from={line.who === "pip" ? "pip" : "person"}>
                  {line.text}
                </Bubble>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
