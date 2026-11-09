import { ChatsCircle, Detective, Ear, Wind, type Icon } from "@phosphor-icons/react";
import { learnedSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

const icons: Record<string, Icon> = {
  calm: Wind,
  mirror: Ear,
  customer: Detective,
  character: ChatsCircle,
};

/** What building Pip taught us, with Pip's face beside it: people open up more to a character. */
export function LearnedSlide() {
  return (
    <div className="relative h-full">
      <Reveal delay={0.9} rise={40} pace="slow" className="absolute right-[-40px] top-[170px]">
        <Pip height={420} mood="smile" />
      </Reveal>
      <div className="max-w-[1160px]">
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
    </div>
  );
}
