"use client";

/**
 * Chrome's Window Management API (getScreenDetails) lets the deck place Pip's hologram window
 * on an extended display and go full screen there. The first use asks the presenter for
 * permission. Browsers without it fall back to a normal window the presenter drags across.
 */

type ScreenArea = { left: number; top: number; width: number; height: number; isPrimary: boolean };
type ScreenDetails = { screens: ScreenArea[]; currentScreen: ScreenArea };
type WindowWithScreens = Window & { getScreenDetails?: () => Promise<ScreenDetails> };

/** The extended display: any screen other than the one this window is on, preferring a non-primary one. */
export async function findExtendedScreen(): Promise<ScreenArea | null> {
  const getDetails = (window as WindowWithScreens).getScreenDetails;
  if (!getDetails) return null;
  try {
    const details = await getDetails.call(window);
    const others = details.screens.filter((screen) => screen !== details.currentScreen);
    return others.find((screen) => !screen.isPrimary) ?? others[0] ?? null;
  } catch {
    return null;
  }
}

/** Moves a window onto a screen and sizes it to fill it. */
export function placeOnScreen(target: Window, screen: ScreenArea): void {
  try {
    target.moveTo(screen.left, screen.top);
    target.resizeTo(screen.width, screen.height);
  } catch {
    // The browser refused; the presenter can still drag the window across.
  }
}

/** Full screen on the extended display when there is one, otherwise on the current screen. */
export async function fullscreenOnExtendedScreen(): Promise<void> {
  const screen = await findExtendedScreen();
  const options = screen ? ({ screen } as FullscreenOptions) : undefined;
  await document.documentElement.requestFullscreen(options).catch(() => undefined);
}
