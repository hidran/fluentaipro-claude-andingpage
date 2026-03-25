# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite HMR)
npm run build        # Production build
npm run preview      # Preview production build locally
npm run lint         # ESLint
npm run test         # Run tests in watch mode (Vitest)
npx vitest run       # Run tests once (used in CI)
npm run test:coverage # Coverage report
```

Run a single test file:
```bash
npx vitest run tests/sections/Navbar.test.jsx
```

## Architecture

Single-page React 19 app built with Vite + Tailwind CSS v4.

**Entry**: `src/main.jsx` → `src/App.jsx`

`App.jsx` composes all sections in vertical order:
`Navbar → Hero → Features → Demo → Languages → Testimonials → Pricing → FAQ → Footer`

**Component layout**:
- `src/components/sections/` — full-width page sections (one file per section)
- `src/components/ui/` — reusable primitives: `Button`, `Badge`, `GlassCard`, `GradientText`
- `src/constants.js` — app-wide constants (`APP_URL`)

## Styling

Tailwind v4 is loaded via the `@tailwindcss/vite` plugin (no `tailwind.config.js`).

All custom styles live in `src/index.css`:
- **Design tokens** defined in both `:root` and `@theme` blocks — always update both when changing a token
- **BEM-style component classes** (`.glass-card`, `.btn-primary`, `.navbar__link`, etc.) used directly in JSX
- Gradient color palette: `--color-grad-from: #7c3aed` (violet) → `--color-grad-to: #06b6d4` (cyan)

Avoid inline Tailwind utility classes for structural/brand styles — use the existing CSS class system instead.

## Testing

Tests live in `tests/`, mirroring the `src/` structure. Framework: Vitest + React Testing Library + jsdom.

`tests/setup.js` provides a no-op `IntersectionObserver` stub (required because jsdom doesn't implement it — Navbar uses it for scroll detection).

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) deploys to Vercel:
- **PRs** → preview deployment
- **Push to `main`** → production deployment

Tests must pass before any deployment. Required secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
