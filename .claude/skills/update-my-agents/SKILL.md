---
name: update-my-agents
description: Update this folder's Marketing Agent Team (agents, skills, templates, references, CLAUDE.md) to the latest version, from the core folder on this computer or from a ZIP the user downloaded. Client folders and anything the workspace added are never touched. Use when the user says "update my agents", "update the team", "get the latest skills", "I got a new version / new ZIP", or "check for updates".
---

# Update my agents

Plain-language job for non-technical users. Run everything yourself; don't ask them to type commands.

1. **Where is the new version?**
   - If the user mentions a ZIP (or says "I downloaded a new version"), look in their Downloads folder for the newest `.zip` whose name starts with `Claude-Marketing-agent` and confirm the file name with them in one line.
   - Otherwise use the core folder recorded in `.core-sync.json` (default `../Claude-Marketing-agent-john-lam`). If it isn't there and there's no ZIP, ask them to download the latest ZIP they were sent.
   - If this folder has a `maintainer/` folder, it **is** the core: stop and say updates flow from here to the other folders, not into it.
2. **Preview:** run from this folder
   `python .claude/skills/update-my-agents/scripts/sync_core.py --check` (add `--zip "<path>"` for a ZIP).
   Tell the user in 2–4 lines: version, how many skills/agents are new, updated or removed, and whether any file they edited here will be backed up.
3. **Update:** run the same command without `--check`. The script:
   - replaces only core items: `.claude/agents/*`, `.claude/skills/*`, `.claude/commands/*`, `templates/`, `references/`, `clients/CLIENT_NAME/`, `CLAUDE.md`, `VERSION`
   - never touches `clients/<their clients>/`, `clients/CLIENTS.md` or anything else this folder added (its own skills and agents stay)
   - copies any core file they had changed here to `.core-sync-backup/<time>/` first
4. **Report:** "Updated to version X", the new or changed skills in plain words, and where backups went (if any). If a backed-up file held a client-specific rule, offer to move that rule into the client's `playbook/` (CLAUDE.md rule 8).
5. If this folder is a git repo, offer to save the update with the `/upload` command (only on their yes).
