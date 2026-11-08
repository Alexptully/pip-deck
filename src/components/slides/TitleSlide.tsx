import { config } from "@/content/config";
import { titleSlide } from "@/content/content";
import { Fill } from "@/components/primitives/Placeholder";
import { Reveal } from "@/components/primitives/Reveal";
import { Echo } from "@/components/diagrams/Echo";

export function TitleSlide() {
  return (
    <div className="relative h-full">
      <Reveal delay={0.8} rise={0} pace="slow" className="pointer-events-none absolute left-[640px] top-[-60px]">
        <Echo />
      </Reveal>
      <Reveal className="absolute left-0 top-[40px]">
        <h1 className="type-mega text-text">{titleSlide.name}</h1>
      </Reveal>
      <Reveal delay={0.25} className="absolute left-0 top-[470px] max-w-[760px]">
        <p className="type-lead text-text">{titleSlide.line}</p>
      </Reveal>
      <Reveal delay={0.45} className="absolute bottom-[40px] left-0">
        <dl className="type-caption grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
          <dt className="text-text-faint">Team</dt>
          <dd className="text-text">
            <Fill value={config.teamName} />
            <span className="text-text-muted">{`: ${config.teamMembers.join(", ")}`}</span>
          </dd>
          <dt className="text-text-faint">Event</dt>
          <dd className="text-text-muted">{config.event}</dd>
          <dt className="text-text-faint">Prompt</dt>
          <dd className="text-text-muted">{config.prompt}</dd>
        </dl>
      </Reveal>
    </div>
  );
}
