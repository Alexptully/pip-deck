import type { ComponentType } from "react";
import type { SlideId } from "@/content/content";
import { AskSlide } from "./AskSlide";
import { BenefitsSlide } from "./BenefitsSlide";
import { BuildersSlide } from "./BuildersSlide";
import { CloseSlide } from "./CloseSlide";
import { DemoSlide } from "./DemoSlide";
import { GapsSlide } from "./GapsSlide";
import { HologramSlide } from "./HologramSlide";
import { HookSlide } from "./HookSlide";
import { JourneySlide } from "./JourneySlide";
import { LaunchSlide } from "./LaunchSlide";
import { LearnedSlide } from "./LearnedSlide";
import { OwnersSlide } from "./OwnersSlide";
import { ProblemsSlide } from "./ProblemsSlide";
import { ReverseSlide } from "./ReverseSlide";
import { RosaSlide } from "./RosaSlide";
import { SaySlide } from "./SaySlide";
import { ShapeSlide } from "./ShapeSlide";
import { SourcesSlide } from "./SourcesSlide";
import { StandardsSlide } from "./StandardsSlide";
import { TitleSlide } from "./TitleSlide";
import { TrySlide } from "./TrySlide";
import { WhyNowSlide } from "./WhyNowSlide";

export type SlideProps = { step: number };

export const slideComponents: Record<SlideId, ComponentType<SlideProps>> = {
  title: TitleSlide,
  hook: HookSlide,
  gaps: GapsSlide,
  problems: ProblemsSlide,
  rosa: RosaSlide,
  owners: OwnersSlide,
  builders: BuildersSlide,
  ask: AskSlide,
  reverse: ReverseSlide,
  journey: JourneySlide,
  say: SaySlide,
  shape: ShapeSlide,
  try: TrySlide,
  launch: LaunchSlide,
  demo: DemoSlide,
  hologram: HologramSlide,
  whyNow: WhyNowSlide,
  learned: LearnedSlide,
  benefits: BenefitsSlide,
  standards: StandardsSlide,
  close: CloseSlide,
  sources: SourcesSlide,
};
