import { GraduationCap, HandHeart, Storefront, type Icon } from "@phosphor-icons/react";
import { benefitsSlide } from "@/content/content";
import { DrawPath } from "@/components/primitives/DrawPath";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";

const CENTER = { x: 340, y: 500 };
const RADII = [110, 220, 330];
/** Where each outer ring's label line leaves the ring, in degrees above or below the horizontal. */
const ANGLES = [-90, 4, 38];
const LABEL_X = 800;
const otherIcons: Icon[] = [Storefront, GraduationCap, HandHeart];

function circlePath(radius: number): string {
  const { x, y } = CENTER;
  return `M ${x - radius} ${y} a ${radius} ${radius} 0 1 0 ${radius * 2} 0 a ${radius} ${radius} 0 1 0 ${-radius * 2} 0`;
}

function ringPoint(ringIndex: number): { x: number; y: number } {
  const radians = (ANGLES[ringIndex] * Math.PI) / 180;
  const radius = RADII[ringIndex];
  return { x: CENTER.x + Math.cos(radians) * radius, y: CENTER.y + Math.sin(radians) * radius };
}

export function BenefitsSlide() {
  return (
    <div className="relative h-full">
      <Heading>{benefitsSlide.heading}</Heading>
      <svg viewBox="0 0 1680 900" width={1680} height={900} className="absolute inset-0 overflow-visible" aria-hidden>
        {RADII.map((radius, index) => (
          <DrawPath
            key={radius}
            d={circlePath(radius)}
            className={index === 0 ? "stroke-accent" : "stroke-text-faint"}
            strokeWidth={index === 0 ? 4 : 2}
            fill="none"
            delay={0.2 + index * 0.3}
          />
        ))}
        {RADII.map((radius, index) => {
          const point = ringPoint(index);
          return (
            <g key={`line-${radius}`}>
              <circle cx={point.x} cy={point.y} r={7} className="fill-accent" />
              <DrawPath
                d={`M ${point.x} ${point.y} H ${LABEL_X - 30}`}
                className="stroke-text-faint"
                strokeWidth={2}
                delay={0.8 + index * 0.3}
              />
            </g>
          );
        })}
      </svg>
      <Reveal delay={0.2} className="absolute left-0 top-0 w-[220px] text-center">
        <p className="type-lead text-text" style={{ transform: `translate(${CENTER.x - 110}px, ${CENTER.y - 28}px)` }}>
          {benefitsSlide.center}
        </p>
      </Reveal>
      {benefitsSlide.rings.map((ring, index) => (
        <Reveal key={ring.id} delay={0.8 + index * 0.3} className="absolute left-0 top-0 w-[470px]">
          <p className="type-body" style={{ transform: `translate(${LABEL_X}px, ${ringPoint(index).y - 22}px)` }}>
            <span className="font-semibold text-text">{ring.who}</span>{" "}
            <span className="text-text-muted">{ring.text}</span>
          </p>
        </Reveal>
      ))}
      <Reveal delay={1.8} className="absolute right-0 top-[300px] w-[380px]">
        <p className="type-caption text-text-muted">{benefitsSlide.othersTitle}</p>
        <ul className="mt-8 flex flex-col gap-8">
          {benefitsSlide.others.map((other, index) => {
            const OtherIcon = otherIcons[index];
            return (
              <li key={other} className="flex items-start gap-5">
                <OtherIcon size={44} weight="light" className="mt-1 shrink-0 text-accent" aria-hidden />
                <span className="type-lead text-text">{other}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>
  );
}
