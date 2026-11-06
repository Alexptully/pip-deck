"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { reverseSlide } from "@/content/content";
import { duration } from "@/lib/motion";
import { Bubble } from "@/components/primitives/Bubble";
import { DrawPath } from "@/components/primitives/DrawPath";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { useStill } from "@/components/primitives/Still";

type Node = { id: string; name: string; detail: string };

function Flow({ nodes, strong }: { nodes: readonly Node[]; strong: boolean }) {
  return (
    <ol className="flex items-start gap-6">
      {nodes.map((node, index) => (
        <li key={node.id} className="flex items-start gap-6">
          {index > 0 ? (
            <ArrowRight
              size={40}
              className={`mt-2 shrink-0 ${strong ? "text-accent" : "text-text-faint"}`}
              aria-hidden
            />
          ) : null}
          <div className="w-[300px]">
            <p className={`type-lead ${strong ? "text-text" : "text-text-muted"}`}>{node.name}</p>
            <p className="type-caption mt-2 text-text-muted">{node.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ReverseSlide({ step }: { step: number }) {
  const still = useStill();
  const withPip = step >= 1;
  return (
    <div className="relative h-full pl-[300px]">
      <Heading>{reverseSlide.heading}</Heading>
      <motion.div
        className="mt-14"
        initial={false}
        animate={{ opacity: withPip ? 0.4 : 1 }}
        transition={{ duration: still ? 0 : duration.base }}
      >
        <Reveal delay={0.2}>
          <p className="type-caption mb-5 text-text-faint">{reverseSlide.todayLabel}</p>
          <Flow nodes={reverseSlide.today} strong={false} />
        </Reveal>
      </motion.div>
      <Reveal show={withPip} className="relative mt-16">
        <p className="type-caption mb-5 text-accent">{reverseSlide.pipLabel}</p>
        <Flow nodes={reverseSlide.withPip} strong />
        <svg width="1100" height="90" className="absolute left-[340px] top-[150px] overflow-visible" aria-hidden>
          {withPip ? (
            <DrawPath
              d="M 1010 0 C 1010 70, 980 80, 900 80 L 110 80 C 30 80, 10 70, 10 6"
              className="stroke-accent"
              strokeWidth={3}
              fill="none"
              delay={0.6}
            />
          ) : null}
          <path
            d="M 2 16 L 10 2 L 18 16"
            className={withPip ? "stroke-accent" : "stroke-transparent"}
            strokeWidth={3}
            fill="none"
          />
        </svg>
        <p className="type-caption absolute left-[560px] top-[244px] text-text-muted">{reverseSlide.loop}</p>
      </Reveal>
      <Reveal show={withPip} delay={1.2} className="absolute bottom-0 left-[300px] right-0 flex items-end gap-6">
        <Bubble speaker="Pip" from="pip">
          {reverseSlide.example.ask}
        </Bubble>
        <Bubble speaker="Rosa" from="person">
          {reverseSlide.example.answer}
        </Bubble>
        <Bubble speaker="Preview" from="pip">
          {reverseSlide.example.result}
        </Bubble>
      </Reveal>
    </div>
  );
}
