---
name: leadx-static-ad
description: Make LeadX static image ads (buyer or seller leads for property agents) as Remotion stills — white 4:5 feed images and 9:16 story images. Use when the user asks for LeadX static ads, image ads, statics, creatives or variations for buyer leads or seller leads, or to refresh fatigued LeadX image ads.
---

> **Project location:** all building, rendering and file paths in this skill are inside `C:/Users/asus/Documents/Claude Video Editing/my-video`. Run every command from that folder (cd there first), even if the current session was opened elsewhere.

# LeadX static image ads

> **Client rules live in `clients/gomedia/playbook/static-ads.md`** (offer facts, what has worked, the plain story style, palette). Read it before building. This skill is only the how-to.

LeadX sells verified new-launch **buyer** leads and **seller** leads to Singapore property agents.
Statics are Remotion `<Still>` components rendered to PNG in the `my-video` project.

## Formats that exist (reuse/extend)
- `src/LeadX/Statics.tsx` — buyer: A1 clean text list, A2 WhatsApp chat mock, B1 white live-tracker dashboard, B2 phone lock-screen notifications + $50/lead maths card, Story (plain text 9:16).
- `src/LeadX/SellerStatics.tsx` — seller: Poll-style location list, Plain text (4:5 + 9:16), WhatsApp homeowner chat, Pain-first ("No new listings this month?"), Q4 year-clock, Real OSM map of Singapore with town pins.
- Shared fonts/easing: `src/LeadX/theme.ts` (`HEAD` = Anton, `BODY` = Montserrat).
- Singapore map tiles: `public/sg-tiles/` + `src/LeadX/sg-tiles.json` (town pixel positions).

## Process
1. Brainstorm first when asked ("just talk first") — explain why old ads worked/failed, propose 4–6 ideas, recommend 2–4. Don't build until told.
2. Add a component to the right file, register it in `src/Root.tsx` as `<Still id=... width={1080} height={1350} />` (or 1920 for stories).
3. Render: `npx remotion still <Id> out/<folder>/<Name>.png --log=error` from `my-video`.
4. **Always look at the PNG** (Read tool) and fix overflow, wrapping, overlaps, text touching edges before sending. Keep ~100px side margins — Facebook sometimes crops edges.
5. Send with SendUserFile; summarise each variation in one line and flag mock content (fake chats/notifications) and illustrative numbers.

## Gotchas
- Long JSX edits via `node -e` in bash break on apostrophes — write a `.cjs` script with the Write tool, or use Edit.
- `<Freeze>` does not work in stills; give animated components a `frameOverride` prop instead.
- `tile.openstreetmap.org` and nominatim may be blocked on this machine — use `tile.openstreetmap.de` tiles and `photon.komoot.io` geocoding; always show "© OpenStreetMap contributors".
- Time-based copy ("Q4 is here", "82% done", "~9 weeks left") goes stale — note the date it's valid for.
