"use client";

import { useEffect, useRef } from "react";
import type { MistSetting } from "@/content/content";
import { STAGE_HEIGHT, STAGE_WIDTH } from "@/lib/motion";
import { useStill } from "@/components/primitives/Still";
import { approach, createDroplets, createSprite, drawMist, hexToRgb, seededRandom, stepDroplets } from "./mist-field";

function readAccent(): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue("--color-accent");
  return value || "#59ece2";
}

/**
 * The deck's motif: a falling sheet of mist, like the fog screen Pip lives on.
 * Each slide moves the sheet to a new place and the sheet glides there.
 */
export function Mist({ setting }: { setting: MistSetting }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef(setting);
  const still = useStill();

  useEffect(() => {
    targetRef.current = setting;
  }, [setting]);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;
    const color = hexToRgb(readAccent());
    const sprite = createSprite(color);
    const droplets = createDroplets(seededRandom(7));
    let band = targetRef.current;

    if (still) {
      drawMist({ context, droplets, band, sprite, color, time: 0 });
      return;
    }

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const seconds = Math.min((now - last) / 1000, 0.05);
      last = now;
      band = approach(band, targetRef.current, Math.min(1, seconds * 2.4));
      stepDroplets(droplets, seconds);
      drawMist({ context, droplets, band, sprite, color, time: now / 1000 });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [still]);

  return (
    <canvas
      ref={canvasRef}
      width={STAGE_WIDTH}
      height={STAGE_HEIGHT}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
