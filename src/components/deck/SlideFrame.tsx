import type { ReactNode } from "react";
import type { SlideMeta } from "@/content/content";
import { sources } from "@/content/sources";

/** The page every slide sits on: content area plus a footer with only sources and the rubric tag. */
export function SlideFrame({ meta, children }: { meta: SlideMeta; children: ReactNode }) {
  const cited = meta.sources.map((id) => sources[id].short);
  return (
    <section aria-label={meta.name} className="absolute inset-0 flex flex-col px-[120px] pt-[100px] pb-[44px]">
      <div className="relative min-h-0 flex-1">{children}</div>
      <footer className="type-fine flex items-end justify-between gap-16 pt-6 text-text-faint">
        <p className="max-w-[1250px]">{cited.length > 0 ? `Sources: ${cited.join("; ")}.` : ""}</p>
        <p className="shrink-0 text-right">
          {meta.section}
          {meta.rubric ? <span className="text-text-faint/70">{`, rubric: ${meta.rubric}`}</span> : null}
        </p>
      </footer>
    </section>
  );
}
