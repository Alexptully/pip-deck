"use client";

import { useEffect, useState } from "react";
import { slides, type SlideMeta } from "@/content/content";
import { STAGE_HEIGHT, STAGE_WIDTH } from "@/lib/motion";
import { Mist, mistFor } from "@/components/mist/Mist";
import { StillProvider } from "@/components/primitives/Still";
import { slideComponents } from "@/components/slides/registry";
import { Grain } from "./Grain";
import { SlideFrame } from "./SlideFrame";

type Page = { meta: SlideMeta; step: number };

const pages: Page[] = slides.flatMap((meta) => Array.from({ length: meta.steps }, (_, step) => ({ meta, step })));

const backHref = process.env.NEXT_PUBLIC_SINGLE_FILE ? "#title" : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/#title`;

function PrintPage({ meta, step }: Page) {
  const SlideBody = slideComponents[meta.id];
  return (
    <div
      className="relative overflow-hidden bg-surface break-after-page last:break-after-auto"
      style={{ width: STAGE_WIDTH, height: STAGE_HEIGHT }}
    >
      <Mist setting={mistFor(meta, step)} />
      <SlideFrame meta={meta}>
        <SlideBody step={step} />
      </SlideFrame>
      <Grain />
    </div>
  );
}

function tryPrint() {
  try {
    window.print();
  } catch {
    // Some embedded viewers block printing; the pages stay on screen either way.
  }
}

/** Every slide and build step as its own landscape page, without animation. */
export function PrintDeck() {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const update = () => setZoom(Math.min(1, (window.innerWidth - 48) / STAGE_WIDTH));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <StillProvider value={true}>
      <div className="fixed inset-0 overflow-auto bg-surface-sunken print:static print:overflow-visible">
        <div className="flex items-center gap-6 px-6 py-4 text-base print:hidden">
          <button
            type="button"
            onClick={tryPrint}
            className="rounded-control bg-text px-5 py-2 font-semibold text-surface"
          >
            Print or save as PDF
          </button>
          <a href={backHref} className="text-text-muted underline underline-offset-4">
            Back to the deck
          </a>
          <span className="text-text-faint">{`${pages.length} pages, one per slide or build step`}</span>
        </div>
        <div
          className="flex flex-col items-center gap-6 pb-12 print:block print:gap-0 print:pb-0 print:[zoom:1]"
          style={{ zoom }}
        >
          {pages.map((page) => (
            <PrintPage key={`${page.meta.id}-${page.step}`} {...page} />
          ))}
        </div>
      </div>
    </StillProvider>
  );
}
