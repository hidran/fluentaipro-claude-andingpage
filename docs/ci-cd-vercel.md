# CI/CD — GitHub Actions → Vercel

## Overview

Every push to `main` runs tests and deploys the landing page to Vercel production.
Every pull request runs tests and deploys a preview URL for review before merging.

```
Push to main  →  Test  →  Deploy Production
Open PR       →  Test  →  Deploy Preview URL
```

---

## Pipeline Jobs

| Job | Trigger | What it does |
|-----|---------|--------------|
| `test` | Every push / PR | Installs deps, runs `npx vitest run` |
| `deploy-preview` | PR only | Builds + deploys to a temporary Vercel preview URL |
| `deploy-production` | Push to `main` only | Builds + deploys to your live Vercel production URL |

`deploy-preview` and `deploy-production` both **wait for `test` to pass** before running.

---

## One-Time Setup

### 1. Create a Vercel project

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Import your GitHub repo `hidran/fluentaipro-claude-andingpage`
4. Framework: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy** (this first deploy links the project)

### 2. Get your Vercel credentials

You need three values. Find them as follows:

**VERCEL_TOKEN**
1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **Create** → give it a name (e.g. `github-actions`)
3. Copy the token — you won't see it again

**VERCEL_ORG_ID and VERCEL_PROJECT_ID**

Run this in the landing-page directory:

```bash
npx vercel link
```

After linking, open `.vercel/project.json`:

```json
{
  "orgId": "your-org-id-here",
  "projectId": "your-project-id-here"
}
```

Copy both values.

### 3. Add secrets to GitHub

1. Go to your repo → **Settings → Secrets and variables → Actions**
2. Click **New repository secret** and add each one:

| Secret name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Token from step 2 |
| `VERCEL_ORG_ID` | `orgId` from `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | `projectId` from `.vercel/project.json` |

> **Note:** The `.vercel/` directory is gitignored — these values live only in GitHub Secrets.

---

## How It Works After Setup

### Deploying to production

```bash
git add .
git commit -m "feat: my change"
git push origin main
```

GitHub Actions will:
1. Run all tests
2. Build the app (`npm run build`)
3. Deploy to Vercel production

### Getting a preview URL on a PR

```bash
git checkout -b my-feature
# make changes
git push origin my-feature
# open a PR on GitHub
```

GitHub Actions will deploy a preview URL — visible in the PR checks — so you can review the live site before merging.

---

## Workflow File

Location: `.github/workflows/deploy.yml`

The workflow uses the official Vercel CLI (`npx vercel`) with `--prod` flag for production deploys and no flag for preview deploys. Secrets are passed via environment variables at the job level (never interpolated directly into shell commands).

---

## Troubleshooting

**Tests fail in CI but pass locally**
- Check Node version: CI uses Node 20. Run `node -v` locally to compare.
- Run `npm ci` (not `npm install`) locally to reproduce the exact CI environment.

**Deploy step fails with "not linked"**
- The Vercel project must be linked first via `npx vercel link` locally (see Setup step 2).
- Confirm `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` secrets match `.vercel/project.json`.

**403 / auth error**
- The `VERCEL_TOKEN` may be expired or have insufficient scope. Regenerate it at vercel.com/account/tokens.
