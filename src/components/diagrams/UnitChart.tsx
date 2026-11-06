"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { buildersSlide } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { useStill } from "@/components/primitives/Still";

type Group = (typeof buildersSlide.groups)[number];

const COLUMNS = 31;
const DOT = 15;
const GAP = 7;

function dotCount(group: Group): number {
  return Math.round(group.value / buildersSlide.dotValue);
}

function groupOpacity(groupId: string, hovered: string | null): number {
  if (!hovered) return 1;
  return hovered === groupId ? 1 : 0.25;
}

function Dots({ group, hidden, opacity }: { group: Group; hidden: boolean; opacity: number }) {
  const still = useStill();
  const count = dotCount(group);
  const dotClass = group.ours ? "bg-accent shadow-glow" : "ring-2 ring-text-muted";
  return (
    <motion.div
      className="grid w-fit"
      style={{ gridTemplateColumns: `repeat(${COLUMNS}, ${DOT}px)`, gap: GAP }}
      initial={false}
      animate={{ opacity: hidden ? 0.06 : opacity }}
      transition={{ duration: duration.quick }}
    >
      {Array.from({ length: count }, (_, index) => (
        <motion.span
          key={index}
          className={`block rounded-control ${dotClass}`}
          style={{ width: DOT, height: DOT }}
          initial={still ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: still ? 0 : duration.quick, ease: ease.soft, delay: still ? 0 : 0.3 + index * 0.004 }}
        />
      ))}
    </motion.div>
  );
}

function KeyItem({ group, hidden, onToggle }: { group: Group; hidden: boolean; onToggle: () => void }) {
  const swatch = group.ours ? "bg-accent" : "ring-2 ring-text-muted";
  return (
    <button
      type="button"
      aria-pressed={!hidden}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      className={`type-caption flex cursor-pointer items-center gap-3 rounded-control px-4 py-2 transition-opacity hover:bg-surface-raised ${hidden ? "opacity-40" : ""}`}
    >
      <span className={`block size-4 rounded-control ${swatch}`} />
      {hidden ? `Show ${group.label.toLowerCase()}` : `Hide ${group.label.toLowerCase()}`}
    </button>
  );
}

/** Small businesses against software developers, one dot per 100,000. Hover highlights, the key toggles. */
export function UnitChart() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [hiddenIds, setHiddenIds] = useState<string[]>([]);
  const toggle = (id: string) =>
    setHiddenIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  return (
    <figure className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        {buildersSlide.groups.map((group) => (
          <KeyItem
            key={group.id}
            group={group}
            hidden={hiddenIds.includes(group.id)}
            onToggle={() => toggle(group.id)}
          />
        ))}
        <span className="type-fine ml-auto text-text-faint">{buildersSlide.dotLabel}</span>
      </div>
      {buildersSlide.groups.map((group) => (
        <div
          key={group.id}
          className="flex items-start gap-10"
          onMouseEnter={() => setHovered(group.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <Dots group={group} hidden={hiddenIds.includes(group.id)} opacity={groupOpacity(group.id, hovered)} />
          <figcaption
            className="w-[340px] shrink-0 whitespace-nowrap"
            style={{ opacity: groupOpacity(group.id, hovered) }}
          >
            <p className={`type-figure ${group.ours ? "text-text" : "text-text-muted"}`}>{group.valueLabel}</p>
            <p className="type-caption mt-2 text-text">{group.label}</p>
            <p className="type-fine mt-1 text-text-faint">{group.detail}</p>
          </figcaption>
        </div>
      ))}
    </figure>
  );
}
