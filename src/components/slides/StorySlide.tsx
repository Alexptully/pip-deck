import { Armchair, Code, Moon, Note, PhoneCall, type Icon } from "@phosphor-icons/react";
import { storySlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";

const icons: Record<string, Icon> = {
  phone: PhoneCall,
  waiting: Armchair,
  notes: Note,
  code: Code,
  night: Moon,
};

type Panel = (typeof storySlide.panels)[number];

/** One storyboard frame: the time, a drawn moment and one line of what happens. */
function StoryPanel({ panel, show }: { panel: Panel; show: boolean }) {
  const PanelIcon = icons[panel.icon];
  return (
    <Reveal show={show} rise={30} className="flex h-[420px] flex-col bg-surface-raised px-8 py-8">
      <p className="type-caption text-accent">{panel.time}</p>
      <div className="flex flex-1 items-center justify-center">
        <PanelIcon size={110} weight="light" className="text-text" aria-hidden />
      </div>
      <p className="type-body text-text">{panel.text}</p>
    </Reveal>
  );
}

/** Gloria's day as a storyboard: an intro line, then one panel per click, ending on why she needs Pip. */
export function StorySlide({ step }: { step: number }) {
  const panelCount = storySlide.panels.length;
  return (
    <div className="relative h-full">
      <Heading>{storySlide.heading}</Heading>
      <Reveal delay={0.2} className="absolute left-0 top-[120px]">
        <p className="type-lead text-text-muted">{storySlide.intro}</p>
      </Reveal>
      <div className="absolute left-0 right-0 top-[210px] grid grid-cols-5 gap-6">
        {storySlide.panels.map((panel, index) => (
          <StoryPanel key={panel.id} panel={panel} show={index < step} />
        ))}
      </div>
      <Reveal show={step > panelCount} rise={30} className="absolute bottom-0 left-0 right-0">
        <p className="type-title text-text">{storySlide.need}</p>
      </Reveal>
    </div>
  );
}
