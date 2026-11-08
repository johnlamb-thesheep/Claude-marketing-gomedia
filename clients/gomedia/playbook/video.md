# GoMedia (LeadX) video rules

> Client rules. Moved here on 2026-11-08, wording unchanged: the recipe from the old references/video-maker/LEADX_AD.md (now deleted), then the offer and look rules from the `leadx-video-ad` skill. Voice speed for LeadX: 1.3x (see `references/video-maker/GUIDELINES.md`).

## Recipe: LeadX by GoMedia ads

LeadX is a lead-generation service for Singapore property agents: GoMedia runs the ads, and agents pay per lead, not per click.

### Brand

- **Main colour is red.** In the wordmark, "Lead" is white and the **X is red**, on a dark background. CTA buttons are red.
- Supporting colours: green for ✓ and positive numbers, and yellow/orange gradient highlights on static posts.
- The real logo file hasn't been supplied yet. Ask for it, and use the text wordmark until it arrives.

### Winning video structure: dream → reality → offer → CTA

The approved version is `leadx_what_if_v4`, with the voice at 1.3x and ~15.7s long:

1. **Dream (0–3.6s):**
   - A full-screen phone chat app ("New Launch Buyers"). A notification slides down and buyer messages pop in **from the first word**: "Hi! Keen on the new launch", "Can I view this weekend?", "Is the 3-bedder available?", "Please send me the price list". An unread badge counts up as they arrive.
   - Headline: "WHAT IF [NEW LAUNCH BUYERS] MESSAGED YOU FIRST?"
2. **Reality (one full scene per pain), with a pulsing red edge glow, not grey:**
   - **Cold calling / door knocking:** the standing agent knocks on a corridor door (#08-123), "KNOCK!" pops three times, "NO ANSWER…" appears, and he slumps with a sweat drop.
   - **Running ads:** he fumbles at the desk while the screen jitters, the cursor flails, "???" appears, and pop-ups land: "⚠ AD REJECTED", "BUDGET USED $2,000", "LEADS 0".
   - **Flyers:** on a sunset street, passers-by walk past ignoring him, flyers drop one by one, and he slumps with a "SIGH…".
   - On "chase them", a **giant red ✕** slams over everything, then shatters as the offer starts.
3. **Offer (before/after):**
   - The same agent, now happy at a sunny desk.
   - Lead cards fly out of the phone and stack while the counter ticks to 10.
   - ✓ GUARANTEED (red) and ✓ VERIFIED (green) badges stamp in.
   - An "EVERY MONTH" mini calendar fills with ticks.
   - "FROM $500/MONTH" lands, then "CLOSING ✓" and "NOT CHASING" struck through.
4. **CTA:** a dark background, the LeadX wordmark, a red "TAP BELOW TO START" button, a bouncing red down arrow, and the agent waving.

**Sound:** the voice plus a ding on the first message, a thud on the ✕, and a pop when the counter hits 10.

### Script that was approved

> [curious] Property agents, what if new launch buyers messaged you first, [short pause] instead of you cold calling, running ads, or handing out flyers to chase them?
> [upbeat] With LeadX, you get ten guaranteed, verified buyer leads every month, from just five hundred dollars.
> [warm] Spend your time closing, not chasing. Tap below to start.

### Characters

- **Seated agent** (`Agent.jsx`): flat vector, blue shirt and yellow tie. `p` = 0 tired/slumped to 1 happy/upright holding a phone. It also takes `wave`, `phoneBuzz`, and `laptopMood` (red bars falling vs green rising).
- **Standing agent** (`StandAgent.jsx`): FK arms (`{s, e}` angles), `slump`, `sweat`, a `flyers` stack, and moods.
- **Passer-by** (`Walker`): simple silhouette with a walk cycle, head turned away.
- The client asked for "just a human shape", so keep characters simple and readable at phone size.

### Static post spec (4:5, 1080×1350)

White background, everything centred, from top to bottom:
1. A red tag.
2. A black condensed headline, with **one** phrase in a yellow/orange gradient box.
3. The price as the biggest element, in a gradient box.
4. A one-line sub-claim.
5. Three green-tick benefits of 3–4 words each.
6. A small red urgency line above a full-width red CTA bar.

Example: "PROPERTY AGENT!" / "GET MORE VIEWINGS, AND [ONLY PAY] WHEN THE PROSPECT ATTENDS." / "$200/viewing" / "No show, no charge." / ✓ Vetted buyers only ✓ Multiple properties, one charge ✓ We arrange the viewing / "Limited early access slots" / "Reserve early access →".

## Offer, copy and look rules (from the `leadx-video-ad` skill)

### Offer + copy rules
- "10 verified buyer/seller leads a month, **from $500**" (always "from").
- Seller extras: WhatsApp automation, "Replacement available" (not "Bad lead? We replace it").
- Location count: confirm 20+ vs 35+ with the user and keep statics + video consistent.
- **Hook and offer must land in the first ~5 seconds.** The user rejected a script where the offer came at the end. Best order: callout ("Property agents") → offer → proof (locations / Q4 urgency) → CTA ("Message us now").
- Keep scripts ~38–45 words (≈14–15s after 1.2x). Hard max ~17s.
- Write ElevenLabs-ready text: numbers spelled out ("ten", "five hundred dollars", "twenty-plus"), "…" for pauses, optional v3 tags `[urgent] [excited] [confident] [warm]` (warn that older models read tags aloud).
- Time-sensitive hooks ("Q4 is here") — check today's date; Q4 starts 1 Oct.

### Look (lessons)
- **White background, red accent, friendly Montserrat** (`BODY`). The old black seller video failed — it was black and a reskin of the buyer template. Seller and buyer must look different.
- Everything inside the Meta safe band (y ≈ 300–1600); captions ~y 1300–1400. Phase scenes (one idea centred, then clear) instead of filling the screen.
- Build text top-down on the spoken word (mask "rise" reveals), no logo, no frame-1 clutter.
- Sound-off viewers: show the offer on screen early even if the VO says it later (see `SellerQ4VideoOfferFirst`).
