"use client";

import { createContext, useContext } from "react";

/** True when slides render without animation, as in the print view. */
const StillContext = createContext(false);

export const StillProvider = StillContext.Provider;

export function useStill(): boolean {
  return useContext(StillContext);
}
