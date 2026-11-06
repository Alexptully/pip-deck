"use client";

import { motion, AnimatePresence } from "motion/react";
import { CreditCard, Storefront, Minus, Plus } from "@phosphor-icons/react";
import { shopCopy } from "@/content/content";
import { duration, ease } from "@/lib/motion";
import { useStill } from "@/components/primitives/Still";
import { Concha } from "@/components/diagrams/Concha";

export type ShopLanguage = "en" | "es" | "both";
export type NotesState = "none" | "gap" | "present";

export type ShopState = {
  language: ShopLanguage;
  large: boolean;
  payCard: boolean;
  limit: number;
  reserved: number;
  notes: NotesState;
};

const sizes = {
  regular: { name: "text-[34px]", body: "text-[19px]", button: "text-[22px] py-4" },
  large: { name: "text-[42px]", body: "text-[24px]", button: "text-[28px] py-5" },
};

function copyFor(language: ShopLanguage) {
  return language === "en" ? shopCopy.en : shopCopy.es;
}

function StockMeter({ limit, reserved, text }: { limit: number; reserved: number; text: string }) {
  const still = useStill();
  const left = Math.max(limit - reserved, 0);
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

/** Rosa's ordering page. Every answer Rosa gives Pip shows up here as a visible change. */
export function ShopPage({ state }: { state: ShopState }) {
  const copy = copyFor(state.language);
  const size = state.large ? sizes.large : sizes.regular;
  const left = Math.max(state.limit - state.reserved, 0);
  const soldOut = left === 0;
  return (
    <div className={`flex h-full flex-col gap-5 ${size.body}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`font-display font-bold leading-none ${size.name}`}>{copy.shopName}</p>
          <p className="mt-2 text-ink-muted">{copy.tagline}</p>
        </div>
        {state.language === "both" ? (
          <span className="shrink-0 rounded-control bg-paper-shade px-3 py-1 text-[17px] font-semibold">
            {copy.switchTo}
          </span>
        ) : null}
      </div>
      <Concha size={state.large ? 250 : 280} className="mx-auto" />
      <div className="flex items-baseline justify-between">
        <p className="font-semibold">{copy.item}</p>
        <p className="text-ink-muted">{copy.price}</p>
      </div>
      <StockMeter limit={state.limit} reserved={state.reserved} text={soldOut ? copy.soldOut : copy.left(left)} />
      <div className="flex items-center justify-center gap-6" aria-hidden>
        <Minus size={30} weight="bold" />
        <span className="font-display text-[40px] font-bold leading-none">12</span>
        <Plus size={30} weight="bold" />
      </div>
      <AnimatePresence initial={false}>
        <NotesField state={state.notes} label={copy.notes} />
      </AnimatePresence>
      <div className="mt-auto flex items-center gap-3 text-ink-muted">
        {state.payCard ? <CreditCard size={28} /> : <Storefront size={28} />}
        <span>{state.payCard ? copy.payCard : copy.payPickup}</span>
      </div>
      <div
        className={`rounded-control bg-ink text-center font-semibold text-paper ${size.button} ${soldOut ? "opacity-30" : ""}`}
      >
        {copy.order}
      </div>
    </div>
  );
}
