import { Armchair, ChatsCircle, Code, Heart, Moon, Note, PhoneCall, type Icon } from "@phosphor-icons/react";
import { storySlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { HumanWords } from "@/components/primitives/HumanWords";
import { Reveal } from "@/components/primitives/Reveal";

const icons: Record<string, Icon> = {
  phone: PhoneCall,
  waiting: Armchair,
  notes: Note,
  code: Code,
  night: Moon,
  heart: Heart,
  chat: ChatsCircle,
};

type Panel = (typeof storySlide.panels)[number];

/** One storyboard frame: the time, a drawn moment and one line of what happens. */
function StoryPanel({ panel, show }: { panel: Panel; show: boolean }) {
  const PanelIcon = icons[panel.icon];
  return (
    <Reveal show={show} rise={30} className="flex h-[340px] flex-col bg-surface-raised px-8 py-7">
      <p className="type-caption text-accent">{panel.time}</p>
      <div className="flex flex-1 items-center justify-center">
        <PanelIcon size={80} weight="light" className="text-text" aria-hidden />
      </div>
      <p className="type-body text-text">{panel.text}</p>
    </Reveal>
  );
}

type Point = (typeof storySlide.humanCan)[number];

/** One thing a person would do for Gloria that a tool can't. */
function HumanPoint({ point, show }: { point: Point; show: boolean }) {
  const PointIcon = icons[point.icon];
  return (
    <li>
      <Reveal show={show} className="flex items-start gap-6">
        <PointIcon size={48} weight="light" className="mt-1 shrink-0 text-accent" aria-hidden />
        <p className="type-lead flex-1 text-text-muted">
          <HumanWords text={point.text} />
        </p>
      </Reveal>
    </li>
  );
}

/** Gloria's day as a storyboard: an intro line, then one panel per click, ending on why she needs a human. */
export function StorySlide({ step }: { step: number }) {
  const panelCount = storySlide.panels.length;
  return (
    <div className="relative h-full">
      <Heading>{storySlide.heading}</Heading>
      <Reveal delay={0.2} className="absolute left-0 top-[120px]">
        <p className="type-lead text-text">{storySlide.intro}</p>
        <p className="type-body mt-3 text-text-muted">{storySlide.constraints}</p>
      </Reveal>
      <div className="absolute left-0 right-0 top-[300px] grid grid-cols-5 gap-6">
        {storySlide.panels.map((panel, index) => (
          <StoryPanel key={panel.id} panel={panel} show={index < step} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Reveal show={step > panelCount} rise={30}>
          <p className="type-title text-text">
            <HumanWords text={storySlide.need} />
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-16">
          {storySlide.humanCan.map((point) => (
            <HumanPoint key={point.id} point={point} show={step > panelCount + 1} />
          ))}
        </ul>
      </div>
    </div>
  );
}
