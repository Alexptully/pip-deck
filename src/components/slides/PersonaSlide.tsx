import { Stethoscope } from "@phosphor-icons/react";
import { personaSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { KeyValue } from "@/components/primitives/KeyValue";
import { Reveal } from "@/components/primitives/Reveal";
import { DayTimeline } from "@/components/diagrams/DayTimeline";

export function PersonaSlide() {
  return (
    <div className="relative h-full">
      <Heading>{personaSlide.heading}</Heading>
      <Reveal delay={0.2} className="absolute left-0 top-[125px]">
        <KeyValue rows={personaSlide.facts} />
      </Reveal>
      <Reveal delay={0.35} className="absolute right-[200px] top-[125px]">
        <div className="rounded-card bg-paper p-10 shadow-card">
          <Stethoscope size={200} weight="light" className="text-ink" aria-hidden />
        </div>
      </Reveal>
      <div className="absolute bottom-0 left-0">
        <DayTimeline />
      </div>
    </div>
  );
}
