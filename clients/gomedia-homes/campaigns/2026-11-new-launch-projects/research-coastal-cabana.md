# Competitor / Market Research: Coastal Cabana EC (gomedia-homes / GoAhead)

**Query:** `Coastal Cabana` (49 hits, ~6 relevant pages after noise was removed) and `Pasir Ris EC` (3 active)
**Country:** SG
**Date range:** ~2026-01-27 to 2026-11-05 (ad delivery start dates)
**Data source:** Meta Ad Library via Meta Ads MCP, pulled by the lead. Raw file: `clients/gomedia-homes/inputs/competitors/coastal-cabana-meta-ad-library-2026-11-05.md`. Plus WebFetch of public sources on 2026-11-05.
**Researcher:** researcher agent, 2026-11-05
**Perf sign-off status:** Researcher is the first stage, so there is no upstream file to wait for. `perf-review.md` has no Coastal Cabana section yet. This file needs performance review before copy is written from it.

> **Headline finding (read first).** **Coastal Cabana is not in preview.** The preview opened on 6 Dec 2025 and **sales launched on 17 Jan 2026**. It is now selling **balance units**, and the **price list is released**. On 05-Nov-2026 the cheapest available unit was a **3BR Deluxe from $1.542M**. That is above the $1.4M cap, so **no price goes in any ad**. **4-bedroom units appear sold out**, and only 3-bedroom units plus one 5-bedroom unit remain.

> **Access limits.**
> - **Facebook Ad Library snapshots returned HTTP 403.** I tried ids 3971901826434822 ("Still Considering Coastal Cabana EC?") and 1936609660644868 ("Coastal Cabana EC"). **The body text, visuals and CTA buttons of every ad are UNKNOWN.** The ad analysis below uses page name, headline and start date only.
> - **HDB official pages: every EC path I tried returned 404.** That includes the EC buying procedure, the EC eligibility page, the CPF housing grant for EC page, the old `/cs/infoweb/` path, the press releases page and the modes-of-sale page. The HDB home page only links to the Nov 2026 BTO exercise. **CPF Board** and **MND press releases** returned 404 or empty pages. **So no EC rule or grant figure below is confirmed from an HDB page.** The rules come from Stacked Homes reporting MND announcements, and the grant is UNCONFIRMED.
> - Also blocked or unusable: PropertyGuru guide (403), 99.co guide (403), EdgeProp project page (empty), Wikipedia "Executive condominium" (no EC rule detail). DuckDuckGo showed a bot challenge, which I did not attempt. Bing returned irrelevant results.
> - The developer's **"Eligibility Booklet" PDF** downloaded, but it couldn't be read because the text is compressed and poppler isn't installed. This document is the best non-HDB source for the eligibility and grant rules. **Someone should open it by hand:** https://www.coastalcabana.com.sg/Coastal%20Cabana-Eligibility%20Booklet.pdf
> - Sources that worked:
>   - **[DEV]** https://www.coastalcabana.com.sg/ plus `/developer.html`, `/coastalcharm.html`, `/coastalliving.html`. **Likely the developer's site, but ownership isn't confirmed** (see site warnings).
>   - **[SHP]** Stacked Homes, preview, 26 Nov 2025: https://stackedhomes.com/coastal-cabana-ec-preview/
>   - **[SHR]** Stacked Homes, review, 9 Dec 2025: https://stackedhomes.com/coastal-cabana-ec-review/
>   - **[SHL]** Stacked Homes, launch day, 17 Jan 2026 (updated 18 Jan): https://stackedhomes.com/66-of-units-at-coastal-cabana-sold-at-end-of-first-sales-day-prices-average-1820-psf/
>   - **[SHM]** Stacked Homes, 9 Oct 2026: https://stackedhomes.com/coastal-cabana-5-year-mop-ec/
>   - **[SHJ]** Stacked Homes, 17 Jun 2026: https://stackedhomes.com/east-bto-mop-ec-or-sell-one-buy-two/
>   - **[SHE]** Stacked Homes, EC rule change, 8 May 2026: https://stackedhomes.com/singapore-ec-rules-mop-10-years-dps-removed-2026/
>   - **[SHI]** Stacked Homes, income ceilings, 23 Aug 2026: https://stackedhomes.com/hdb-raises-income-ceiling-to-16k-and-ec-ceiling-to-18k/
>   - **[SHC]** Stacked Homes, Canberra EC, 2 Oct 2026: https://stackedhomes.com/canberra-ec-record-land-price-10-year-mop/
>   - **[NLP]** newlaunches.sg project page, "Updated: 05-Nov-2026": https://www.newlaunches.sg/project/coastal-cabana/. This is an aggregator or agent site, not official (see warnings).
>   - **[NLH]** newlaunches.sg home page, https://www.newlaunches.sg/. Coastal Cabana is **not** in "Popular Projects This Week" (05-Nov).
>   - **[WKC]** https://en.wikipedia.org/wiki/Cross_Island_MRT_line
>   - **[OM]** OneMap public search API (coordinates only), e.g. https://www.onemap.gov.sg/api/common/elastic/search?searchVal=coastal%20cabana&returnGeom=Y&getAddrDetails=Y&pageNum=1 . OneMap lists the blocks as "COASTAL CABANA (U/C)" at 6–32 Jalan Loyang Besar. I worked out the straight-line distances myself (method below).
> - **Site warnings (never link these in ads, forms or LPs without checking):**
>   - `coastalcabana.com.sg` shows the developer's licence details: "Pasir Ris Development Pte. Ltd., UEN 202436619N, Developer Licence C1530", plus the encumbrance, lot and tenure. **It doesn't say who runs it.** The form consent reads "Coastal Cabana EC and its representatives", there is no agent CEA number, and a sales phone number is listed (removed here). It's probably developer-authorised, but **ownership is unconfirmed**. It still says "3- to 5-bedroom" homes, although 4BR appears sold out.
>   - `newlaunches.sg/project/coastal-cabana/` calls the project a "new launch" while showing 85% sold. It gives a different district code from Stacked [SHR], and the district codes are banned for us anyway. No CEA disclaimer is visible. Its price and distance figures **match** Stacked and my OneMap figures, so I use it for current prices and stock, tagged [NLP]. For prices, it's the most recent source.
>   - **FB page "Coastal Cabana" (1350307868169950)** runs "Coastal Cabana EC" ads. I couldn't confirm whether it belongs to the developer or an agent.
>   - **FB page "Pasir Ris EC"** runs a catalog ad whose title shows a raw `{{product.name}}` template, which is a broken catalog setup. Owner unknown.
> - No images were downloaded. No new competitor creatives were saved to `inputs/competitors/`, because nothing was visible (403). The raw pull already lives there.

---

## 1. Stage: what "preview" means now

| Milestone | Date | Source |
|---|---|---|
| Land awarded (GLS, Jalan Loyang Besar EC site) | Aug 2024, $557M (~$728 psf ppr) | [SHP], [SHR] |
| Lease start | 99 years from **13 Nov 2024** | [DEV] footer |
| Preview, with indicative prices published | Article dated **26 Nov 2025**. Public preview from **6 Dec 2025** | [SHP], [SHL] |
| **Sales launch** | **17 Jan 2026.** About 496 units sold on day one, at an average of ~$1,734 psf (corrected from $1,820 on 18 Jan). Sales resumed 18 Jan, with prices expected to rise ~2%. | [SHL] |
| Follow-up activity | Show flat **renovated** from the 3BR Premium + Study layout to the **3BR Premium (C2)** layout. A developer discount of **$10k (Deluxe) / $12k (Premium, Premium + Study) runs until end-2026**, on both normal and deferred-payment prices. | [SHM] 9 Oct 2026 |
| Today | [DEV]: "THE LONG-AWAITED COASTAL EC, **NOW OPEN FOR VIEWING**". The sales gallery is "ALONG EUNOS AVENUE 3", which is **off-site, not in Pasir Ris**. There's also a virtual sales-gallery tour. | [DEV] |
| Expected vacant possession / TOP | **31 Mar 2029** [DEV]. "Q1 2029" [SHP], [SHR], [SHM] | [DEV] |
| Expected legal completion | 31 Mar 2032 | [DEV] |

**Verdict: LAUNCHED (balance-unit sales), not preview, and not a new phase.** No source mentions a phase 2, a re-release or a second preview. The "preview" ended when sales opened on 17 Jan 2026. The user's "(preview)" most likely means **viewing the show flat now**, but that's an inference. **Ads must not say "preview", "VVIP preview", "launching soon" or "register before launch".** That would misstate the stage of a project that has sold for 10 months. The neutral, accurate words are "show flat open for viewing", which is what the developer says.

**Sales status (context only. Never in ads, per the client's no-%-sold rule):**
- 05-Nov-2026 [NLP]: **637 of 748 sold (~85%), 111 available**: 3BR + Study Premium 3/165, 3BR Deluxe 26/46, 3BR Premium 81/139, 5BR Premium 1/22.
- **No 4BR type appears with stock.** The listed availability adds up to exactly the page's 111, so **4BR is effectively sold out**. That's my inference from the table. No source says "4BR sold out" in words.
- 9 Oct 2026 [SHM]: 119 three-bedders left across 15 of 16 blocks, and Block 20 is sold out.
- **Copy implication:** this is a **3-bedroom** campaign. Do not advertise 4BR. The single 5BR must not be the hook.

---

## 2. Top advertisers

**About 6 relevant pages. That's light compared with Hougang Central's 28+.**

| Advertiser | Page | # ads | Notes |
|---|---|---|---|
| Coastal Cabana (page 1350307868169950) | Coastal Cabana | 2 | "Coastal Cabana EC", ~09-29 and ~10-29. Name only. https://www.facebook.com/ads/library/?id=1936609660644868 . Ownership unverified. |
| EC Buyer | EC Buyer | 3 | "Still Considering Coastal Cabana EC?" ~01-27/28 (10 days after launch), https://www.facebook.com/ads/library/?id=3971901826434822 . "Coastal Living Starts Here" ~04-14, https://www.facebook.com/ads/library/?id=1970152903615629 |
| Darren Ong Property Wealth Planning | same | 4 | Multi-project carousel (Sophia Meadow / Coastal Cabana EC / Dunearn House / Pinery Residences / Lentoria / Lentor Gardens Residences), ~09-24. https://www.facebook.com/ads/library/?id=1780678912971783 |
| SG Home | SG Home | 1 | "Watch Before You Buy Your EC / Up to $30k Gov Grant*", ~06-15. https://www.facebook.com/ads/library/?id=881451621699862 |
| SN Property Strategist | same | 1 | WhatsApp click-to-chat, ~10-12. Also shows up for "Pasir Ris EC". https://www.facebook.com/ads/library/?id=1813697459973214 |
| Pasir Ris EC | Pasir Ris EC | 1 | Catalog ad with a broken `{{product.name}}` title, ~02-03. https://www.facebook.com/ads/library/?id=1582244672812106 |
| GoMedia Homes (ours) | — | 0 found | No GoAhead Coastal Cabana ad shows in the pull |

## 3. Common hooks / CTAs / offers

| Pattern | Example ad | Frequency |
|---|---|---|
| **Project name only** | "Coastal Cabana EC" https://www.facebook.com/ads/library/?id=1936609660644868 | 1 page / 2 ads (plus 1 carousel card) |
| **Coastal / seaside lifestyle** | "Coastal Living Starts Here" https://www.facebook.com/ads/library/?id=1970152903615629 . The developer's own site leads with "SEASIDE LIVING, MALLSIDE CONVENIENCE" [DEV] | 1 page in ads, plus the developer's site. **The only clearly "used" angle.** |
| **Follow-up / "still deciding"** | "Still Considering Coastal Cabana EC?" https://www.facebook.com/ads/library/?id=3971901826434822 | 1 page / 2 ads (Jan 2026) |
| **EC grant / EC education** | "Watch Before You Buy Your EC / Up to $30k Gov Grant*" https://www.facebook.com/ads/library/?id=881451621699862 | 1 page (Jun 2026, generic EC, not project-specific) |
| Multi-project carousel | https://www.facebook.com/ads/library/?id=1780678912971783 | 1 page |
| WhatsApp chat | https://www.facebook.com/ads/library/?id=1813697459973214 | 1 page |
| Price list / e-brochure / floor plans | none found | **0** |
| **Downtown East next door / theme parks / mall** | none in ads (the developer's site says "mega mall and thrilling theme parks just next door") | **0** |
| **Family / schools (Casuarina Primary, Hai Sing Catholic)** | none found | **0** |
| **5-year MOP / old EC rules / Deferred Payment Scheme** | none found | **0** |
| Resort facilities (4 pools, 65+ facilities, clubhouse) | none in ads (developer site only) | **0** |
| Sea views | none in ads (developer site: "THE ONLY SEA-VIEW EXECUTIVE CONDOMINIUM IN 12 YEARS") | **0** |
| Cross Island Line / Pasir Ris East MRT | none found | **0** |
| Price / psf | none found | 0 |
| CTA buttons | UNKNOWN (snapshots 403) | — |

## 4. Recently launched ads

| Advertiser | Launch date | Ad Library URL | Angle/hook | Notes |
|---|---|---|---|---|
| Coastal Cabana (page) | ~10-29 | https://www.facebook.com/ads/library/?id=1936609660644868 | Name only | The 2nd ad; the first started ~09-29 |
| SN Property Strategist | ~10-12 | https://www.facebook.com/ads/library/?id=1813697459973214 | WhatsApp | |
| Darren Ong | ~09-24 | https://www.facebook.com/ads/library/?id=1780678912971783 | Carousel | 4 ads |
| SG Home | ~06-15 | https://www.facebook.com/ads/library/?id=881451621699862 | EC grant | |
| EC Buyer | ~04-14 | https://www.facebook.com/ads/library/?id=1970152903615629 | Coastal living | |
| Pasir Ris EC | ~02-03 | https://www.facebook.com/ads/library/?id=1582244672812106 | Catalog | Broken title template |
| EC Buyer | ~01-27/28 | https://www.facebook.com/ads/library/?id=3971901826434822 | "Still considering" | 10 days after the 17 Jan launch |

The pull doesn't say which ads are still active. **Only 2 pages started ads in the last ~6 weeks** (Coastal Cabana page ~10-29, SN ~10-12), so the auction is quiet.

---

## 5. Project fact check

Rule: CONFIRMED = stated by at least one source I fetched (tag given). [NLP] is used where its figures agree with Stacked or OneMap, or where it is the only dated current figure. In that case I say so. UNCONFIRMED = not found on any source I could reach, or only from my own knowledge.

| Fact | Finding | Status | Source |
|---|---|---|---|
| Name | **Coastal Cabana** (Executive Condominium) | CONFIRMED | [DEV], [OM], [SHP] |
| Developer | Developer entity: **Pasir Ris Development Pte. Ltd.** (UEN 202436619N, Licence C1530). "Jointly developed by" **Qingjian Realty (South Pacific) Group** and **Forsea Holdings** [DEV]. Stacked also lists **ZACD Group and Jianan Capital** [SHP], [SHR], [SHL]. [NLP] lists Qingjian, Forsea and ZACD. **The JV list differs between sources.** Safe copy: "by Qingjian Realty & Forsea Holdings". | CONFIRMED (2 partners); ZACD/Jianan CONFIRMED by Stacked only | [DEV], [SHR] |
| Developer track record | Qingjian: **The Visionaire** EC ("first EC with smart-home tech", developer's words), Jadescape, Hillock Green [DEV]. Tenet EC, Altura EC, Bloomsbury Residences [SHP] | CONFIRMED | [DEV], [SHP] |
| Location | **Jalan Loyang Besar, Pasir Ris** (blocks 2–32, postal codes 5088xx). OneMap places the blocks around 1.3761–1.3769 N, 103.9566–103.9573 E. "Directly opposite Downtown East" [SHP]. It's in the **Loyang end of Pasir Ris**; say "Pasir Ris" in copy. Never use a district code (sources disagree on it anyway). | CONFIRMED | [OM], [SHP], [DEV] |
| Tenure | **99-year leasehold from 13 Nov 2024.** Executive condominium. **Not freehold**, so the "rare freehold" rule doesn't apply. | CONFIRMED | [DEV], [SHR] |
| TOP / vacant possession | **Expected 31 Mar 2029** (developer's VP date); "Q1 2029" (Stacked) | CONFIRMED | [DEV], [SHR] |
| Blocks / storeys | 16 point blocks, 11–12 storeys. 4 units and 2 lifts per floor. | CONFIRMED | [SHP], [SHR] |
| Units | 748. **Do not print (client rule).** | CONFIRMED (context only) | [SHP] |
| **Unit mix and sizes (project)** | 3BR Deluxe 872 sqft; 3BR Premium 915; 3BR Premium + Study 915; 4BR Classic 990; 4BR Deluxe 1,012; 4BR Premium 1,055; 4BR Premium + Study 1,163/1,216; 4BR Premium + Flexi 1,206; 5BR Premium 1,367/1,421. **Project range: 872–1,421 sqft.** | CONFIRMED | [SHR] |
| **Available now (05-Nov-2026)** | **3BR only (872–915 sqft), plus 1 × 5BR (1,367 sqft). 4BR not listed, so likely sold out.** Copy should say "3-bedroom homes from 872 sqft", not "3–5 bedroom". | CONFIRMED [NLP]; "4BR sold out" is my inference | [NLP], [SHM] |
| Preview prices (historic) | Indicative: **3BR from $1.438M ($1,649 psf); 4BR from $1.623M ($1,639 psf)**; 5BR TBA. Published 26 Nov 2025. | CONFIRMED (historic, do not use) | [SHP], [SHR] |
| Launch-day average | ~$1,734 psf (17 Jan 2026) | CONFIRMED | [SHL] |
| **Current entry prices** | **05-Nov-2026 [NLP]:** **3BR Deluxe (872 sqft) from $1.542M (~$1,806 psf avg)**; 3BR Premium (915) from $1.571M (~$1,776 psf); 3BR + Study Premium (915) from $1.580M (~$1,730 psf); 5BR Premium (1,367) from $2.411M (~$1,764 psf). **9 Oct 2026 [SHM]:** Deluxe from $1.54M, Premium from $1.57M (after discount); the 119 three-bedders ranged $1.54M–$1.68M, averaging $1,791 psf. **The two sources agree.** | CONFIRMED | [NLP], [SHM] |
| Developer discount | $10k off Deluxe, $12k off Premium / Premium + Study, **until end-2026**, on both normal and DPS prices | CONFIRMED (Stacked; not on [DEV]) | [SHM] |
| **Sales mode: old EC rules** | The site was awarded before the **8 May 2026** EC changes, so Coastal Cabana keeps the **5-year MOP** and still offers the **Deferred Payment Scheme (DPS)** [SHM], [SHJ]. Under the new rules (tender closing on or after 8 May 2026): 10-year MOP, no DPS, privatisation after 15 years, and first-timer priority of 90% for 2 years [SHE]. Canberra Drive is the first EC under the new rules [SHC]. **[SHE] lists 5 pipeline sites as exempt** (Senja Close, Sembawang Road, Miltonia Close, 2 × Woodlands Drive 17), so Coastal Cabana is **"among the last few"** 5-year-MOP ECs, **not "the last"** [SHJ]. | CONFIRMED (Stacked reporting MND; **not seen on an HDB/MND page**) | [SHE], [SHM], [SHJ] |
| MOP | **5 years**, counted from key collection [SHE] | CONFIRMED (secondary) | [SHM], [SHE] |
| Privatisation | **Fully privatised after 10 years** (old rule; [SHE] says new ECs move to 15 years). [SHM] says "after the 10th year" for Coastal Cabana. This doesn't conflict with the 5-year MOP: the MOP ends at year 5 (sale to SC/PR allowed) and full privatisation comes at year 10 (sale to foreigners allowed). **Never use it in ads** (see compliance). | CONFIRMED (secondary) | [SHE], [SHM] |
| **Income ceiling** | **$16,000 a month (household) applies to Coastal Cabana.** On 23 Aug 2026 the EC ceiling rose to $18,000, but **only for "new units in ECs with land sale tender closing dates on or after 24 August 2026". MND said it does not apply to balance units in existing ECs** [SHI]. [SHM]'s line "HDB raised the EC income ceiling… to $18,000 in August 2026" is incomplete. **Use $16,000 for this project.** | CONFIRMED (Stacked quoting MND); **HDB page unreachable, so verify** | [SHI], [SHJ] |
| Other eligibility (citizenship, family nucleus, private-property ownership, age, schemes) | Not confirmed on any fetched page. [SHJ] says only "married couples or family nuclei under a $16,000 monthly household income ceiling". My background knowledge (UNVERIFIED): at least one Singapore Citizen applicant plus another SC/PR in the family nucleus; no private property owned or disposed of in the last 30 months; Joint Singles Scheme at 35+; the 2nd-timer rules. **Check the developer's Eligibility Booklet or HDB.** | **UNCONFIRMED** | — |
| **CPF Housing Grant for EC** | **No HDB/CPF page reachable. No fetched source states the amount.** The only data point is SG Home's ad "Up to $30k Gov Grant*", a competitor claim with an asterisk. My background knowledge (UNVERIFIED, may be outdated): a Family Grant for first-timer families of **up to $30,000**, tiered by average monthly household income ($30k at ≤$10,000; $20k at $10,001–11,000; $10k at $11,001–12,000; nil above). **Do not print any grant amount until it's verified on hdb.gov.sg or in the Eligibility Booklet.** | **UNCONFIRMED** | (SG Home ad only) |
| **Nearest MRT** | **Pasir Ris MRT (EW1, East-West Line)**, which becomes the **Pasir Ris interchange with the Cross Island Line (CR5)** [WKC]. Straight-line from the project ≈ **0.88–0.94 km** [OM, my calc]; [NLP] gives ~920m. **Walk time conflict:** [SHR] says "~700m, roughly a 10-min walk", but 700m is shorter than the straight-line distance, so it can't be right. [SHP] says "about 1.2 km… not exactly walkable", with a Downtown East shuttle bus. **Walk minutes UNCONFIRMED. Don't print minutes.** | Station CONFIRMED; distance ~0.9km straight-line CONFIRMED; **walk time UNCONFIRMED** | [OM], [NLP], [SHP], [SHR] |
| Pasir Ris East MRT (Cross Island Line) | **Pasir Ris East MRT (CR4)**, at 20 Pasir Ris Drive 1. Straight-line ≈ **1.1 km** [OM]; [NLP] ~1.1km. CRL Phase 1 (Aviation Park to Bright Hill) is **targeted for 2030**. Loyang (CR3) is ~1.63km [NLP]. | CONFIRMED (planned) | [OM], [WKC], [NLP] |
| CRL route facts (my count from the line order) | From Pasir Ris East MRT: Pasir Ris MRT 1 stop, Hougang MRT 4 stops, Ang Mo Kio MRT 7 stops; Aviation Park 2 stops the other way | CONFIRMED (station order); the counts are my arithmetic | [WKC] |
| **Downtown East** | **~150m to E!Hub@Downtown East** ([NLP] and my OneMap calc agree), ~220m to the main Downtown East point. [SHR]: 290m, "1-min walk". "Directly opposite" [SHP]. Wild Wild Wet and the E!Avenue retail are part of the precinct. [DEV]: "a mega mall and thrilling theme parks just next door". | CONFIRMED (distance); walk minutes stated only by [SHR] | [OM], [NLP], [SHP], [SHR] |
| **Pasir Ris Beach** | "A short walk away" [SHP], [SHM]; "closest to the beach" of its peers [SHR]; "seafront precinct" [DEV]. **No source gives a metre figure.** My proxy: the beachfront Costa Sands Resort is ~340m straight-line. | CONFIRMED ("short walk"); distance UNCONFIRMED (~0.3–0.5km is my estimate) | [SHP], [SHR], [OM] |
| Pasir Ris Park | "Just around the corner" [SHR]. ~0.9km to the park's OneMap point. It's a long coastal park, so the nearest edge is closer. | CONFIRMED (approx.) | [SHR], [OM] |
| **Coney Island** | Coney Island Park is **~5.2km straight-line** [OM]. **Not near. Don't claim it.** | Checked: NOT near | [OM] |
| Sea views | **Some stacks only**, from about the 4th or 8th floor depending on orientation [SHR]. Developer claim: "THE ONLY SEA-VIEW EXECUTIVE CONDOMINIUM IN 12 YEARS" [DEV]. [SHM]: "first new EC on Jalan Loyang Besar since Sea Horizon (2013)". | CONFIRMED (selected stacks); the "only in 12 years" claim is the developer's own | [SHR], [DEV], [SHM] |
| **Schools** (straight-line from the site) | **Casuarina Primary School ~450m** [OM] ([SHR]: "under 1km"). **Hai Sing Catholic School (secondary)**: new campus at 9 Pasir Ris Drive 6, ~360m (OneMap marks it "U/C"; the old campus is labelled "till 31 Dec 2025"). [SHR] says 550m / 8-min walk. **Pasir Ris Primary School ~790m** [OM]. White Sands Primary ~1.3km [OM]. Elias Park Primary is "under 2km" [SHR]. Pasir Ris Crest Secondary 1.1km and Loyang View Secondary 1.2km [SHR]. | CONFIRMED (approx. straight-line); Hai Sing's campus status needs checking | [OM], [SHR] |
| White Sands (mall) | ~0.92km straight-line, next to Pasir Ris MRT. [SHR]: 1.2km, 5-min drive | CONFIRMED | [OM], [SHR] |
| Pasir Ris Mall | ~0.96km straight-line (7 Pasir Ris Central, next to the MRT). [SHP] (Nov 2025) called it "upcoming". **Whether it's open now is UNCONFIRMED.** | Location CONFIRMED; open status UNCONFIRMED | [OM], [SHP] |
| Loyang Point / Elias Mall | 1.8km / 2.1km, 5–6-min drive | CONFIRMED | [SHR] |
| Facilities | [DEV]: "**Over 65 resort-style facilities, including 4 pools and a grand 2-storey clubhouse**". [SHR]: **two 50m lap pools**, family pool, splash pool, zen foot spa, 1 tennis court, gym, yoga studio, kids' adventure park, fitness park. "Coastal Club" clubhouse with 4 function rooms, 2 BBQ courtyards, kids' club, music/social/games/karaoke rooms. Portside and Starboard Decks on the upper floors of Blocks 2 and 4. Air-conditioned arrival lounge [SHP]. | CONFIRMED | [DEV], [SHR], [SHP] |
| Design highlights | Point blocks (more windows, more privacy); **no stacks facing direct west sun**; 2.8m ceilings; PPVC with some removable internal walls; 1:1 parking (8 EV lots); Bosch kitchen appliances, Hansgrohe rain showers, Roca WCs; ~20–22m between blocks | CONFIRMED (Stacked review) | [SHR] |
| Known cons (for objection handling, not ads) | MRT not really walkable; only 1 tennis court; small balconies (~6 sqm); fridge and washer-dryer not provided; "conventional" architecture; premium over nearby resale ECs | CONFIRMED | [SHR], [SHP] |
| **Drive times** (peak, 8:30am) | Changi Airport 5.5km, **8–22 min**; Paya Lebar Quarter 20–45 min; Raffles Place 30–60 min; Orchard 28–55 min; Waterway Point 14–35 min. TPE access via the Pasir Ris Flyover. | CONFIRMED (Stacked, as ranges). Print only as ranges with "approx., peak hour" | [SHR] |
| CRL connectivity claim (developer) | "CRL will significantly improve connectivity… reducing the number of stations travelled" | Developer claim | [DEV] |
| Comparables (context only, never print) | Aurelle of Tampines 3BR from $1.417M (2025). Rivelle (Tampines) sold out. Canberra Drive EC land at a record $825 psf ppr, with analysts expecting ~$1,900–2,000 psf. Watercolours and Sea Horizon resale ~$1,240–1,290 psf. | CONFIRMED (context) | [SHP], [SHM], [SHR] |

**Distance method:** haversine-style straight-line distances from OneMap coordinates. The origin was the project centroid ≈ 1.37650, 103.95695 (the average of the OneMap block points for 6–32 Jalan Loyang Besar). Targets: Pasir Ris MRT EW1 1.373043, 103.949285; Pasir Ris East MRT CR4 1.367129, 103.960557; E!Hub@Downtown East 1.376343, 103.955649; Downtown East 1.376914, 103.955037; Costa Sands Resort 1.379127, 103.955445; Pasir Ris Park 1.381227, 103.950468; Coney Island Park 1.408831, 103.922617; Casuarina Primary 1.372461, 103.957020; Hai Sing Catholic (U/C) 1.374337, 103.954545; Pasir Ris Primary 1.372419, 103.962807; White Sands Primary 1.365557, 103.960919; White Sands 1.372450, 103.949716; Pasir Ris Mall 1.373824, 103.948749. **These are not walking distances.**

---

## 6. Price rule outcome

**Price does NOT go in any Coastal Cabana ad. That includes the Direct ad.**

- **The entry price is $1.542M** (3BR Deluxe, 872 sqft), per newlaunches.sg updated **05-Nov-2026** [NLP]. Stacked has **$1.54M after discount** on **9 Oct 2026** [SHM]. That is **$142k over the $1.4M cap.**
- Even the **preview indicative price ($1.438M, Nov 2025)** was over the cap, so price has never qualified for this project.
- No price, psf or monthly figure goes anywhere: not the headline, the subhead or the fine print. The **Price slot can't be "Price Coming Soon"** either, because prices are out. **Replace it** with a hot-USP ad (see the USP table).
- **Re-check only if** the developer cuts prices enough to bring a unit to $1.4M or less. The current discount is $10–12k, so that is very unlikely.

## 7. CTA recommendation

**"GET PRICE LIST & E-BROCHURE"** on all ads.
- **The price list is released.** The project has been selling since 17 Jan 2026 with published prices ([SHM], [NLP]), and the developer has a brochure (`Coastal Cabana-Brochure.pdf` on [DEV]). Per SKILL.md, a project with a real released price list uses this CTA.
- **"REGISTER YOUR INTEREST" would be wrong.** It signals pre-launch, and this project launched 10 months ago.
- **Fulfilment conditions (for form/LP and sales):**
  1. The price list sent must be the **current balance-unit list**: 3BR, plus the single 5BR.
  2. The e-brochure must be the developer's. Confirm the rights first.
  3. The lead must not be promised 4BR units.
- An optional secondary offer that fits the stage: "**View the show flat**". The developer's own line is "now open for viewing". Use it in primary text or as a form question, not as a "preview" promise.
- Meta button suggestion: "Download" or "Get quote" style, matched to the banner. That's copy/LP's call.

## 8. EC compliance notes (what ads must not claim / must disclose)

**Eligibility**
1. **Never imply anyone can buy.** Use an "EC eligibility conditions apply" line in the fine print or primary text. Confirm the exact wording with QA.
2. **Income ceiling: $16,000 for this project.** **Never print "$18,000"** for Coastal Cabana; the higher ceiling doesn't apply to balance units in existing ECs [SHI]. Put an eligibility check into the lead form (household income ≤$16,000, SC applicant, family nucleus, no private property in the last 30 months), worded as "Are you eligible to buy an EC?". This is a lead-quality filter, **not targeting**. The Housing special ad category bans income targeting.
3. Don't target or self-ID by age, income, family status or postcode in targeting. Copy may speak to "families", but that's message only.

**Grant**
4. **Do not print a grant amount until it is verified** on hdb.gov.sg or in the developer's Eligibility Booklet (UNCONFIRMED in this session).
5. If it's verified and used: say "**up to** $X", and add "**subject to HDB eligibility and income conditions**" and "for eligible first-timer families". **Never net the grant off a price**, and never imply every buyer gets it.

**No investment, MOP or privatisation-gain claims** (brand.md bans projected returns)
6. **Banned:** "profit after MOP", "privatisation upside", "becomes a private condo, so it's worth more", "sell at year 5 / year 10 for gains", "Sell 1 Buy 2", annualised-return or profit tables (Stacked's EC resale profit table must not appear), "cheaper than Canberra so instant equity", and "CRL will boost value".
7. **"5-year MOP" is a factual rule and may be stated plainly**, e.g. "Under the earlier EC rules: 5-year MOP and Deferred Payment Scheme available". Pair it with no outcome language. **Never say "the last 5-year-MOP EC"**, because 5 pipeline ECs are also exempt [SHE]. "One of the last few" is sourced [SHJ] but drifts into urgency, so QA should check it.
8. **DPS:** if it's mentioned, disclose that **deferred-payment prices differ from normal-scheme prices** (the developer has separate price columns [SHM]) and that the terms are the developer's.
9. Don't mention privatisation at all in ads. It's an investment cue.

**Stage, product and other representations**
10. **No "preview", "VVIP preview", "launching soon", "register before launch" or "be the first".** It's launched.
11. **No "% sold", "only X units left" or "last units"** (client rule), and no unit counts.
12. **No 4BR offer.** It looks sold out. Use "3-bedroom homes from 872 sqft".
13. **Sea views:** say "**sea views from selected units**" or attribute the developer's claim. Never imply every unit has one. Treat "The only sea-view EC in 12 years" as the developer's claim. If it's used at all, it goes in primary text with attribution and needs QA sign-off. It's not a GoAhead hook.
14. **MRT:** no walk minutes (unconfirmed, and the sources conflict). Always use full names: "Pasir Ris MRT" and "Pasir Ris East MRT (Cross Island Line, from 2030)". Write "upcoming" or "planned (LTA target 2030)" for the CRL.
15. **Schools:** "near Casuarina Primary School", with the fine print "distances approx. Admission subject to MOE rules". Don't imply priority admission.
16. **Images:** the project is uncompleted, so all exterior and facility visuals are artist's impressions. Use "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*" for an official render if the rights are confirmed, and "*IMAGE SAMPLE ONLY*" for a generic AI image. **No Coney Island imagery.**
17. **Don't imply developer status.** Other pages carry the project name; GoAhead must read as a consultant/agency. CEA authorisation to market this project is open (same as Amber House S3).
18. Avoid "near Coney Island" (~5.2km).

---

## Observations vs interpretations

**Observations (what the data shows):**
- About 6 relevant pages. The headlines are: name only, "coastal living", "still considering", a generic EC grant line, a carousel and WhatsApp. [raw pull]
- Only 2 pages started ads in the last ~6 weeks. [raw pull]
- **No headline in the pull** mentions:
  - Downtown East or the theme parks
  - schools
  - the 5-year MOP or DPS
  - facilities, sea views or the Cross Island Line
  - a price list or e-brochure. [raw pull]
- The project launched 17 Jan 2026. ~85% was sold by 05-Nov-2026, with only 3BR (plus one 5BR) left. [SHL], [NLP]
- The entry price is $1.542M (05-Nov-2026). [NLP], [SHM]
- The site is ~0.9km straight-line from Pasir Ris MRT, ~1.1km from Pasir Ris East MRT (CRL 2030), and ~150m from E!Hub@Downtown East. [OM], [NLP]
- The developer's own messaging leads with "Seaside living, mallside convenience", "the only sea-view EC in 12 years" and "65+ facilities, 4 pools". [DEV]
- The developer offers a $10–12k discount until end-2026. [SHM]
- The creative bodies couldn't be seen (403), and HDB pages couldn't be reached (404).

**Interpretations (our read, and what to do about it):**
- **The competition is thin and stale.** Most competitor ads date from Jan–Jun 2026. Almost every specific angle is open.
- **"Coastal living" is the one angle that's used**, by EC Buyer and by the developer. "Coastal" alone won't differentiate. The white space is in being **specific**: "Downtown East across the road, Pasir Ris Beach a short walk".
- **The audience is narrower than for the other projects.** Buyers must be EC-eligible ($16k ceiling), and only 3BR (~872–915 sqft) at $1.54–1.68M remain. Expect higher CPL than Arcady or Hougang (S$22–31), closer to Amber House's late-stage pattern (85% sold, thin pool, S$35–65). That's an inference from the Amber House precedent, not data.
- **The real hook is the 5-year MOP under the old EC rules.** It's topical (the May 2026 rule change), no competitor runs it, and it's factual. **The compliance risk is high, though.** It must stay a plain fact ("5-year MOP, Deferred Payment Scheme available"), with no gain framing. QA should check the wording.
- **The "still considering" pattern (EC Buyer, Jan)** shows agents are running follow-up ads. For GoAhead, a calm "show flat is open, here's the current price list" fits a launched project better than urgency.
- **MRT is a weakness, not a USP.** At ~0.9km straight-line, and with Stacked saying "not exactly walkable", the MRT slot should become a **location/route angle**: Downtown East + beach + the future CRL station. A walk-time headline isn't possible.
- **Lead quality:** the form must filter for EC eligibility and a budget of about S$1.5M+. Otherwise the blind angles will pull ineligible or under-budget leads.

---

## 9. Hot USPs: top 6, ranked

Buyer codes: F = young family, U = HDB upgrader (first-timer or eligible second-timer), P = young couple/professional. Investors are mostly not eligible or relevant (EC rules), so there are **no investor hooks**. All hooks are name-free and price-free, so they work on the hidden-name angles. The Direct ad adds "Coastal Cabana EC". Strength (1–5) is my estimate of thumb-stop power × compliance safety × confirmation, discounted for saturation.

| Rank | USP | Strength | Saturation | Target buyer | Emotional hook (headline) | Factual subhead direction | Best angle slot |
|---|---|---|---|---|---|---|---|
| 1 | **Downtown East across the road, beach a short walk:** ~150m to E!Hub@Downtown East, Pasir Ris Beach and Pasir Ris Park "a short walk / around the corner". [OM], [NLP], [SHP], [SHR] | **5** | Low to medium. "Coastal living" is used generically; nobody names Downtown East. | F, P | "Weekends at the beach. Every weekend." (alt: "What if the beach was your backyard?") | "New EC in Pasir Ris, opposite Downtown East, a short walk to Pasir Ris Beach & Pasir Ris Park." | **Direct** lead, plus a Blind lifestyle collage |
| 2 | **A 3-bedroom family EC near schools:** 3BR from 872 sqft; Casuarina Primary School ~450m, Hai Sing Catholic School ~360m (straight-line). Family facilities: kids' adventure park, family and splash pools, kids' club. [OM], [SHR] | **4** | None | F, U | "Looking for a home for your family?" | "3-bedroom EC homes from 872 sqft, near Casuarina Primary School & Downtown East." Fine print: "Distances approx. Admission subject to MOE rules." | **Blind** (need-led) |
| 3 | **5-year MOP + Deferred Payment Scheme (earlier EC rules):** new ECs from May 2026 carry a 10-year MOP and no DPS; this one keeps 5 years and DPS. [SHE], [SHM], [SHJ] | **4** (high compliance care) | **None** | U, F | "EC rules changed in May. This one didn't." | "New EC in Pasir Ris under the earlier rules: 5-year MOP, Deferred Payment Scheme available." Fine print: "EC eligibility conditions apply. DPS prices differ from normal-scheme prices." **No gain wording.** | Replaces the retired **Price** slot |
| 4 | **Resort living, 65+ facilities:** 4 pools including two 50m lap pools, a 2-storey clubhouse, upper-floor sky decks, BBQ courtyards. Point blocks with no west-sun stacks, 2.8m ceilings. [DEV], [SHR] | **3** | Low in ads (it's the developer's own line) | F, P | "Resort weekends without the booking." | "New EC with 4 pools, a 2-storey clubhouse & 65+ facilities, opposite Downtown East." | Blind (photo-led) or Floor layout support |
| 5 | **Floor-plan-led space story:** efficient 872–915 sqft 3BR layouts, a Premium + Study option, PPVC with some removable walls. [SHR], [NLP] | **3** | None (no one uses plans) | F, U | "See how 3 bedrooms fit in 872 sqft." | "3-bedroom EC layouts from 872 sqft in Pasir Ris." **Use only the real 3BR plans (rights needed).** Never show a 4BR plan. | **Floor layout** |
| 6 | **The coastal east with a second MRT line coming:** Pasir Ris MRT (East-West Line, ~0.9km), Pasir Ris East MRT on the Cross Island Line (~1.1km, target 2030), Changi Airport ~8–22 min drive at peak. [OM], [WKC], [SHR] | **2** | None, but the facts are weak (not walkable) | P (airport/east workers), U | "Life in the east, with a new MRT line on the way." | "Near Pasir Ris MRT & the upcoming Pasir Ris East MRT (Cross Island Line, from 2030), opposite Downtown East." **No walk minutes.** | **MRT** (route/map graphic, reframed as location) |

**Held, pending verification:** "**Up to $30k CPF Housing Grant for eligible EC families**" would score 3–4, but **the amount is UNCONFIRMED** (no HDB page was reachable). SG Home uses it generically. If it's verified, it can replace USP 6 or support USP 3, with the full conditions disclaimer.

**Not recommended:**
- Any price, psf, monthly figure or "from $1.5xM" (over the cap).
- "Preview", "VVIP" or "launching soon" (wrong stage).
- "% sold", "last units" or unit counts (client rule).
- 4BR (sold out).
- MRT walk minutes (unconfirmed and conflicting).
- "Near Coney Island" (~5.2km).
- "The last 5-year-MOP EC" (inaccurate).
- Privatisation or resale gains, the resale profit tables, "cheaper than Canberra" (gain implication, and price-led).
- The "$18k income ceiling" (doesn't apply to this project).
- An unattributed "only sea-view EC in 12 years".
- Any district code (banned, and sources disagree).

---

## Downstream conflicts (for the copywriter/static-designer; I am not editing their files)
1. **The user's label "(preview)" doesn't match the stage.** The project launched 17 Jan 2026. Copy must not say "preview". Suggest "show flat open for viewing".
2. **The 5-angle mapping changes for this project:**
   - The Price slot is replaced by USP 3 (MOP/DPS).
   - The MRT slot becomes a location/route ad with no minutes.
   - The Floor layout slot uses the 3BR plans only.
3. **Developer site and our offer:** [DEV] still says "3- to 5-bedroom". Our ads and form should say 3-bedroom, and the form's unit-type question should offer 3BR (plus "5BR, 1 unit, ask"). Don't offer 4BR.
4. **Lead form:** add an EC-eligibility question with the $16,000 ceiling, and a budget question (S$1.5M+).
5. Don't link `newlaunches.sg` or the unverified FB pages from forms or LPs.

## Gaps
- **HDB official EC eligibility and the CPF Housing Grant for EC:** not reachable (all 404). The grant amount and tiers are UNCONFIRMED. The $16k ceiling and the MOP/DPS/privatisation rules rest on Stacked quoting MND. **Next step:** someone opens hdb.gov.sg in a browser, or reads the developer's Eligibility Booklet PDF (it downloaded but couldn't be parsed).
- **Ad creatives:** body text, visuals and CTAs of all ~12 ads are unknown (Facebook 403).
- **"4BR sold out"** is inferred from the [NLP] table. Confirm it with the developer's current price list.
- **Walk time to Pasir Ris MRT:** sources conflict (700m/10 min vs 1.2km "not walkable"). The straight-line distance is ~0.9km. Whether the shuttle bus still runs is unknown.
- **Beach distance in metres:** unpublished. ~0.3–0.5km is my estimate.
- **Pasir Ris Mall open status** and **Hai Sing Catholic's new campus status:** unconfirmed.
- **Who runs coastalcabana.com.sg and the "Coastal Cabana" FB page:** unknown.
- **The full JV list:** [DEV] gives 2 partners, Stacked gives 4.
- **Our own account history for Coastal Cabana:** none found in the pull. I have no MCP, so performance should check whether any GoAhead ad has run.
- **CEA authorisation** for GoAhead to market this project: open.
- **Rights to the developer's floor plans, renders and brochure:** unconfirmed. The user must confirm before any is used.
