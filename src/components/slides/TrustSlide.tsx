import { ChartBar, CheckCircle, Eye, FirstAidKit, HandPalm, SignOut, type Icon } from "@phosphor-icons/react";
import { trustSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

const icons: Record<string, Icon> = {
  visible: Eye,
  consent: HandPalm,
  patterns: ChartBar,
  owner: CheckCircle,
  health: FirstAidKit,
  leaves: SignOut,
};

export function TrustSlide() {
  return (
    <div className="relative h-full">
      <Heading>{trustSlide.heading}</Heading>
      <ul className="mt-12 grid w-[1280px] grid-cols-2 gap-x-20 gap-y-10">
        {trustSlide.rules.map((item, index) => {
          const RuleIcon = icons[item.id];
          return (
            <li key={item.id}>
              <Reveal delay={0.2 + index * 0.12} className="flex gap-7">
                <RuleIcon size={56} weight="light" className="mt-1 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="type-lead text-text">{item.rule}</p>
                  <p className="type-body mt-2 text-text-muted">{item.detail}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <Reveal delay={0.4} rise={50} className="absolute right-0 top-[180px]">
        <Pip height={300} mood="listen" />
      </Reveal>
      <Reveal delay={1.1} className="absolute bottom-0 left-0 max-w-[1280px]">
        <p className="type-caption text-text-faint">{trustSlide.caveat}</p>
      </Reveal>
    </div>
  );
}
