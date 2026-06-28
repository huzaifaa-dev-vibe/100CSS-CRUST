import type { CrustComponent } from "../components";

export const buttons: CrustComponent[] = [
  {
    id: "btn-fill-slide",
    number: "001",
    title: "Fill Slide",
    category: "Buttons",
    description: "Ink floods upward on hover, swapping the text color in a single motion.",
    html: `<button class="c-btn-fill-slide"><span>Get Crust</span></button>`,
    css: `.c-btn-fill-slide {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition: color 240ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-btn-fill-slide::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--rust, #C2410C);
  transform: translateY(101%);
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: -1;
}
.c-btn-fill-slide:hover { color: var(--paper, #F4F1EA); }
.c-btn-fill-slide:hover::before { transform: translateY(0); }
.c-btn-fill-slide:active { transform: scale(0.98); }`,
  },
  {
    id: "btn-underline-swipe",
    number: "002",
    title: "Underline Swipe",
    category: "Buttons",
    description: "A 1.5px underline snaps in from the left edge on hover.",
    html: `<button class="c-btn-underline-swipe"><span>Read the docs</span></button>`,
    css: `.c-btn-underline-swipe {
  position: relative;
  padding: 10px 4px 12px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 500;
  font-size: 15px;
  color: var(--ink, #0E0E0C);
  background: transparent;
  border: none;
  cursor: pointer;
}
.c-btn-underline-swipe span {
  position: relative;
  display: inline-block;
}
.c-btn-underline-swipe span::after {
  content: "";
  position: absolute;
  left: 0; bottom: -2px;
  width: 100%; height: 1.5px;
  background: var(--rust, #C2410C);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-btn-underline-swipe:hover span::after { transform: scaleX(1); }`,
  },
  {
    id: "btn-ripple-ink",
    number: "003",
    title: "Ripple Ink",
    category: "Buttons",
    description: "Click spawns an ink ripple that radiates from the cursor.",
    html: `<button class="c-btn-ripple-ink" data-ripple>Poke me</button>`,
    css: `.c-btn-ripple-ink {
  position: relative;
  padding: 14px 28px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 600;
  font-size: 14px;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
}
.c-btn-ripple-ink .rip {
  position: absolute;
  border-radius: 50%;
  background: var(--rust, #C2410C);
  transform: scale(0);
  animation: c-rip 600ms ease-out forwards;
  pointer-events: none;
}
@keyframes c-rip {
  to { transform: scale(4); opacity: 0; }
}`,
  },
  {
    id: "btn-border-trace",
    number: "004",
    title: "Border Trace",
    category: "Buttons",
    description: "Four hairlines meet corner-to-corner on hover, framing the label.",
    html: `<button class="c-btn-border-trace"><span>Trace</span></button>`,
    css: `.c-btn-border-trace {
  position: relative;
  padding: 14px 32px;
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
}
.c-btn-border-trace::before,
.c-btn-border-trace::after {
  content: "";
  position: absolute;
  background: var(--rust, #C2410C);
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-btn-border-trace::before {
  top: -1.5px; left: -1.5px;
  width: 30%; height: 1.5px;
  transform: scaleX(0); transform-origin: left;
}
.c-btn-border-trace::after {
  bottom: -1.5px; right: -1.5px;
  width: 30%; height: 1.5px;
  transform: scaleX(0); transform-origin: right;
}
.c-btn-border-trace:hover::before,
.c-btn-border-trace:hover::after { transform: scaleX(1); }
.c-btn-border-trace span {
  position: relative;
}
.c-btn-border-trace span::before,
.c-btn-border-trace span::after {
  content: "";
  position: absolute;
  background: var(--rust, #C2410C);
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1) 120ms;
}
.c-btn-border-trace span::before {
  top: -32px; left: -2px;
  width: 1.5px; height: 30%;
  transform: scaleY(0); transform-origin: top;
}
.c-btn-border-trace span::after {
  bottom: -32px; right: -2px;
  width: 1.5px; height: 30%;
  transform: scaleY(0); transform-origin: bottom;
}
.c-btn-border-trace:hover span::before,
.c-btn-border-trace:hover span::after { transform: scaleY(1); }`,
  },
  {
    id: "btn-push-3d",
    number: "005",
    title: "Push 3D",
    category: "Buttons",
    description: "A solid ink block with depth — press to feel the drop.",
    html: `<button class="c-btn-push-3d"><span>Press</span></button>`,
    css: `.c-btn-push-3d {
  position: relative;
  padding: 14px 28px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 600;
  font-size: 14px;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  box-shadow: 4px 4px 0 var(--rust, #C2410C);
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease;
}
.c-btn-push-3d:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 var(--rust, #C2410C);
}
.c-btn-push-3d:active {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 var(--rust, #C2410C);
}`,
  },
  {
    id: "btn-text-scramble",
    number: "006",
    title: "Text Scramble",
    category: "Buttons",
    description: "Hover kicks off a mono-font scramble that resolves to the label.",
    deps: ["GSAP"],
    html: `<button class="c-btn-text-scramble" data-scramble>Scramble</button>`,
    css: `.c-btn-text-scramble {
  padding: 14px 28px;
  font-family: var(--font-mono, monospace);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  transition: background 200ms ease, color 200ms ease;
}
.c-btn-text-scramble:hover {
  background: var(--rust, #C2410C);
  color: var(--paper, #F4F1EA);
}`,
  },
  {
    id: "btn-magnetic",
    number: "007",
    title: "Magnetic",
    category: "Buttons",
    description: "The button leans toward the cursor like iron to a magnet.",
    html: `<button class="c-btn-magnetic" data-magnetic>Magnetic</button>`,
    css: `.c-btn-magnetic {
  padding: 16px 32px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 600;
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  border-radius: 999px;
  cursor: pointer;
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1), background 200ms ease, color 200ms ease;
  will-change: transform;
}
.c-btn-magnetic:hover {
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
}`,
  },
  {
    id: "btn-icon-swap",
    number: "008",
    title: "Icon Swap",
    category: "Buttons",
    description: "Arrow slides out, replacement slides in from the right.",
    html: `<button class="c-btn-icon-swap">
  <span class="lbl">Continue</span>
  <span class="ico" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  </span>
</button>`,
    css: `.c-btn-icon-swap {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 12px 22px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 500;
  font-size: 14px;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  overflow: hidden;
}
.c-btn-icon-swap .ico {
  display: inline-flex;
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-btn-icon-swap:hover .ico { transform: translateX(4px); }
.c-btn-icon-swap:hover { background: var(--rust, #C2410C); border-color: var(--rust, #C2410C); }`,
  },
  {
    id: "btn-pill-toggle",
    number: "009",
    title: "Pill Toggle",
    category: "Buttons",
    description: "A pair of pills with a sliding ink indicator.",
    html: `<div class="c-btn-pill-toggle" data-pill>
  <button class="active" data-pill-btn>Monthly</button>
  <button data-pill-btn>Yearly</button>
  <span class="pill-indicator" aria-hidden="true"></span>
</div>`,
    css: `.c-btn-pill-toggle {
  position: relative;
  display: inline-flex;
  padding: 4px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  border-radius: 999px;
}
.c-btn-pill-toggle button {
  position: relative;
  z-index: 2;
  padding: 8px 18px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 500;
  font-size: 13px;
  color: var(--smoke, #6B6660);
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 999px;
  transition: color 240ms ease;
}
.c-btn-pill-toggle button.active { color: var(--paper, #F4F1EA); }
.c-btn-pill-toggle .pill-indicator {
  position: absolute;
  top: 4px; left: 4px;
  height: calc(100% - 8px);
  width: 96px;
  background: var(--ink, #0E0E0C);
  border-radius: 999px;
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 1;
}`,
  },
  {
    id: "btn-dotted-fill",
    number: "010",
    title: "Dotted Fill",
    category: "Buttons",
    description: "A halftone dot pattern fades in behind the label.",
    html: `<button class="c-btn-dotted-fill"><span>Halftone</span></button>`,
    css: `.c-btn-dotted-fill {
  position: relative;
  padding: 14px 28px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 600;
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
}
.c-btn-dotted-fill::before {
  content: "";
  position: absolute; inset: 0;
  background-image: radial-gradient(var(--rust, #C2410C) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  opacity: 0;
  transition: opacity 280ms ease;
  z-index: -1;
}
.c-btn-dotted-fill:hover::before { opacity: 0.85; }
.c-btn-dotted-fill:hover { color: var(--paper, #F4F1EA); }`,
  },
  {
    id: "btn-ghost-arrow",
    number: "011",
    title: "Ghost Arrow",
    category: "Buttons",
    description: "Borderless ghost button with an arrow that draws itself.",
    html: `<a class="c-btn-ghost-arrow" href="#">
  <span>Open the oven</span>
  <svg viewBox="0 0 32 8" width="32" height="8" aria-hidden="true">
    <path d="M0 4 H28 M24 1 L28 4 L24 7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  </svg>
</a>`,
    css: `.c-btn-ghost-arrow {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 8px 4px;
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink, #0E0E0C);
  text-decoration: none;
}
.c-btn-ghost-arrow svg path {
  stroke-dasharray: 32;
  stroke-dashoffset: 32;
  transition: stroke-dashoffset 400ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-btn-ghost-arrow:hover svg path { stroke-dashoffset: 0; }
.c-btn-ghost-arrow:hover { color: var(--rust, #C2410C); }`,
  },
  {
    id: "btn-stack-shift",
    number: "012",
    title: "Stack Shift",
    category: "Buttons",
    description: "Two stacked labels — hover rolls the top one up and away.",
    html: `<button class="c-btn-stack-shift">
  <span class="stack" aria-hidden="true">
    <span class="top">Subscribe</span>
    <span class="bot">Get the loaf</span>
  </span>
</button>`,
    css: `.c-btn-stack-shift {
  position: relative;
  padding: 14px 28px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 600;
  font-size: 14px;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  overflow: hidden;
  height: 46px;
}
.c-btn-stack-shift .stack {
  display: block;
  position: relative;
  height: 18px;
  overflow: hidden;
}
.c-btn-stack-shift .top,
.c-btn-stack-shift .bot {
  display: block;
  position: absolute;
  top: 0; left: 0;
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-btn-stack-shift .bot { transform: translateY(120%); color: var(--ochre, #D4A24C); }
.c-btn-stack-shift:hover .top { transform: translateY(-120%); }
.c-btn-stack-shift:hover .bot { transform: translateY(0); }`,
  },
  {
    id: "btn-double-border",
    number: "013",
    title: "Double Border",
    category: "Buttons",
    description: "Two concentric ink hairlines; inner collapses to rust on hover.",
    html: `<button class="c-btn-double-border"><span>Frame</span></button>`,
    css: `.c-btn-double-border {
  position: relative;
  padding: 16px 30px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 600;
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
}
.c-btn-double-border::before {
  content: "";
  position: absolute;
  inset: 4px;
  border: 1.5px solid var(--ink, #0E0E0C);
  transition: border-color 240ms ease, inset 240ms ease;
}
.c-btn-double-border:hover::before {
  border-color: var(--rust, #C2410C);
  inset: 3px;
}`,
  },
  {
    id: "btn-press-stamp",
    number: "014",
    title: "Press Stamp",
    category: "Buttons",
    description: "Embossed look — depress on click leaves a stamped impression.",
    html: `<button class="c-btn-press-stamp"><span>Stamp</span></button>`,
    css: `.c-btn-press-stamp {
      padding: 14px 28px;
      font-family: var(--font-inter-tight, sans-serif);
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.04em;
      color: var(--paper, #F4F1EA);
      background: var(--rust, #C2410C);
      border: 1.5px solid var(--ink, #0E0E0C);
      box-shadow: 3px 3px 0 var(--ink, #0E0E0C);
      cursor: pointer;
      transition: transform 80ms ease, box-shadow 80ms ease;
    }
    .c-btn-press-stamp:active {
      transform: translate(3px, 3px);
      box-shadow: 0 0 0 var(--ink, #0E0E0C);
    }`,
  },
  {
    id: "btn-slide-mask",
    number: "015",
    title: "Slide Mask",
    category: "Buttons",
    description: "A second label slides in from below wearing the rust accent.",
    html: `<button class="c-btn-slide-mask">
  <span class="m">
    <span class="a">Hover me</span>
    <span class="b">Thanks</span>
  </span>
</button>`,
    css: `.c-btn-slide-mask {
  padding: 0;
  border: 1.5px solid var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  cursor: pointer;
  overflow: hidden;
}
.c-btn-slide-mask .m {
  display: block;
  position: relative;
  padding: 14px 28px;
  font-family: var(--font-inter-tight, sans-serif);
  font-weight: 600;
  font-size: 14px;
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-btn-slide-mask .a,
.c-btn-slide-mask .b {
  display: block;
}
.c-btn-slide-mask .b {
  position: absolute;
  top: 100%; left: 0; right: 0;
  padding: 14px 28px;
  margin-top: -1.5px;
  color: var(--paper, #F4F1EA);
  background: var(--rust, #C2410C);
}
.c-btn-slide-mask:hover .m { transform: translateY(-100%); }`,
  },
];
