import { futureSlide } from "@/content/content";
import { HumanWords } from "@/components/primitives/HumanWords";
import { Reveal } from "@/components/primitives/Reveal";

/** The thesis, on its own after Gloria's story. */
export function FutureSlide() {
  return (
    <div className="relative h-full">
      <Reveal pace="slow" className="absolute bottom-0 left-0 max-w-[1500px]">
        <h2 className="type-hero text-text"><HumanWords text={futureSlide.heading} /></h2>
      </Reveal>
    </div>
  );
}
