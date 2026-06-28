import type { CrustComponent } from "../components";

export const tooltips: CrustComponent[] = [
  {
    id: "tt-arrow-drop",
    number: "056",
    title: "Arrow Drop",
    category: "Tooltips",
    description: "Tooltip drops down with an ink arrow anchored to the trigger.",
    html: `<div class="c-tt-arrow-drop">
  <button class="trigger">Hover</button>
  <div class="tip" role="tooltip">I am a tooltip</div>
</div>`,
    css: `.c-tt-arrow-drop {
  position: relative;
  display: inline-block;
}
.c-tt-arrow-drop .trigger {
  padding: 8px 14px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
}
.c-tt-arrow-drop .tip {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(-6px);
  padding: 8px 12px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease, transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-tt-arrow-drop .tip::before {
  content: "";
  position: absolute;
  top: -7px; left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px; height: 10px;
  background: var(--ink, #0E0E0C);
  border-left: 1.5px solid var(--ink, #0E0E0C);
  border-top: 1.5px solid var(--ink, #0E0E0C);
}
.c-tt-arrow-drop:hover .tip,
.c-tt-arrow-drop:focus-within .tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
  },
  {
    id: "tt-side-slide",
    number: "057",
    title: "Side Slide",
    category: "Tooltips",
    description: "Tooltip slides in from the right with a soft easing curve.",
    html: `<div class="c-tt-side-slide">
  <button class="trigger">→</button>
  <div class="tip" role="tooltip">Slides from the side</div>
</div>`,
    css: `.c-tt-side-slide {
  position: relative;
  display: inline-block;
}
.c-tt-side-slide .trigger {
  width: 40px; height: 40px;
  font-family: var(--font-mono, monospace);
  font-size: 16px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
}
.c-tt-side-slide .tip {
  position: absolute;
  top: 50%; left: calc(100% + 12px);
  transform: translateY(-50%) translateX(-8px);
  padding: 8px 12px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 12px;
  color: var(--paper, #F4F1EA);
  background: var(--rust, #C2410C);
  border: 1.5px solid var(--ink, #0E0E0C);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-tt-side-slide:hover .tip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}`,
  },
  {
    id: "tt-underline-cue",
    number: "058",
    title: "Underline Cue",
    category: "Tooltips",
    description: "Dotted underline marks a term; hover reveals the definition.",
    html: `<p class="c-tt-underline-cue">
  A <span class="term">levain<sup>?</sup></span> is a stiff preferment.
</p>`,
    css: `.c-tt-underline-cue {
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 15px;
  color: var(--ink, #0E0E0C);
  max-width: 280px;
}
.c-tt-underline-cue .term {
  position: relative;
  color: var(--rust, #C2410C);
  cursor: help;
  border-bottom: 1.5px dotted var(--rust, #C2410C);
}
.c-tt-underline-cue .term sup {
  font-size: 9px;
  margin-left: 1px;
}
.c-tt-underline-cue .term::after {
  content: "A French word for a piece of dough saved to leaven the next bake.";
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  width: 200px;
  padding: 8px 10px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 12px;
  font-weight: 400;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 5;
}
.c-tt-underline-cue .term:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
  },
  {
    id: "tt-rich-card",
    number: "059",
    title: "Rich Card Tooltip",
    category: "Tooltips",
    description: "A multi-line tooltip with a title, body, and small caps footer.",
    html: `<div class="c-tt-rich-card">
  <button class="trigger">Hover for info</button>
  <div class="tip" role="tooltip">
    <span class="k">DEFINITION</span>
    <strong>Autolyse</strong>
    <p>Resting flour and water before kneading to develop gluten.</p>
  </div>
</div>`,
    css: `.c-tt-rich-card {
  position: relative;
  display: inline-block;
}
.c-tt-rich-card .trigger {
  padding: 8px 14px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--ink, #0E0E0C);
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
}
.c-tt-rich-card .tip {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 220px;
  padding: 12px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  box-shadow: 4px 4px 0 var(--ink, #0E0E0C);
  opacity: 0;
  transform: translateY(-6px);
  pointer-events: none;
  transition: opacity 200ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-tt-rich-card:hover .tip { opacity: 1; transform: translateY(0); }
.c-tt-rich-card .k {
  font-family: var(--font-mono, monospace);
  font-size: 9px;
  letter-spacing: 0.14em;
  color: var(--smoke, #6B6660);
}
.c-tt-rich-card strong {
  display: block;
  margin: 4px 0 6px;
  font-family: var(--font-fraunces, serif);
  font-size: 18px;
  font-weight: 500;
}
.c-tt-rich-card p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 12px;
  color: var(--smoke, #6B6660);
  line-height: 1.5;
}`,
  },
  {
    id: "tt-magnetic-follow",
    number: "060",
    title: "Magnetic Follow",
    category: "Tooltips",
    description: "A small label that follows the cursor within the trigger bounds.",
    html: `<div class="c-tt-magnetic-follow" data-follow>
  <span class="label">Drag through me</span>
  <div class="cursor" aria-hidden="true">↑ here</div>
</div>`,
    css: `.c-tt-magnetic-follow {
  position: relative;
  display: inline-flex;
  align-items: center; justify-content: center;
  width: 280px; height: 100px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-tt-magnetic-follow .cursor {
  position: absolute;
  padding: 4px 8px;
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 200ms ease;
}
.c-tt-magnetic-follow:hover .cursor { opacity: 1; }`,
  },
];

export const toasts: CrustComponent[] = [
  {
    id: "ts-slide-in",
    number: "061",
    title: "Slide In",
    category: "Toasts",
    description: "Standard toast — slides in from the right with hairline border.",
    html: `<div class="c-ts-slide-in">
  <span class="ico" aria-hidden="true">✓</span>
  <div class="body">
    <strong>Saved</strong>
    <p>Your changes are committed.</p>
  </div>
  <button class="close" aria-label="Close">×</button>
</div>`,
    css: `.c-ts-slide-in {
  display: flex; align-items: flex-start; gap: 12px;
  width: 320px;
  padding: 14px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  box-shadow: 3px 3px 0 var(--ink, #0E0E0C);
}
.c-ts-slide-in .ico {
  display: inline-flex; align-items: center; justify-content: center;
  width: 24px; height: 24px;
  font-family: var(--font-mono, monospace);
  color: var(--paper, #F4F1EA);
  background: var(--moss, #3F5B3A);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-ts-slide-in .body { flex: 1; }
.c-ts-slide-in strong {
  display: block;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink, #0E0E0C);
}
.c-ts-slide-in p {
  margin: 2px 0 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 12px;
  color: var(--smoke, #6B6660);
}
.c-ts-slide-in .close {
  background: transparent;
  border: none;
  font-size: 18px;
  line-height: 1;
  color: var(--smoke, #6B6660);
  cursor: pointer;
}`,
  },
  {
    id: "ts-progress-auto",
    number: "062",
    title: "Auto Dismiss",
    category: "Toasts",
    description: "Toast with a top-edge rust bar that drains over 4 seconds.",
    html: `<div class="c-ts-progress-auto">
  <div class="bar" aria-hidden="true"></div>
  <div class="row">
    <strong>Uploading…</strong>
    <p>Will dismiss in 4s</p>
  </div>
</div>`,
    css: `.c-ts-progress-auto {
  position: relative;
  width: 280px;
  padding: 14px;
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-ts-progress-auto .bar {
  position: absolute;
  top: 0; left: 0;
  height: 1.5px; width: 100%;
  background: var(--rust, #C2410C);
  transform-origin: left;
  animation: c-ts-drain 4s linear forwards;
}
@keyframes c-ts-drain { from { transform: scaleX(1); } to { transform: scaleX(0); } }
.c-ts-progress-auto strong {
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  font-weight: 600;
}
.c-ts-progress-auto p {
  margin: 4px 0 0;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--ochre, #D4A24C);
}`,
  },
  {
    id: "ts-action-stack",
    number: "063",
    title: "Action Stack",
    category: "Toasts",
    description: "Toast with inline action button — undo, retry, dismiss.",
    html: `<div class="c-ts-action-stack">
  <div class="body">
    <strong>Removed 3 items</strong>
  </div>
  <div class="actions">
    <button>Undo</button>
    <button class="dismiss">×</button>
  </div>
</div>`,
    css: `.c-ts-action-stack {
  display: flex; align-items: center; gap: 14px;
  width: 320px;
  padding: 12px 14px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-ts-action-stack .body { flex: 1; }
.c-ts-action-stack strong {
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink, #0E0E0C);
}
.c-ts-action-stack .actions {
  display: inline-flex; gap: 6px;
}
.c-ts-action-stack button {
  padding: 6px 10px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  transition: background 180ms ease;
}
.c-ts-action-stack button:hover { background: var(--rust, #C2410C); }
.c-ts-action-stack .dismiss { padding: 6px 8px; }`,
  },
  {
    id: "ts-inline-banner",
    number: "064",
    title: "Inline Banner",
    category: "Toasts",
    description: "A wide inline alert banner with an icon, message, and CTA.",
    html: `<div class="c-ts-inline-banner">
  <span class="ico">!</span>
  <div class="body">
    <strong>New version available</strong>
    <p>Crust 2.0 ships with 24 fresh effects.</p>
  </div>
  <button>Upgrade</button>
</div>`,
    css: `.c-ts-inline-banner {
  display: flex; align-items: center; gap: 14px;
  width: 420px;
  padding: 14px 18px;
  background: var(--ochre, #D4A24C);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-ts-inline-banner .ico {
  display: inline-flex; align-items: center; justify-content: center;
  width: 28px; height: 28px;
  font-family: var(--font-fraunces, serif);
  font-size: 18px;
  font-weight: 700;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-ts-inline-banner .body { flex: 1; }
.c-ts-inline-banner strong {
  display: block;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink, #0E0E0C);
}
.c-ts-inline-banner p {
  margin: 2px 0 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 12px;
  color: var(--ink, #0E0E0C);
  opacity: 0.75;
}
.c-ts-inline-banner button {
  padding: 8px 14px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
}`,
  },
  {
    id: "ts-error-block",
    number: "065",
    title: "Error Block",
    category: "Toasts",
    description: "A blocking error card with rust accent and mono stack trace.",
    html: `<div class="c-ts-error-block">
  <header>
    <span class="ico">×</span>
    <strong>Compile failed</strong>
    <span class="code">ERR_TOK_42</span>
  </header>
  <pre>unexpected token at line 12:4
expected '}' but got 'rust'</pre>
</div>`,
    css: `.c-ts-error-block {
  width: 360px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-ts-error-block header {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px;
  background: var(--rust, #C2410C);
  color: var(--paper, #F4F1EA);
  border-bottom: 1.5px solid var(--ink, #0E0E0C);
}
.c-ts-error-block .ico {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  font-family: var(--font-fraunces, serif);
  font-size: 16px;
  font-weight: 700;
  background: var(--paper, #F4F1EA);
  color: var(--rust, #C2410C);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-ts-error-block strong {
  flex: 1;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  font-weight: 600;
}
.c-ts-error-block .code {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--paper, #F4F1EA);
  opacity: 0.85;
}
.c-ts-error-block pre {
  margin: 0;
  padding: 12px 14px;
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  color: var(--ink, #0E0E0C);
  white-space: pre-wrap;
}`,
  },
];

export const progress: CrustComponent[] = [
  {
    id: "pg-linear-rust",
    number: "066",
    title: "Linear Rust",
    category: "Progress",
    description: "Standard 1.5px ink rail with a rust fill and percentage label.",
    html: `<div class="c-pg-linear-rust">
  <div class="row">
    <span class="lbl">Baking</span>
    <span class="pct">62%</span>
  </div>
  <div class="rail"><div class="fill" style="width:62%"></div></div>
</div>`,
    css: `.c-pg-linear-rust { width: 280px; }
.c-pg-linear-rust .row {
  display: flex; justify-content: space-between;
  margin-bottom: 6px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--smoke, #6B6660);
}
.c-pg-linear-rust .pct { color: var(--ink, #0E0E0C); font-weight: 600; }
.c-pg-linear-rust .rail {
  height: 1.5px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-pg-linear-rust .fill {
  height: 100%;
  background: var(--rust, #C2410C);
  transition: width 400ms cubic-bezier(0.22, 1, 0.36, 1);
}`,
  },
  {
    id: "pg-stepped-blocks",
    number: "067",
    title: "Stepped Blocks",
    category: "Progress",
    description: "Five square blocks fill sequentially as the step count rises.",
    html: `<div class="c-pg-stepped-blocks" data-step="3">
  <span class="b done"></span>
  <span class="b done"></span>
  <span class="b done"></span>
  <span class="b"></span>
  <span class="b"></span>
</div>`,
    css: `.c-pg-stepped-blocks {
  display: inline-flex; gap: 6px;
}
.c-pg-stepped-blocks .b {
  width: 32px; height: 14px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  transition: background 200ms ease;
}
.c-pg-stepped-blocks .b.done { background: var(--rust, #C2410C); }`,
  },
  {
    id: "pg-radial-circle",
    number: "068",
    title: "Radial Circle",
    category: "Progress",
    description: "Circular SVG progress with a numeric readout in the center.",
    html: `<div class="c-pg-radial-circle">
  <svg viewBox="0 0 80 80" width="80" height="80">
    <circle cx="40" cy="40" r="34" fill="none" stroke="var(--bone, #E8E3D6)" stroke-width="6"/>
    <circle class="fill" cx="40" cy="40" r="34" fill="none" stroke="var(--rust, #C2410C)" stroke-width="6" stroke-linecap="square" stroke-dasharray="213.6" stroke-dashoffset="80"/>
  </svg>
  <div class="center">63<sup>%</sup></div>
</div>`,
    css: `.c-pg-radial-circle {
  position: relative;
  display: inline-flex; align-items: center; justify-content: center;
}
.c-pg-radial-circle .fill {
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 600ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-pg-radial-circle .center {
  position: absolute;
  font-family: var(--font-fraunces, serif);
  font-size: 22px;
  font-weight: 500;
  color: var(--ink, #0E0E0C);
}
.c-pg-radial-circle .center sup { font-size: 11px; color: var(--rust, #C2410C); }`,
  },
  {
    id: "pg-segmented-rail",
    number: "069",
    title: "Segmented Rail",
    category: "Progress",
    description: "A rail split into 10 segments — completed segments fill ink.",
    html: `<div class="c-pg-segmented-rail" data-segs="6">
  <span></span><span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span><span></span>
</div>`,
    css: `.c-pg-segmented-rail {
  display: flex; gap: 3px;
  width: 320px;
}
.c-pg-segmented-rail span {
  flex: 1;
  height: 6px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  transition: background 200ms ease;
}
.c-pg-segmented-rail[data-segs="6"] span:nth-child(-n+6) { background: var(--ink, #0E0E0C); }
.c-pg-segmented-rail[data-segs="6"] span:nth-child(6) { background: var(--rust, #C2410C); }`,
  },
  {
    id: "pg-cursor-bar",
    number: "070",
    title: "Cursor Bar",
    category: "Progress",
    description: "A slim bar with a sliding rust cursor showing position.",
    html: `<div class="c-pg-cursor-bar" data-pos="42">
  <div class="rail"></div>
  <div class="cursor" style="left:42%"></div>
  <div class="readout">42 / 100</div>
</div>`,
    css: `.c-pg-cursor-bar {
  position: relative;
  width: 280px;
}
.c-pg-cursor-bar .rail {
  height: 1.5px;
  background: var(--ink, #0E0E0C);
  opacity: 0.25;
}
.c-pg-cursor-bar .cursor {
  position: absolute;
  top: -3px;
  width: 2px; height: 9px;
  background: var(--rust, #C2410C);
  transform: translateX(-50%);
}
.c-pg-cursor-bar .readout {
  margin-top: 8px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  color: var(--smoke, #6B6660);
  text-align: center;
}`,
  },
  {
    id: "pg-counter-flip",
    number: "071",
    title: "Counter Flip",
    category: "Progress",
    description: "A 3-digit counter that flips digits as the value changes.",
    html: `<div class="c-pg-counter-flip" data-val="042">
  <span class="d">0</span><span class="d">4</span><span class="d">2</span>
  <span class="suffix">/100</span>
</div>`,
    css: `.c-pg-counter-flip {
  display: inline-flex; align-items: baseline; gap: 4px;
}
.c-pg-counter-flip .d {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 44px;
  font-family: var(--font-fraunces, serif);
  font-size: 32px;
  font-weight: 500;
  color: var(--ink, #0E0E0C);
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-pg-counter-flip .suffix {
  font-family: var(--font-mono, monospace);
  font-size: 14px;
  color: var(--smoke, #6B6660);
  margin-left: 6px;
}`,
  },
  {
    id: "pg-upload-stack",
    number: "072",
    title: "Upload Stack",
    category: "Progress",
    description: "Stacked file rows with per-file progress rails and status.",
    html: `<div class="c-pg-upload-stack">
  <div class="row">
    <span class="name">crust.css</span>
    <div class="rail"><div class="fill" style="width:100%"></div></div>
    <span class="state done">done</span>
  </div>
  <div class="row">
    <span class="name">tokens.json</span>
    <div class="rail"><div class="fill" style="width:62%"></div></div>
    <span class="state">62%</span>
  </div>
  <div class="row">
    <span class="name">logo.png</span>
    <div class="rail"><div class="fill" style="width:18%"></div></div>
    <span class="state">18%</span>
  </div>
</div>`,
    css: `.c-pg-upload-stack {
  width: 320px;
  display: flex; flex-direction: column; gap: 10px;
}
.c-pg-upload-stack .row {
  display: grid;
  grid-template-columns: 90px 1fr 40px;
  align-items: center; gap: 8px;
}
.c-pg-upload-stack .name {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  color: var(--ink, #0E0E0C);
}
.c-pg-upload-stack .rail {
  height: 1.5px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-pg-upload-stack .fill {
  height: 100%;
  background: var(--rust, #C2410C);
  transition: width 300ms ease;
}
.c-pg-upload-stack .state {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  text-align: right;
  color: var(--smoke, #6B6660);
}
.c-pg-upload-stack .state.done { color: var(--moss, #3F5B3A); }`,
  },
  {
    id: "pg-spiral-trace",
    number: "073",
    title: "Spiral Trace",
    category: "Progress",
    description: "An SVG spiral that draws itself as progress completes.",
    html: `<div class="c-pg-spiral-trace">
  <svg viewBox="0 0 100 100" width="80" height="80">
    <path class="spiral" d="M50 50 m0 -2 a2 2 0 1 1 0 4 a4 4 0 1 1 0 -8 a6 6 0 1 1 0 12 a8 8 0 1 1 0 -16 a10 10 0 1 1 0 20 a12 12 0 1 1 0 -24 a14 14 0 1 1 0 28" fill="none" stroke="var(--rust, #C2410C)" stroke-width="1.5" stroke-linecap="square"/>
  </svg>
</div>`,
    css: `.c-pg-spiral-trace { display: inline-flex; }
.c-pg-spiral-trace .spiral {
  stroke-dasharray: 320;
  stroke-dashoffset: 320;
  animation: c-spiral 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}
@keyframes c-spiral {
  0% { stroke-dashoffset: 320; }
  60%, 100% { stroke-dashoffset: 0; }
}`,
  },
];
