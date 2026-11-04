# claude-marketing

A Claude Code marketing agent team: a full pipeline (researcher → strategist → copywriter → static-designer / video-designer → landing-page → qa → tracking → performance) plus the skills and client data it runs on.

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
