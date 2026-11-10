import { futureSlide } from "@/content/content";
import { HumanWords } from "@/components/primitives/HumanWords";
import { Reveal } from "@/components/primitives/Reveal";

/** The thesis after Gloria's story, then why it isn't as backwards as it sounds. */
export function FutureSlide({ step }: { step: number }) {
  const whyShown = step >= 1;
  return (
    <div className="relative h-full">
      <Reveal pace="slow" className="absolute left-0 top-0 max-w-[1500px]">
        <p className="type-title text-text-muted">{futureSlide.lead}</p>
        <h2 className="type-display mt-4 text-text">
          <HumanWords text={futureSlide.heading} />
        </h2>
      </Reveal>
      <Reveal show={whyShown} rise={30} className="absolute left-0 top-[520px] max-w-[1200px]">
        <p className="type-lead text-text-muted">
          <HumanWords text={futureSlide.backwards} />
        </p>
        <p className="type-lead mt-4 text-text">
          <HumanWords text={futureSlide.because} />
        </p>
      </Reveal>
    </div>
  );
}
