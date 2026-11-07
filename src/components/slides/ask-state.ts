import { demoReservedToday, askSlide, type AskQuestion } from "@/content/content";
import type { ShopLanguage, ShopState } from "@/components/phone/ShopPage";

export type Answers = Record<string, string>;

export const defaultAnswers: Answers = Object.fromEntries(
  askSlide.questions.map((question) => [question.id, question.defaultChoice]),
);

/** Turns the owner's plain answers into the settings the shop page is built from. */
export function shopFromAnswers(answers: Answers): ShopState {
  return {
    limit: Number(answers.limit),
    payCard: answers.pay === "card",
    language: answers.language as ShopLanguage,
    large: answers.size === "large",
    reserved: demoReservedToday,
    notes: "none",
  };
}

export function buildsFor(question: AskQuestion, answers: Answers): string {
  return question.choices.find((choice) => choice.id === answers[question.id])?.builds ?? "";
}

export function choiceLabel(question: AskQuestion, answers: Answers): string {
  return question.choices.find((choice) => choice.id === answers[question.id])?.label ?? "";
}
