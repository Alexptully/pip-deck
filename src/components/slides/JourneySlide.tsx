import { ChatCircleDots, Ear, MapTrifold, RocketLaunch, SlidersHorizontal, type Icon } from "@phosphor-icons/react";
import { journeySlide } from "@/content/content";
import { DrawPath } from "@/components/primitives/DrawPath";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

const icons: Record<string, Icon> = {
  listen: Ear,
  ask: SlidersHorizontal,
  try: ChatCircleDots,
  launch: RocketLaunch,
  move: MapTrifold,
};

const NODE_X = [80, 410, 740, 1070, 1400];
const NODE_Y = [300, 220, 300, 220, 300];
const TEXT_TOP = 370;
const PATH =
  "M -40 320 C 20 320, 40 300, 80 300 S 300 214, 410 220 S 630 306, 740 300 S 960 214, 1070 220 S 1290 306, 1400 300 S 1640 290, 1720 280";

export function JourneySlide() {
  return (
    <div className="relative h-full">
      <Heading>{journeySlide.heading}</Heading>
      <div className="absolute inset-x-0 top-[200px] h-[640px]">
        <svg viewBox="0 0 1680 640" width={1680} height={640} className="absolute inset-0 overflow-visible">
          <DrawPath
            d={PATH}
            className="stroke-accent"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            seconds={2.2}
          />
          {NODE_X.map((x, index) => (
            <circle key={x} cx={x} cy={NODE_Y[index]} r={14} className="fill-surface stroke-accent" strokeWidth={4} />
          ))}
        </svg>
        <Reveal delay={0.1} className="absolute left-[30px] top-[110px]">
          <Pip height={130} mood="smile" />
        </Reveal>
        {journeySlide.steps.map((step, index) => {
          const StepIcon = icons[step.id];
          return (
            <Reveal key={step.id} delay={0.5 + index * 0.35} className="absolute w-[300px]">
              <div style={{ transform: `translate(${NODE_X[index] - 20}px, ${TEXT_TOP}px)` }}>
                <StepIcon size={56} weight="light" className="text-accent" />
                <p className="type-lead mt-4 text-text">{step.name}</p>
                <p className="type-body mt-3 text-text-muted">{step.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
