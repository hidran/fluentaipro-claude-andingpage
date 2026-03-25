# FluentAiPro Landing Page — Design Spec

**Date:** 2026-03-25
**Status:** Approved

---

## Overview

A single-page marketing site for **FluentAiPro** — an AI-powered language learning app. The goal is to convert visitors into free-tier signups ("Start for free") that funnel into the web app at `https://fluentapipro.firebaseapp.com/`.

**Target audience:** Dual — students/hobbyists and working professionals, equal weight.
**Primary CTA:** "Start for free" → direct signup to web app.

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` plugin, CSS-first config) |
| Routing | None — single scrollable page |
| Deployment | Firebase Hosting |
| Animations | CSS transitions + `@keyframes` (no animation library) |

---

## Design Language

### Aesthetic

**Glassmorphism** — dark canvas, frosted glass cards, ambient gradient glows.

### Color Tokens

```css
--color-bg:               #0a0a0f;
--color-surface:          rgba(255,255,255,0.05);
--color-border:           rgba(255,255,255,0.10);
--color-grad-from:        #7c3aed;
--color-grad-to:          #06b6d4;
--color-text-primary:     #ffffff;
--color-text-secondary:   rgba(255,255,255,0.65);
--color-text-muted:       rgba(255,255,255,0.50);
```

Note: muted text at `0.50` opacity on `#0a0a0f` yields ~5.1:1 contrast (passes WCAG AA for body text). Do not go below `0.50` for readable copy.

### Typography

Font: **Inter** — loaded via Google Fonts `<link>` in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Apply globally: `font-family: 'Inter', sans-serif;`

| Role | Size | Weight | Letter-spacing |
| --- | --- | --- | --- |
| Hero h1 | 72px (mobile: 40px) | 800 | -2px |
| Section title | 46–50px (mobile: 32px) | 800 | -1.5px |
| Nav links | 16px | 500 | 0 |
| Body / desc | 15–19px | 400 | 0 |
| Labels / badges | 12–13px | 600–700 | 2–3px |

### Glass Card Pattern

```css
background: rgba(132, 20, 20, 0.05);
border: 1px solid rgba(255,255,255,0.10);
border-radius: 16px;
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
position: relative;
overflow: hidden;
/* Top accent line via ::before */
::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent);
}
```

### Gradient Glow Blobs

Absolute-positioned radial gradients behind hero and key sections:

```css
background: radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%);
```

---

## Page Structure

All sections are React components in `src/components/sections/`. Order:

1. `Navbar` — sticky, glassmorphism background on scroll
2. `Hero`
3. `Features`
4. `Demo`
5. `Languages`
6. `Testimonials`
7. `Pricing`
8. `FAQ`
9. `Footer`

---

## Section Specs

### Navbar

- Logo: gradient text "FluentAiPro" (violet→cyan)
- Links: Features, Languages, Pricing, FAQ — 16px, active state = white + 2px violet bottom border
- CTA: "Start for free" gradient pill button
- Scroll behavior: place a sentinel `<div id="nav-sentinel">` immediately after the navbar. Use `IntersectionObserver` on this sentinel — when it leaves the viewport (ratio = 0), add class `scrolled` to the navbar which applies `backdrop-filter: blur(12px)` and `background: rgba(10,10,15,0.85)`. When it re-enters, remove the class.

### Hero

- Badge: pulsing dot + "AI-Powered Language Learning" (violet tint pill)
- H1: `"Learn any language with your AI tutor"` — "AI tutor" in gradient text
- Subtitle: `"Practice real conversations in 50+ languages. Get instant pronunciation feedback and a learning path that adapts to you."`
- CTAs: Primary "Start for free →" (gradient button, violet glow shadow) + Secondary "▶ See how it works" (text link, scrolls to Features)
- Stats bar: `50+ Languages · 10M+ Conversations · 98% Accuracy · 4.9★` — gradient numbers, 1px dividers
- Background: two ambient glow blobs (violet top-left, cyan bottom-right), slow 8s drift animation
- Responsive: h1 drops to 40px on mobile; stats bar wraps to 2×2 grid below 480px

### Features

- Label: "What you get"
- Title: `"Everything you need to truly learn a language"`
- Layout: 2-column CSS grid
  - **Wide card (spans 2 cols):** AI Conversations — left: copy; right: live chat mockup with pronunciation score bars
  - 4 regular cards: Pronunciation Feedback · Adaptive Paths · 50+ Languages · Web & Mobile
- Responsive: at ≤768px, wide card stacks vertically (copy above mockup); 2-col grid collapses to 1-col
- Card style: glass pattern, 20px feature title, 15px desc at `--color-text-secondary`

### Demo

- Section title: `"See it in action"`
- Content: static `<img>` screenshot of the app conversation screen, displayed inside a CSS-framed browser mockup (rounded top bar with three colored dots)
- Mockup dimensions: max-width 720px, centered
- Floating animation: `translateY(0px) → translateY(-12px) → translateY(0px)`, 4s ease-in-out infinite
- Use `@media (prefers-reduced-motion: reduce)` to disable this animation
- Alt text: `"FluentAiPro app showing a Spanish conversation with AI tutor and pronunciation scores"`
- CTA below: "Try it yourself →" linking to the app
- Placeholder: if no screenshot is available at build time, use a styled placeholder div at the same dimensions

### Languages

- Section title: `"50+ languages, one tutor"`
- Layout: responsive grid of language chips — each chip shows a flag emoji + language name
- Grid: 6 columns on desktop, 4 on tablet, 3 on mobile
- Show 18 languages visibly; render a `"+32 more"` chip at the end styled as a muted glass chip
- Languages to display (in order): Spanish 🇪🇸, French 🇫🇷, Mandarin 🇨🇳, Japanese 🇯🇵, German 🇩🇪, Portuguese 🇧🇷, Italian 🇮🇹, Korean 🇰🇷, Arabic 🇸🇦, Hindi 🇮🇳, Russian 🇷🇺, Dutch 🇳🇱, Turkish 🇹🇷, Polish 🇵🇱, Swedish 🇸🇪, Greek 🇬🇷, Hebrew 🇮🇱, Swahili 🇰🇪
- Chip style: glass card, 12px text, flag + name, hover: border brightens to violet

### Testimonials

- Label: "Loved by learners"
- Title: `"Real people, real results"`
- Layout: 3-column card grid (collapses to 1 column on mobile)
- Placeholder copy (replace with real testimonials when available):

  **Card 1:** ★★★★★ — *"I tried every app out there. FluentAiPro is the first one where I actually hold real conversations. My Spanish went from zero to B1 in 4 months."* — Marco R., Learning Spanish · 4 months

  **Card 2:** ★★★★★ — *"The pronunciation feedback is incredible. My Japanese tutor told me my accent improved more in 2 weeks with this app than in a year of classes."* — Sarah L., Learning Japanese · 6 months

  **Card 3:** ★★★★★ — *"I travel for work constantly. Being able to switch between Mandarin and French on the same app, on any device, is a game changer."* — David K., Learning Mandarin + French

- Avatars: initials-based colored circles (no real photos needed)

### Pricing

- Label: "Simple pricing"
- Title: `"Start free, grow at your pace"`
- **Monthly/Yearly toggle** — React state `billingCycle: 'monthly' | 'yearly'`; yearly shows 20% off prices
- Prices:

  | Plan | Monthly | Yearly (per mo) | Yearly (total) |
  | --- | --- | --- | --- |
  | Free 🌱 | €0 | €0 | €0 |
  | Silver 🥈 | €12.99 | €10.39 | €124.70 |
  | Gold 🥇 | €24.99 | €19.99 | €239.88 |

- Silver is featured: violet-tinted bg, violet border, scaled up 1.04×, "Most Popular" gradient badge
- Feature checklist per plan:

  | Feature | Free | Silver | Gold |
  | --- | --- | --- | --- |
  | Languages | 1 | 3 | 50+ |
  | AI conversations / month | 10 | Unlimited | Unlimited |
  | Pronunciation feedback | Basic | Advanced | Advanced |
  | Adaptive learning path | ✗ | ✓ | ✓ |
  | Progress analytics | ✗ | ✓ | ✓ |
  | Priority support | ✗ | ✗ | ✓ |

- CTA buttons: Free → "Get started free", Silver → "Start for free →" (gradient), Gold → "Get started"

### FAQ

- Section title: `"Got questions?"`
- Accordion: each item has a question button and an answer panel
- Animation: JS-measured height — on open, read `scrollHeight` of the content div and set `maxHeight` to that value in px via inline style; on close, set `maxHeight: '0px'`. Use CSS `transition: max-height 0.3s ease`
- Sample questions:
  1. How does the AI pronunciation feedback work?
  2. Can I learn multiple languages at the same time?
  3. Is there a mobile app?
  4. What happens when I hit the free conversation limit?
  5. How is FluentAiPro different from Duolingo?
  6. Can I cancel my subscription at any time?
- Default state: all closed

### Footer

- Final CTA block: headline `"Ready to speak a new language?"` + "Start for free →" gradient button
- Nav links row: Features · Languages · Pricing · FAQ · Privacy Policy · Terms of Service (all `#` placeholders)
- Social icons: Twitter/X, Instagram, LinkedIn (SVG icons, links as `#` placeholders)
- Copyright: `© 2026 FluentAiPro. All rights reserved.`

---

## Component File Structure

```
src/
  main.jsx
  App.jsx
  index.css              ← Tailwind v4 entry (@import "tailwindcss")
  components/
    sections/
      Navbar.jsx
      Hero.jsx
      Features.jsx
      Demo.jsx
      Languages.jsx
      Testimonials.jsx
      Pricing.jsx
      FAQ.jsx
      Footer.jsx
    ui/
      GlassCard.jsx      ← reusable glass card wrapper
      GradientText.jsx
      Badge.jsx
      Button.jsx
```

---

## Interactions & Animations

| Element | Animation |
| --- | --- |
| Hero glow blobs | Slow 8s drift via `@keyframes` (subtle `translateY ±20px`) |
| Badge dot | `opacity` pulse, `2s infinite` |
| Pricing toggle | `billingCycle` state swap; price numbers use CSS `transition: opacity 0.2s` |
| FAQ accordion | JS-measured `maxHeight` transition, `0.3s ease` |
| Navbar | `scrolled` class via IntersectionObserver on sentinel div |
| CTA buttons | `box-shadow` glow intensity increase on hover |
| Feature cards | `border-color` brightens on hover |
| Demo mockup | `translateY 0→-12px→0`, 4s ease-in-out infinite; disabled with `prefers-reduced-motion` |

---

## Responsive Breakpoints

| Breakpoint | Key layout changes |
| --- | --- |
| ≤480px (mobile) | Hero h1 → 40px; stats bar wraps 2×2; single-column everywhere |
| ≤768px (tablet) | Features wide card stacks vertically; 3-col grids → 1-col; pricing cards stack |
| ≥1024px (desktop) | Full multi-column layouts as described per section |

---

## Accessibility

- All images have descriptive `alt` text
- Color contrast: primary text (#fff) on bg (#0a0a0f) = 21:1. Secondary text (0.65 opacity) ≈ 7.5:1. Muted text (0.50 opacity) ≈ 5.1:1. All pass WCAG AA
- Keyboard navigable: visible focus rings on all interactive elements
- FAQ accordion uses `<button>` elements with `aria-expanded` and `aria-controls`
- `@media (prefers-reduced-motion: reduce)`: disable glow blob drift and demo float animations

---

## Verification Checklist

- [ ] `npm run dev` starts without errors
- [ ] All 9 sections render in correct order on desktop and mobile
- [ ] Pricing toggle switches between monthly/yearly prices with smooth transition
- [ ] Yearly prices show correct 20% discount (€10.39 Silver, €19.99 Gold)
- [ ] FAQ accordion opens/closes with `maxHeight` animation, `aria-expanded` updates
- [ ] Navbar sentinel observer activates glass effect on scroll past hero
- [ ] Demo mockup float animation plays; stops with `prefers-reduced-motion`
- [ ] All "Start for free" CTAs link to `https://fluentapipro.firebaseapp.com/`
- [ ] Responsive: correct layout at 375px, 768px, 1280px
- [ ] `npm run build` produces clean output with no errors
- [ ] Firebase deploy succeeds (`firebase deploy --only hosting`)
