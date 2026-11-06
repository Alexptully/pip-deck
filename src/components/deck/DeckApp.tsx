"use client";

import { useEffect, useState } from "react";
import { Deck } from "./Deck";
import { PrintDeck } from "./PrintDeck";

/** Shows the print version when the address ends in #print (used by the single-file build). */
export function DeckApp() {
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const sync = () => setPrinting(window.location.hash === "#print");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return printing ? <PrintDeck /> : <Deck />;
}
