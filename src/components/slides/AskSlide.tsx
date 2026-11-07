"use client";

import { useState } from "react";
import { askSlide, type AskQuestion } from "@/content/content";
import { Button } from "@/components/primitives/Button";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Phone } from "@/components/phone/Phone";
import { ShopPage } from "@/components/phone/ShopPage";
import { Pip } from "@/components/pip/Pip";
import { Sparks } from "@/components/diagrams/Sparks";
import { buildsFor, choiceLabel, defaultAnswers, shopFromAnswers, type Answers } from "./ask-state";

const PIP_HAND = { x: 347, y: 420 };
const PHONE_TARGET = { x: 1480, y: 430 };

type RowProps = {
  question: AskQuestion;
  answers: Answers;
  active: boolean;
  onOpen: () => void;
  onChoose: (choiceId: string) => void;
};

function OpenRow({ question, answers, onChoose }: Omit<RowProps, "active" | "onOpen">) {
  return (
    <div className="flex flex-col gap-6 py-6">
      <p className="type-lead text-text">{question.ask}</p>
      <div className="flex flex-wrap gap-4">
        {question.choices.map((choice) => (
          <Button key={choice.id} selected={answers[question.id] === choice.id} onClick={() => onChoose(choice.id)}>
            {choice.label}
          </Button>
        ))}
      </div>
      <p className="type-body text-text-muted">{`"${question.reason}"`}</p>
    </div>
  );
}

function ClosedRow({ question, answers, onOpen }: Pick<RowProps, "question" | "answers" | "onOpen">) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onOpen();
      }}
      aria-label={`Change the answer to: ${question.ask}`}
      className="flex w-full cursor-pointer items-baseline justify-between gap-6 py-4 text-left transition-colors hover:text-text"
    >
      <span className="type-caption text-text-muted">{question.topic}</span>
      <span className="type-body shrink-0 text-text">{choiceLabel(question, answers)}</span>
    </button>
  );
}

function QuestionRow(props: RowProps) {
  return <div className="border-b border-line">{props.active ? <OpenRow {...props} /> : <ClosedRow {...props} />}</div>;
}

export function AskSlide() {
  const [answers, setAnswers] = useState<Answers>(defaultAnswers);
  const [activeId, setActiveId] = useState(askSlide.questions[0].id);
  const [changes, setChanges] = useState(0);
  const active = askSlide.questions.find((question) => question.id === activeId) ?? askSlide.questions[0];

  const choose = (questionId: string, choiceId: string) => {
    setAnswers((current) => ({ ...current, [questionId]: choiceId }));
    setChanges((count) => count + 1);
  };

  return (
    <div className="relative h-full">
      <div className="absolute left-[20px] top-[280px]">
        <Pip height={260} mood="talk" reach={changes > 0 ? "right" : "none"} />
      </div>
      <div className="absolute left-[460px] top-0 w-[720px]">
        <Heading>{askSlide.heading}</Heading>
        <Reveal delay={0.2} className="mt-8 border-t border-line">
          {askSlide.questions.map((question) => (
            <QuestionRow
              key={question.id}
              question={question}
              answers={answers}
              active={question.id === activeId}
              onOpen={() => setActiveId(question.id)}
              onChoose={(choiceId) => choose(question.id, choiceId)}
            />
          ))}
        </Reveal>
        <Reveal delay={0.4} className="mt-8 grid grid-cols-[170px_1fr] gap-6">
          <p className="type-caption text-accent">{askSlide.buildsLabel}</p>
          <p className="type-body text-text">{buildsFor(active, answers)}</p>
        </Reveal>
      </div>
      <Reveal delay={0.3} rise={50} className="absolute right-0 top-[20px]">
        <Phone width={400}>
          <ShopPage state={shopFromAnswers(answers)} />
        </Phone>
      </Reveal>
      {changes > 0 ? <Sparks key={changes} from={PIP_HAND} to={PHONE_TARGET} /> : null}
    </div>
  );
}
