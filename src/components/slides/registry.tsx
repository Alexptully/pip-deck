import type { ComponentType } from "react";
import type { SlideId } from "@/content/content";
import { BenefitsSlide } from "./BenefitsSlide";
import { BrokenSlide } from "./BrokenSlide";
import { BuildersSlide } from "./BuildersSlide";
import { CloseSlide } from "./CloseSlide";
import { HologramSlide } from "./HologramSlide";
import { JourneySlide } from "./JourneySlide";
import { LaunchSlide } from "./LaunchSlide";
import { LearnedSlide } from "./LearnedSlide";
import { OwnersSlide } from "./OwnersSlide";
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
  rosa: RosaSlide,
  owners: OwnersSlide,
  builders: BuildersSlide,
  broken: BrokenSlide,
  journey: JourneySlide,
  say: SaySlide,
  shape: ShapeSlide,
  try: TrySlide,
  launch: LaunchSlide,
  hologram: HologramSlide,
  whyNow: WhyNowSlide,
  learned: LearnedSlide,
  benefits: BenefitsSlide,
  standards: StandardsSlide,
  close: CloseSlide,
  sources: SourcesSlide,
};
