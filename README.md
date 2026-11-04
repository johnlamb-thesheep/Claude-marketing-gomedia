# claude-marketing

A Claude Code marketing agent team: a full pipeline (researcher → strategist → copywriter → static-designer / video-designer → landing-page → qa → tracking → performance) plus the skills and client data it runs on. Each agent is a focused specialist with its own tools and primary skill — none of them improvise outside their lane, and nothing moves to the next stage without a file being written and (at two points) your explicit approval.

## Requirements — this needs Claude Code, not the regular claude.ai chat

This repo only works inside **Claude Code** (the CLI, the desktop app, or an IDE extension) — not a normal claude.ai web chat conversation. The reason: `CLAUDE.md`, `.claude/agents/`, and `.claude/skills/` are Claude Code *project* conventions. Claude Code reads them automatically when it's opened with this folder as the working directory — that's what turns them into real, callable agents and skills instead of just text files.

**If a teammate without Claude Code (or without a plan that includes it) pastes this GitHub link into a normal claude.ai chat:**
- This repo is **private**, so unless that chat has a connected GitHub integration with access to it, Claude won't even be able to open the link — it'll just fail to fetch.
- Even if it could read the files (say, the repo were public, or they pasted the raw text in), regular chat has no working directory and no local file system access. Claude could read `CLAUDE.md` and the agent files as reference material and *talk about* the pipeline, but it cannot actually dispatch the 9 agents, write files into `clients/<client>/campaigns/`, run `/upload`, or do anything the approval gates are designed to gate — there's no project for any of that to operate on.
- So at best it becomes a one-off conversation about what the repo contains, not the working agent team.

**What they actually need:** Claude Code itself (available with a Claude Pro/Max/Team/Enterprise subscription, or pay-as-you-go via an Anthropic Console API key — worth checking the current options at claude.com/code, since this changes over time) plus this repo cloned locally. Once that's true, open the folder and say "set this up" — see below.

## First time on a new computer?

Open this repo in Claude Code and say something like **"set this up"** — it runs the `setup-marketing-team` skill, which:
- gets this project into `<Documents>/claude-marketing` so it's in a stable, permanent place
- checks `git`/`gh` are installed and authenticated
- flags any skill-specific setup you still need to do by hand (installing a skill's Python requirements, filling in a `.env`)
- tells you which MCP integrations (ad platforms, Canva, sheets, etc.) you need to connect yourself in your own Claude account — those are per-account and can't be cloned

See `.claude/skills/setup-marketing-team/SKILL.md` for exactly what it does and doesn't do.

## How it works day to day

Read `CLAUDE.md` — it governs every agent in `.claude/agents/` and lays out the pipeline, the hard rules (approval gates before anything launches or spends money, file-based handoffs, etc.), and where each client's data lives under `clients/<client>/`.

To push changes back to this repo, use the `/upload` command rather than raw git commands — it scans changed files for secrets before committing.

## The team, at a glance

![GoMedia Marketing Agent Team — one hub, nine specialist agents](docs/agent-team.jpg)

One hub, nine specialists. Every agent below reports into the same pipeline shown at the top — `brand.md → brief → copy → creative → qa → results` — and writes a single named file (shown on each card) for the next agent to read. Two of the nine get a highlighted icon here (Copywriter and QA) because they sit right before the pipeline's two hard approval gates: nothing moves past a copy draft or a finished campaign without you signing off in chat first. The `optional` tag on Researcher means the strategist can skip straight to the brief when `brand.md` and prior `learnings.md` already give enough signal.

See the table below for the full detail on what each agent does, which skill it leans on primarily, and which tools it's allowed to use.

For the full animated version (card-by-card detail, skills/tools per agent, a pulse that walks the pipeline in order, plus the two approval gates and parallel branches shown explicitly) open [`docs/agent-pipeline.html`](docs/agent-pipeline.html) in a browser after cloning. The source for the hub diagram above lives at [`docs/agent-hub.html`](docs/agent-hub.html) if you want to edit and re-screenshot it.

## Meet the team — 9 agents, 2 hard-stop approvals

Every agent hands off through **files only** — no agent relies on conversational memory to pass work along. Each one reads `clients/<client>/brand.md` and `clients/<client>/learnings.md` before starting, then writes a single file into `clients/<client>/campaigns/<YYYY-MM-name>/` for the next agent to pick up. The two bracketed steps below are hard stops: nothing proceeds past them without your explicit approval in chat.

```
researcher (optional)
  → strategist
    → [YOU APPROVE brief.md]
      → copywriter
        → static-designer  ┐ (parallel)
        → video-designer   ┘
          → landing-page (if needed)
            → qa
              → [YOU APPROVE before launch]
                → tracking   ┐ (parallel, after launch)
                → performance┘
                  → learnings.md  ──┐
                                    │ (strategist reads this before every new brief)
                  ◄─────────────────┘
```

| # | Agent | What it does | Primary skill(s) | Tools | Writes |
|---|---|---|---|---|---|
| — | **Researcher** *(optional)* | Pulls competitor ads and market patterns before the strategist writes a brief. Skipped when `brand.md` and prior learnings already give enough signal. | `meta-ads-library` (fallback: `ads-competitor`) | Read, Write, Glob, WebFetch | `research.md` |
| 1 | **Strategist** | Foundation mode: owns positioning/offer/ICP, maintains `brand.md`. Campaign mode: writes the brief — goal, KPI, ICP segment, up to 3 angles each with a hypothesis + proof, and a test plan. | `positioning-offer-report` / `product-marketing` (foundation); `ad-creative-brief` + `ad-creative-test-plan` (campaign) | Read, Write, Glob | `brand.md` / `brief.md` + `test-plan.md` |
| — | ⏸ **Approval gate 1** | Hard stop. No agent proceeds past an unapproved brief. | — | — | — |
| 2 | **Copywriter** | Turns the *approved* brief into testable ad copy — one row per variant with angle, hook type, ICP segment, and source. | `ad-creative` (`ad-copy-variants` only for fatigue replacements) | Read, Write, Glob, WebFetch | `copy.md` |
| 3 | **Static Designer** | Writes a creative spec per concept and stops for approval before generating anything — then states the estimated cost before every paid image batch. | `static-ad-concept-generator` (ideation), `generating-image-ads` (generation), `ads-dna` (brand look) | Read, Write, Glob, Bash | `creative-spec.md` + images |
| 3 | **Video Designer** *(parallel with Static Designer)* | Writes video scripts — hook variants, shot list, generator prompts. Never calls a paid video-generation API without separate, explicit approval. | `ugc-ad-scripts` + `ad-hook-analyzer`; framework reference from `video-ad-generator` | Read, Write, Glob | `video-script.md` |
| 4 | **Landing Page** *(if needed)* | Writes the LP brief so the headline echoes the winning ad's hook, builds the page, then audits its own output against someone else's checklist rather than its own judgment. | `copywriting` + `cro` (build/copy); `ads-landing` (self-audit) | Read, Write, Glob, Bash | `lp-brief.md` + the page |
| 5 | **QA** | Checks every other agent's output against `brand.md`, Meta ad policy, and Singapore advertising/compliance rules. Never edits — only reports failures back. The last gate before launch approval. | `ads-creative` + manual brand-review vs `brand.md` | Read, Write, Glob | `qa.md` |
| — | ⏸ **Approval gate 2** | Hard stop. Nothing is published, launched, uploaded, or spends money — including paid generation — without explicit approval and a stated cost. | — | — | — |
| 6 | **Tracking** *(after launch, parallel with Performance)* | Read-only. Checks pixel/CAPI health and whether lead-status is feeding back to Meta. Never changes the ad account — only flags issues. | `facebook-ads` (reference) + manual checks | Read, Write, Glob | `tracking.md` |
| 6 | **Performance** *(parallel with Tracking)* | Read-only. Pulls results, then `ad-creative-fatigue` renders the **final** verdict on any creative/kill/scale decision — nothing else overrides it. Never touches the ad account. | `ad-creative-fatigue` (final decider), `meta-ads-auditor`, `ad-account-diagnostic` | Read, Write, Glob | `results.md` + appends a row to `learnings.md` |

**The loop:** Performance appends one row to `learnings.md` per finished test (date, angle, result, takeaway). The strategist reads that file before every new brief, so each campaign builds on the last instead of starting cold.

**24 skills total** live in `.claude/skills/` — 23 marketing skills the agents above pull from, plus `setup-marketing-team` for onboarding (see above). The table above lists only each agent's *primary* skill(s); several agents reference others for specific situations — see each agent's file in `.claude/agents/` and the routing table in `CLAUDE.md` for the complete picture.
