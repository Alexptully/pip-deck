import { EyeSlash, Keyboard, TextAlignLeft, type Icon } from "@phosphor-icons/react";
import { problemsSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";

const icons: Record<string, Icon> = {
  writing: TextAlignLeft,
  invisible: EyeSlash,
  screen: Keyboard,
};

export function ProblemsSlide() {
  return (
    <div className="relative h-full">
      <Heading>{problemsSlide.heading}</Heading>
      <ol className="mt-24 grid grid-cols-3 gap-20">
        {problemsSlide.problems.map((problem, index) => {
          const ProblemIcon = icons[problem.id];
          return (
            <li key={problem.id} className="border-t border-line pt-10">
              <Reveal delay={0.2 + index * 0.25}>
                <ProblemIcon size={96} weight="light" className="text-accent" aria-hidden />
                <p className="type-lead mt-10 text-text">{problem.name}</p>
                <p className="type-body mt-8 text-text-muted">{problem.text}</p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
