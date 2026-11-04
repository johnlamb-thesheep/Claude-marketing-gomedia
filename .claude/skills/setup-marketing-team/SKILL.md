---
name: setup-marketing-team
description: "One-time onboarding for the claude-marketing agent team on a new computer. Clones (or locates and updates) this repo into the user's Documents folder as 'claude-marketing', verifies git and the GitHub CLI are installed and authenticated, checks for per-skill prerequisites (e.g. facebook-ads needs a .env), and walks the user through connecting the MCP integrations the team uses. Use when the user says things like 'set this up', 'set up the marketing team', 'install this on my computer', 'first time setup', 'get this working here', or opens this repo for the first time and asks what to do next. Does not connect MCP integrations itself (account-specific, can't be automated) — it tells the user exactly what to connect and where."
license: MIT
metadata:
  author: setup-marketing-team
  version: "1.0.0"
---

# Set up the marketing agent team on this computer

Run this once per new computer/account. It gets `CLAUDE.md` + `.claude/agents/` + `.claude/skills/` + `clients/` into a stable, permanent location so the agent team works the same way everywhere, and reports what the user still has to do by hand (MCP connectors, secrets — these cannot be automated by a skill).

Do the steps below in order. Narrate each one briefly as you go — this is a setup flow a non-technical user may be watching.

## 1. Check whether we're already inside the repo

Look for `CLAUDE.md`, `.claude/agents/`, and `skills-lock.json` in the current working directory (or an ancestor of it). If found: this machine already has the repo checked out here. Skip straight to step 3 (treat this directory as the target), but still run `git pull origin main` to bring it up to date.

If not found, continue to step 2.

## 2. Clone into the user's Documents folder

Target path: `<Documents>/claude-marketing`, where `<Documents>` is the OS-appropriate Documents folder for whoever is running this (e.g. `~/Documents` resolves correctly cross-platform in a POSIX-style shell; on Windows via Git Bash this lands in `C:\Users\<user>\Documents`).

- If `<Documents>/claude-marketing` does not exist: clone it there.
  - Prefer `gh repo clone johnlamb-thesheep/claude-marketing "<target>"` if the GitHub CLI is available and authenticated.
  - Otherwise fall back to `git clone https://github.com/johnlamb-thesheep/claude-marketing.git "<target>"`.
- If `<Documents>/claude-marketing` already exists:
  - If it's a git repo with this same remote: `git -C "<target>" pull --rebase origin main`.
  - If it exists but is NOT a git repo, or is a git repo with a different/no remote: **stop and ask the user** what to do — never overwrite or delete an existing folder of that name without asking.

Report the final path back to the user once this step is done — they'll need it to open this as their Claude Code working directory going forward.

## 3. Verify prerequisites

- `git --version` — required. If missing, tell the user to install Git and stop here.
- `gh --version` and `gh auth status` — recommended (used by the `/upload` command and for cloning private repos). If `gh` is missing or not authenticated, note it but don't block — plain `git` still works for a public or already-authenticated remote.
- Scan `.claude/skills/*/requirements.txt` and `.claude/skills/*/.env.example` for any skill with extra setup needs (currently: `facebook-ads` has both). For each one found:
  - If `requirements.txt` exists, tell the user the command to install it (e.g. `pip install -r .claude/skills/facebook-ads/requirements.txt`) — do not run it yourself without asking, since it installs packages into their environment.
  - If `.env.example` exists and no `.env` exists next to it yet, tell the user to copy it to `.env` and fill in their own credentials. Never create, fill in, or commit a real `.env` — `.gitignore` already excludes `.env` files, keep it that way.

## 4. MCP connectors — tell the user, don't attempt to connect

This repo's skills assume certain integrations are connected in the user's own Claude account (Meta/Facebook Ads, Supermetrics, Canva, Google Sheets, and similar — whatever this particular user's workflow needs). These are **account-specific and cannot be cloned or installed by a skill** — each person connects their own via their Claude client's connector/integration settings.

List plainly, once, what the team's skills reference (check `.claude/skills/*/SKILL.md` and any `.env.example` files for named platforms if you want the list to stay accurate rather than hard-coded), and tell the user where to go connect them. Do not guess at or fabricate connector names beyond what the skills actually reference.

## 5. Confirm and hand off

- Run `ls .claude/agents` and summarize the roles available (researcher, strategist, copywriter, static-designer, video-designer, landing-page, qa, tracking, performance).
- Remind the user: **open `<Documents>/claude-marketing` as the Claude Code working directory for all future marketing work** — `CLAUDE.md` and the agents/skills only activate for sessions rooted in this folder.
- Point out `clients/` holds the existing client folders (`brand.md`, `learnings.md`, `campaigns/`) so prior work and guidelines carry over — nothing needs to be redone.
- Mention the `/upload` command for pushing future changes back safely (it scans for secrets before committing).
- End with a short, plain summary: what's ready now vs. what the user still needs to do themselves (installing any skill's `requirements.txt`, filling in `.env` files, connecting MCP integrations).

## What this skill deliberately does NOT do

- Does not install MCP servers/connectors — those are per-account and live outside the repo.
- Does not create, edit, or commit any `.env` or credential file.
- Does not overwrite an existing, unrelated folder at the target path without asking first.
- Does not run `pip install` or similar package installs without the user's go-ahead.
