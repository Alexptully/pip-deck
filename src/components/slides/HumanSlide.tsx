import { humanSlide } from "@/content/content";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

/** Telling AI what to do, set against talking with someone. The human side carries the weight. */
export function HumanSlide({ step }: { step: number }) {
  const human = step >= 1;
  return (
    <div className="relative h-full">
      <Reveal className="absolute left-0 top-[20px]">
        <h2 className="type-display text-text">{humanSlide.heading}</h2>
      </Reveal>
      <Reveal delay={0.4} className="absolute left-0 top-[420px] w-[620px]">
        <p className="type-body text-text-muted">{humanSlide.commandLabel}</p>
        <p className={`mt-6 font-mono text-[30px] leading-snug ${human ? "text-text-faint" : "text-text"}`}>
          <span className="text-text-faint">{"> "}</span>
          {humanSlide.command}
        </p>
      </Reveal>
      <Reveal show={human} rise={40} className="absolute left-[780px] top-[250px] w-[900px]">
        <Pip height={170} mood="mystery" />
        <Card className="mt-6 px-10 py-8">
          <p className="type-title text-text">{humanSlide.humanLine}</p>
        </Card>
        <p className="type-lead mt-8 text-text">{humanSlide.humanLabel}</p>
      </Reveal>
    </div>
  );
}
