import { Basket, FirstAidKit, Scissors, Storefront, type Icon } from "@phosphor-icons/react";
import { routeSlide } from "@/content/content";
import { DrawPath } from "@/components/primitives/DrawPath";
import { Heading } from "@/components/primitives/Heading";
import { KeyValue } from "@/components/primitives/KeyValue";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

const stopIcons: Record<string, Icon> = {
  market: Storefront,
  clinic: FirstAidKit,
  salon: Scissors,
  foodBank: Basket,
};

const ROUTE_WIDTH = 1680;
const ROUTE_Y = 110;
const STOP_X = [140, 600, 1060, 1520];
const ROUTE_PATH = `M 40 ${ROUTE_Y} H ${ROUTE_WIDTH - 40}`;

/** Pip's route from one workplace to the next, a week at each stop. */
function Route() {
  return (
    <div className="relative h-[250px]" style={{ width: ROUTE_WIDTH }}>
      <svg viewBox={`0 0 ${ROUTE_WIDTH} 250`} width={ROUTE_WIDTH} height={250} className="absolute inset-0" aria-hidden>
        <DrawPath
          d={ROUTE_PATH}
          className="stroke-accent"
          strokeWidth={4}
          strokeDasharray="4 16"
          strokeLinecap="round"
          fill="none"
          seconds={2}
          delay={0.6}
        />
        {STOP_X.map((x, index) => (
          <circle
            key={x}
            cx={x}
            cy={ROUTE_Y}
            r={12}
            className={index === 0 ? "fill-accent" : "fill-surface stroke-accent"}
            strokeWidth={4}
          />
        ))}
      </svg>
      {routeSlide.stops.map((stop, index) => {
        const StopIcon = stopIcons[stop.id];
        return (
          <Reveal
            key={stop.id}
            delay={0.9 + index * 0.3}
            className="absolute flex w-[260px] flex-col items-center text-center"
          >
            <div
              style={{ transform: `translate(${STOP_X[index] - 130}px, 140px)` }}
              className="flex flex-col items-center"
            >
              <StopIcon size={44} weight="light" className="text-text-muted" aria-hidden />
              <p className="type-body mt-2 text-text">{stop.name}</p>
              <p className="type-fine text-text-faint">{stop.week}</p>
            </div>
          </Reveal>
        );
      })}
      <Reveal delay={0.5} className="absolute left-[85px] top-[-40px]">
        <Pip height={120} mood="listen" />
      </Reveal>
    </div>
  );
}

export function RouteSlide() {
  return (
    <div className="relative h-full">
      <Heading>{routeSlide.heading}</Heading>
      <Reveal delay={0.2} className="absolute left-0 top-[150px] w-[780px]">
        <KeyValue rows={routeSlide.facts} />
      </Reveal>
      <Reveal delay={0.35} className="absolute left-[900px] top-[150px] w-[780px]">
        <p className="type-caption text-accent">{routeSlide.listensTitle}</p>
        <ul className="mt-6 flex flex-col gap-7">
          {routeSlide.streams.map((stream, index) => (
            <li key={stream.id}>
              <Reveal delay={0.5 + index * 0.2}>
                <p className="type-lead text-text">{stream.name}</p>
                <q className="type-body mt-1 block text-text-muted">{stream.example}</q>
              </Reveal>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="absolute bottom-0 left-0">
        <Route />
      </div>
    </div>
  );
}
