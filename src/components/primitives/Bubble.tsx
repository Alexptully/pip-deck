import type { ReactNode } from "react";
import { Card } from "./Card";

type BubbleProps = {
  speaker: string;
  children: ReactNode;
  from: "pip" | "person";
  size?: "body" | "lead" | "title";
  className?: string;
};

const textSize = { body: "type-body", lead: "type-lead", title: "type-title" };

/** One line of conversation. Pip's lines sit on the dark surface; people's lines sit on paper. */
export function Bubble({ speaker, children, from, size = "body", className = "" }: BubbleProps) {
  const isPip = from === "pip";
  return (
    <Card tone={isPip ? "raised" : "paper"} className={`px-8 py-5 ${className}`}>
      <p className={`type-caption ${isPip ? "text-accent" : "text-ink-muted"}`}>{speaker}</p>
      <p className={`${textSize[size]} mt-1`}>{children}</p>
    </Card>
  );
}
