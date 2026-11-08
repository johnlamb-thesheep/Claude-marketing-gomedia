---
description: Safety-scan changed files, commit, pull --rebase, and push this folder to its own GitHub repo on main.
---

Run these steps in order, stopping immediately if any step tells you to stop:

0. **Which repo.** Run `git remote get-url origin` and tell the user which GitHub repo this folder pushes to. If there is no remote, stop and offer to create a **private** repo for it with `gh repo create <folder-name> --private --source . --push` (only on the user's yes).

1. **Safety scan (changed files only).** Run `git status --short` and `git diff` to see what changed. Scan those changed files for anything that shouldn't be uploaded: API keys, access tokens, passwords, `.env` files, phone numbers, email addresses, NRIC numbers, or personal names in client chat files. If anything suspicious is found, **stop** and show the user exactly what and where — do not commit or push until they decide.
   - If a `maintainer/` folder exists (the core product repo), also run `python maintainer/check_client_data.py`. It must pass: core never holds client data.

2. **Show what changed.** Give the user a short list of changed files (e.g. "Updated acme/brand.md, added 2 campaign briefs").

3. **Commit.** Write a clear commit message describing the actual changes (e.g. `"Update acme brand.md, add 2 campaign briefs"`) — not a generic message.

4. **Pull first.** Run `git pull --rebase origin main` to bring in any teammates' changes. If there's a conflict, **stop** and explain it in plain words — which files, what the conflicting content looks like, and that the user needs to resolve it before continuing. Do not attempt to auto-resolve conflicts.

5. **Push.** Push to `origin main`.

6. **Confirm.** Tell the user "Uploaded" along with the commit message and the repo URL (from `git remote get-url origin`).
