"""Generate PLACEHOLDER dashboard data (no real client numbers).

Usage: python dashboards/scripts/make_demo_data.py
Writes dashboards/public/data/<slug>.json in the same shape the live
Meta pull will produce later, so the pages don't change when real data lands.
"""
import json
import random
from datetime import date, timedelta
from pathlib import Path

SLUG = "demo-7Kq2xP9w"
DAYS = 90
END = date(2026, 11, 5)
random.seed(42)

campaigns = [
    {"id": "c1", "name": "Project A – Cold Lead Form"},
    {"id": "c2", "name": "Project B – Price List Offer"},
    {"id": "c3", "name": "New Launch Cheatsheet"},
    {"id": "c4", "name": "Video Awareness Retargeting"},
]

ads = [
    {"id": "a1", "campaignId": "c1", "title": "Get Free Full Price List & E-brochure",
     "primaryText": "For a limited time, selected brand-new units are available with exclusive developer pricing. Tap to get the full price list.",
     "label": "Price List", "color": "#3b4252", "strength": 1.6},
    {"id": "a2", "campaignId": "c1", "title": "Walk to MRT in 5 Minutes",
     "primaryText": "Freehold living, 5 minutes to the MRT. See the floor plans and current availability.",
     "label": "Location", "color": "#5e6b7d", "strength": 1.1},
    {"id": "a3", "campaignId": "c2", "title": "Direct Developer Discount",
     "primaryText": "Brand-new units, not resale. Limited units left at launch pricing.",
     "label": "Discount", "color": "#8c2f2f", "strength": 1.3},
    {"id": "a4", "campaignId": "c2", "title": "1BR to 5BR – See Prices",
     "primaryText": "Compare every bedroom type side by side. Prices from $1.1m.",
     "label": "Unit Mix", "color": "#a0522d", "strength": 0.8},
    {"id": "a5", "campaignId": "c3", "title": "Singapore New Launch Cheatsheet",
     "primaryText": "All current new launches in one place: prices, discounts and promotions. Free download.",
     "label": "Cheatsheet", "color": "#1f4e79", "strength": 1.0},
    {"id": "a6", "campaignId": "c3", "title": "Free Guide – Compare Launches",
     "primaryText": "Save time. Compare, decide, invest smarter with our free guide.",
     "label": "Guide", "color": "#2e6f95", "strength": 0.6},
    {"id": "a7", "campaignId": "c4", "title": "Show Flat Walkthrough",
     "primaryText": "Take a 30-second tour of the show flat.",
     "label": "Video", "color": "#3a5a40", "strength": 0.25},
    {"id": "a8", "campaignId": "c4", "title": "Facilities Tour",
     "primaryText": "Pool, gym and sky garden – see it in 20 seconds.",
     "label": "Video", "color": "#588157", "strength": 0.2},
]

for i, a in enumerate(ads, 1):
    a["postUrl"] = "#"  # placeholder – live version links to the Facebook post
    a["placeholderNo"] = i

daily = []
for d in range(DAYS):
    day = END - timedelta(days=DAYS - 1 - d)
    trend = 0.85 + 0.3 * (d / DAYS)  # slowly improving
    if d >= DAYS - 7:
        trend *= 1.35  # last week better, to match the sample AI summary
    for a in ads:
        spend = round(random.uniform(4, 14) * (1.4 if a["campaignId"] == "c4" else 1), 2)
        cpm = random.uniform(9, 16)
        impressions = int(spend / cpm * 1000)
        ctr = random.uniform(0.004, 0.012) * (0.5 if a["campaignId"] == "c4" else 1)
        clicks = int(impressions * ctr)
        link_clicks = int(clicks * random.uniform(0.6, 0.85))
        lam = spend / 14 * a["strength"] * trend
        leads = sum(1 for _ in range(8) if random.random() < lam / 8)
        daily.append({
            "date": day.isoformat(), "adId": a["id"], "spend": spend,
            "impressions": impressions, "reach": int(impressions / random.uniform(1.4, 2.2)),
            "clicks": clicks, "linkClicks": link_clicks, "leads": leads,
        })

data = {
    "placeholder": True,
    "client": {"name": "Demo Agent", "accountName": "Demo Agent – Ad Account",
               "currency": "SGD", "monthlyBudget": 1500, "logoText": "GOAHEAD",
               "tagline": "Your Next Move Begins"},
    "updatedAt": f"{END.isoformat()}T09:00:00+08:00",
    "campaigns": campaigns,
    "ads": [{k: v for k, v in a.items() if k != "strength"} for a in ads],
    "daily": daily,
    "insights": {
        "generatedAt": f"{END.isoformat()}T09:00:00+08:00",
        "period": "Last 7 days vs previous 7 days",
        "summary": "PLACEHOLDER – this text will be written by AI from the real numbers. "
                   "Lead volume rose versus the previous week while cost per lead came down, "
                   "driven mainly by the Price List offer. Click-through rate softened slightly, "
                   "a first sign the top creatives are being seen too often.",
        "byCampaign": [
            {"name": "Project A – Cold Lead Form", "text": "Top volume contributor; the Price List creative carries most leads at the lowest CPL."},
            {"name": "Project B – Price List Offer", "text": "Steady leads, but CPL is climbing on the unit-mix creative."},
            {"name": "Video Awareness Retargeting", "text": "Reaching people cheaply but not producing direct leads, as expected for awareness."},
        ],
        "actions": [
            "Move budget toward the Price List creative in Project A.",
            "Refresh the unit-mix creative in Project B with a new hook.",
            "Add one 9:16 Reels version of the best static to test placements.",
        ],
    },
}

out = Path(__file__).resolve().parent.parent / "public" / "data" / f"{SLUG}.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(data, indent=1), encoding="utf-8")
print(f"wrote {out} ({len(daily)} daily rows)")
