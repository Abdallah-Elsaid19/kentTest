# Migration data staging

The `input/`, `media/` and `reports/` contents are ignored because exports can contain personal data and large files. Only the empty directory markers and this guide are committed.

Expected JSON export keys are `media`, `colleges`, `programmes`, `people`, `events`, `stories`, `articles` and `pages`. Every record requires a stable `id`. Publication timestamps use ISO 8601.

Run a dry-run first:

```powershell
python backend/manage.py import_legacy_content migration-data/input/export.json --report migration-data/reports/dry-run.json
```

After resolving every error and obtaining content-owner approval, add `--commit`. The command never contacts WordPress and refuses to overwrite records changed manually after import.
