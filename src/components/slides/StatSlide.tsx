"use client";

import { motion } from "motion/react";
import { statSlide } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { useStill } from "@/components/primitives/Still";
import { Pip } from "@/components/pip/Pip";

type Stat = (typeof statSlide.stats)[number];

const TRACK = 820;

function Bar({ value, ours, delay }: { value: number; ours: boolean; delay: number }) {
  const still = useStill();
  const look = ours ? "h-7 bg-accent shadow-glow" : "h-2.5 bg-text-faint";
  return (
    <div className="relative" style={{ width: TRACK }}>
      <motion.div
        className={look}
        initial={still ? false : { width: 0 }}
        animate={{ width: (TRACK * value) / 100 }}
        transition={{ duration: still ? 0 : duration.slow, ease: ease.soft, delay: still ? 0 : delay }}
      />
    </div>
  );
}

/** One before-and-after pair. The latest year is the thick accent bar, labeled directly. */
function StatPair({ stat, index }: { stat: Stat; index: number }) {
  const delay = 0.3 + index * 0.4;
  return (
    <Reveal delay={delay - 0.1}>
      <p className="type-lead text-text">{stat.label}</p>
      <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-x-8 gap-y-4">
        <Bar value={stat.before.value} ours={false} delay={delay} />
        <p className="type-caption text-text-muted">{`${stat.before.value}% in ${stat.before.year}`}</p>
        <Bar value={stat.after.value} ours delay={delay + 0.2} />
        <p className="text-text">
          <span className="type-figure">{`${stat.after.value}%`}</span>
          <span className="type-caption ml-3 text-text-muted">{`in ${stat.after.year}`}</span>
        </p>
      </div>
      <p className="type-fine mt-3 text-text-faint">{stat.detail}</p>
    </Reveal>
  );
}

export function StatSlide({ step }: { step: number }) {
  const pivot = step >= 1;
  return (
    <div className="relative h-full">
      <Heading>{statSlide.heading}</Heading>
      <div className="absolute left-0 top-[250px] flex w-[1160px] flex-col gap-12">
        {statSlide.stats.map((stat, index) => (
          <StatPair key={stat.id} stat={stat} index={index} />
        ))}
        <Reveal delay={1.4} className="max-w-[1000px]">
          <p className="type-body text-text-muted">{statSlide.gap}</p>
        </Reveal>
      </div>
      <Reveal
        show={pivot}
        rise={50}
        className="absolute right-0 top-[170px] flex w-[460px] flex-col items-center gap-8"
      >
        <Pip height={300} mood="smile" />
        <p className="type-title text-center text-text">{statSlide.pivot}</p>
      </Reveal>
    </div>
  );
}
