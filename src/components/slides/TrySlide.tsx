import { ownerName, trySlide } from "@/content/content";
import { Card } from "@/components/primitives/Card";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Phone } from "@/components/phone/Phone";
import { ClinicPage, type NotesState } from "@/components/phone/ClinicPage";
import { Pip } from "@/components/pip/Pip";
import { defaultAnswers, pageFromAnswers } from "./ask-state";

const notesByStep: NotesState[] = ["none", "gap", "present"];

/** How many chat lines are visible at each build step. */
const linesByStep = [1, 2, 3];

function ChatLine({ who, text, show, delay }: { who: string; text: string; show: boolean; delay: number }) {
  const fromOwner = who === "owner";
  return (
    <Reveal show={show} delay={delay} className={fromOwner ? "self-end" : "self-start"}>
      <Card tone={fromOwner ? "paper" : "raised"} className="max-w-[600px] px-8 py-5">
        <p className={`type-caption ${fromOwner ? "text-ink-muted" : "text-accent"}`}>
          {fromOwner ? ownerName : trySlide.persona}
        </p>
        <p className="type-body mt-1">{text}</p>
      </Card>
    </Reveal>
  );
}

export function TrySlide({ step }: { step: number }) {
  const page = { ...pageFromAnswers(defaultAnswers), notes: notesByStep[step] };
  const visibleLines = linesByStep[step];
  return (
    <div className="relative h-full">
      <div className="absolute left-[60px] top-[300px]">
        <Pip height={260} mood={step === 1 ? "think" : "talk"} />
      </div>
      <div className="absolute left-[460px] top-0 w-[740px]">
        <Heading>{trySlide.heading}</Heading>
        <div className="mt-10 flex flex-col gap-5">
          {trySlide.lines.map((line, index) => (
            <ChatLine key={line.text} who={line.who} text={line.text} show={index < visibleLines} delay={0.15} />
          ))}
        </div>
        <Reveal show={step === 2} delay={0.5} className="mt-8">
          <p className="type-body text-text-muted">{trySlide.fixed}</p>
        </Reveal>
      </div>
      <div className="absolute right-0 top-[20px]">
        <Phone width={400}>
          <ClinicPage state={page} />
        </Phone>
        <Reveal show={step === 1} className="absolute -left-[300px] top-[560px] w-[270px] text-right">
          <p className="type-caption text-accent">{trySlide.gapLabel}</p>
        </Reveal>
      </div>
    </div>
  );
}
