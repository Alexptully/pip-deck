"use client";

import { useEffect, useState, type ReactNode } from "react";
import { STAGE_HEIGHT, STAGE_WIDTH } from "@/lib/motion";

function fitScale(): number {
  return Math.min(window.innerWidth / STAGE_WIDTH, window.innerHeight / STAGE_HEIGHT);
}

/** A fixed 1920 by 1080 canvas, scaled to fit the window and centered. */
export function Stage({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const update = () => setScale(fitScale());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="fixed inset-0 grid place-items-center overflow-hidden bg-surface-sunken">
      <div
        className="relative shrink-0 overflow-hidden bg-surface"
        style={{
          width: STAGE_WIDTH,
          height: STAGE_HEIGHT,
          transform: `scale(${scale})`,
          visibility: scale === 0 ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
    </div>
  );
}
