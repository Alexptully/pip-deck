import { friendlySlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

const COLUMNS = "grid grid-cols-[240px_340px_1fr] gap-x-10";

/** Today's builder against Pip, row by row. Pip's column carries the weight; today's is muted. */
export function FriendlySlide() {
  return (
    <div className="relative h-full">
      <Heading>{friendlySlide.heading}</Heading>
      <div className="absolute left-0 top-[150px] w-[1280px]">
        <Reveal delay={0.15} className={`${COLUMNS} border-b border-line pb-4`}>
          <span />
          <p className="type-caption text-text-faint">{friendlySlide.todayLabel}</p>
          <p className="type-caption text-accent">{friendlySlide.pipLabel}</p>
        </Reveal>
        {friendlySlide.rows.map((row, index) => (
          <Reveal
            key={row.id}
            delay={0.3 + index * 0.15}
            className={`${COLUMNS} items-baseline border-b border-line py-4`}
          >
            <p className="type-caption text-text-muted">{row.aspect}</p>
            <p className="type-body text-text-faint">{row.today}</p>
            <p className="type-lead text-text">{row.pip}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.4} rise={60} className="absolute right-0 top-[260px]">
        <Pip height={320} mood="talk" />
      </Reveal>
    </div>
  );
}
