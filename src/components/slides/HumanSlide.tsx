import { Ear, Eye, ListNumbers, type Icon } from "@phosphor-icons/react";
import { humanSlide } from "@/content/content";
import { Reveal } from "@/components/primitives/Reveal";

const icons: Record<string, Icon> = {
  listen: Ear,
  context: Eye,
  priority: ListNumbers,
};

/** The belief behind the deck: what people do well when they help each other. */
export function HumanSlide({ step }: { step: number }) {
  const headingShown = step >= 1;
  const shown = step >= 2;
  return (
    <div className="relative h-full">
      <Reveal className="absolute left-0 top-0">
        <p className="type-lead max-w-[1300px] text-text-muted">{humanSlide.lead}</p>
      </Reveal>
      <Reveal show={headingShown} className="absolute left-0 top-[150px]">
        <h2 className="type-display text-text">{humanSlide.heading}</h2>
      </Reveal>
      <ul className="absolute left-0 right-0 top-[560px] grid grid-cols-3 gap-14">
        {humanSlide.strengths.map((strength, index) => {
          const StrengthIcon = icons[strength.icon];
          return (
            <li key={strength.id}>
              <Reveal show={shown} delay={index * 0.4}>
                <StrengthIcon size={56} weight="light" className="text-accent" aria-hidden />
                <p className="type-lead mt-5 text-text">{strength.name}</p>
                <p className="type-body mt-4 text-text-muted">{strength.text}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
