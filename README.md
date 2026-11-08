# Pip: the pitch deck

Group 7's deck for the Innovator's Forum, Fall 2026, Prompt 3a. Pip is a holographic character on a fog screen that helps Gloria, a clinic director, build a walk-in check-in app by talking it through.

## Run it

1. Install Node.js 20 or newer from https://nodejs.org.
2. In this folder, run `npm install` once.
3. Run `npm run present`. It builds the deck and prints the addresses to open.

Open http://localhost:3000/ to present. Keys: arrows to move, N for speaker notes, F for full screen, P for the print version, H for Pip's hologram screen.

## Pip on the fog screen

Pip follows the deck on the fog screen. Until "Say hello to Pip" on the Meet Pip slide, the fog screen is fully black: no mist, no light and no text. On that click, light gathers in the fog, Pip appears and says hi. After that it listens, talks and says its lines out loud on the slides where Pip speaks.

**Fog projector plugged into the presenting laptop:** press H in the deck. In Chrome, allow window management when asked and the window moves to the extended display; otherwise drag it there. Click **Start the hologram**.

**Fog projector on a second computer** (the same idea as the Fold with Nara kiosk):

1. On the presenting laptop, run `npm run present`.
2. Open http://localhost:3000/pip/setup/ on the laptop. It shows a code and an address for the second computer.
3. On the second computer, on the same Wi-Fi, open that address and click **Start the hologram**. It goes full screen.
4. In the deck, press N. The notes say whether the hologram screen is connected.

On the hologram screen: M mirrors the image, C shows Pip's lines as captions, F toggles full screen, and the arrow keys move the deck. Pip speaks from the hologram computer, so plug the speaker in there. If event Wi-Fi blocks the two computers from seeing each other, join both to a phone hotspot.

The hosted copy (GitHub Pages) and the single-file build only reach a hologram window in the same browser, not a second computer.
