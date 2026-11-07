import type { ComponentType } from "react";
import type { SlideId } from "@/content/content";
import { AskSlide } from "./AskSlide";
import { BenefitsSlide } from "./BenefitsSlide";
import { BrokenSlide } from "./BrokenSlide";
import { BuildersSlide } from "./BuildersSlide";
import { ClinicSlide } from "./ClinicSlide";
import { CloseSlide } from "./CloseSlide";
import { HologramSlide } from "./HologramSlide";
import { JourneySlide } from "./JourneySlide";
import { LaunchSlide } from "./LaunchSlide";
import { LearnedSlide } from "./LearnedSlide";
import { ListenSlide } from "./ListenSlide";
import { OwnersSlide } from "./OwnersSlide";
import { RouteSlide } from "./RouteSlide";
import { SourcesSlide } from "./SourcesSlide";
import { StatSlide } from "./StatSlide";
import { StandardsSlide } from "./StandardsSlide";
import { TitleSlide } from "./TitleSlide";
import { TrustSlide } from "./TrustSlide";
import { TrySlide } from "./TrySlide";
import { WhyNowSlide } from "./WhyNowSlide";

export type SlideProps = { step: number };

export const slideComponents: Record<SlideId, ComponentType<SlideProps>> = {
  title: TitleSlide,
  stat: StatSlide,
  route: RouteSlide,
  owners: OwnersSlide,
  builders: BuildersSlide,
  broken: BrokenSlide,
  journey: JourneySlide,
  listen: ListenSlide,
  ask: AskSlide,
  try: TrySlide,
  launch: LaunchSlide,
  clinic: ClinicSlide,
  trust: TrustSlide,
  hologram: HologramSlide,
  whyNow: WhyNowSlide,
  learned: LearnedSlide,
  benefits: BenefitsSlide,
  standards: StandardsSlide,
  close: CloseSlide,
  sources: SourcesSlide,
};
