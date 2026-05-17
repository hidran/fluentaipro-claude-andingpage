# 📘 Book Companion — Claude Code: la guida pratica

Questo repo è il **codice companion ufficiale** del Capitolo 10 (*"Costruire una landing page end-to-end: visual companion, piano, deploy Firebase"*) del libro **Claude Code: la guida pratica** di Hidran Arias.

> 📚 **Italiano:** *Claude Code: la guida pratica* — disponibile su Amazon.it
>
> 📚 **English:** *Claude Code: The Practical Guide* — available on Amazon.com

---

## 🗺️ Branch per sezione del capitolo

Ogni branch è uno **snapshot del progetto al termine di una sezione del Cap. 10**. Clona il branch corrispondente al punto del libro dove ti trovi per vedere esattamente quei file (e solo quelli).

| Sezione libro | Branch | File presenti | Cosa contiene |
|---|---|---|---|
| **§ 10.1** Visual Companion | [`book/cap-10-1-mockups`](https://github.com/hidran/fluentaipro-claude-andingpage/tree/book/cap-10-1-mockups) | 11 | Solo mockup HTML statici (`.superpowers/brainstorm/`) generati dalla skill visual-companion. Apri nel browser, niente build. |
| **§ 10.2** Piano e spec | [`book/cap-10-2-spec`](https://github.com/hidran/fluentaipro-claude-andingpage/tree/book/cap-10-2-spec) | 12 | Sopra + `docs/superpowers/specs/2026-03-25-fluentaipro-landing-page-design.md` (spec generata da Claude in Plan Mode). |
| **§ 10.3** Esecuzione React | [`book/cap-10-3-execution`](https://github.com/hidran/fluentaipro-claude-andingpage/tree/book/cap-10-3-execution) | 48 | Sopra + app React Vite completa (9 sezioni, 4 UI primitives, test Vitest, CLAUDE.md). Pronta per `npm run dev`. |
| **§ 10.5** Deploy ready | [`book/cap-10-5-deploy-ready`](https://github.com/hidran/fluentaipro-claude-andingpage/tree/book/cap-10-5-deploy-ready) | 52 | Sopra + `firebase.json`, `.firebaserc`, `.github/workflows/deploy.yml`, `docs/ci-cd-vercel.md`. Pronto per `firebase deploy`. |
| (post-libro) | [`main`](https://github.com/hidran/fluentaipro-claude-andingpage) | 53+ | Stato corrente con fix post-pubblicazione (es. downgrade ESLint per compatibilità Vercel). Branch di riferimento per chi vuole l'ultima versione. |

> **Le sezioni §10.4 (replicare Lovable) e §10.6 (riepilogo) non hanno output di codice** — la 10.4 è un esercizio narrativo, la 10.6 è il riassunto del capitolo.

---

## 🚀 Quick start (qualunque branch)

```bash
# Scegli il branch che corrisponde al punto del libro
git clone -b book/cap-10-3-execution https://github.com/hidran/fluentaipro-claude-andingpage.git
cd fluentaipro-claude-andingpage

# Per branch §10.3 in poi (con package.json):
npm install
npm run dev          # http://localhost:5173
npm test             # Vitest
npm run build        # build di produzione

# Solo per branch §10.5:
firebase login
firebase deploy --only hosting
```

Per i branch §10.1 e §10.2 non serve `npm install` — sono solo file Markdown e HTML statici.

---

## 📦 Stack del progetto

| Strumento | Versione |
|---|---|
| React | 19.0 |
| Vite | 6.3 |
| Tailwind CSS | 4.2 |
| Vitest | 4.1 |
| Firebase Hosting | latest |
| GitHub Actions | per CI/CD |

---

## 📜 Licenza

Codice MIT — riusabile liberamente nei tuoi progetti, attribuzione gradita.

---

## 🔗 Link utili

- 📖 Libro su Amazon: (link al lancio)
- 💬 Discord community Superpowers: (vedi appendice del libro)
- 🐛 Errata / bug: apri una issue su questo repo con label `errata`
- 📺 Video corso Udemy correlato: (link al lancio)

---

**Repo aggiornato:** 2026-05-18
