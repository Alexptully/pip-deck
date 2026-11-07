"use client";

import { motion } from "motion/react";
import { config } from "@/content/config";
import { launchSlide, ownerName } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { Card } from "@/components/primitives/Card";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { useStill } from "@/components/primitives/Still";
import { QrCode } from "@/components/diagrams/QrCode";
import { Pip } from "@/components/pip/Pip";
import { bakeryOrder } from "./launch-data";

function LiveDot() {
  const still = useStill();
  return (
    <motion.span
      className="block size-4 rounded-control bg-accent shadow-glow"
      initial={false}
      animate={still ? { opacity: 1 } : { opacity: [1, 0.3, 1] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    />
  );
}

function Orders({ show }: { show: boolean }) {
  return (
    <Reveal show={show}>
      <p className="type-lead text-text">{launchSlide.ordersTitle}</p>
      <ul className="mt-6 flex flex-col">
        {launchSlide.orders.map((order, index) => (
          <Reveal key={order.name} show={show} delay={0.2 + index * 0.35} className="border-b border-line py-4">
            <div className="flex items-baseline justify-between gap-6">
              <span className="type-body text-text">{`${order.name}: ${order.count} ${order.item.toLowerCase()}`}</span>
              <span className="type-caption shrink-0 text-text-muted">{order.pickup}</span>
            </div>
            {"note" in order && order.note ? <p className="type-caption mt-1 text-accent">{order.note}</p> : null}
          </Reveal>
        ))}
      </ul>
    </Reveal>
  );
}

function BakeryOrder({ show }: { show: boolean }) {
  const still = useStill();
  const lines = bakeryOrder();
  const most = Math.max(...lines.map((line) => line.count));
  return (
    <Reveal show={show} delay={0.4}>
      <Card tone="paper" className="px-10 py-9">
        <p className="type-lead">{launchSlide.listTitle}</p>
        <ul className="mt-6 flex flex-col gap-6">
          {lines.map((line) => (
            <li key={line.item}>
              <div className="flex items-baseline justify-between">
                <span className="type-body">{line.item}</span>
                <span className="type-figure">{line.count}</span>
              </div>
              <div className="mt-2 h-3 bg-paper-shade">
                <motion.div
                  className="h-full bg-ink"
                  initial={still ? false : { width: 0 }}
                  animate={{ width: show ? `${(line.count / most) * 100}%` : 0 }}
                  transition={{ duration: still ? 0 : duration.slow, ease: ease.soft, delay: still ? 0 : 1.2 }}
                />
              </div>
              {line.notes.map((note) => (
                <p key={note} className="type-caption mt-2 text-ink-muted">
                  {note}
                </p>
              ))}
            </li>
          ))}
        </ul>
        <p className="type-fine mt-6 text-ink-muted">{launchSlide.demoLabel}</p>
      </Card>
    </Reveal>
  );
}

export function LaunchSlide({ step }: { step: number }) {
  return (
    <div className="relative h-full">
      <div className="absolute left-0 top-0 w-[560px]">
        <Heading>{launchSlide.heading}</Heading>
        <Reveal delay={0.2} className="mt-10">
          <p className="type-caption text-text-muted">{ownerName}</p>
          <p className="type-title mt-2 text-text">{launchSlide.ownerSays}</p>
        </Reveal>
        <Reveal delay={0.5} className="mt-16 flex items-center gap-8">
          <Card tone="paper" className="p-5">
            <QrCode value={config.demoUrl} size={240} />
          </Card>
          <div>
            <div className="flex items-center gap-3">
              <LiveDot />
              <span className="type-lead text-text">{launchSlide.liveLabel}</span>
            </div>
            <p className="type-caption mt-2 max-w-[240px] text-text-muted">{launchSlide.scanText}</p>
          </div>
        </Reveal>
      </div>
      <Reveal show={step === 0} delay={0.6} className="absolute left-[860px] top-[200px]">
        <Pip height={420} mood="smile" />
      </Reveal>
      <div className="absolute left-[660px] top-0 w-[480px]">
        <Orders show={step >= 1} />
      </div>
      <div className="absolute right-0 top-0 w-[480px]">
        <BakeryOrder show={step >= 1} />
      </div>
    </div>
  );
}
