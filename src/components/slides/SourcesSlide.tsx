import { sourcesSlide } from "@/content/content";
import { sourceOrder, sources } from "@/content/sources";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";

function endSentence(text: string): string {
  return /[.?!]$/.test(text) ? text : `${text}.`;
}

export function SourcesSlide() {
  return (
    <div className="relative h-full">
      <Heading>{sourcesSlide.heading}</Heading>
      <Reveal delay={0.15} className="mt-6">
        <ol className="grid grid-cols-3 gap-x-14 gap-y-6">
          {sourceOrder.map((id) => {
            const source = sources[id];
            return (
              <li key={id} className="type-fine text-text-muted">
                <p className="text-text">{[source.publisher, source.title, source.date].map(endSentence).join(" ")}</p>
                <p className="mt-1">{source.usedFor}</p>
                <p className="mt-1 break-all text-text-faint">{source.url}</p>
              </li>
            );
          })}
          <li className="type-fine col-span-2 max-w-[900px] self-start text-text-faint">{sourcesSlide.note}</li>
        </ol>
      </Reveal>
    </div>
  );
}
