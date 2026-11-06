# Video maker guidelines

These rules come from building about ten ad videos with one client (property agents in Singapore, plus their lead-gen product LeadX). Each rule exists because something went wrong without it, or the client asked for it directly.

## 1. Format and length

- Vertical 9:16 at 1080×1920, 30 fps, about **15 seconds**. The client checks the length and asks for speed changes to hit it.
- Static posts are 4:5 at 1080×1350.
- Keep important text out of the bottom ~300 px, where the Reels/TikTok UI sits. The one exception is the small caption bar.

## 2. Voiceover

- The client generates the voice in ElevenLabs (voice "Adam – Compelling") using emotion tags like `[excited]`, `[confident]`, `[warm]`.
- **Speed it up with ffmpeg `atempo`.** Use 1.2x for property reels by default and 1.3x for LeadX ads. Use 1.1x if 1.2x would drop below ~14s. Pick the speed that lands closest to 15s and tell the client which one you used.
- **Always extract word timings** and anchor every cut, headline, pop and sound effect to the spoken word. Guessed timings needed a full redo once the real voice arrived.
- **Check uploads before using them.** Compare MD5 hashes when a "new" voice file arrives. Once, a re-uploaded file was byte-identical to the old one, and the new lines weren't in it.
- If the script has a grammar error (e.g. "it also have"), mention it once. On-screen text can be correct even when the audio isn't.
- Never build a final without the voice. If it's missing, either build to an estimated read and label the result a timing draft, or ask for the voice.

## 3. Script pacing

- Natural voiceover runs ~2.5 words/second. Before animating, count words per segment and flag any segment above ~3.5 w/s.
- About 45–52 words fits ~15s at 1.2x.
- Structure: **hook naming the audience (0–3s) → pain or proof → offer → CTA.** An ad without a CTA is broken, so add one.
- A brand-first opening ("X is a service that…") doesn't work in a feed. Lead with the viewer's pain or desired result instead.

## 4. Visual style that worked (use by default)

- **Flat, bright, bold kinetic typography:**
  - **Fonts:** Anton for headlines, Montserrat 800 for labels.
  - **Text blocks:** words slam in, highlight boxes wipe in behind key words, and letters drop in one by one for names.
  - **Small kicker line** above each headline ("WITHIN", "CHECK OUT", "INSTEAD OF").
- **Text sits in the middle of the screen, never as plain subtitles.** It reads as a graphic: a header plus a highlighted keyword.
- **Small captions at the bottom** (dark pill, ~34–38 px) for sound-off viewing. Move them up during the CTA so they don't cover the character or button.
- **Brand colours:** the client asked for **red** instead of the earlier yellow/orange highlights.
  - Property reels use red blocks with white text.
  - LeadX red: "Lead" is white and the **X is red**, CTA buttons are red, and the logo sits on a dark background.
- **Sound: minimal.** Voice plus at most 2–3 small effects (notification ding, a thud, a pop). No music unless asked.

## 5. What did NOT work (avoid)

- **Cinematic 2D "What If" style** (dark, moody, perspective rooms, rim light, grain). The client rejected it for ads: too dark and slow in a feed, a small character in vertical frame, and text fighting the scenery. It was also very slow to render (~1.2 s/frame on one core, versus ~0.2 s/frame for flat style).
- **Grey/desaturated "before" scenes.** The client said it "looks weird". Use a **pulsing red alert edge glow** and a **giant red ✕** instead.
- **Record-scratch / rewind transitions.** Rejected.
- **Blurring or darkening the client's video footage.** Show footage full-bleed and only add a very light vignette behind text.
- **Combining several pain points into one scene.** For "instead of X, Y, Z", give each pain its own full scene with its own animation.
- **Humans in property visuals.** Use housing, rooms, facades and pools only. Exclude gym shots with people and presenter clips.

## 6. Footage (flythroughs)

- **Find the shots first.** Run scene detection and make a contact sheet every 2–3s, then pick shots that match each spoken line.
- **Skip text-only title cards** (logo screens, "Artful & Purposeful Design", end cards) and any shot with a presenter.
- **Mute the source audio.**
- **Fill the frame.** Crop 16:9 to 9:16 and pan the crop slowly across the frame, so it shows more of the shot than a fixed centre crop.
- **Check for letterboxing and burned-in captions.** Measure the picture rows and caption rows, then zoom to frame only the clean picture (e.g. Bagnall Haus: picture in rows 100–979, captions from ~885, so frame rows 100–870 at zoom ≈1.41).
- **Small corner watermarks** can usually be cropped out with a ~1.12× zoom.
- **Stay inside a single shot.** Check the cut points so a scene doesn't run into the next shot. If a shot is too short, slow it down (`playbackRate` 0.58–0.95).

## 7. Still images

- **Never leave a still static.** Every image gets a camera move (push-in, pull-out, pan, tilt-up) so it feels like video.
- **Small images** (under ~700 px) go in a framed card with their own slow zoom, not full-bleed.
- **Remove other logos.** Crop out portal watermarks, developer logos on other projects, phone numbers, and "Artist's Impression" labels. The project's own signage on the building is fine.
- **Never use a render of a different development**, even with its logo cropped (e.g. a "Skye at Holland" render offered for Hougang). It misleads buyers. Leave it out and say why.
- **Flag images that misrepresent the location**, such as an AI render with a CBD skyline used for a suburban project, a hotel-looking room, or an aerial pool that may not be the project. Use them only briefly, or ask.

## 8. Maps

- **Always redraw maps**, never reuse the client's screenshot. Redrawing removes portal logos, watermarks and phone numbers.
- **Draw a schematic, not a geographic copy.** Include the roads, rivers and park connectors, the development pin (gold), and the MRT with its line colour and station code (e.g. NE1, TE25, TE31).
- **Time the animation to the voice:** pin first, then the walking route draws with an "X MIN" badge, then the MRT pops on its name, then nearby amenities pop one by one on "amenities nearby".
- **Map layout rules:**
  - Keep the map below the headline area.
  - Lay labels out so they don't overlap: put them below or left of icons near the right edge.
  - Use one icon colour per category: schools, food, malls, clinics, parks.
- **Don't add drive or walk times** that aren't in the script or official material.

## 9. Facts and compliance

- **Verify claims with a web search** before they go on screen: walking minutes, unit count, CBD time, project name spelling (e.g. "The Island Residence" singular on the developer logo), developer, tenure, and MRT station code.
- **When sources disagree, use the conservative figure and flag it** (e.g. 84 vs 86 units, 5 vs 10 min to CBD).
- **Prices:**
  - Only use prices from current listings or the developer price list.
  - "From $X" must be the actual entry price.
  - If the client drops the price from the script, drop the price scene.
- **Keep ads consistent.** Watch for the same offer said differently across ads (e.g. "seller leads" vs "buyer leads") and ask which is right.

## 10. Process

1. **Inspect inputs:** sizes, durations, md5, and a contact sheet for videos.
2. **Speed the voice and get timings,** then write a scene table (time → visual → text).
3. **Render 6–10 check stills** at key frames into one contact sheet, then **look at it.**
   Typical bugs it catches:
   - text overflowing its box or wrapping badly
   - overlays colliding with the headline
   - a hidden layer bleeding through (z-index)
   - wrong camera framing on close-ups
   - captions covering a face
4. **Fix, re-check, then render the full video.**
5. **Deliver a short summary:** scene list, what changed, and a short "please check" list. Keep earlier versions (`_v2`, `_v3`) rather than overwriting.

## 11. Working with this client

- **Short, fast messages** ("go go"). Act on clear requests without long confirmation rounds.
- **Ask at most one question, with tappable options when possible.** Good uses: which character style, which format.
- **When they push back on a style, drop it quickly** and go back to the style they liked. Don't argue for sunk work.
- **Explain slowness plainly** (render cost, single core, time limits) and offer options, rather than going silent.
