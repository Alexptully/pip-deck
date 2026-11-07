"use client";

import { useEffect } from "react";
import { config } from "@/content/config";

function pickVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang.startsWith("en") && /female|samantha|google us/i.test(voice.name)) ?? voices[0]
  );
}

function canSpeak(): boolean {
  return config.pipSpeaks && typeof window !== "undefined" && "speechSynthesis" in window;
}

/** Says one line in Pip's voice. Browsers that block audio stay quiet; the line is still on screen. */
export function speakAsPip(line: string): void {
  if (!canSpeak()) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(line);
  utterance.voice = pickVoice() ?? null;
  utterance.pitch = 1.25;
  utterance.rate = 1.02;
  window.speechSynthesis.speak(utterance);
}

/** Browsers only allow speech after a click, so the hologram's start button calls this once. */
export function unlockPipVoice(): void {
  if (!canSpeak()) return;
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
}

/** Speaks a line shortly after `active` turns true, and stops it if the slide moves on. */
export function usePipVoice(line: string, active: boolean) {
  useEffect(() => {
    if (!active || !canSpeak()) return;
    const timer = window.setTimeout(() => speakAsPip(line), 900);
    return () => {
      window.clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, [line, active]);
}
