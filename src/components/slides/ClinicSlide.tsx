import { FirstAidKit, Storefront } from "@phosphor-icons/react";
import { clinicSlide } from "@/content/content";
import { Card } from "@/components/primitives/Card";
import { DrawPath } from "@/components/primitives/DrawPath";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";

const ROUTE_WIDTH = 760;
const ROUTE_Y = 60;

/** The trip from the market to the clinic: a dashed road with Pip arriving at the far end. */
function Route() {
  return (
    <div className="relative h-[200px] w-[760px]">
      <svg
        viewBox={`0 0 ${ROUTE_WIDTH} 120`}
        width={ROUTE_WIDTH}
        height={120}
        className="absolute left-0 top-[40px]"
        aria-hidden
      >
        <DrawPath
          d={`M 70 ${ROUTE_Y} C 260 ${ROUTE_Y - 50}, 470 ${ROUTE_Y + 50}, 690 ${ROUTE_Y}`}
          className="stroke-accent"
          strokeWidth={4}
          strokeDasharray="4 14"
          strokeLinecap="round"
          fill="none"
          seconds={1.6}
        />
      </svg>
      <div className="absolute left-0 top-[64px] flex flex-col items-start gap-3">
        <Storefront size={64} weight="light" className="text-text-muted" aria-hidden />
        <span className="type-caption text-text-muted">{clinicSlide.from}</span>
      </div>
      <div className="absolute right-0 top-[64px] flex flex-col items-end gap-3">
        <FirstAidKit size={64} weight="light" className="text-accent" aria-hidden />
        <span className="type-caption text-text">{clinicSlide.to}</span>
      </div>
      <Reveal delay={1.4} className="absolute left-[470px] top-[-40px]">
        <Pip height={120} mood="smile" />
      </Reveal>
    </div>
  );
}

function Heard() {
  return (
    <Reveal delay={0.6} className="mt-14">
      <p className="type-lead text-text">{clinicSlide.person}</p>
      <p className="type-caption mt-8 text-text-faint">{clinicSlide.heardTitle}</p>
      <div className="mt-4 flex flex-col gap-6">
        {clinicSlide.heard.map((line, index) => (
          <Reveal key={line.text} delay={0.9 + index * 0.25} className="grid grid-cols-[170px_1fr] gap-x-6">
            <span className="type-body text-text-faint">{line.who}</span>
            <q className="type-body text-text">{line.text}</q>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}

function Built({ show }: { show: boolean }) {
  return (
    <Reveal show={show}>
      <p className="type-caption text-accent">{clinicSlide.builtTitle}</p>
      <div className="mt-6 flex flex-col gap-8">
        {clinicSlide.built.map((tool, index) => (
          <Reveal key={tool.id} show={show} delay={0.2 + index * 0.2}>
            <Card className="px-12 py-10">
              <p className="type-lead text-text">{tool.name}</p>
              <p className="type-body mt-3 text-text-muted">{tool.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal show={show} delay={0.7} className="mt-12">
        <p className="type-body text-text">{clinicSlide.privacy}</p>
      </Reveal>
    </Reveal>
  );
}

export function ClinicSlide({ step }: { step: number }) {
  return (
    <div className="relative h-full">
      <Heading>{clinicSlide.heading}</Heading>
      <div className="absolute left-0 top-[170px] w-[760px]">
        <Route />
        <Heard />
      </div>
      <div className="absolute right-0 top-[190px] w-[760px]">
        <Built show={step >= 1} />
      </div>
    </div>
  );
}
