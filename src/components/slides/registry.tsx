import type { ComponentType } from "react";
import type { SlideId } from "@/content/content";
import { AskSlide } from "./AskSlide";
import { BenefitsSlide } from "./BenefitsSlide";
import { CloseSlide } from "./CloseSlide";
import { FriendlySlide } from "./FriendlySlide";
import { HumanSlide } from "./HumanSlide";
import { HologramSlide } from "./HologramSlide";
import { LaunchSlide } from "./LaunchSlide";
import { LearnedSlide } from "./LearnedSlide";
import { MapSlide } from "./MapSlide";
import { MeetPipSlide } from "./MeetPipSlide";
import { SaySlide } from "./SaySlide";
import { SourcesSlide } from "./SourcesSlide";
import { StatSlide } from "./StatSlide";
import { StorySlide } from "./StorySlide";
import { StandardsSlide } from "./StandardsSlide";
import { TitleSlide } from "./TitleSlide";
import { TrustSlide } from "./TrustSlide";
import { TrySlide } from "./TrySlide";
import { ZoomOutSlide } from "./ZoomOutSlide";
import { WhyNowSlide } from "./WhyNowSlide";

export type SlideProps = { step: number };

export const slideComponents: Record<SlideId, ComponentType<SlideProps>> = {
  title: TitleSlide,
  human: HumanSlide,
  story: StorySlide,
  stat: StatSlide,
  friendly: FriendlySlide,
  meetPip: MeetPipSlide,
  listen: MapSlide,
  say: SaySlide,
  ask: AskSlide,
  try: TrySlide,
  launch: LaunchSlide,
  zoomOut: ZoomOutSlide,
  trust: TrustSlide,
  hologram: HologramSlide,
  whyNow: WhyNowSlide,
  learned: LearnedSlide,
  benefits: BenefitsSlide,
  standards: StandardsSlide,
  close: CloseSlide,
  sources: SourcesSlide,
};
