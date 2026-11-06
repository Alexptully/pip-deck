import type { SlideMeta } from "@/content/content";

type NotesPanelProps = { meta: SlideMeta; next?: SlideMeta; index: number; total: number; step: number };

const shortcuts = [
  { keys: "Right, Space", does: "Next build step or slide" },
  { keys: "Left", does: "Back" },
  { keys: "N", does: "Hide these notes" },
  { keys: "F", does: "Full screen" },
  { keys: "P", does: "Print version for PDF" },
];

/** Presenter notes, outside the stage so they never land on a slide. */
export function NotesPanel({ meta, next, index, total, step }: NotesPanelProps) {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-20 max-h-[45vh] overflow-auto bg-surface-raised/95 px-10 py-8 text-text shadow-card backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_280px] gap-12">
        <div>
          <p className="text-base text-text-muted">
            {`Slide ${index + 1} of ${total}: ${meta.name}`}
            {meta.steps > 1 ? `, build step ${step + 1} of ${meta.steps}` : ""}
          </p>
          <div className="mt-4 space-y-3 text-xl leading-relaxed">
            {meta.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
          {next ? <p className="mt-6 text-base text-text-muted">{`Up next: ${next.name}`}</p> : null}
        </div>
        <dl className="grid grid-cols-[auto_1fr] content-start gap-x-4 gap-y-2 text-sm text-text-muted">
          {shortcuts.map((item) => (
            <div key={item.keys} className="contents">
              <dt className="font-semibold text-text">{item.keys}</dt>
              <dd>{item.does}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
