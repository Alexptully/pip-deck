import { Fragment } from "react";

const HUMAN_WORD = /(humans?)/gi;

/**
 * Underlines every "human" or "humans" in a line so the repetition reads across slides.
 * The underline sizes in em units so it scales with whatever type style wraps it.
 */
export function HumanWords({ text }: { text: string }) {
  const parts = text.split(HUMAN_WORD);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span
            key={index}
            className="underline decoration-accent decoration-[0.07em] underline-offset-[0.16em]"
          >
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
