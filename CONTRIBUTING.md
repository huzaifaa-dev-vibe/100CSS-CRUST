# Contributing to Crust

First off — thank you for taking the time to contribute. Crust is built on opinions, and the strongest contributions are the ones that respect those opinions while pushing the library forward.

## The crust method

Before writing a single line of CSS, read this section. Every accepted PR is expected to honor all six rules. PRs that violate them will be sent back with notes.

### 01 — CSS first, always

Every component **must** work without JavaScript. The CSS is the source of truth; behavior is a progressive enhancement layered on top via `data-*` attributes. If your component breaks when JS is disabled, it does not belong in Crust.

```text
✅  Pure CSS hover, focus, :checked, :not(), :has() transitions
✅  CSS keyframe animations
✅  CSS custom properties for theming
❌  JS-only state changes that have no CSS fallback
❌  Web Components that require JS to render
```

### 02 — Eight colors, no more

Use only the eight palette tokens defined in `src/app/globals.css`. No new colors. No exceptions for "just this once."

```text
✅  var(--ink), var(--paper), var(--bone), var(--rust),
    var(--moss), var(--ochre), var(--clay), var(--smoke)
❌  Purple, blue, neon green
❌  Gradients that aren't within the eight tokens
❌  Glow effects, glassmorphism, backdrop-blur
❌  Hardcoded hex values — always use the token
```

### 03 — 1.5px ink borders, 0–6px radius

Borders are `1.5px solid var(--ink)`. Radius is 0–6px max. We keep things crisp.

```text
✅  border: 1.5px solid var(--ink)
✅  border-radius: 0 / 2px / 4px / 6px
❌  border-radius: 12px / 16px / 9999px (except pills, which are 999px)
❌  box-shadow glow
❌  1px borders (too thin), 2px borders (too heavy)
```

### 04 — Scope every selector

All CSS is scoped under a `.c-{component-id}` wrapper class. Styles must never leak to the global scope. The renderer injects each component's CSS into a `<style id="crust-style-{id}">` tag.

```css
/* ✅ correct */
.c-btn-fill-slide { ... }
.c-btn-fill-slide:hover { ... }
.c-btn-fill-slide::before { ... }

/* ❌ wrong — leaks globally */
button { ... }
.active { ... }
```

### 05 — Numbered, described, documented

Every component ships with:

- A **number** (`001`–`100`, zero-padded)
- A **title** (Fraunces-friendly, 1–3 words)
- A **category** (one of the 12: Buttons, Inputs, Cards, Loaders, Toggles, Tooltips, Toasts, Progress, Navigation, Text, Backgrounds, Badges)
- A **one-line description** (what it does, not what it looks like)
- A **Preview tab** (live rendered, min-height 280px)
- A **Code tab** (HTML + CSS, Shiki-highlighted, copyable)
- Optional **dependency badges** (only if a JS lib is genuinely required — most components should have none)

### 06 — Test in three browsers

Chrome, Firefox, Safari. Degrade gracefully if CSS Houdini, `:has()`, or container queries are unsupported. Use `@supports` where appropriate.

## Adding a new component

### Step 1 — Pick a category and a number

Open `src/lib/crust/components/{category}.ts`. The next number is the highest existing number in that file + 1. Numbers are global across the library, not per-category — check `src/lib/crust/components.ts` for the master list.

### Step 2 — Write the component

Each component is a typed object:

```typescript
{
  id: "btn-my-cool-button",           // kebab-case, unique
  number: "101",                       // zero-padded, global
  title: "My Cool Button",             // Title Case
  category: "Buttons",                 // one of the 12
  description: "One sentence that says what it does.",
  deps: [],                            // optional: ["GSAP"] etc.
  html: `<button class="c-btn-my-cool-button">
    <span>Click me</span>
  </button>`,
  css: `.c-btn-my-cool-button {
    /* your CSS, scoped under .c-btn-my-cool-button */
  }`,
}
```

### Step 3 — Wire up interactivity (if needed)

If your component needs JS (ripples, magnetics, tab switching, etc.), add `data-*` attributes to the HTML and handle them in `src/components/crust/component-preview.tsx`. Follow the existing patterns — there are already handlers for `[data-ripple]`, `[data-magnetic]`, `[data-tilt]`, `[data-flip]`, `[data-pill]`, `[data-seg]`, `[data-tabs]`, `[data-acc]`, and a dozen more.

### Step 4 — Verify locally

```bash
bun install
bun run dev
# open http://localhost:3000
# navigate to Components → your category
# click Preview and Code tabs on your card
# click copy buttons to verify they work
# toggle dark mode (top-right sun/moon)
# test on mobile width (responsive)
```

### Step 5 — Lint and commit

```bash
bun run lint
```

Lint must pass with zero errors. Then commit with a clear message:

```text
feat(buttons): add Fill Slide button (#101)

Ink floods upward on hover, swapping the text color in a single motion.
Pure CSS, no dependencies.
```

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat(category):` — new component
- `fix(category):` — bug fix to an existing component
- `docs:` — documentation changes
- `chore:` — tooling, dependencies, config
- `refactor:` — code restructuring with no behavior change

### Step 6 — Open the PR

- PR title: `feat(buttons): add Fill Slide button`
- PR body should include:
  - What the component does (one paragraph)
  - Which category and number
  - Screenshot of Preview tab (light + dark if appearance differs)
  - Screenshot of Code tab
  - Confirmation that all 6 rules are satisfied
  - Confirmation that lint passes and the component was tested in Chrome + Firefox + Safari

## Reporting bugs

Open an issue with:

1. **Component ID** (e.g. `btn-fill-slide`)
2. **Browser + version** (e.g. Safari 17.4, Firefox 128)
3. **Steps to reproduce**
4. **Expected vs actual behavior**
5. **Screenshot** if visual

## Requesting components

Open an issue with the `component-request` label. Describe the use case, not the implementation. The maintainers will decide if it fits the editorial voice.

## Style and tone

Crust's voice is editorial, confident, slightly brutalist, developer-first, no fluff. Documentation and PR descriptions should match. Short sentences. Active voice. No marketing language.

```text
✅  "Fills upward on hover."
❌  "This amazing button will revolutionize your UX with a stunning fill effect!"
```

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Built with ink, paper, and a little rust. ✶
