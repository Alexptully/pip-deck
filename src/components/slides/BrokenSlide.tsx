"use client";

import { motion } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import { brokenSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Card } from "@/components/primitives/Card";
import { useStill } from "@/components/primitives/Still";
import { Pip } from "@/components/pip/Pip";

type CodeLine = { text: string; buried?: boolean };

function codeLines(): CodeLine[] {
  const [pay, bake, spanish] = brokenSlide.rosaQuestions;
  return [
    { text: "const schema = z.object({ fields, components });" },
    { text: `// ${pay}`, buried: true },
    { text: "await deploy({ database, auth, routes });" },
    { text: `// ${bake}`, buried: true },
    { text: "const [state, dispatch] = useReducer(reducer);" },
    { text: `// ${spanish}`, buried: true },
    { text: "if (!env.ok) throw new Error(buildErrors);" },
  ];
}

function Cursor() {
  const still = useStill();
  return (
    <motion.span
      className="ml-1 inline-block h-[34px] w-[3px] translate-y-[6px] bg-text"
      initial={false}
      animate={still ? { opacity: 1 } : { opacity: [1, 0, 1] }}
      transition={{ duration: 1.1, repeat: Infinity }}
    />
  );
}

function CodeWall() {
  return (
    <Card tone="sunken" className="px-10 py-8">
      <pre className="type-fine font-mono leading-loose">
        {codeLines().map((line) => (
          <div key={line.text} className={line.buried ? "text-text-faint/45" : "text-text-muted"}>
            {line.text}
          </div>
        ))}
      </pre>
    </Card>
  );
}

function TodayPane() {
  return (
    <div className="flex flex-col gap-5">
      <p className="type-lead text-text-muted">{brokenSlide.todayLabel}</p>
      <Card className="type-body px-10 py-7 text-text-faint">
        {brokenSlide.promptPlaceholder}
        <Cursor />
      </Card>
      <ArrowDown size={32} className="mx-auto text-text-faint" />
      <CodeWall />
      <p className="type-body text-text-muted">{brokenSlide.todayCaption}</p>
    </div>
  );
}

function PipPane({ show }: { show: boolean }) {
  return (
    <Reveal show={show} className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="type-lead text-accent">{brokenSlide.pipLabel}</p>
        <Pip height={110} mood="listen" />
      </div>
      <ul className="flex flex-col gap-10 pt-6">
        {brokenSlide.rosaQuestions.map((question, index) => (
          <Reveal key={question} show={show} delay={0.2 + index * 0.12}>
            <li className="type-lead text-text">{question}</li>
          </Reveal>
        ))}
      </ul>
      <p className="type-body mt-6 text-text-muted">{brokenSlide.pipCaption}</p>
    </Reveal>
  );
}

export function BrokenSlide({ step }: { step: number }) {
  return (
    <div className="relative h-full">
      <Heading>{brokenSlide.heading}</Heading>
      <div className="mt-10 grid grid-cols-2 gap-[160px]">
        <Reveal delay={0.15}>
          <TodayPane />
        </Reveal>
        <PipPane show={step >= 1} />
      </div>
    </div>
  );
}
