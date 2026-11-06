import { rosaSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { KeyValue } from "@/components/primitives/KeyValue";
import { Reveal } from "@/components/primitives/Reveal";
import { DayTimeline } from "@/components/diagrams/DayTimeline";
import { Concha } from "@/components/diagrams/Concha";

export function RosaSlide() {
  return (
    <div className="relative h-full">
      <Heading>{rosaSlide.heading}</Heading>
      <Reveal delay={0.2} className="absolute left-0 top-[170px]">
        <KeyValue rows={rosaSlide.facts} />
      </Reveal>
      <Reveal delay={0.35} className="absolute right-[200px] top-[170px]">
        <div className="rounded-card bg-paper p-8 shadow-card">
          <Concha size={280} />
        </div>
      </Reveal>
      <div className="absolute bottom-0 left-0">
        <DayTimeline />
      </div>
    </div>
  );
}
