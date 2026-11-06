import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** The one heading a slide gets. */
export function Heading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal>
      <h2 className={`type-title text-text ${className}`}>{children}</h2>
    </Reveal>
  );
}
