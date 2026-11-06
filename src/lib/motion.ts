/** Motion scale for the whole deck. Components pick from these, never their own curves. */
export const ease = {
  soft: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const duration = {
  quick: 0.35,
  base: 0.7,
  slow: 1.2,
  draw: 1.6,
};

export const stagger = 0.09;

export const STAGE_WIDTH = 1920;
export const STAGE_HEIGHT = 1080;
