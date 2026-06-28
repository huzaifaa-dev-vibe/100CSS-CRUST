<div align="center">

# Crust

**Components with a crust. Soft inside, sharp outside.**

A production-grade CSS component library — 100 hand-crafted effects, one editorial voice, zero slop.

[![License: MIT](https://img.shields.io/badge/License-MIT-0E0E0C.svg?style=flat-square)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-C2410C.svg?style=flat-square)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3F5B3A.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4-D4A24C.svg?style=flat-square)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-C2410C.svg?style=flat-square)](CONTRIBUTING.md)

</div>

---

> A protest against the purple-to-blue-gradient, glassmorphism-everywhere, glow-on-hover web. Crust is what happens when a component library decides to act like a magazine.

## What is Crust?

Crust is a CSS component library built on three convictions:

1. **CSS is the source of truth.** Every component works without JavaScript. Behavior is a progressive enhancement layered on top — never a prerequisite.
2. **No slop.** No purple. No blue. No neon gradients. No glassmorphism. No glow. Just warm paper, ink hairlines, and a single rust accent that earns its place.
3. **Editorial discipline.** Numbered sections. Small-caps mono labels. Generous whitespace. Asymmetric grids. The rigor of a Swiss magazine applied to a component library.

The result is a system that feels hand-crafted at every scale — small enough to read in one sitting, opinionated enough to ship in production, quiet enough to get out of the way of your content.

## The vision

Most component libraries optimize for breadth — 200 components, 50 variants each, every possible permutation generated from a token system. The result is libraries that all look the same and feel like nobody made them.

Crust optimizes for **voice**. 100 components is enough to cover the real surface area of a product UI, small enough that every single one can be hand-crafted, every interaction considered, every pixel intentional. The constraint is the design.

The long-term goal is to become the default CSS layer for editorial products — documentation sites, marketing pages, dashboards where the words matter as much as the buttons, internal tools that deserve to look like someone cared. Anything where "shadcn with a different shade of gray" isn't enough.

If you've ever shipped a component library and felt a quiet shame that every button looked like every other button on the internet, Crust is for you.

## What's inside

100 components across 12 categories. Every one has a live preview, copy-pasteable HTML + CSS, and zero required dependencies (a handful optionally enhance with GSAP).

| # | Category | Count | Examples |
|---|----------|-------|----------|
| 01 | **Buttons** | 15 | Fill Slide, Ripple Ink, Border Trace, Push 3D, Magnetic, Stack Shift |
| 02 | **Inputs** | 10 | Floating Label, OTP Cells, Tag Input, Password Reveal, Range Slider |
| 03 | **Cards** | 12 | Tilt 3D, Hover Reveal, Flip, Spotlight, Stamp Shift, Stat Block |
| 04 | **Loaders** | 10 | Ring Rotate, Dot Wave, Skeleton Shimmer, Square Orbit, Clock Tick |
| 05 | **Toggles** | 8 | Switch Square, Segmented Control, Accordion, Tab Underline, Dial |
| 06 | **Tooltips** | 5 | Arrow Drop, Side Slide, Underline Cue, Rich Card, Magnetic Follow |
| 07 | **Toasts** | 5 | Slide In, Auto Dismiss, Action Stack, Inline Banner, Error Block |
| 08 | **Progress** | 8 | Linear Rust, Stepped Blocks, Radial Circle, Spiral Trace, Upload Stack |
| 09 | **Navigation** | 7 | Breadcrumb, Pagination Dots, Menu Strike, Tab Bar, Tree Nested |
| 10 | **Text** | 10 | Scramble, Outline Fill, Gradient Mask, Glitch, Marquee, Split Reveal |
| 11 | **Backgrounds** | 5 | Dot Grid, Grid Paper, Halftone, Noise Paper, Diagonal Stripes |
| 12 | **Badges** | 5 | Status Dot, Numbered Tag, Count Chip, Version Pill, Ribbon Corner |

## Design system

Eight colors. Three fonts. One border weight. One radius range. The discipline is the point.

### Palette

| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#0E0E0C` | Primary text, borders |
| `--paper` | `#F4F1EA` | Background (warm off-white) |
| `--bone` | `#E8E3D6` | Surfaces, cards |
| `--rust` | `#C2410C` | Primary accent (CTA, highlights) |
| `--moss` | `#3F5B3A` | Secondary accent |
| `--ochre` | `#D4A24C` | Tertiary / badges |
| `--clay` | `#8C5A3C` | Muted accent |
| `--smoke` | `#6B6660` | Muted text |

### Dark mode — the "kiln" theme

Crust ships with a warm inverted palette: charred paper background (`#14110D`), warm off-white ink (`#ECE6D7`), brighter accents tuned for dark surfaces. Every component adapts automatically because they all read from the same eight CSS variables.

**Three ways to switch themes** — designed for humans and agents alike:

```bash
# 1. URL param — best for HTTP-only agents (curl, fetch, scrapers, LLM tools)
#    The .dark class is on <html> in the first byte of server-rendered HTML.
#    No JavaScript execution required from the caller.
curl "https://your-site.com/?theme=dark"

# 2. Nav toggle — best for browser-driving agents (Playwright, Puppeteer)
#    Click the sun/moon button in the top-right.
#    aria-label reads "Switch to dark mode" or "Switch to light mode".

# 3. Programmatic — best for embedded scripts
localStorage.setItem("theme", "dark"); location.reload();
```

### Typography

- **Display:** Fraunces (variable, `opsz` 144, soft serif with personality)
- **UI / Body:** Inter Tight
- **Mono:** JetBrains Mono

### Geometry

- **Borders:** `1.5px solid var(--ink)` — always
- **Radius:** 0 to 6px max — keep it crisp (pills are the only exception at `999px`)
- **Grain:** Subtle SVG noise overlay at 4% opacity (multiply on light, screen on dark)

## Quick start

```bash
# Clone
git clone https://github.com/huzaifaa-dev-vibe/100CSS-CRUST.git
cd 100CSS-CRUST

# Install (bun recommended, npm/pnpm also work)
bun install

# Dev server
bun run dev
# → http://localhost:3000

# Production build
bun run build && bun run start

# Lint
bun run lint
```

**Requirements:** Node.js 18+, bun 1.0+ (or npm/pnpm equivalent).

## Tech stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 16 (App Router) | Server-rendered HTML for agent-friendly dark mode |
| Language | TypeScript 5 | Strict types throughout |
| Styling | Tailwind CSS 4 | Utility-first, but Crust uses CSS variables for theming |
| Components | Radix UI primitives | Accessible tabs, dialogs — the bones |
| Animation | Framer Motion + GSAP | Page transitions + marquee/hero reveals |
| Smooth scroll | Lenis | Restrained, editorial motion |
| Syntax highlight | Shiki | VS Code-quality highlighting in the Code tabs |
| State | Zustand | Tiny, no boilerplate |
| Fonts | next/font (Fraunces, Inter Tight, JetBrains Mono) | Self-hosted, zero layout shift |

## Project structure

```text
src/
├── app/
│   ├── globals.css         ← Crust design system: tokens, grain, keyframes
│   ├── layout.tsx          ← Fonts, metadata, theme provider, pre-hydration script
│   └── page.tsx            ← Loading screen + app shell
├── components/
│   ├── crust/
│   │   ├── app-shell.tsx       ← View switching, Lenis, Framer transitions
│   │   ├── code-block.tsx      ← Shiki highlighting + copy button
│   │   ├── component-card.tsx  ← Numbered card with Preview/Code tabs
│   │   ├── component-preview.tsx ← Live render + JS interactivity wiring
│   │   ├── loading-screen.tsx  ← 7-second typewriter loader
│   │   ├── nav.tsx             ← Sticky nav + theme toggle
│   │   ├── footer.tsx
│   │   ├── marquee.tsx         ← GSAP-style infinite marquee
│   │   ├── theme-provider.tsx  ← next-themes + ?theme= URL param
│   │   └── views/
│   │       ├── home.tsx        ← Hero, marquee, stats, featured 6
│   │       ├── components.tsx  ← Sticky sidebar + 100-card grid
│   │       ├── docs.tsx        ← 6 sections: install, theming, dark mode, tokens, usage, contributing
│   │       └── about.tsx       ← Editorial long-form
│   └── ui/                     ← shadcn/ui primitives (used sparingly)
└── lib/
    └── crust/
        ├── store.ts            ← Zustand view state
        ├── theme-init.ts       ← Pre-hydration ?theme= script
        └── components/         ← The 100 component definitions
            ├── buttons.ts          ← 15
            ├── inputs.ts           ← 10
            ├── cards.ts            ← 12
            ├── loaders.ts          ← 10
            ├── toggles.ts          ← 8
            ├── tooltips-toasts-progress.ts ← 18
            ├── navigation-text.ts  ← 17
            ├── backgrounds-badges.ts ← 10
            └── ...
```

## Using Crust components in your project

Each component is a self-contained HTML + CSS pair. Copy the markup, ensure the CSS is loaded, done.

```html
<!-- 1. Include the Crust design tokens (or copy from src/app/globals.css) -->
<style>
  :root {
    --ink: #0E0E0C;
    --paper: #F4F1EA;
    --bone: #E8E3D6;
    --rust: #C2410C;
    --moss: #3F5B3A;
    --ochre: #D4A24C;
    --clay: #8C5A3C;
    --smoke: #6B6660;
  }
</style>

<!-- 2. Copy a component's CSS (scoped under .c-{id}) -->
<style>
  .c-btn-fill-slide {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 28px;
    font-weight: 600;
    font-size: 14px;
    color: var(--ink);
    background: var(--paper);
    border: 1.5px solid var(--ink);
    cursor: pointer;
    overflow: hidden;
    isolation: isolate;
    transition: color 240ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .c-btn-fill-slide::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--rust);
    transform: translateY(101%);
    transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
    z-index: -1;
  }
  .c-btn-fill-slide:hover { color: var(--paper); }
  .c-btn-fill-slide:hover::before { transform: translateY(0); }
</style>

<!-- 3. Copy the HTML -->
<button class="c-btn-fill-slide"><span>Get Crust</span></button>
```

For interactive components (ripples, magnetics, tabs, etc.), wire up the `data-*` attributes with vanilla JS — see `src/components/crust/component-preview.tsx` for the full handler reference.

## Accessibility

- **WCAG AA contrast** on all text/background combinations in both themes
- **Focus-visible** outlines on every interactive element
- **ARIA labels** on icon-only buttons (theme toggle, copy buttons, close buttons)
- **Keyboard navigation** — every tab, accordion, toggle, and dialog is operable without a mouse
- **Reduced motion** — animations respect `prefers-reduced-motion` (in progress — see #roadmap)
- **Semantic HTML** — `<nav>`, `<main>`, `<article>`, `<header>`, `<footer>` throughout

## Browser support

Tested in the latest two versions of Chrome, Firefox, and Safari. Graceful degradation for:

- `:has()` — used in some hover states, falls back to no hover effect
- CSS Houdini paint worklets — used in one background component, falls back to static
- `backdrop-filter` — intentionally not used (anti-pattern in this design system)

## Roadmap

- [ ] `prefers-reduced-motion` audit across all 100 components
- [ ] Figma library mirroring every component 1:1
- [ ] Standalone CSS-only npm package (`crust-css`) — no React/Next.js required
- [ ] CSS Houdini paint worklet for true per-pixel grain
- [ ] Component #101–150 (Form layouts, Data tables, Charts, Empty states)
- [ ] Storybook integration for isolated component development
- [ ] Playwright visual regression tests for every component in both themes

## Star this repo ✶

If Crust saved you an hour, or inspired a button, or just made you feel something — drop a star. It's the signal that tells us to keep baking.

[![GitHub stars](https://img.shields.io/github/stars/huzaifaa-dev-vibe/100CSS-CRUST.svg?style=social&label=Star)](https://github.com/huzaifaa-dev-vibe/100CSS-CRUST)

## Contribute

We're actively looking for contributors who care about the craft. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full guide — the short version:

1. **Read the crust method** (6 rules, ~3 minutes)
2. **Pick a category** and the next available number
3. **Build the component** in pure CSS, scoped under `.c-{id}`
4. **Open a PR** with screenshots of Preview + Code tabs

Good first contributions:

- A new loader animation (Loaders category has room to grow)
- A `prefers-reduced-motion` audit of an existing component
- A Safari bug fix (we know there are a few)
- Documentation improvements in the Docs view

[Open issues](https://github.com/huzaifaa-dev-vibe/100CSS-CRUST/issues) · [Open PRs](https://github.com/huzaifaa-dev-vibe/100CSS-CRUST/pulls)

## Credits

Crust was built with ink, paper, and a little rust. The design system draws inspiration from Swiss editorial design, brutalist web aesthetics, and the conviction that component libraries can be opinionated without being narrow.

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/), [Lenis](https://lenis.darkroom.engineering/), [Shiki](https://shiki.style/), [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter Tight](https://fonts.google.com/specimen/Inter+Tight), and [JetBrains Mono](https://www.jetbrains.com/lp/mono/).

## License

[MIT](LICENSE) © 2026 [huzaifaa-dev-vibe](https://github.com/huzaifaa-dev-vibe)

---

<div align="center">

**Components with a crust. Soft inside, sharp outside.**

Built for developers who think design is engineering.

[Star the repo](https://github.com/huzaifaa-dev-vibe/100CSS-CRUST) · [Read the docs](https://github.com/huzaifaa-dev-vibe/100CSS-CRUST#quick-start) · [Contribute](CONTRIBUTING.md) · [Report a bug](https://github.com/huzaifaa-dev-vibe/100CSS-CRUST/issues/new)

</div>
