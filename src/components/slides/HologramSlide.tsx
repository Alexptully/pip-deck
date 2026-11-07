import { hologramSlide } from "@/content/content";
import { DrawPath } from "@/components/primitives/DrawPath";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

/** The sheet sits where the deck's mist rises on this slide, so the motif becomes the hardware. */
const SHEET_X = 700;

type Callout = { id: string; left: number; top: number; width: number; align: "left" | "right" };

const callouts: Callout[] = [
  { id: "curtains", left: 170, top: 250, width: 440, align: "right" },
  { id: "projector", left: 1140, top: 385, width: 440, align: "left" },
  { id: "hand", left: 0, top: 650, width: 440, align: "left" },
  { id: "generator", left: 60, top: 760, width: 500, align: "right" },
  { id: "laptop", left: 960, top: 690, width: 430, align: "right" },
];

function textFor(id: string): string {
  return hologramSlide.parts.find((part) => part.id === id)?.text ?? "";
}

/** Side view of our build: a fog box on the floor, the sheet rising from its slot, the projector behind. */
function Hardware() {
  return (
    <svg viewBox="0 0 1680 900" width={1680} height={900} className="absolute inset-0 overflow-visible" aria-hidden>
      <rect
        x={SHEET_X - 110}
        y={700}
        width={220}
        height={100}
        className="fill-surface-raised stroke-text-muted"
        strokeWidth={3}
      />
      <rect
        x={SHEET_X - 60}
        y={668}
        width={120}
        height={32}
        className="fill-surface-raised stroke-text-muted"
        strokeWidth={3}
      />
      <DrawPath d={`M${SHEET_X - 8} 668 H ${SHEET_X + 8}`} className="stroke-accent" strokeWidth={6} />
      {[-40, 40].map((offset) => (
        <g key={offset}>
          <DrawPath
            d={`M${SHEET_X + offset} 656 V 250`}
            className="stroke-text-faint"
            strokeWidth={2}
            strokeDasharray="10 14"
            delay={0.4}
          />
          <path
            d={`M${SHEET_X + offset - 10} 264 L ${SHEET_X + offset} 246 L ${SHEET_X + offset + 10} 264`}
            className="stroke-text-faint"
            strokeWidth={2}
            fill="none"
          />
        </g>
      ))}
      <path d={`M1140 540 L ${SHEET_X + 4} 290 L ${SHEET_X + 4} 660 Z`} className="fill-accent/10" />
      <rect
        x={1140}
        y={490}
        width={190}
        height={100}
        className="fill-surface-raised stroke-text-muted"
        strokeWidth={3}
      />
      <circle cx={1160} cy={540} r={24} className="fill-surface stroke-accent" strokeWidth={4} />
      <DrawPath
        d="M1330 560 C 1400 560, 1380 690, 1420 700"
        className="stroke-text-faint"
        strokeWidth={2}
        strokeDasharray="6 8"
        fill="none"
        delay={0.8}
      />
      <rect
        x={1420}
        y={640}
        width={190}
        height={118}
        className="fill-surface-raised stroke-text-muted"
        strokeWidth={3}
      />
      <path d="M1396 772 H 1634 L 1612 758 H 1418 Z" className="fill-text-faint" />
      {[18, 34, 50].map((radius) => (
        <path
          key={radius}
          d={`M${1515 - radius} ${620 - radius * 0.2} Q 1515 ${600 - radius} ${1515 + radius} ${620 - radius * 0.2}`}
          className="stroke-accent/60"
          strokeWidth={3}
          fill="none"
        />
      ))}
      <circle cx={260} cy={440} r={54} className="fill-none stroke-text-muted" strokeWidth={3} />
      <path d="M160 640 C 170 540, 350 540, 360 640" className="fill-none stroke-text-muted" strokeWidth={3} />
      <DrawPath
        d={`M330 585 C 450 590, 560 600, ${SHEET_X - 12} 600`}
        className="stroke-text-muted"
        strokeWidth={3}
        fill="none"
        delay={1}
      />
      <circle cx={SHEET_X - 4} cy={600} r={16} className="fill-surface stroke-text-muted" strokeWidth={3} />
      <path d="M40 800 H 1640" className="stroke-line" strokeWidth={2} />
    </svg>
  );
}

export function HologramSlide() {
  return (
    <div className="relative h-full">
      <Heading className="max-w-[800px]">{hologramSlide.heading}</Heading>
      <div className="absolute inset-0">
        <Hardware />
        <Reveal delay={0.5} className="absolute">
          <div style={{ transform: `translate(${SHEET_X - 150}px, 300px)` }}>
            <Pip height={220} mood="smile" />
          </div>
        </Reveal>
        {callouts.map((callout, index) => (
          <Reveal key={callout.id} delay={0.6 + index * 0.15} className="absolute">
            <p
              className={`type-caption text-text ${callout.align === "right" ? "text-right" : ""}`}
              style={{ transform: `translate(${callout.left}px, ${callout.top}px)`, width: callout.width }}
            >
              {textFor(callout.id)}
            </p>
          </Reveal>
        ))}
        <Reveal delay={1.4} className="absolute left-[880px] top-[250px] w-[420px]">
          <p className="type-caption text-accent">{hologramSlide.lineNote}</p>
        </Reveal>
      </div>
    </div>
  );
}
