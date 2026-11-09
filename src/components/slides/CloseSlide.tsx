import { config } from "@/content/config";
import { closeSlide } from "@/content/content";
import { Card } from "@/components/primitives/Card";
import { Fill } from "@/components/primitives/Placeholder";
import { Reveal } from "@/components/primitives/Reveal";
import { Pip } from "@/components/pip/Pip";
import { QrCode } from "@/components/diagrams/QrCode";

export function CloseSlide() {
  return (
    <div className="relative flex h-full flex-col items-center">
      <Reveal rise={60}>
        <Pip height={300} mood="happy" />
      </Reveal>
      <Reveal delay={0.3} className="mt-8 max-w-[1500px] text-center">
        <h2 className="type-display text-text">{closeSlide.heading}</h2>
      </Reveal>
      <Reveal delay={0.6} className="absolute bottom-0 left-0">
        <p className="type-caption text-text-faint">Team</p>
        <p className="type-lead mt-2 text-text">
          <Fill value={config.teamName} />
        </p>
        <ul className="type-caption mt-3 flex gap-8 text-text-muted">
          {config.teamMembers.map((member, index) => (
            <li key={`${member}-${index}`}>
              <Fill value={member} />
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.8} className="absolute bottom-0 right-0 flex items-end gap-6">
        <div className="text-right">
          <p className="type-caption text-text">{closeSlide.scanText}</p>
          <p className="type-fine mt-1 text-text-muted">
            <Fill value={config.demoUrlLabel} />
          </p>
        </div>
        <Card tone="paper" className="p-4">
          <QrCode value={config.demoUrl} size={170} />
        </Card>
      </Reveal>
    </div>
  );
}
