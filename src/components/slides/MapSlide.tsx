"use client";

import { motion } from "motion/react";
import { mapSlide } from "@/content/content";
import { Card } from "@/components/primitives/Card";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { useStill } from "@/components/primitives/Still";
import { Pip } from "@/components/pip/Pip";

const PLAN_WIDTH = 900;
const PLAN_HEIGHT = 600;

type Layer = (typeof mapSlide.layers)[number];

/** A numbered pin with a slow pulse, so the four findings read as live listening. */
function MapPin({ layer, index }: { layer: Layer; index: number }) {
  const still = useStill();
  const { x, y } = layer.pin;
  return (
    <motion.g
      initial={still ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: still ? 0 : 0.8 + index * 0.3, duration: 0.4 }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <motion.circle
        cx={x}
        cy={y}
        r={30}
        className="fill-none stroke-accent"
        strokeWidth={2}
        animate={still ? undefined : { r: [30, 46], opacity: [0.7, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
      />
      <circle cx={x} cy={y} r={26} className="fill-accent" />
      <text x={x} y={y + 9} textAnchor="middle" className="fill-surface font-display text-[26px] font-bold">
        {layer.number}
      </text>
    </motion.g>
  );
}

/** Gloria's clinic from above: rooms in thin lines, what Pip heard pinned where it happens. */
function FloorPlan() {
  const { rooms, layers } = mapSlide;
  return (
    <svg
      viewBox={`-10 -10 ${PLAN_WIDTH + 20} ${PLAN_HEIGHT + 20}`}
      width={PLAN_WIDTH}
      height={PLAN_HEIGHT}
      role="img"
      aria-label="Floor plan of the clinic with four numbered findings"
    >
      {rooms.map((room) => (
        <g key={room.id}>
          <rect
            x={room.x}
            y={room.y}
            width={room.w}
            height={room.h}
            className="fill-none stroke-text-faint"
            strokeWidth={2}
          />
          <text x={room.x + 18} y={room.y + room.h - 18} className="fill-text-muted font-sans text-[20px]">
            {room.label}
          </text>
        </g>
      ))}
      {layers.map((layer, index) => (
        <MapPin key={layer.id} layer={layer} index={index} />
      ))}
    </svg>
  );
}

function Layers({ show }: { show: boolean }) {
  return (
    <Reveal show={show}>
      <p className="type-caption text-text-muted">{mapSlide.layersTitle}</p>
      <ol className="mt-6 flex flex-col gap-6">
        {mapSlide.layers.map((layer, index) => (
          <li key={layer.id}>
            <Reveal show={show} delay={0.9 + index * 0.3} className="grid grid-cols-[48px_1fr] gap-x-4">
              <span className="type-lead text-accent">{layer.number}</span>
              <div>
                <p className="type-lead text-text">{layer.name}</p>
                <p className="type-body mt-1 text-text-muted">{layer.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

function Builds({ show }: { show: boolean }) {
  return (
    <Reveal show={show}>
      <p className="type-caption text-accent">{mapSlide.buildsTitle}</p>
      <Reveal show={show} delay={0.2} className="mt-5">
        <Card className="px-9 py-6">
          <p className="type-caption text-accent">Pip</p>
          <p className="type-lead mt-2 text-text">{`“${mapSlide.pipSays}”`}</p>
        </Card>
      </Reveal>
      <p className="type-caption mt-6 text-text-muted">{mapSlide.buildsLead}</p>
      <ul className="mt-3 flex flex-col gap-3">
        {mapSlide.builds.map((build, index) => (
          <li key={build.id}>
            <Reveal show={show} delay={0.5 + index * 0.2} className="grid grid-cols-[150px_1fr] items-baseline gap-x-6">
              <span className="type-caption text-text-faint">{`From ${build.from.join(" and ")}`}</span>
              <span className="type-lead text-text">{build.name}</span>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="type-fine mt-5 text-text-faint">{mapSlide.demoLabel}</p>
    </Reveal>
  );
}

export function MapSlide({ step }: { step: number }) {
  const building = step >= 1;
  return (
    <div className="relative h-full">
      <Heading>{mapSlide.heading}</Heading>
      <div className="absolute left-0 top-[240px]">
        <FloorPlan />
      </div>
      <Reveal delay={0.4} className="absolute left-[40px] top-[262px]">
        <Pip height={110} mood="listen" />
      </Reveal>
      <div className="absolute right-0 top-[150px] w-[680px]">
        <Layers show={!building} />
      </div>
      <div className="absolute right-0 top-[150px] w-[680px]">
        <Builds show={building} />
      </div>
    </div>
  );
}
