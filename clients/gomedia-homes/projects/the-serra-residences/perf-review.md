# Performance Review — The Serra Residences

Reviewer: performance (Head of Performance). One section per review, newest at the bottom. Never delete earlier sections.

---

## End-of-chain review (research + copy Rev 1 + prompts Rev 1, 5 ads S1–S5) — 2026-11-07

Files reviewed: `research.md`, `ad-library-2026-11-07.md`, `copy-brief.md` (Rev 1), `design-prompts.md` (Rev 1). Shortened project flow chosen by the user.

Checked against: CLAUDE.md, brand.md, learnings.md, `gomedia-homes-static-ad-rules` (incl. "rare freehold condo", school lesson, walk-minutes lesson), the Hougang/Coastal school rulings, the NSL station order (Novena → Newton → Orchard = 2 stops). **Live Meta data: none** (read-only Meta tools not available in this session).

**Verdict: Revise** (text fixes SR1–SR3 only). Research **Approved**. Nothing Blocked. **S1 conditionally Blocked if GoAhead is not CEA-authorised.** S4's "8 MIN" hero is gated by brochure confirmation of the walk time.

### Account check (not verified)
- Could not pull account 903306407477320 (Meta tools unavailable). No Serra campaign in the local `dashboards/account-review.csv`; launched only 16 Oct 2026, so prior GoAhead history is unlikely. **Not verified.**

### Research — Approved
- Freehold → "rare freehold condo" applied; price rule correctly kills price everywhere ($2.27M entry); the "rare = rare among new launches, never 'only freehold in Novena'" caution, the hospital objection, and the ban on Huttons' appreciation stats are all correct.

### Rule checks
| Rule | Result |
|---|---|
| Only Direct names the condo | **Pass.** Only S1 names it and Far East (primary text). |
| Price rule | **Pass.** No "$", psf, monthly figure or discount on any ad. |
| No district codes / unit counts / % sold | **Pass.** No "D11", "CCR", "133-unit". |
| Full MRT names | **Pass.** "Novena MRT", "Orchard MRT". |
| "Rare freehold condo" every time | **Pass.** On-image on all 5 (S1 headline, S2–S5 subheads) and in all primary texts; S1 Headline B swaps tile 3 to keep it. |
| MRT minutes paired with amenities | **Pass.** "8-min walk" always sits with Velocity/Square 2/United Square. |
| Fact sourcing | **Pass.** "8-min" is the developer's figure via Stacked with "Walk time per developer"; malls are "near" only. |
| 5 ads differ | **Pass.** Tall strip + ivory panel / family photo + terracotta / drafting board / walking-route map / diagonal sport split. Differentiation vs Far East's own "Freehold … in Novena" ads comes from the second facts, as intended. |

### Rulings asked for
1. **School named on image (S2, designer Flag 2): the subhead may name it; drop the badge.** "Near St. Joseph's Institution Junior" in the subhead, with the MOE line in the on-image fine print, follows the static-rules school lesson. But a big "SJI JUNIOR / NEARBY" badge under "Looking for a freehold home for your family?" makes the school the hero and reads as a P1-access promise (the school is ~660m straight-line, inside the 1km band buyers know), and its 14 px MOE line under the badge won't be readable in feed. **Fix SR2.** The user may override and keep the badge.
2. **"Four malls" (S4, copy Flag 3): allowed.** Four named malls, each sourced at ≤~800m straight-line, "nearby" only, no minutes. Keep "Four".
3. **"8 MIN" numeral:** allowed as the developer's figure **only after** QA sees it in the developer brochure (Far East page was 404). If not confirmed, use the copy's fallback (`Near Novena MRT, With Four Malls Nearby`, numeral removed).
4. **Real sqft on a generic plan (S3): no** (Coastal R2-B). Title becomes `3-BEDROOM LAYOUT · ILLUSTRATIVE` (SR3). Designer was right to drop the scale bar and compass.
5. **Floor-plan ad without a building photo** (bedroom inset): drafts OK; launch needs the user's OK in chat or the official render.

### Exact text fixes (old → new)
| # | Where | Old | New |
|---|---|---|---|
| SR1 | S1 primary text, `copy-brief.md` (until an official render is used) | `Image sample / artist's impression only.` | `Image sample only, not the actual development.` |
| SR2 | S2 badge: `copy-brief.md` S2 "Badge" row; `design-prompts.md` S2 bullet, full prompt ("THE BADGE: …" sentence and the MOE line "directly under the badge"), 9:16 line | Badge `SJI JUNIOR` / `NEARBY` + tiny line `School admission subject to MOE regulations and balloting.` | *(delete the badge and its tiny line)*. The subhead and the two-line on-image fine print (already carrying the full MOE line) stay unchanged. |
| SR3 | S3 fallback plan title, `design-prompts.md` bullet + full prompt | `3-BEDROOM · 764–904 SQFT` | `3-BEDROOM LAYOUT · ILLUSTRATIVE` (official plan: its own size, per the designer's note) |

### Likely CPL and fit
- No account benchmark above ~$2M exists in learnings.md (Thomson Reserve video S$53.62 is the nearest premium read). No price in any ad means the form does all the filtering.
- **Expect S$40–80 per lead** (low confidence), a narrower pool, and higher intent per lead than the sub-$1.6M projects. Competition is light (4 pages), but the developer itself is spending heavily on "Freehold … in Novena".
- **Ranking:** S1 Direct (named, Far East) → S4 MRT + four malls → S2 family (after SR2) → S5 facilities → S3 3BR plan (asset-gated).
- **Wave 1: S1, S4, S2. Wave 2: S5, S3** (S3 once the official plan clears).

### Gates before launch
CEA authorisation for naming the project and Far East · 8-min walk confirmed in the brochure · TOP 4Q2030 still per developer · rights to the official render/3BR plan · read-only account pull · lead form (name reveal; budget from "Below $2.2M"; no price line unless the user OKs it) · no hospital in any output · tracking · QA · the user's pre-launch approval and go-ahead with cost for image generation.

### Not verified
- Account history (Meta tools unavailable). The 8-min figure on a primary developer source. Developer discounts (Far East page 404). Official assets. Lead quality. Confidence: **low** on CPL, medium-high on compliance.

### Re-review
- [ ] SR1–SR3 confirmed on [date]
- [ ] Brochure check on the 8-min walk; user decision on the S2 badge (if overriding)

---

## Addendum 2026-11-07: account history

Source: `account-history.md` (read-only pull by the lead, account 903306407477320, client filter applied). This supersedes my "Account check (not verified)" note above.

- **No past GoAhead Serra ads.** It's a genuinely cold project for us: no old leads to re-contact and no fatigue carry-over.
- CPL estimate unchanged at **S$40–80 (low confidence)**, because there's no project benchmark. The wave plan is unchanged (**wave 1: S1, S4, S2**; wave 2: S5, S3). Verdict unchanged: **Revise** (SR1–SR3).
- Relative priority: after the Vela Bay lead re-contact, Serra is the cleanest new paid test of the four, because it has no negative history and light competition apart from the developer.

---

## Re-review (Revision 1) — copy-brief.md + design-prompts.md — 2026-11-07

Verdict: **Approved** (for free draft images and for QA). This is not a launch approval.

- **SR1 done:** the old image label is gone from the S1 primary text.
- **SR2 done:** no `SJI JUNIOR` remains in either file, and there's no badge in the S2 bullet, prompt or 9:16 line. The subhead names St. Joseph's Institution Junior, and the on-image fine print carries the full MOE line. The user may still restore the badge (designer Flag 2 records this).
- **SR3 done:** the fallback plan title is `3-BEDROOM LAYOUT · ILLUSTRATIVE`. The old `3-BEDROOM · 764–904 SQFT` is gone.

Still open:
- Confirm the 8-min walk in the developer's brochure. If it isn't confirmed, use the S4 "Near Novena MRT" fallback.
- CEA authorisation to name the project and Far East (S1).
- Official render/3BR plan rights. The user's OK on the plan + interior-photo deviation.
- Whether the lead form may show a price line.
- Tracking, QA and the user's pre-launch approval. Image-generation go-ahead with the cost shown.
