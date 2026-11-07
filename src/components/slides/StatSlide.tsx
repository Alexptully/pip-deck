import { statSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

type Group = (typeof statSlide.groups)[number];
type Figure = Group["figures"][number];

function FigureBlock({ figure, lead, delay }: { figure: Figure; lead: boolean; delay: number }) {
  return (
    <Reveal delay={delay}>
      <p className={lead ? "type-hero text-accent" : "type-display text-text"}>{figure.figure}</p>
      <p className="type-lead mt-3 text-text">{figure.text}</p>
      <p className="type-fine mt-2 text-text-faint">{figure.detail}</p>
    </Reveal>
  );
}

/** What busy people want on the left, what stops them on the right. */
function GroupColumn({ group, index }: { group: Group; index: number }) {
  const lead = index === 0;
  const layout = lead ? "flex flex-col" : "grid grid-cols-2 gap-x-16";
  return (
    <div>
      <Reveal delay={0.2 + index * 0.4}>
        <p className="type-caption text-text-muted">{group.label}</p>
      </Reveal>
      <div className={`mt-8 ${layout}`}>
        {group.figures.map((figure, figureIndex) => (
          <FigureBlock key={figure.id} figure={figure} lead={lead} delay={0.35 + index * 0.4 + figureIndex * 0.25} />
        ))}
      </div>
    </div>
  );
}

export function StatSlide({ step }: { step: number }) {
  const pivot = step >= 1;
  return (
    <div className="relative h-full">
      <Heading>{statSlide.heading}</Heading>
      <Reveal show={!pivot} className="absolute left-0 top-[250px] grid w-[1680px] grid-cols-[560px_1fr] gap-x-28">
        {statSlide.groups.map((group, index) => (
          <GroupColumn key={group.id} group={group} index={index} />
        ))}
      </Reveal>
      <Reveal show={pivot} rise={40} className="absolute left-0 top-[260px] flex w-[1680px] items-center gap-14">
        <Pip height={300} mood="smile" />
        <p className="type-title w-[1150px] shrink-0 text-text">{statSlide.pivot}</p>
      </Reveal>
    </div>
  );
}
