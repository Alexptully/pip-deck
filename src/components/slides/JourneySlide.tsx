import { ChatCircleDots, Microphone, RocketLaunch, SlidersHorizontal, type Icon } from "@phosphor-icons/react";
import { journeySlide } from "@/content/content";
import { DrawPath } from "@/components/primitives/DrawPath";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

const icons: Record<string, Icon> = {
  say: Microphone,
  shape: SlidersHorizontal,
  try: ChatCircleDots,
  launch: RocketLaunch,
};

const NODE_X = [100, 520, 940, 1300];
const NODE_Y = [300, 220, 300, 220];
const TEXT_TOP = 370;
const PATH =
  "M -40 320 C 40 320, 60 300, 100 300 S 380 214, 520 220 S 800 306, 940 300 S 1180 214, 1300 220 S 1600 212, 1720 200";

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
            <Reveal key={step.id} delay={0.5 + index * 0.35} className="absolute w-[400px]">
              <div style={{ transform: `translate(${NODE_X[index] - 20}px, ${TEXT_TOP}px)` }}>
                <StepIcon size={56} weight="light" className="text-accent" />
                <p className="type-title mt-4 text-text">{step.name}</p>
                <p className="type-body mt-4 text-text-muted">{step.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
