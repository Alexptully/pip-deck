"use client";

import { motion } from "motion/react";
import { marketSlide } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { DrawPath } from "@/components/primitives/DrawPath";
import { useStill } from "@/components/primitives/Still";

const WIDTH = 1680;
const HEIGHT = 380;
const BAR_Y = 230;
const DOT_Y = 190;
const LABEL_Y = 40;

function hourToX(hour: number): number {
  const { dayStartHour, dayEndHour } = marketSlide;
  return ((hour - dayStartHour) / (dayEndHour - dayStartHour)) * (WIDTH - 40) + 20;
}

function hourLabel(hour: number): string {
  const labels: Record<number, string> = { 12: "noon", 24: "midnight" };
  if (labels[hour]) return labels[hour];
  return hour < 12 ? `${hour} a.m.` : `${hour - 12} p.m.`;
}

function anchorFor(index: number, count: number): "start" | "middle" | "end" {
  if (index === 0) return "start";
  return index === count - 1 ? "end" : "middle";
}

function MessageDot({ hour, order, lost }: { hour: number; order: number; lost: boolean }) {
  const still = useStill();
  const delay = 0.6 + order * 0.12;
  const landed = lost ? { opacity: 0.35, y: 70, scale: 0.7 } : { opacity: 1, y: 0, scale: 1 };
  return (
    <motion.circle
      cx={hourToX(hour)}
      cy={DOT_Y}
      r={11}
      className={lost ? "fill-none stroke-accent" : "fill-accent"}
      strokeWidth={3}
      initial={still ? false : { opacity: 0, y: -30, scale: 0.4 }}
      animate={landed}
      transition={{ duration: still ? 0 : duration.base, ease: ease.soft, delay: still ? 0 : delay }}
    />
  );
}

/** Marisol's day at the market, with requests said out loud landing across it. */
export function DayTimeline() {
  const { moments, ticks } = marketSlide;
  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width={WIDTH} height={HEIGHT} className="overflow-visible">
      <defs>
        <linearGradient id="counter-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0.55" className="[stop-color:var(--color-text)] [stop-opacity:0.1]" />
          <stop offset="1" className="[stop-color:var(--color-text)] [stop-opacity:0]" />
        </linearGradient>
      </defs>
      {marketSlide.blocks.map((block, index) => (
        <g key={block.label}>
          <rect
            x={hourToX(block.from)}
            y={BAR_Y}
            width={hourToX(block.to) - hourToX(block.from)}
            height={56}
            className={index === 0 ? "fill-text/25" : ""}
            fill={index === 0 ? undefined : "url(#counter-fade)"}
          />
          <text x={hourToX(block.from) + 18} y={BAR_Y + 37} className="fill-text type-caption">
            {block.label}
          </text>
        </g>
      ))}
      <DrawPath d={`M20 ${BAR_Y + 56} H ${WIDTH - 20}`} className="stroke-line" strokeWidth={2} />
      {ticks.map((hour) => (
        <text
          key={hour}
          x={hourToX(hour)}
          y={BAR_Y + 100}
          textAnchor={anchorFor(ticks.indexOf(hour), ticks.length)}
          className="fill-text-faint type-fine"
        >
          {hourLabel(hour)}
        </text>
      ))}
      <text x={hourToX(marketSlide.requestHours[0])} y={DOT_Y - 30} className="fill-text-muted type-fine">
        {marketSlide.requestsLabel}
      </text>
      {marketSlide.requestHours.map((hour, order) => (
        <MessageDot key={hour} hour={hour} order={order} lost={hour === marketSlide.lostRequestHour} />
      ))}
      {moments.map((moment, index) => (
        <g key={moment.text}>
          <DrawPath
            d={`M${hourToX(moment.hour)} ${LABEL_Y + 18} V ${DOT_Y - 52}`}
            className="stroke-text-faint"
            strokeWidth={2}
            delay={1.4 + index * 0.2}
          />
          <text
            x={hourToX(moment.hour)}
            y={LABEL_Y}
            textAnchor={anchorFor(index, moments.length)}
            className="fill-text type-caption"
          >
            {moment.text}
          </text>
        </g>
      ))}
    </svg>
  );
}
