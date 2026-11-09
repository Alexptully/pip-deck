import { createJiti } from "jiti";
import { spokenLines } from "./pip-voice-lines.mjs";

/** Fails when a line Pip says out loud has no recording, so a script edit can't leave Pip silent. */
const jiti = createJiti(import.meta.url);
const { pipVoiceClips } = await jiti.import("../src/content/pip-voice-clips.ts");
const missing = (await spokenLines()).filter((line) => !pipVoiceClips[line]);

if (missing.length > 0) {
  console.error("These lines have no recording of Pip's voice. Run python3 scripts/make-pip-voice.py:");
  for (const line of missing) console.error(`  ${line}`);
  process.exit(1);
}
console.log("Pip's voice: every spoken line has a recording.");
