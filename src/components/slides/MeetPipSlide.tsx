import { AppWindow, ArrowRight, ChatCircleText, Lightbulb, type Icon } from "@phosphor-icons/react";
import { meetPipSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

const icons: Record<string, Icon> = {
  talk: ChatCircleText,
  idea: Lightbulb,
  app: AppWindow,
};

/** The reveal: "Let's condense." then "Say hello to Pip." as its face appears, then what Pip is. */
function CondenseLines({ step }: { step: number }) {
  const defined = step >= 2;
  return (
    <Reveal show={!defined} className="absolute left-0 top-[150px] w-[880px]">
      <p className="type-display text-text">{meetPipSlide.condense}</p>
      <Reveal show={step >= 1} rise={30}>
        <p className="type-display mt-4 text-accent">{meetPipSlide.hello}</p>
      </Reveal>
    </Reveal>
  );
}

function Definition({ show }: { show: boolean }) {
  return (
    <>
      <Reveal show={show} delay={0.2} className="absolute left-0 top-[140px] w-[1150px]">
        <p className="type-title text-text">{meetPipSlide.definition}</p>
      </Reveal>
      <div className="absolute left-0 top-[540px] flex w-[1150px] items-start gap-6">
        {meetPipSlide.flow.map((move, index) => {
          const MoveIcon = icons[move.icon];
          const last = index === meetPipSlide.flow.length - 1;
          return (
            <Reveal key={move.id} show={show} delay={0.6 + index * 0.3} className="flex flex-1 items-start gap-6">
              <div className="flex-1">
                <MoveIcon size={56} weight="light" className="text-accent" aria-hidden />
                <p className="type-lead mt-4 text-text">{move.text}</p>
              </div>
              {last ? null : <ArrowRight size={40} className="mt-2 shrink-0 text-text-faint" aria-hidden />}
            </Reveal>
          );
        })}
      </div>
      <Reveal show={show} delay={1.6} className="absolute bottom-0 left-0">
        <p className="type-body text-text-muted">{meetPipSlide.body}</p>
      </Reveal>
    </>
  );
}

export function MeetPipSlide({ step }: { step: number }) {
  const defined = step >= 2;
  return (
    <div className="relative h-full">
      <Reveal show={defined}>
        <Heading>{meetPipSlide.heading}</Heading>
      </Reveal>
      <CondenseLines step={step} />
      <Definition show={defined} />
      <Reveal delay={0.2} rise={60} className="absolute right-0 top-[180px]">
        <Pip height={420} mood={step >= 1 ? "smile" : "mystery"} />
      </Reveal>
    </div>
  );
}
