"use client";

import { motion } from "motion/react";
import {
  Basket,
  Buildings,
  FirstAidKit,
  ForkKnife,
  GraduationCap,
  Scissors,
  SoccerBall,
  Storefront,
  Wrench,
  type Icon,
} from "@phosphor-icons/react";
import { zoomOutSlide } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";
import { useStill } from "@/components/primitives/Still";

const icons: Record<string, Icon> = {
  store: Storefront,
  school: GraduationCap,
  soccer: SoccerBall,
  basket: Basket,
  clinic: FirstAidKit,
  city: Buildings,
  salon: Scissors,
  auto: Wrench,
  restaurant: ForkKnife,
};

/** How far in the camera starts: the clinic tile fills most of the stage before the zoom out. */
const CLOSE_SCALE = 2.4;

type Place = (typeof zoomOutSlide.places)[number];

function PlaceTile({ place, visible }: { place: Place; visible: boolean }) {
  const still = useStill();
  const PlaceIcon = icons[place.icon];
  const focus = place.id === zoomOutSlide.focus;
  return (
    <motion.div
      className={`flex h-[210px] flex-col justify-between px-8 py-6 ${focus ? "bg-accent/10" : "bg-surface-raised"}`}
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: still ? 0 : duration.base, delay: still || focus ? 0 : 0.5 }}
    >
      <div className="flex items-center gap-4">
        <PlaceIcon size={40} weight="light" className={focus ? "text-accent" : "text-text-muted"} aria-hidden />
        <p className="type-lead text-text">{place.name}</p>
      </div>
      <q className="type-body text-text-muted">{place.hears}</q>
      <p className="type-body text-accent">{place.builds}</p>
    </motion.div>
  );
}

/** Starts close on Gloria's clinic, then pulls back to every kind of workplace Pip could help. */
export function ZoomOutSlide({ step }: { step: number }) {
  const still = useStill();
  const wide = step >= 1;
  return (
    <div className="relative h-full">
      <Heading>{wide ? zoomOutSlide.wideHeading : zoomOutSlide.closeHeading}</Heading>
      <div className="absolute inset-x-0 top-[150px] h-[680px] overflow-hidden">
        <motion.div
          className="grid h-full grid-cols-3 gap-5"
          style={{ transformOrigin: "50% 50%" }}
          initial={false}
          animate={{ scale: wide ? 1 : CLOSE_SCALE }}
          transition={{ duration: still ? 0 : duration.slow, ease: ease.soft }}
        >
          {zoomOutSlide.places.map((place) => (
            <PlaceTile key={place.id} place={place} visible={wide || place.id === zoomOutSlide.focus} />
          ))}
        </motion.div>
      </div>
      <Reveal show={wide} delay={0.9} className="absolute bottom-0 left-0">
        <p className="type-fine text-text-faint">{zoomOutSlide.note}</p>
      </Reveal>
    </div>
  );
}
