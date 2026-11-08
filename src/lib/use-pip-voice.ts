"use client";

import { config } from "@/content/config";
import { pipVoiceClips } from "@/content/pip-voice-clips";

/** A moment of silence, played on the start click so the browser lets Pip talk later. */
const SILENCE = "data:audio/wav;base64,UklGRtYBAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGGQAQAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==";

let player: HTMLAudioElement | null = null;

function voicePlayer(): HTMLAudioElement | null {
  if (!config.pipSpeaks || typeof window === "undefined") return null;
  player ??= new Audio();
  return player;
}

/**
 * Plays Pip's recording of a line (made by scripts/make-pip-voice.py). A line with no
 * recording stays silent, and npm run check fails until the recording is made.
 */
export function speakAsPip(line: string): void {
  const audio = voicePlayer();
  const clip = pipVoiceClips[line];
  if (!audio || !clip) return;
  audio.pause();
  audio.src = clip;
  audio.currentTime = 0;
  void audio.play().catch(() => undefined);
}

/** Stops Pip mid-line, for when the deck moves on. */
export function stopPip(): void {
  player?.pause();
}

/**
 * Browsers only play sound after a click, and Safari only on an element that played during
 * one, so the hologram's start button plays silence on the same element Pip talks through.
 */
export function unlockPipVoice(): void {
  const audio = voicePlayer();
  if (!audio) return;
  audio.src = SILENCE;
  void audio.play().catch(() => undefined);
}
