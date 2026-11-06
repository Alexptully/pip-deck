import { ArrowRight, Microphone, PencilSimpleLine, TreeStructure, Waveform, type Icon } from "@phosphor-icons/react";
import { whyNowSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";

const icons: Record<string, Icon> = {
  talk: Microphone,
  hear: Waveform,
  structure: TreeStructure,
  edit: PencilSimpleLine,
};

export function WhyNowSlide() {
  return (
    <div className="relative h-full">
      <Heading>{whyNowSlide.heading}</Heading>
      <ol className="mt-20 grid grid-cols-4 gap-24">
        {whyNowSlide.pipeline.map((stage, index) => {
          const StageIcon = icons[stage.id];
          return (
            <li key={stage.id} className="relative">
              <Reveal delay={0.2 + index * 0.3}>
                {index > 0 ? (
                  <ArrowRight size={48} className="absolute -left-[74px] top-[86px] text-accent" aria-hidden />
                ) : null}
                <StageIcon size={72} weight="light" className="mb-6 text-accent" aria-hidden />
                <p className="type-lead text-text">{stage.name}</p>
                <p className="type-caption mt-4 text-text-muted">{stage.detail}</p>
              </Reveal>
            </li>
          );
        })}
      </ol>
      <div className="absolute bottom-0 left-0 grid w-[1500px] grid-cols-2 gap-20 border-t border-line pt-10">
        {whyNowSlide.facts.map((fact, index) => (
          <Reveal key={fact.figure} delay={1.4 + index * 0.2}>
            <p className="type-figure text-text">{fact.figure}</p>
            <p className="type-body mt-4 text-text-muted">{fact.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
