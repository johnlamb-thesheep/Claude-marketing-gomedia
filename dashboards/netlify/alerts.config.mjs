// Ad alerts (Slack) for GoMedia's own campaigns in the shared Meta ad account.
// Change targets or thresholds here, then redeploy. Rules follow
// .claude/skills/ads/references/meta-decision-system.md (everything is a multiple of target CPL).
// Slack recipients and secrets are NOT here: they are Netlify env vars (see dashboards/README.md).

export const ALERTS = {
  accountId: "903306407477320",
  timezone: "Asia/Singapore",

  // Campaign groups. A campaign belongs to a group when its name contains ALL of `include`
  // (case-insensitive) and NONE of `exclude` (filters from CLAUDE.md > Clients).
  groups: [
    { key: "trade", label: "Trade marketing (GoMedia)", targetCpl: 30, include: ["trade marketing"], exclude: [] },
    { key: "fulfil", label: "Fulfillment · GoAhead buyer", targetCpl: 25, include: ["buyer"], exclude: ["r&f", "sky", "jess", "gomedia"] },
  ],

  // Daily Slack DM: weekdays at this local hour (the job runs hourly; sends once per day)
  dailyHour: 9,
  dailyDays: [1, 2, 3, 4, 5], // Mon-Fri (0 = Sunday). Monday also gets the weekly recap.
  maxPerSection: 5,
  repeatAfterDays: 7, // an ad already flagged is not repeated for this long unless it gets worse

  rules: {
    // Opportunity: lifetime spend < spendMultiple × target CPL, running >= minAgeDays,
    // AND an early positive sign (a lead at/below target CPL, or link CTR >= campaign median)
    opportunity: { spendMultiple: 2, minAgeDays: 3, minImpressionsForCtr: 500 },
    // Starved: same spend line, running >= 7 days, no positive sign -> only counted, not listed
    starvedAgeDays: 7,
    // Fatigue (last 7 complete days vs the 7 before): only judged once lifetime spend >= 3× target
    // and last-7-day spend >= 1× target
    fatigue: {
      minLifetimeMultiple: 3, minWeekMultiple: 1, minImpressions: 1000,
      frequencyWarn: 2.5, frequencyCritical: 4,
      ctrDrop: 0.2, ctrDropRetire: 0.3, cpmRise: 0.3, cplMultiple: 1.5,
    },
    // Low CTR: last 7 days, >= minImpressions, link CTR below `ratio` × campaign median
    lowCtr: { minImpressions: 1000, ratio: 0.5 },
  },
};
