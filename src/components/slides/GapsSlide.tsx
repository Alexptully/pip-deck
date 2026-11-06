"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { gapsSlide } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { Card } from "@/components/primitives/Card";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { useStill } from "@/components/primitives/Still";

function GapRow({ left, assumed, filled, order }: { left: string; assumed: string; filled: boolean; order: number }) {
  return (
    <li className="grid grid-cols-[420px_60px_1fr] items-center gap-4">
      <span className="type-body px-5 py-3 text-text-muted outline-2 outline-dashed outline-text-faint -outline-offset-2">
        {left}
      </span>
      <Reveal show={filled} delay={order * 0.2} rise={0}>
        <ArrowRight size={36} className="text-text-faint" aria-hidden />
      </Reveal>
      <Reveal show={filled} delay={0.1 + order * 0.2} rise={0}>
        <span className="type-body bg-accent-dim/40 px-5 py-3 text-text">{assumed}</span>
      </Reveal>
    </li>
  );
}

/** A small app resting on a foundation of guesses: the bricks light up once the AI has filled them in. */
function Foundation({ filled }: { filled: boolean }) {
  const still = useStill();
  return (
    <div className="flex w-[460px] flex-col items-stretch gap-3">
      <Card className="type-caption px-6 py-10 text-center text-text-muted">Rosa&apos;s order page</Card>
      <div className="grid grid-cols-4 gap-3">
        {gapsSlide.gaps.map((gap, index) => (
          <motion.div
            key={gap.assumed}
            className="h-16"
            initial={false}
            animate={{ backgroundColor: filled ? "var(--color-accent-dim)" : "var(--color-line)", y: filled ? 0 : -6 }}
            transition={{ duration: still ? 0 : duration.base, ease: ease.soft, delay: still ? 0 : 0.4 + index * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

export function GapsSlide({ step }: { step: number }) {
  const filled = step >= 1;
  return (
    <div className="relative h-full">
      <Heading>{gapsSlide.heading}</Heading>
      <Reveal delay={0.15} className="mt-10 max-w-[1000px]">
        <p className="type-caption text-text-muted">{gapsSlide.saidLabel}</p>
        <Card tone="paper" className="type-lead mt-3 px-8 py-6">
          {gapsSlide.said}
        </Card>
      </Reveal>
      <div className="mt-12 flex items-end justify-between gap-16">
        <div>
          <Reveal delay={0.3} className="mb-5 grid grid-cols-[420px_60px_1fr] gap-4">
            <p className="type-caption text-text-faint">{gapsSlide.gapsLabel}</p>
            <span />
            <Reveal show={filled} rise={0}>
              <p className="type-caption text-text-faint">{gapsSlide.assumedLabel}</p>
            </Reveal>
          </Reveal>
          <ul className="flex flex-col gap-4">
            {gapsSlide.gaps.map((gap, index) => (
              <Reveal key={gap.left} delay={0.35 + index * 0.1}>
                <GapRow left={gap.left} assumed={gap.assumed} filled={filled} order={index} />
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={0.4}>
          <Foundation filled={filled} />
        </Reveal>
      </div>
      <Reveal show={filled} delay={1.2} className="absolute bottom-0 left-0 max-w-[1500px]">
        <p className="type-lead text-text">
          {gapsSlide.foundation} <span className="text-text-muted">{gapsSlide.consequence}</span>
        </p>
      </Reveal>
    </div>
  );
}
