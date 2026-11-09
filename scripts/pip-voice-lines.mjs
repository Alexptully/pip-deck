import { createJiti } from "jiti";

/** Loads the deck content and returns every line Pip says out loud on the fog screen. */
export async function spokenLines() {
  const jiti = createJiti(import.meta.url, { alias: { "@": new URL("../src", import.meta.url).pathname } });
  const { pipCues } = await jiti.import("../src/content/content.ts");
  const lines = Object.values(pipCues)
    .flat()
    .filter((cue) => cue.speak && cue.line)
    .map((cue) => cue.line);
  return [...new Set(lines)];
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(await spokenLines(), null, 2));
}
