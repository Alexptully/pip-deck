import { demoCheckedInToday, askSlide, type AskQuestion } from "@/content/content";
import type { ClinicPageState, PageLanguage } from "@/components/phone/ClinicPage";

export type Answers = Record<string, string>;

export const defaultAnswers: Answers = Object.fromEntries(
  askSlide.questions.map((question) => [question.id, question.defaultChoice]),
);

/** Turns Gloria's plain answers into the settings the clinic page is built from. */
export function pageFromAnswers(answers: Answers): ClinicPageState {
  return {
    limit: Number(answers.limit),
    waitAtHome: answers.checkIn === "home",
    language: answers.language as PageLanguage,
    large: answers.size === "large",
    checkedIn: demoCheckedInToday,
    notes: "none",
  };
}

export function buildsFor(question: AskQuestion, answers: Answers): string {
  return question.choices.find((choice) => choice.id === answers[question.id])?.builds ?? "";
}

export function choiceLabel(question: AskQuestion, answers: Answers): string {
  return question.choices.find((choice) => choice.id === answers[question.id])?.label ?? "";
}
