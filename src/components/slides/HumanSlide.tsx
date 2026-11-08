import { Brain, Handshake, Heart, type Icon } from "@phosphor-icons/react";
import { humanSlide } from "@/content/content";
import { HumanWords } from "@/components/primitives/HumanWords";
import { Reveal } from "@/components/primitives/Reveal";

const icons: Record<string, Icon> = {
  mind: Brain,
  bond: Handshake,
  heart: Heart,
};

/** The opener: what people do that software can't, one line per click, ending on the turn to Gloria. */
export function HumanSlide({ step }: { step: number }) {
  const turnShown = step >= humanSlide.truths.length;
  return (
    <div className="relative h-full">
      <ul className="flex flex-col gap-12">
        {humanSlide.truths.map((truth, index) => {
          const TruthIcon = icons[truth.icon];
          const current = step === index;
          return (
            <li key={truth.id}>
              <Reveal show={step >= index} className="flex items-start gap-10">
                <TruthIcon
                  size={84}
                  weight="light"
                  aria-hidden
                  className={`mt-1 shrink-0 transition-opacity duration-500 text-accent ${current ? "opacity-100" : "opacity-50"}`}
                />
                <p className={`type-title flex-1 transition-colors duration-500 ${current ? "text-text" : "text-text-muted"}`}>
                  <HumanWords text={truth.text} />
                </p>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <Reveal show={turnShown} className="absolute bottom-0 left-0">
        <p className="type-lead text-text">{humanSlide.turn}</p>
      </Reveal>
    </div>
  );
}
