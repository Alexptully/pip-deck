import { statSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";

type Figure = (typeof statSlide.figures)[number];

function FigureBlock({ figure, show }: { figure: Figure; show: boolean }) {
  return (
    <Reveal show={show}>
      <p className="type-display text-accent">{figure.figure}</p>
      <p className="type-lead mt-4 text-text">{figure.text}</p>
      <p className="type-fine mt-3 text-text-faint">{figure.detail}</p>
    </Reveal>
  );
}

/** Gloria's problem at scale: one figure per click, then what these owners actually want. */
export function StatSlide({ step }: { step: number }) {
  const wantShown = step >= statSlide.figures.length;
  return (
    <div className="relative h-full">
      <Heading>{statSlide.heading}</Heading>
      <div className="absolute left-0 right-0 top-[200px] grid grid-cols-3 gap-x-24">
        {statSlide.figures.map((figure, index) => (
          <FigureBlock key={figure.id} figure={figure} show={step >= index} />
        ))}
      </div>
      <Reveal show={wantShown} rise={30} className="absolute bottom-0 left-0 right-0">
        <p className="type-title text-text">{statSlide.want}</p>
      </Reveal>
    </div>
  );
}
