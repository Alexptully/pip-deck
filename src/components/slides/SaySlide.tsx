import { saySlide } from "@/content/content";
import { Card } from "@/components/primitives/Card";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";
import { VoiceWave } from "@/components/diagrams/VoiceWave";

function Heard({ show }: { show: boolean }) {
  return (
    <Reveal show={show} rise={40}>
      <Card className="px-14 py-12">
        <p className="type-lead text-accent">{saySlide.heardTitle}</p>
        <dl className="mt-8 flex flex-col gap-6">
          {saySlide.heard.map((row, index) => (
            <Reveal
              key={row.key}
              show={show}
              delay={0.25 + index * 0.15}
              className="grid grid-cols-[200px_1fr] gap-x-8"
            >
              <dt className="type-body text-text-faint">{row.key}</dt>
              <dd className="type-body text-text">{row.value}</dd>
            </Reveal>
          ))}
        </dl>
        <p className="type-body mt-10 text-text-muted">{saySlide.confirm}</p>
      </Card>
    </Reveal>
  );
}

export function SaySlide({ step }: { step: number }) {
  const heard = step >= 1;
  return (
    <div className="relative h-full">
      <div className="absolute left-[150px] top-[260px]">
        <Pip height={340} mood={heard ? "talk" : "listen"} />
      </div>
      <div className="absolute left-[780px] right-0 top-0">
        <Heading>{saySlide.heading}</Heading>
      </div>
      <Reveal show={!heard} className="absolute left-[780px] right-0 top-[280px]">
        <div className="flex items-center gap-6">
          <span className="type-caption text-text-muted">{saySlide.speaker}</span>
          <VoiceWave />
          <span className="type-fine text-text-faint">{saySlide.inputModes}</span>
        </div>
        <blockquote className="type-lead mt-8 max-w-[860px] text-text">{`"${saySlide.said}"`}</blockquote>
      </Reveal>
      <div className="absolute left-[780px] right-0 top-[220px]">
        <Heard show={heard} />
      </div>
    </div>
  );
}
