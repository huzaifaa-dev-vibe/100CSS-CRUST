import type { CrustComponent } from "../components";

export const navigation: CrustComponent[] = [
  {
    id: "nav-breadcrumb-trail",
    number: "074",
    title: "Breadcrumb Trail",
    category: "Navigation",
    description: "Slash-separated breadcrumb with the current page in rust.",
    html: `<nav class="c-nav-breadcrumb-trail" aria-label="Breadcrumb">
  <a href="#">Crust</a>
  <span class="sep">/</span>
  <a href="#">Components</a>
  <span class="sep">/</span>
  <span class="cur">Buttons</span>
</nav>`,
    css: `.c-nav-breadcrumb-trail {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.c-nav-breadcrumb-trail a {
  color: var(--smoke, #6B6660);
  text-decoration: none;
  transition: color 180ms ease;
}
.c-nav-breadcrumb-trail a:hover { color: var(--ink, #0E0E0C); }
.c-nav-breadcrumb-trail .sep { color: var(--bone, #E8E3D6); }
.c-nav-breadcrumb-trail .cur {
  color: var(--rust, #C2410C);
  font-weight: 600;
}`,
  },
  {
    id: "nav-pagination-dots",
    number: "075",
    title: "Pagination Dots",
    category: "Navigation",
    description: "Square dot pagination — the active dot is rust, rest are ink outlines.",
    html: `<nav class="c-nav-pagination-dots" aria-label="Pagination">
  <button class="prev" aria-label="Previous">‹</button>
  <div class="dots">
    <span class="d"></span>
    <span class="d"></span>
    <span class="d active"></span>
    <span class="d"></span>
    <span class="d"></span>
  </div>
  <button class="next" aria-label="Next">›</button>
</nav>`,
    css: `.c-nav-pagination-dots {
  display: inline-flex; align-items: center; gap: 14px;
}
.c-nav-pagination-dots .prev,
.c-nav-pagination-dots .next {
  width: 28px; height: 28px;
  font-family: var(--font-mono, monospace);
  font-size: 16px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease;
}
.c-nav-pagination-dots .prev:hover,
.c-nav-pagination-dots .next:hover {
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
}
.c-nav-pagination-dots .dots {
  display: inline-flex; gap: 6px;
}
.c-nav-pagination-dots .d {
  width: 10px; height: 10px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-nav-pagination-dots .d.active {
  background: var(--rust, #C2410C);
}`,
  },
  {
    id: "nav-menu-strike",
    number: "076",
    title: "Menu Strike",
    category: "Navigation",
    description: "Vertical nav links with a rust strike-through on hover.",
    html: `<nav class="c-nav-menu-strike">
  <a href="#">Home</a>
  <a href="#" class="active">Components</a>
  <a href="#">Docs</a>
  <a href="#">About</a>
</nav>`,
    css: `.c-nav-menu-strike {
  display: flex; flex-direction: column; gap: 4px;
  font-family: var(--font-fraunces, serif);
}
.c-nav-menu-strike a {
  position: relative;
  padding: 4px 12px 4px 0;
  font-size: 24px;
  font-weight: 500;
  color: var(--ink, #0E0E0C);
  text-decoration: none;
  transition: color 200ms ease, padding 200ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-nav-menu-strike a::before {
  content: "";
  position: absolute;
  left: 0; top: 50%;
  width: 0; height: 1.5px;
  background: var(--rust, #C2410C);
  transition: width 220ms cubic-bezier(0.22, 1, 0.36, 1);
  transform: translateY(-50%);
}
.c-nav-menu-strike a:hover,
.c-nav-menu-strike a.active {
  padding-left: 16px;
  color: var(--rust, #C2410C);
}
.c-nav-menu-strike a:hover::before,
.c-nav-menu-strike a.active::before { width: 10px; }`,
  },
  {
    id: "nav-tab-bar",
    number: "077",
    title: "Tab Bar",
    category: "Navigation",
    description: "Editorial tab bar with a top-edge rust indicator that slides.",
    html: `<nav class="c-nav-tab-bar" data-tb>
  <button class="active" data-tb-btn>Overview</button>
  <button data-tb-btn>Specs</button>
  <button data-tb-btn>Changelog</button>
  <span class="ind" aria-hidden="true"></span>
</nav>`,
    css: `.c-nav-tab-bar {
  position: relative;
  display: inline-flex;
  border-bottom: 1.5px solid var(--ink, #0E0E0C);
}
.c-nav-tab-bar button {
  position: relative;
  padding: 10px 18px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 200ms ease;
}
.c-nav-tab-bar button.active { color: var(--ink, #0E0E0C); }
.c-nav-tab-bar .ind {
  position: absolute;
  bottom: -1.5px; left: 0;
  height: 1.5px; width: 0;
  background: var(--rust, #C2410C);
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), width 280ms cubic-bezier(0.22, 1, 0.36, 1);
}`,
  },
  {
    id: "nav-tree-nested",
    number: "078",
    title: "Tree Nested",
    category: "Navigation",
    description: "A file-tree nav with rotatable arrows and indented children.",
    html: `<nav class="c-nav-tree-nested">
  <details open>
    <summary>Components</summary>
    <a href="#" class="active">Buttons</a>
    <a href="#">Cards</a>
    <a href="#">Inputs</a>
  </details>
  <details>
    <summary>Docs</summary>
    <a href="#">Install</a>
    <a href="#">Tokens</a>
  </details>
</nav>`,
    css: `.c-nav-tree-nested {
  width: 220px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
}
.c-nav-tree-nested summary {
  padding: 6px 0;
  font-weight: 600;
  color: var(--ink, #0E0E0C);
  cursor: pointer;
  list-style: none;
}
.c-nav-tree-nested summary::-webkit-details-marker { display: none; }
.c-nav-tree-nested summary::before {
  content: "›";
  display: inline-block;
  margin-right: 8px;
  color: var(--rust, #C2410C);
  transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-nav-tree-nested details[open] summary::before { transform: rotate(90deg); }
.c-nav-tree-nested a {
  display: block;
  padding: 4px 0 4px 22px;
  color: var(--smoke, #6B6660);
  text-decoration: none;
  transition: color 180ms ease;
}
.c-nav-tree-nested a:hover { color: var(--ink, #0E0E0C); }
.c-nav-tree-nested a.active {
  color: var(--rust, #C2410C);
  font-weight: 600;
}`,
  },
  {
    id: "nav-step-progress",
    number: "079",
    title: "Step Progress",
    category: "Navigation",
    description: "A horizontal multi-step nav with numbered nodes and connector.",
    html: `<nav class="c-nav-step-progress">
  <div class="step done"><span class="n">1</span><span class="lbl">Cart</span></div>
  <div class="step done"><span class="n">2</span><span class="lbl">Address</span></div>
  <div class="step active"><span class="n">3</span><span class="lbl">Pay</span></div>
  <div class="step"><span class="n">4</span><span class="lbl">Done</span></div>
</nav>`,
    css: `.c-nav-step-progress {
  display: inline-flex; align-items: center; gap: 8px;
}
.c-nav-step-progress .step {
  position: relative;
  display: inline-flex; align-items: center; gap: 8px;
  padding-right: 16px;
}
.c-nav-step-progress .step + .step::before {
  content: "";
  position: absolute;
  left: -8px; top: 12px;
  width: 16px; height: 1.5px;
  background: var(--ink, #0E0E0C);
}
.c-nav-step-progress .n {
  display: inline-flex; align-items: center; justify-content: center;
  width: 24px; height: 24px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-nav-step-progress .done .n {
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
}
.c-nav-step-progress .active .n {
  background: var(--rust, #C2410C);
  color: var(--paper, #F4F1EA);
  border-color: var(--rust, #C2410C);
}
.c-nav-step-progress .lbl {
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 12px;
  color: var(--smoke, #6B6660);
}
.c-nav-step-progress .active .lbl { color: var(--ink, #0E0E0C); font-weight: 600; }`,
  },
  {
    id: "nav-pills-row",
    number: "080",
    title: "Pills Row",
    category: "Navigation",
    description: "A horizontal row of category pills with active in ink.",
    html: `<nav class="c-nav-pills-row">
  <button class="active">All</button>
  <button>Buttons</button>
  <button>Cards</button>
  <button>Inputs</button>
  <button>Loaders</button>
</nav>`,
    css: `.c-nav-pills-row {
  display: inline-flex; gap: 6px; flex-wrap: wrap;
}
.c-nav-pills-row button {
  padding: 6px 14px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  border-radius: 999px;
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease;
}
.c-nav-pills-row button:hover {
  background: var(--bone, #E8E3D6);
}
.c-nav-pills-row button.active {
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
}`,
  },
];

export const text: CrustComponent[] = [
  {
    id: "txt-scramble",
    number: "081",
    title: "Text Scramble",
    category: "Text",
    description: "Hover kicks a mono scramble that resolves to the label.",
    deps: ["GSAP"],
    html: `<h2 class="c-txt-scramble" data-scramble>Hacker mode</h2>`,
    css: `.c-txt-scramble {
  margin: 0;
  font-family: var(--font-mono, monospace);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink, #0E0E0C);
  cursor: default;
}`,
  },
  {
    id: "txt-outline-fill",
    number: "082",
    title: "Outline Fill",
    category: "Text",
    description: "Outline text that floods with rust on hover.",
    html: `<h2 class="c-txt-outline-fill">Crust</h2>`,
    css: `.c-txt-outline-fill {
  margin: 0;
  font-family: var(--font-fraunces, serif);
  font-size: 96px;
  font-weight: 500;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--ink, #0E0E0C);
  transition: color 280ms ease, -webkit-text-stroke-color 280ms ease;
  cursor: default;
}
.c-txt-outline-fill:hover {
  color: var(--rust, #C2410C);
  -webkit-text-stroke-color: var(--rust, #C2410C);
}`,
  },
  {
    id: "txt-gradient-mask",
    number: "083",
    title: "Gradient Mask",
    category: "Text",
    description: "Display text masked against a clipped ochre-to-rust gradient.",
    html: `<h2 class="c-txt-gradient-mask">Baklava</h2>`,
    css: `.c-txt-gradient-mask {
  margin: 0;
  font-family: var(--font-fraunces, serif);
  font-size: 84px;
  font-weight: 500;
  letter-spacing: -0.04em;
  background: linear-gradient(120deg, var(--ochre, #D4A24C) 0%, var(--rust, #C2410C) 60%, var(--clay, #8C5A3C) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`,
  },
  {
    id: "txt-typewriter",
    number: "084",
    title: "Typewriter",
    category: "Text",
    description: "Type-out animation with a blinking rust caret.",
    html: `<p class="c-txt-typewriter">
  <span class="text">Components with a crust.</span><span class="caret" aria-hidden="true"></span>
</p>`,
    css: `.c-txt-typewriter {
  margin: 0;
  font-family: var(--font-mono, monospace);
  font-size: 16px;
  color: var(--ink, #0E0E0C);
}
.c-txt-typewriter .text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0 solid transparent;
  width: 0;
  animation: c-typewriter 2.6s steps(26) 0.4s forwards;
}
.c-txt-typewriter .caret {
  display: inline-block;
  width: 8px; height: 18px;
  margin-left: 2px;
  background: var(--rust, #C2410C);
  vertical-align: text-bottom;
  animation: c-blink 600ms steps(1) infinite;
}
@keyframes c-typewriter { to { width: 100%; } }
@keyframes c-blink { 50% { opacity: 0; } }`,
  },
  {
    id: "txt-marquee",
    number: "085",
    title: "Marquee",
    category: "Text",
    description: "An infinite horizontal marquee that pauses on hover.",
    html: `<div class="c-txt-marquee">
  <div class="track">
    <span>crust · crumb · loaf · bake · crust · crumb · loaf · bake ·</span>
    <span>crust · crumb · loaf · bake · crust · crumb · loaf · bake ·</span>
  </div>
</div>`,
    css: `.c-txt-marquee {
  width: 320px;
  overflow: hidden;
  border-top: 1.5px solid var(--ink, #0E0E0C);
  border-bottom: 1.5px solid var(--ink, #0E0E0C);
  background: var(--bone, #E8E3D6);
}
.c-txt-marquee .track {
  display: inline-flex;
  white-space: nowrap;
  animation: c-marquee 14s linear infinite;
}
.c-txt-marquee:hover .track { animation-play-state: paused; }
.c-txt-marquee span {
  padding: 8px 0;
  font-family: var(--font-fraunces, serif);
  font-size: 22px;
  font-weight: 500;
  color: var(--ink, #0E0E0C);
}
@keyframes c-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}`,
  },
  {
    id: "txt-glitch",
    number: "086",
    title: "Glitch",
    category: "Text",
    description: "Two-offset clip-path glitch layers pulse on a timer.",
    html: `<h2 class="c-txt-glitch" data-text="ERROR">ERROR</h2>`,
    css: `.c-txt-glitch {
  position: relative;
  margin: 0;
  font-family: var(--font-mono, monospace);
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--ink, #0E0E0C);
}
.c-txt-glitch::before,
.c-txt-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  overflow: hidden;
}
.c-txt-glitch::before {
  color: var(--rust, #C2410C);
  animation: c-glitch-a 2.6s infinite linear alternate;
}
.c-txt-glitch::after {
  color: var(--moss, #3F5B3A);
  animation: c-glitch-b 2s infinite linear alternate;
}
@keyframes c-glitch-a {
  0%, 100% { clip-path: inset(0 0 90% 0); transform: translate(0); }
  20% { clip-path: inset(30% 0 50% 0); transform: translate(-2px, 1px); }
  40% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -1px); }
  60% { clip-path: inset(10% 0 80% 0); transform: translate(-1px, 2px); }
  80% { clip-path: inset(80% 0 5% 0); transform: translate(1px, -2px); }
}
@keyframes c-glitch-b {
  0%, 100% { clip-path: inset(80% 0 5% 0); transform: translate(0); }
  25% { clip-path: inset(20% 0 60% 0); transform: translate(2px, 1px); }
  50% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, -1px); }
  75% { clip-path: inset(70% 0 10% 0); transform: translate(1px, 2px); }
}`,
  },
  {
    id: "txt-split-reveal",
    number: "087",
    title: "Split Reveal",
    category: "Text",
    description: "Each word rises into place from below a clip mask.",
    html: `<h2 class="c-txt-split-reveal">
  <span class="w">Bake</span> <span class="w">the</span> <span class="w">loaf</span>
</h2>`,
    css: `.c-txt-split-reveal {
  margin: 0;
  font-family: var(--font-fraunces, serif);
  font-size: 56px;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--ink, #0E0E0C);
}
.c-txt-split-reveal .w {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}
.c-txt-split-reveal .w::after {
  content: attr(data-text);
}
.c-txt-split-reveal .w {
  animation: c-word-up 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
  transform: translateY(110%);
}
.c-txt-split-reveal .w:nth-child(1) { animation-delay: 0.1s; }
.c-txt-split-reveal .w:nth-child(2) { animation-delay: 0.25s; }
.c-txt-split-reveal .w:nth-child(3) { animation-delay: 0.4s; }
@keyframes c-word-up {
  to { opacity: 1; transform: translateY(0); }
}`,
  },
  {
    id: "txt-strike-reveal",
    number: "088",
    title: "Strike Reveal",
    category: "Text",
    description: "Heading with a hand-drawn rust strike-through on hover.",
    html: `<h2 class="c-txt-strike-reveal">Cross me out</h2>`,
    css: `.c-txt-strike-reveal {
  position: relative;
  margin: 0;
  font-family: var(--font-fraunces, serif);
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink, #0E0E0C);
  cursor: default;
}
.c-txt-strike-reveal::after {
  content: "";
  position: absolute;
  left: -4px; right: -4px;
  top: 55%;
  height: 4px;
  background: var(--rust, #C2410C);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-txt-strike-reveal:hover::after { transform: scaleX(1); }`,
  },
  {
    id: "txt-rotate-cycle",
    number: "089",
    title: "Rotate Cycle",
    category: "Text",
    description: "Inline word cycles through a fixed set every 1.8s.",
    html: `<p class="c-txt-rotate-cycle">
  Crust is <span class="rotator" data-words="solid,layered,crafted,sharp">solid</span>.
</p>`,
    css: `.c-txt-rotate-cycle {
  margin: 0;
  font-family: var(--font-fraunces, serif);
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink, #0E0E0C);
}
.c-txt-rotate-cycle .rotator {
  display: inline-block;
  position: relative;
  color: var(--rust, #C2410C);
  min-width: 4ch;
}
.c-txt-rotate-cycle .rotator::after {
  content: "";
  position: absolute;
  left: 0; bottom: 4px;
  width: 100%; height: 1.5px;
  background: var(--rust, #C2410C);
  transform: scaleX(0);
  transform-origin: left;
  animation: c-rotate-underline 1.8s linear infinite;
}
@keyframes c-rotate-underline {
  0%, 100% { transform: scaleX(0); transform-origin: left; }
  45% { transform: scaleX(1); transform-origin: left; }
  50% { transform: scaleX(1); transform-origin: right; }
  95% { transform: scaleX(0); transform-origin: right; }
}`,
  },
  {
    id: "txt-numbered-heading",
    number: "090",
    title: "Numbered Heading",
    category: "Text",
    description: "Editorial heading with a numbered section marker prefix.",
    html: `<div class="c-txt-numbered-heading">
  <span class="num">01 —</span>
  <h2>The crust method</h2>
</div>`,
    css: `.c-txt-numbered-heading {
  display: inline-flex; align-items: baseline; gap: 14px;
}
.c-txt-numbered-heading .num {
  font-family: var(--font-mono, monospace);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--rust, #C2410C);
}
.c-txt-numbered-heading h2 {
  margin: 0;
  font-family: var(--font-fraunces, serif);
  font-size: 44px;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--ink, #0E0E0C);
}`,
  },
];
