"use client";

import { motionValue } from "motion/react";
import { useSyncExternalStore } from "react";
import { config } from "@/content/config";
import { pipVoiceClips } from "@/content/pip-voice-clips";

/** A moment of silence, played on the start click so the browser lets Pip talk later. */
const SILENCE = "data:audio/wav;base64,UklGRtYBAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGGQAQAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==";

let player: HTMLAudioElement | null = null;
let analyser: AnalyserNode | null = null;
let speaking = false;
const speakingListeners = new Set<() => void>();

/** How loud Pip's voice is right now, from 0 to 1, so the mouth can move with the words. */
export const pipVoiceLevel = motionValue(0);

function setSpeaking(value: boolean) {
  if (speaking === value) return;
  speaking = value;
  speakingListeners.forEach((listener) => listener());
  if (value) requestAnimationFrame(trackLevel);
  else pipVoiceLevel.set(0);
}

/** Reads the loudness of the recording each frame, eased so the mouth doesn't flicker. Without an analyser, it fakes a talking rhythm. */
function trackLevel(time: number) {
  if (!speaking) return;
  const target = analyser ? measuredLevel(analyser) : 0.5 + 0.45 * Math.sin(time / 70);
  const previous = pipVoiceLevel.get();
  pipVoiceLevel.set(previous + (target - previous) * 0.5);
  requestAnimationFrame(trackLevel);
}

const samples = new Uint8Array(512);

function measuredLevel(node: AnalyserNode): number {
  node.getByteTimeDomainData(samples);
  let sum = 0;
  for (const sample of samples) sum += ((sample - 128) / 128) ** 2;
  return Math.min(1, Math.sqrt(sum / samples.length) * 4);
}

function voicePlayer(): HTMLAudioElement | null {
  if (!config.pipSpeaks || typeof window === "undefined") return null;
  if (player) return player;
  player = new Audio();
  player.addEventListener("playing", () => setSpeaking(player?.dataset.line === "yes"));
  player.addEventListener("pause", () => setSpeaking(false));
  player.addEventListener("ended", () => setSpeaking(false));
  return player;
}

/** Routes the voice through an analyser so the mouth follows it. If that fails, audio plays as usual. */
function listenToVoice(audio: HTMLAudioElement) {
  if (analyser) return;
  try {
    const context = new AudioContext();
    const source = context.createMediaElementSource(audio);
    analyser = context.createAnalyser();
    analyser.fftSize = samples.length;
    source.connect(analyser);
    analyser.connect(context.destination);
    void context.resume();
  } catch {
    analyser = null;
  }
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
  audio.dataset.line = "yes";
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
 * The same click starts the analyser that moves Pip's mouth.
 */
export function unlockPipVoice(): void {
  const audio = voicePlayer();
  if (!audio) return;
  listenToVoice(audio);
  audio.dataset.line = "no";
  audio.src = SILENCE;
  void audio.play().catch(() => undefined);
}

function subscribeToSpeaking(listener: () => void) {
  speakingListeners.add(listener);
  return () => speakingListeners.delete(listener);
}

/** True while one of Pip's lines is playing. */
export function usePipSpeaking(): boolean {
  return useSyncExternalStore(subscribeToSpeaking, () => speaking, () => false);
}
