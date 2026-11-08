import { humanSlide } from "@/content/content";
import { Reveal } from "@/components/primitives/Reveal";

/** The opener: what people do that software can't, one line per click, ending on the turn to Gloria. */
export function HumanSlide({ step }: { step: number }) {
  const turnShown = step >= humanSlide.truths.length;
  return (
    <div className="relative h-full">
      <ul className="flex max-w-[1500px] flex-col gap-12">
        {humanSlide.truths.map((truth, index) => (
          <li key={truth.id}>
            <Reveal show={step >= index}>
              <p className={`type-title transition-colors duration-500 ${step === index ? "text-text" : "text-text-muted"}`}>
                {truth.text}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal show={turnShown} className="absolute bottom-0 left-0">
        <p className="type-lead text-text">{humanSlide.turn}</p>
      </Reveal>
    </div>
  );
}
