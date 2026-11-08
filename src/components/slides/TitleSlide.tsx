import { config } from "@/content/config";
import { titleSlide } from "@/content/content";
import { Fill } from "@/components/primitives/Placeholder";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

export function TitleSlide() {
  return (
    <div className="relative h-full">
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
          </dd>
          <dt className="text-text-faint">Event</dt>
          <dd className="text-text-muted">{config.event}</dd>
          <dt className="text-text-faint">Prompt</dt>
          <dd className="text-text-muted">{config.prompt}</dd>
        </dl>
      </Reveal>
      <Reveal delay={1.2} rise={90} pace="slow" className="absolute left-[1000px] top-[170px]">
        <Pip height={560} mood="mystery" />
      </Reveal>
    </div>
  );
}
