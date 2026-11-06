import { config } from "@/content/config";
import { demoSlide } from "@/content/content";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";
import { QrCode } from "@/components/diagrams/QrCode";

export function DemoSlide() {
  return (
    <div className="relative h-full">
      <Reveal>
        <h2 className="type-display text-text">{demoSlide.heading}</h2>
      </Reveal>
      <Reveal delay={0.3} className="absolute left-0 top-[260px] max-w-[820px]">
        <p className="type-lead text-text">{demoSlide.line}</p>
      </Reveal>
      <Reveal delay={0.5} className="absolute bottom-0 left-0 flex items-center gap-6">
        <Card tone="paper" className="p-4">
          <QrCode value={config.demoUrl} size={140} />
        </Card>
        <p className="type-caption max-w-[260px] text-text-muted">{demoSlide.scanText}</p>
      </Reveal>
      <Reveal delay={0.2} rise={60} className="absolute left-[1080px] top-[200px]">
        <Pip height={460} mood="smile" />
      </Reveal>
    </div>
  );
}
