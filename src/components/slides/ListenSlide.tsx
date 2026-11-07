import { listenSlide } from "@/content/content";
import { Card } from "@/components/primitives/Card";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";
import { VoiceWave } from "@/components/diagrams/VoiceWave";

function Overheard({ show }: { show: boolean }) {
  return (
    <Reveal show={show}>
      <VoiceWave />
      <ul className="mt-10 flex flex-col gap-7">
        {listenSlide.overheard.map((line, index) => (
          <Reveal key={line.text} show={show} delay={0.2 + index * 0.25} className="grid grid-cols-[200px_1fr] gap-x-8">
            <span className="type-body text-text-faint">{line.who}</span>
            <q className="type-lead text-text">{line.text}</q>
          </Reveal>
        ))}
      </ul>
    </Reveal>
  );
}

function Noticed({ show }: { show: boolean }) {
  return (
    <Reveal show={show} rise={40}>
      <Card className="px-14 py-12">
        <p className="type-lead text-accent">{listenSlide.noticedTitle}</p>
        <dl className="mt-8 flex flex-col gap-6">
          {listenSlide.noticed.map((row, index) => (
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
        <p className="type-body mt-10 text-text-muted">{listenSlide.confirm}</p>
      </Card>
      <p className="type-fine mt-4 text-text-faint">{listenSlide.demoLabel}</p>
    </Reveal>
  );
}

export function ListenSlide({ step }: { step: number }) {
  const noticed = step >= 1;
  return (
    <div className="relative h-full">
      <div className="absolute left-[150px] top-[260px]">
        <Pip height={340} mood={noticed ? "talk" : "listen"} />
      </div>
      <div className="absolute left-[780px] right-0 top-0">
        <Heading>{listenSlide.heading}</Heading>
      </div>
      <div className="absolute left-[780px] right-0 top-[220px]">
        <Overheard show={!noticed} />
      </div>
      <div className="absolute left-[780px] right-0 top-[200px]">
        <Noticed show={noticed} />
      </div>
    </div>
  );
}
