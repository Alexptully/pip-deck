"use client";

import { motion, AnimatePresence } from "motion/react";
import { ChatCircleText, Clock, DoorOpen, Stethoscope } from "@phosphor-icons/react";
import { clinicPageCopy } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { useStill } from "@/components/primitives/Still";

export type PageLanguage = "en" | "es" | "both";
export type NotesState = "none" | "gap" | "present";

export type ClinicPageState = {
  language: PageLanguage;
  large: boolean;
  waitAtHome: boolean;
  limit: number;
  checkedIn: number;
  notes: NotesState;
};

const sizes = {
  regular: { name: "text-[32px]", body: "text-[19px]", button: "text-[22px] py-4" },
  large: { name: "text-[38px]", body: "text-[24px]", button: "text-[28px] py-5" },
};

function copyFor(language: PageLanguage) {
  return language === "en" ? clinicPageCopy.en : clinicPageCopy.es;
}

function SpotsMeter({ limit, checkedIn, text }: { limit: number; checkedIn: number; text: string }) {
  const still = useStill();
  const left = Math.max(limit - checkedIn, 0);
  const share = limit === 0 ? 0 : left / limit;
  return (
    <div>
      <div className="h-3 w-full overflow-hidden bg-paper-shade">
        <motion.div
          className="h-full bg-ink"
          initial={false}
          animate={{ width: `${share * 100}%` }}
          transition={{ duration: still ? 0 : duration.base, ease: ease.soft }}
        />
      </div>
      <p className="mt-2 font-semibold">{text}</p>
    </div>
  );
}

function NotesField({ state, label }: { state: NotesState; label: string }) {
  const still = useStill();
  if (state === "none") return null;
  if (state === "gap") {
    return (
      <motion.div
        className="h-20 outline-[3px] outline-dashed outline-accent-dim -outline-offset-2"
        initial={false}
        animate={still ? { opacity: 1 } : { opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        aria-label="Missing notes box"
      />
    );
  }
  return (
    <motion.div
      initial={still ? false : { opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: duration.base, ease: ease.soft }}
      className="bg-paper-shade px-4 py-3 text-ink-muted"
    >
      {label}
    </motion.div>
  );
}

/** Gloria's walk-in page. Every answer she gives Pip shows up here as a visible change. */
export function ClinicPage({ state }: { state: ClinicPageState }) {
  const copy = copyFor(state.language);
  const size = state.large ? sizes.large : sizes.regular;
  const left = Math.max(state.limit - state.checkedIn, 0);
  const full = left === 0;
  const WaitIcon = state.waitAtHome ? ChatCircleText : DoorOpen;
  return (
    <div className={`flex h-full flex-col gap-5 ${size.body}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`font-display font-bold leading-none ${size.name}`}>{copy.clinicName}</p>
          <p className="mt-2 text-ink-muted">{copy.tagline}</p>
        </div>
        {state.language === "both" ? (
          <span className="shrink-0 rounded-control bg-paper-shade px-3 py-1 text-[17px] font-semibold">
            {copy.switchTo}
          </span>
        ) : null}
      </div>
      <Stethoscope size={state.large ? 120 : 150} weight="light" className="mx-auto" aria-hidden />
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-semibold">{copy.visit}</p>
        <p className="flex items-center gap-2 text-ink-muted">
          <Clock size={22} aria-hidden />
          {copy.wait}
        </p>
      </div>
      <SpotsMeter limit={state.limit} checkedIn={state.checkedIn} text={full ? copy.full : copy.left(left)} />
      <AnimatePresence initial={false}>
        <NotesField state={state.notes} label={copy.notes} />
      </AnimatePresence>
      <div className="mt-auto flex items-center gap-3 text-ink-muted">
        <WaitIcon size={28} className="shrink-0" aria-hidden />
        <span>{state.waitAtHome ? copy.waitHome : copy.waitDesk}</span>
      </div>
      <div
        className={`rounded-control bg-ink text-center font-semibold text-paper ${size.button} ${full ? "opacity-30" : ""}`}
      >
        {copy.join}
      </div>
    </div>
  );
}
