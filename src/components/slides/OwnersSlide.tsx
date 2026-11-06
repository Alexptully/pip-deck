import { config } from "@/content/config";
import { ownersSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Fill } from "@/components/primitives/Placeholder";
import { Reveal } from "@/components/primitives/Reveal";

export function OwnersSlide() {
  const [lead, ...rest] = config.ownerQuotes;
  return (
    <div className="relative h-full pl-[300px]">
      <Heading>{ownersSlide.heading}</Heading>
      <Reveal delay={0.2} className="mt-16 max-w-[1300px]">
        <blockquote className="type-title text-text">
          <Fill value={lead.quote} />
        </blockquote>
        <p className="type-caption mt-6 text-text-muted">
          <Fill value={lead.who} />
        </p>
      </Reveal>
      <div className="mt-16 grid grid-cols-2 gap-16">
        {rest.map((item, index) => (
          <Reveal key={`${item.quote}-${index}`} delay={0.4 + index * 0.15}>
            <blockquote className="type-lead text-text">
              <Fill value={item.quote} />
            </blockquote>
            <p className="type-caption mt-4 text-text-muted">
              <Fill value={item.who} />
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
