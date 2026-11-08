"""Update this workspace's shared agents/skills from the core Marketing Agent Team.

Usage (run from the workspace folder):
  python .claude/skills/update-my-agents/scripts/sync_core.py                 # from the core folder (git pull first)
  python .claude/skills/update-my-agents/scripts/sync_core.py --zip FILE.zip  # from a downloaded ZIP
  python .claude/skills/update-my-agents/scripts/sync_core.py --check         # show what would change, change nothing
  python .claude/skills/update-my-agents/scripts/sync_core.py --source PATH   # use another core folder (remembered)

Only core-managed items are replaced: .claude/agents/*, .claude/skills/*, .claude/commands/*,
templates/, references/, clients/CLIENT_NAME/, CLAUDE.md, VERSION, .claude/core-manifest.json. Client folders, clients/CLIENTS.md
and anything else this workspace added are never touched. A file you changed locally is copied to
.core-sync-backup/<time>/ before it is replaced. State lives in .core-sync.json.
"""
import argparse, hashlib, json, os, shutil, subprocess, sys, tempfile, time, zipfile
from pathlib import Path

WS = Path.cwd()
STATE = WS / ".core-sync.json"
DEFAULT_SOURCE = "../Claude-Marketing-agent-john-lam"
EACH_CHILD = [".claude/agents", ".claude/skills", ".claude/commands"]   # each child is one item
WHOLE = ["templates", "references", "clients/CLIENT_NAME", "CLAUDE.md", "VERSION", ".claude/core-manifest.json"]
MANIFEST = ".claude/core-manifest.json"   # file list + hashes of one core version (baseline for a first update)
SEED_IF_MISSING = ["clients/CLIENTS.md", ".claude/settings.json", ".gitignore"]
SKIP_NAMES = {"__pycache__", ".DS_Store", "node_modules"}


def sha(p):
    # line endings are normalised so a Windows (CRLF) checkout and a ZIP (LF) of the same file match
    with open(p, "rb") as f: data = f.read()
    return hashlib.sha256(data.replace(b"\r\n", b"\n")).hexdigest()


def files_under(root, rel):
    p = root / rel
    if p.is_file(): return [rel]
    if not p.is_dir(): return []
    out = []
    for dp, dns, fns in os.walk(p):
        dns[:] = [d for d in dns if d not in SKIP_NAMES]
        for fn in fns:
            if fn in SKIP_NAMES or fn.endswith(".pyc"): continue
            out.append(Path(dp, fn).relative_to(root).as_posix())
    return out


def managed_files(root):
    files = []
    for d in EACH_CHILD:
        base = root / d
        if base.is_dir():
            for child in sorted(base.iterdir()):
                if child.name in SKIP_NAMES: continue
                files += files_under(root, f"{d}/{child.name}")
    for w in WHOLE: files += files_under(root, w)
    return sorted(set(files))


def find_core_root(extracted):
    # a GitHub ZIP has one top folder; find the folder that has CLAUDE.md + .claude/agents
    for cand in [extracted] + sorted(p for p in extracted.rglob("*") if p.is_dir()):
        if (cand / "CLAUDE.md").is_file() and (cand / ".claude" / "agents").is_dir():
            return cand
    sys.exit("That ZIP doesn't look like the Marketing Agent Team (no CLAUDE.md + .claude/agents inside).")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--zip"); ap.add_argument("--source"); ap.add_argument("--check", action="store_true")
    ap.add_argument("--no-pull", action="store_true")
    ap.add_argument("--build-manifest", action="store_true", help="maintainer: write .claude/core-manifest.json for this folder")
    a = ap.parse_args()

    if a.build_manifest:
        files = {rel: sha(WS / rel) for rel in managed_files(WS) if rel != MANIFEST}
        version = (WS / "VERSION").read_text(encoding="utf-8").strip() if (WS / "VERSION").exists() else "?"
        (WS / MANIFEST).write_text(json.dumps({"version": version, "files": files}, indent=0, sort_keys=True), encoding="utf-8")
        print(f"Manifest written: {len(files)} files, version {version}")
        return

    state = json.loads(STATE.read_text(encoding="utf-8")) if STATE.exists() else {}
    tmp = None
    if a.zip:
        tmp = Path(tempfile.mkdtemp(prefix="core-zip-"))
        with zipfile.ZipFile(a.zip) as z: z.extractall(tmp)
        src = find_core_root(tmp); source_label = f"ZIP {Path(a.zip).name}"
    else:
        src = Path(a.source or state.get("source") or DEFAULT_SOURCE)
        if not src.is_absolute(): src = (WS / src).resolve()
        if not (src / "CLAUDE.md").is_file():
            sys.exit(f"Core folder not found at {src}. Use --source <folder> or --zip <file>.")
        if src.resolve() == WS.resolve():
            sys.exit("This IS the core folder. Updates go from core to workspaces, not into core.")
        source_label = str(src)
        if (src / ".git").exists() and not a.no_pull and not a.check:
            r = subprocess.run(["git", "-C", str(src), "pull", "--ff-only", "-q"], capture_output=True, text=True)
            if r.returncode != 0: print("Note: couldn't pull the latest core from GitHub, using the local copy.\n", r.stderr.strip())

    new_files = managed_files(src)
    old_hashes = state.get("files", {})
    if not old_hashes and (WS / MANIFEST).is_file():
        # first update of an unzipped copy: the version it came with is the baseline
        old_hashes = json.loads((WS / MANIFEST).read_text(encoding="utf-8")).get("files", {})
    # without state or manifest nothing is removed; workspace-only items are never touched
    old_files = set(old_hashes)

    changed, added, removed, backups = [], [], [], []
    stamp = time.strftime("%Y%m%d-%H%M%S")
    bdir = WS / ".core-sync-backup" / stamp

    def backup_if_local_edit(rel):
        if rel == MANIFEST: return   # the file list itself is never a user edit
        cur = WS / rel
        if not cur.exists(): return
        recorded = old_hashes.get(rel)
        if recorded is None or sha(cur) != recorded:
            if (src / rel).exists() and sha(cur) == sha(src / rel): return
            backups.append(rel)
            if not a.check:
                dst = bdir / rel; dst.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(cur, dst)

    for rel in new_files:
        cur = WS / rel
        if not cur.exists(): added.append(rel)
        elif sha(cur) != sha(src / rel):
            changed.append(rel); backup_if_local_edit(rel)
    for rel in sorted(old_files - set(new_files)):
        if (WS / rel).exists():
            removed.append(rel); backup_if_local_edit(rel)

    if not a.check:
        for rel in added + changed:
            dst = WS / rel; dst.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(src / rel, dst)
        for rel in removed:
            (WS / rel).unlink()
            d = (WS / rel).parent
            while d != WS and d.exists() and not any(d.iterdir()):
                d.rmdir(); d = d.parent
        for rel in SEED_IF_MISSING:
            if not (WS / rel).exists() and (src / rel).exists():
                (WS / rel).parent.mkdir(parents=True, exist_ok=True); shutil.copy2(src / rel, WS / rel); added.append(rel)
        version = (src / "VERSION").read_text(encoding="utf-8").strip() if (src / "VERSION").exists() else "?"
        new_state = {"source": a.source or state.get("source") or (None if a.zip else DEFAULT_SOURCE),
                     "version": version, "updated": time.strftime("%Y-%m-%d %H:%M"),
                     "files": {rel: sha(WS / rel) for rel in new_files}}
        STATE.write_text(json.dumps(new_state, indent=1), encoding="utf-8")

    def items(lst):
        names = set()
        for rel in lst:
            parts = rel.split("/")
            names.add("/".join(parts[:3]) if rel.startswith(".claude/") else parts[0] if len(parts) > 1 else rel)
        return sorted(names)

    print(("CHECK ONLY, nothing changed. " if a.check else "") + f"Source: {source_label}")
    print(f"Added: {len(added)} files in {items(added) or '-'}")
    print(f"Updated: {len(changed)} files in {items(changed) or '-'}")
    print(f"Removed: {len(removed)} files in {items(removed) or '-'}")
    if backups:
        print(f"Local edits {'would be' if a.check else 'were'} backed up first ({len(backups)} files) to {bdir.relative_to(WS) if not a.check else '.core-sync-backup/<time>/'}:")
        for b in backups[:30]: print("  -", b)
    if tmp: shutil.rmtree(tmp, ignore_errors=True)

    # if this update replaced the update tool itself, run the new version once so nothing is missed
    me = ".claude/skills/update-my-agents/scripts/sync_core.py"
    if not a.check and me in changed + added and not os.environ.get("CORE_SYNC_REEXEC"):
        print("\nThe update tool itself was updated; running the new version once more:")
        env = dict(os.environ, CORE_SYNC_REEXEC="1")
        subprocess.run([sys.executable, str(WS / me)] + sys.argv[1:] + (["--no-pull"] if "--no-pull" not in sys.argv else []), env=env)


if __name__ == "__main__":
    main()
