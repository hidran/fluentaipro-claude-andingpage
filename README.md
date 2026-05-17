# Branch `book/cap-10-5-deploy-ready`

**Snapshot del progetto a fine § 10.5 — Commit, deploy su Firebase e URL live**

Stato finale del capitolo: l'app React della §10.3 è ora **configurata per il deploy** su Firebase Hosting, con pipeline CI/CD su GitHub Actions e documentazione alternativa per Vercel.

## Deploy in 4 comandi

```bash
git clone -b book/cap-10-5-deploy-ready https://github.com/hidran/fluentaipro-claude-andingpage.git
cd fluentaipro-claude-andingpage
npm install
npm run build
firebase login                              # solo prima volta
firebase deploy --only hosting
```

## File presenti

Tutto quello dei branch precedenti **più**:

- `firebase.json` — config Firebase Hosting (rewrites, headers cache)
- `.firebaserc` — project ID
- `.github/workflows/deploy.yml` — CI/CD GitHub Actions
- `docs/ci-cd-vercel.md` — note alternative deploy su Vercel

## Cosa serve setup-side

- Account Firebase gratuito (https://console.firebase.google.com)
- Firebase CLI: `npm install -g firebase-tools`
- Eventuale secret `FIREBASE_TOKEN` su GitHub Actions per CI/CD automatico

## Stato del branch `main`

Il branch `main` di questo repo contiene questo stato **più** alcuni fix post-lancio (downgrade ESLint per peer dependency Vercel, vari merge). Per il libro, questo branch è il "punto fine capitolo" canonico.

---
Riferimento libro: **Claude Code: la guida pratica** — Cap. 10 § 10.5
