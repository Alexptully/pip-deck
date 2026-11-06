import type { ReactNode } from "react";

type CardProps = { children: ReactNode; className?: string; tone?: "raised" | "paper" | "sunken" };

const toneClass: Record<NonNullable<CardProps["tone"]>, string> = {
  raised: "bg-surface-raised text-text shadow-card",
  paper: "bg-paper text-ink shadow-card",
  sunken: "bg-surface-sunken text-text shadow-card",
};

/** A rounded container. Rounded corners never get a visible border; depth comes from fill and shadow. */
export function Card({ children, className = "", tone = "raised" }: CardProps) {
  return <div className={`rounded-card ${toneClass[tone]} ${className}`}>{children}</div>;
}
