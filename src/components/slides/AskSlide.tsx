"use client";

import { motion } from "motion/react";
import { askSlide } from "@/content/content";
import { useHologramConnected } from "@/lib/pip-sync";
import { usePipVoice } from "@/lib/use-pip-voice";
import { duration } from "@/lib/motion";
import { Bubble } from "@/components/primitives/Bubble";
import { Reveal } from "@/components/primitives/Reveal";
import { useStill } from "@/components/primitives/Still";
import { Pip } from "@/components/pip/Pip";

/** The room's half-answers drift and fade, which is what being stuck looks like. */
function Guesses({ fade }: { fade: number }) {
  const still = useStill();
  return (
    <>
      {askSlide.guesses.map((guess, index) => (
        <motion.p
          key={guess.text}
          className="type-lead absolute text-text-faint"
          style={{ left: guess.x, top: guess.y }}
          initial={still ? false : { opacity: 0 }}
          animate={still ? { opacity: fade } : { opacity: fade, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: still ? 0 : duration.slow, delay: still ? 0 : 0.6 + index * 0.4 },
            y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {guess.text}
        </motion.p>
      ))}
    </>
  );
}

const guessOpacityByStep = [0.8, 0.25, 0];

export function AskSlide({ step }: { step: number }) {
  const still = useStill();
  const pipHere = step >= 2;
  const hologramSpeaks = useHologramConnected();
  usePipVoice(askSlide.answer, pipHere && !still && !hologramSpeaks);
  return (
    <div className="relative h-full">
      <motion.div
        initial={false}
        animate={{ opacity: pipHere ? 0.3 : 1 }}
        transition={{ duration: still ? 0 : duration.base }}
      >
        <Reveal>
          <h2 className="type-display max-w-[1500px] text-text">{askSlide.question}</h2>
        </Reveal>
      </motion.div>
      <Guesses fade={guessOpacityByStep[step]} />
      <Reveal show={step === 1} className="absolute bottom-[40px] left-0 w-[900px]">
        <Bubble speaker={askSlide.usLabel} from="person" size="title">
          {askSlide.call}
        </Bubble>
      </Reveal>
      <Reveal show={pipHere} delay={0.2} rise={80} className="absolute left-[1010px] top-[300px]">
        <Pip height={420} mood="talk" />
      </Reveal>
      <Reveal show={pipHere} delay={0.7} className="absolute bottom-[40px] left-0 w-[860px]">
        <Bubble speaker={askSlide.pipLabel} from="pip" size="lead">
          {askSlide.answer}
        </Bubble>
      </Reveal>
    </div>
  );
}
