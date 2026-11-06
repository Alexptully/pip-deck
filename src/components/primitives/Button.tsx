"use client";

import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  selected?: boolean;
  size?: "large" | "small";
  label?: string;
};

const sizeClass = {
  large: "type-lead px-10 py-5 min-w-[180px]",
  small: "type-caption px-6 py-3",
};

/**
 * The deck's one button. Neutral fill; the selected state lifts the fill and adds a calm ring.
 * Clicks stop here so they never reach the deck's navigation.
 */
export function Button({ children, onClick, selected = false, size = "large", label }: ButtonProps) {
  const state = selected
    ? "bg-text text-surface ring-4 ring-accent/60"
    : "bg-surface-raised text-text ring-1 ring-line hover:bg-line";
  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className={`rounded-control transition-colors duration-300 ease-soft cursor-pointer ${sizeClass[size]} ${state}`}
    >
      {children}
    </button>
  );
}
