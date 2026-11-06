"use client";

import { useEffect } from "react";
import { config } from "@/content/config";

function pickVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang.startsWith("en") && /female|samantha|google us/i.test(voice.name)) ?? voices[0]
  );
}

/**
 * Speaks a line out loud with the browser's own speech synthesis when `active` turns true.
 * Browsers that block audio simply stay quiet, and the line is still on the slide.
 */
export function usePipVoice(line: string, active: boolean) {
  useEffect(() => {
    if (!active || !config.pipSpeaks || !("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(line);
    utterance.voice = pickVoice() ?? null;
    utterance.pitch = 1.25;
    utterance.rate = 1.02;
    const timer = window.setTimeout(() => window.speechSynthesis.speak(utterance), 900);
    return () => {
      window.clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, [line, active]);
}
