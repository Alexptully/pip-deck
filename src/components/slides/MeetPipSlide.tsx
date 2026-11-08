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

/** What Pip is, in one sentence and three moves, before any feature. */
export function MeetPipSlide() {
  return (
    <div className="relative h-full">
      <Heading>{meetPipSlide.heading}</Heading>
      <Reveal delay={0.2} className="absolute left-0 top-[140px] w-[1150px]">
        <p className="type-title text-text">{meetPipSlide.definition}</p>
      </Reveal>
      <div className="absolute left-0 top-[540px] flex w-[1150px] items-start gap-6">
        {meetPipSlide.flow.map((move, index) => {
          const MoveIcon = icons[move.icon];
          const last = index === meetPipSlide.flow.length - 1;
          return (
            <Reveal key={move.id} delay={0.6 + index * 0.3} className="flex flex-1 items-start gap-6">
              <div className="flex-1">
                <MoveIcon size={56} weight="light" className="text-accent" aria-hidden />
                <p className="type-lead mt-4 text-text">{move.text}</p>
              </div>
              {last ? null : <ArrowRight size={40} className="mt-2 shrink-0 text-text-faint" aria-hidden />}
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={1.6} className="absolute bottom-0 left-0">
        <p className="type-body text-text-muted">{meetPipSlide.body}</p>
      </Reveal>
      <Reveal delay={0.4} rise={60} className="absolute right-0 top-[180px]">
        <Pip height={420} mood="smile" />
      </Reveal>
    </div>
  );
}
