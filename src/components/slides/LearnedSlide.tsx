import { ChatsCircle, Detective, Ear, Wind, type Icon } from "@phosphor-icons/react";
import { learnedSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";

const icons: Record<string, Icon> = {
  calm: Wind,
  mirror: Ear,
  customer: Detective,
  character: ChatsCircle,
};

export function LearnedSlide() {
  return (
    <div className="relative h-full max-w-[1380px]">
      <Heading>{learnedSlide.heading}</Heading>
      <ul className="mt-20 grid grid-cols-2 gap-x-24 gap-y-20">
        {learnedSlide.lessons.map((lesson, index) => {
          const LessonIcon = icons[lesson.icon];
          return (
            <li key={lesson.icon}>
              <Reveal delay={0.2 + index * 0.15} className="flex gap-8">
                <LessonIcon size={64} weight="light" className="shrink-0 text-accent" aria-hidden />
                <p className="type-lead text-text">{lesson.text}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
