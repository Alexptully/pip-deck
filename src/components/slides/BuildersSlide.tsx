import { buildersSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { UnitChart } from "@/components/diagrams/UnitChart";

export function BuildersSlide() {
  return (
    <div className="relative h-full">
      <Heading>{buildersSlide.heading}</Heading>
      <div className="mt-14 grid grid-cols-[480px_1fr] gap-16">
        <Reveal delay={0.15}>
          <p className="type-hero text-text">{buildersSlide.ratio}</p>
          <p className="type-lead mt-4 text-text">{buildersSlide.ratioLabel}</p>
          <p className="type-fine mt-4 text-text-faint">{buildersSlide.ratioNote}</p>
        </Reveal>
        <Reveal delay={0.25}>
          <UnitChart />
        </Reveal>
      </div>
      <Reveal delay={0.6} className="absolute bottom-0 left-0 right-0 grid grid-cols-[480px_1fr] items-end gap-16">
        <p className="type-lead text-text">{buildersSlide.promise}</p>
        <p className="type-body text-text-muted">
          <span className="type-figure mr-4 text-text">{buildersSlide.localFigure}</span>
          {buildersSlide.localText}
        </p>
      </Reveal>
    </div>
  );
}
