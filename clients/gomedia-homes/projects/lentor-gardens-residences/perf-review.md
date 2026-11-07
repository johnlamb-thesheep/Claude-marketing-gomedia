# Performance Review — Lentor Gardens Residences

Reviewer: performance (Head of Performance). One section per review, newest at the bottom. Never delete earlier sections.

---

## End-of-chain review (research + copy Rev 1 + prompts Rev 1, 5 ads L1–L5) — 2026-11-07

Files reviewed: `research.md`, `ad-library-2026-11-07.md`, `copy-brief.md` (Rev 1), `design-prompts.md` (Rev 1). Shortened project flow chosen by the user.

Checked against: CLAUDE.md, brand.md, learnings.md (2026-11-06 price/unit-count rule), `gomedia-homes-static-ad-rules`, the Coastal Cabana review (CC1–CC6, R2 rulings). **Live Meta data: none** (read-only Meta tools not available in this session).

**Verdict: Revise** (text fixes LG1–LG3 only). Research **Approved** (conditions below). Nothing Blocked. **L1 conditionally Blocked if GoAhead is not CEA-authorised.** The price itself needs the user's yes (see decisions).

### Account check (not verified)
- Could not pull account 903306407477320 (Meta tools unavailable). No Lentor Gardens campaign appears in the local `dashboards/account-review.csv`. **Not verified** — run the read-only pull (ad name contains "lentor") before launch.

### Research — Approved
- Stage (launched Jul 2026), price at the cap edge, TOP conflict withheld, MRT weakness disclosed, comparison white space correctly declared taken. Good work.
- Conditions: (a) the entry price conflicts ($1,607,900 [NL] vs agent ads $1.571M/$1.59M) — QA settles it on the developer list; (b) three "Lentor Gardens Residences" pages have unconfirmed owners — don't reuse their assets.

### Rule checks
| Rule | Result |
|---|---|
| Only Direct names the condo | **Pass.** Only L1 names it and Kingsford (primary text). |
| Price ≈$1.5M / ≤$1.6M | **Pass, at the edge.** $1,607,900 → "$1.61M*" is inside "~$1.6M still OK". User confirmation recommended (decision 1). |
| No district codes / unit counts / % sold | **Pass.** No "D26", no strata-terrace count, no "limited units". |
| Full MRT names | **Pass.** "Lentor MRT" everywhere; "near" only, no minutes or "next to". |
| Freehold | **N/A** (99-year). |
| Fact sourcing | **Pass**, except LG2: "ceilings across the condo are 2.9m high" overstates the review. TOP correctly omitted. |
| 5 ads differ | **Pass.** Pool-hero card / window view / tracing paper / vector map / big-number water poster. |

### Rulings asked for
1. **Real sqft on a generic plan (designer Flag 3): no** (Coastal R2-B). Fallback title becomes `2-BEDROOM + STUDY LAYOUT · ILLUSTRATIVE` (LG3). The fallback headline "2-Bedroom + Study Layouts at 732 sqft" may stay: it states the type's size, not a drawing's.
2. **Floor-plan ad without a building photo** (study-nook polaroid instead): drafts OK; launch needs the user's OK in chat or the official render.
3. **L4 (MRT is the weak fact, copy Flag 4): keep as a location map, hold it.** Don't swap it for another pool ad — L1 and L5 already lean on the pool.
4. **L1 AI aerial pool on the named ad:** allowed with `IMAGE SAMPLE ONLY – not the actual development` (T10 bans AI towers, not facilities), but it visually stands in for the real 200m pool — replace with the official facilities render as soon as rights clear.
5. **L5 poster "200M" at equal size with the price:** allowed; the attribution line is in the fine print.

### Exact text fixes (old → new)
| # | Where | Old | New |
|---|---|---|---|
| LG1 | L1 primary text, `copy-brief.md` (until an official render is used) | `Image sample / artist's impression only.` | `Image sample only, not the actual development.` |
| LG2 | L3 primary text, `copy-brief.md` | `and ceilings across the condo are 2.9m high.` | `and the ceilings are 2.9m high, per published review.` |
| LG2 | L1 and L5 primary-text fine print, `copy-brief.md`; L1 on-image fine print, `design-prompts.md` (bullet + full prompt) | `Pool length approx., per published review.` | `Pool length and ceiling height approx., per published review.` |
| LG3 | L3 fallback plan title, `design-prompts.md` bullet + full prompt | `2-BEDROOM + STUDY · 732 SQFT` | `2-BEDROOM + STUDY LAYOUT · ILLUSTRATIVE` (restore with the official plan) |

### Likely CPL and fit
- Busy auction (5 of 8 advertisers started 29 Oct–5 Nov; two run "from $1.5xM"). 67% sold; 2BR stock is deep (130 left), so a 2BR price lead points at real stock — better fit than Vela Bay.
- **Expect S$30–50 per lead** (low confidence; Arcady/Hougang's S$22–31 had live incumbents and less competition).
- **Ranking:** L1 Direct (named, price) → L5 blind price + 200m pool → L3 2BR+Study plan (100 left) → L2 family/quiet (3BR stock thin) → L4 MRT map.
- **Wave 1: L1, L5, L3. Wave 2: L2** (after the 3BR stock check). **Hold: L4.**

### Gates before launch
CEA authorisation · developer-list price check ≤$1,610,000 within 48h (no sqft next to the price until the cheapest stack's size is confirmed), fill [DATE] · TOP stays off every ad · 3BR stock check before L2 · rights to the official render/2BR+Study plan · read-only account pull · lead form (budget from "Below $1.6M", unit type, timeline, purpose, agent question) · tracking · QA · the user's pre-launch approval and go-ahead with cost for any image generation.

### Not verified
- Account history (Meta tools unavailable). Developer price list and which 2BR stack is $1,607,900. Official assets. Competitor bodies (403). Lead quality. Confidence: **low** on CPL, medium on compliance.

### Re-review
- [ ] LG1–LG3 confirmed on [date]
- [ ] User decision on showing $1.61M; account pull done

---

## Addendum 2026-11-07: account history

Source: `account-history.md` (read-only pull by the lead, account 903306407477320, client filter applied, all campaigns paused). This supersedes my "Account check (not verified)" note above.

- **Lifetime: S$505.46, 2 leads, S$252.73 CPL**, from one ad ("Lentor Gardens Residences"). The creative, dates and stage (pre- or post-launch) aren't in the pull.
- **Read:** n=2 is too small to call a true CPL. But S$505 for 2 leads is a real failure signal, and it agrees with the research: a busy auction (5 of 8 advertisers started in the last ~9 days) and the MRT is the project's weak fact. **I'm revising the CPL estimate from S$30–50 to S$50–120 (low confidence).**
- **Is it worth relaunching? Only as a small, capped test, and it is the lowest priority of the four projects.**
  1. Before any spend, read the old ad (headline, angle, run dates). If it was a generic name/MRT ad, our pool and price angles are a genuinely different test. If it was price-led, expect a repeat.
  2. **Wave 1 cut to 2 ads: L5 (blind price + 200m pool) and L1 (Direct).** L3 moves to wave 2 and L2 to wave 2. L4 stays on hold.
  3. **Hard project stop-loss: ~S$300 total with fewer than 3 leads, or ~S$500 with 0 stage-1 qualified leads → stop Lentor** and move the budget to Vela Bay or Serra.
  4. Also re-contact the 2 past leads.
- **New user decision:** relaunch Lentor at all (small capped test), or skip it this round. My recommendation is a capped test only if budget remains after Vela Bay and Serra.
- Verdict unchanged: **Revise** (LG1–LG3). The fixes still apply if the test runs.

---

## Re-review (Revision 1) — copy-brief.md + design-prompts.md — 2026-11-07

Verdict: **Approved** (for free draft images and for QA). This is not a launch approval, and it does not settle whether to relaunch Lentor (see the account-history addendum).

- **LG1 done:** the old image label is gone from the L1 primary text.
- **LG2 done:** "ceilings across the condo" is gone, and L3 reads `the ceilings are 2.9m high, per published review.`. The L1/L3/L5 fine print reads `Pool length and ceiling height approx., per published review.` (copy and prompts). The plain `Pool length approx., …` line remains only on L4, which carries no ceiling claim. That is correct.
- **LG3 done:** the fallback plan title is `2-BEDROOM + STUDY LAYOUT · ILLUSTRATIVE`. The real title appears only in the official-plan swap note.

Still open:
- **User decisions:** relaunch at all (I recommend a capped test only, S$300–500 stop-loss, wave 1 = L5 + L1), and whether to show `$1.61M*`.
- Read the old ad before any spend.
- Gates: a developer-list price check (≤$1,610,000) and fill [DATE]. CEA authorisation (L1), and rights.
- Lead form, tracking, QA and the user's pre-launch approval. Image-generation go-ahead with the cost shown.
