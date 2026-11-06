import type { MistSetting } from "@/content/content";
import { STAGE_HEIGHT } from "@/lib/motion";

export type Droplet = { u: number; y: number; speed: number; size: number; alpha: number; phase: number };

export type Rgb = { r: number; g: number; b: number };

const DROPLET_COUNT = 760;

/** A small deterministic random source, so print renders the same mist every time. */
export function seededRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/** Droplets cluster near the middle of the sheet, the way fog thins at its edges. */
function centeredSpread(random: () => number): number {
  return (random() + random() + random()) / 1.5 - 1;
}

export function createDroplets(random: () => number): Droplet[] {
  return Array.from({ length: DROPLET_COUNT }, () => ({
    u: centeredSpread(random),
    y: random() * STAGE_HEIGHT,
    speed: 40 + random() * 90,
    size: 6 + random() * 34,
    alpha: 0.05 + random() * 0.22,
    phase: random() * Math.PI * 2,
  }));
}

export function stepDroplets(droplets: Droplet[], seconds: number): void {
  for (const drop of droplets) {
    drop.y += drop.speed * seconds;
    if (drop.y > STAGE_HEIGHT + 40) drop.y = -40;
  }
}

export function approach(current: MistSetting, target: MistSetting, amount: number): MistSetting {
  return {
    x: current.x + (target.x - current.x) * amount,
    width: current.width + (target.width - current.width) * amount,
    strength: current.strength + (target.strength - current.strength) * amount,
  };
}

export function hexToRgb(hex: string): Rgb {
  const clean = hex.trim().replace("#", "");
  const value = parseInt(clean, 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

function rgba(color: Rgb, alpha: number): string {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

/** A soft round sprite, drawn once and stamped for every droplet. */
export function createSprite(color: Rgb): HTMLCanvasElement {
  const sprite = document.createElement("canvas");
  sprite.width = 64;
  sprite.height = 64;
  const context = sprite.getContext("2d");
  if (!context) return sprite;
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, rgba(color, 1));
  gradient.addColorStop(0.4, rgba(color, 0.35));
  gradient.addColorStop(1, rgba(color, 0));
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  return sprite;
}

function drawSheet(context: CanvasRenderingContext2D, band: MistSetting, color: Rgb): void {
  const half = band.width / 2;
  const sheet = context.createLinearGradient(band.x - half, 0, band.x + half, 0);
  sheet.addColorStop(0, rgba(color, 0));
  sheet.addColorStop(0.5, rgba(color, 0.07 * band.strength));
  sheet.addColorStop(1, rgba(color, 0));
  context.fillStyle = sheet;
  context.fillRect(band.x - half, 0, band.width, STAGE_HEIGHT);

  const source = context.createRadialGradient(band.x, -60, 0, band.x, -60, Math.max(half, 80) * 1.4);
  source.addColorStop(0, rgba(color, 0.32 * band.strength));
  source.addColorStop(1, rgba(color, 0));
  context.fillStyle = source;
  context.fillRect(band.x - half * 1.6, 0, band.width * 1.6, STAGE_HEIGHT);
}

type DrawInput = {
  context: CanvasRenderingContext2D;
  droplets: Droplet[];
  band: MistSetting;
  sprite: HTMLCanvasElement;
  color: Rgb;
  time: number;
};

export function drawMist({ context, droplets, band, sprite, color, time }: DrawInput): void {
  context.globalCompositeOperation = "source-over";
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.globalCompositeOperation = "lighter";
  drawSheet(context, band, color);
  const half = band.width / 2;
  for (const drop of droplets) {
    const sway = Math.sin(time * 0.6 + drop.phase + drop.y * 0.004) * 10;
    const x = band.x + drop.u * half + sway;
    const edge = 1 - drop.u * drop.u;
    context.globalAlpha = Math.max(0, drop.alpha * edge * band.strength);
    context.drawImage(sprite, x - drop.size / 2, drop.y - drop.size / 2, drop.size, drop.size);
  }
  context.globalAlpha = 1;
  context.globalCompositeOperation = "source-over";
}
