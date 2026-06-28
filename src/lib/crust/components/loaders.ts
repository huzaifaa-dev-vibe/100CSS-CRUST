import type { CrustComponent } from "../components";

export const loaders: CrustComponent[] = [
  {
    id: "ld-ring-rotate",
    number: "038",
    title: "Ring Rotate",
    category: "Loaders",
    description: "Two arcs counter-rotate around an open ink circle.",
    html: `<div class="c-ld-ring-rotate" aria-label="Loading">
  <svg viewBox="0 0 50 50" width="48" height="48">
    <circle cx="25" cy="25" r="20" fill="none" stroke="var(--ink, #0E0E0C)" stroke-width="1.5" opacity="0.18"/>
    <circle class="a" cx="25" cy="25" r="20" fill="none" stroke="var(--rust, #C2410C)" stroke-width="1.5" stroke-dasharray="80 200" stroke-linecap="square"/>
    <circle class="b" cx="25" cy="25" r="14" fill="none" stroke="var(--ink, #0E0E0C)" stroke-width="1.5" stroke-dasharray="40 100" stroke-linecap="square"/>
  </svg>
</div>`,
    css: `.c-ld-ring-rotate { display: inline-flex; }
.c-ld-ring-rotate .a {
  transform-origin: center;
  animation: c-ld-ring-a 1.4s linear infinite;
}
.c-ld-ring-rotate .b {
  transform-origin: center;
  animation: c-ld-ring-b 1s linear infinite reverse;
}
@keyframes c-ld-ring-a { to { transform: rotate(360deg); } }
@keyframes c-ld-ring-b { to { transform: rotate(360deg); } }`,
  },
  {
    id: "ld-dot-wave",
    number: "039",
    title: "Dot Wave",
    category: "Loaders",
    description: "Five ink dots rise and fall in a sine wave.",
    html: `<div class="c-ld-dot-wave" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>`,
    css: `.c-ld-dot-wave {
  display: inline-flex; gap: 8px; align-items: center;
}
.c-ld-dot-wave span {
  width: 8px; height: 24px;
  background: var(--ink, #0E0E0C);
  transform-origin: center;
  animation: c-ld-dot-wave 1s ease-in-out infinite;
}
.c-ld-dot-wave span:nth-child(1) { animation-delay: 0s; }
.c-ld-dot-wave span:nth-child(2) { animation-delay: 0.12s; }
.c-ld-dot-wave span:nth-child(3) { animation-delay: 0.24s; background: var(--rust, #C2410C); }
.c-ld-dot-wave span:nth-child(4) { animation-delay: 0.36s; }
.c-ld-dot-wave span:nth-child(5) { animation-delay: 0.48s; }
@keyframes c-ld-dot-wave {
  0%, 60%, 100% { transform: scaleY(0.4); }
  30% { transform: scaleY(1); }
}`,
  },
  {
    id: "ld-bar-fill",
    number: "040",
    title: "Bar Fill",
    category: "Loaders",
    description: "Indeterminate rust bar fills and resets on a hairline rail.",
    html: `<div class="c-ld-bar-fill" aria-label="Loading">
  <div class="bar"></div>
</div>`,
    css: `.c-ld-bar-fill {
  width: 240px; height: 1.5px;
  background: var(--ink, #0E0E0C);
  opacity: 0.9;
  overflow: hidden;
}
.c-ld-bar-fill .bar {
  width: 30%; height: 100%;
  background: var(--rust, #C2410C);
  animation: c-ld-bar 1.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}
@keyframes c-ld-bar {
  0% { transform: translateX(-100%); width: 30%; }
  50% { width: 60%; }
  100% { transform: translateX(333%); width: 30%; }
}`,
  },
  {
    id: "ld-skeleton-shimmer",
    number: "041",
    title: "Skeleton Shimmer",
    category: "Loaders",
    description: "Bone blocks with a left-to-right shimmer sweep.",
    html: `<div class="c-ld-skeleton-shimmer" aria-label="Loading">
  <div class="line w70"></div>
  <div class="line w100"></div>
  <div class="line w100"></div>
  <div class="line w50"></div>
</div>`,
    css: `.c-ld-skeleton-shimmer {
  width: 260px;
  display: flex; flex-direction: column; gap: 10px;
}
.c-ld-skeleton-shimmer .line {
  height: 14px;
  background: linear-gradient(90deg, var(--bone, #E8E3D6) 0%, var(--paper, #F4F1EA) 50%, var(--bone, #E8E3D6) 100%);
  background-size: 200% 100%;
  border: 1.5px solid var(--ink, #0E0E0C);
  animation: c-ld-shimmer 1.4s linear infinite;
}
.c-ld-skeleton-shimmer .w70 { width: 70%; }
.c-ld-skeleton-shimmer .w100 { width: 100%; }
.c-ld-skeleton-shimmer .w50 { width: 50%; }
@keyframes c-ld-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}`,
  },
  {
    id: "ld-square-orbit",
    number: "042",
    title: "Square Orbit",
    category: "Loaders",
    description: "Four square corners travel a square path, one after another.",
    html: `<div class="c-ld-square-orbit" aria-label="Loading">
  <span class="s1"></span>
  <span class="s2"></span>
  <span class="s3"></span>
  <span class="s4"></span>
</div>`,
    css: `.c-ld-square-orbit {
  position: relative;
  width: 48px; height: 48px;
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-ld-square-orbit span {
  position: absolute;
  width: 6px; height: 6px;
  background: var(--rust, #C2410C);
}
.c-ld-square-orbit .s1 { top: -3px; left: -3px; animation: c-orbit-1 2s linear infinite; }
.c-ld-square-orbit .s2 { top: -3px; right: -3px; animation: c-orbit-2 2s linear infinite; }
.c-ld-square-orbit .s3 { bottom: -3px; right: -3px; animation: c-orbit-3 2s linear infinite; }
.c-ld-square-orbit .s4 { bottom: -3px; left: -3px; animation: c-orbit-4 2s linear infinite; }
@keyframes c-orbit-1 { 0%, 100% { top: -3px; left: -3px; } 25% { top: -3px; left: calc(100% - 3px); } 50% { top: calc(100% - 3px); left: calc(100% - 3px); } 75% { top: calc(100% - 3px); left: -3px; } }
@keyframes c-orbit-2 { 0%, 100% { top: -3px; right: -3px; } 25% { top: calc(100% - 3px); right: -3px; } 50% { top: calc(100% - 3px); right: calc(100% - 3px); } 75% { top: -3px; right: calc(100% - 3px); } }
@keyframes c-orbit-3 { 0%, 100% { bottom: -3px; right: -3px; } 25% { bottom: -3px; right: calc(100% - 3px); } 50% { bottom: calc(100% - 3px); right: calc(100% - 3px); } 75% { bottom: calc(100% - 3px); right: -3px; } }
@keyframes c-orbit-4 { 0%, 100% { bottom: -3px; left: -3px; } 25% { bottom: calc(100% - 3px); left: -3px; } 50% { bottom: calc(100% - 3px); left: calc(100% - 3px); } 75% { bottom: -3px; left: calc(100% - 3px); } }`,
  },
  {
    id: "ld-typewriter",
    number: "043",
    title: "Typewriter",
    category: "Loaders",
    description: "Mono text types itself out, then backspaces, on a loop.",
    html: `<div class="c-ld-typewriter" aria-label="Loading" data-typewriter>
  <span class="text"></span><span class="caret" aria-hidden="true"></span>
</div>`,
    css: `.c-ld-typewriter {
  display: inline-flex; align-items: center;
  font-family: var(--font-mono, monospace);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--ink, #0E0E0C);
}
.c-ld-typewriter .text::after {
  content: "loading…";
}
.c-ld-typewriter .caret {
  display: inline-block;
  width: 8px; height: 16px;
  margin-left: 2px;
  background: var(--rust, #C2410C);
  animation: c-blink 600ms steps(1) infinite;
}
@keyframes c-blink { 50% { opacity: 0; } }`,
  },
  {
    id: "ld-pulse-block",
    number: "044",
    title: "Pulse Block",
    category: "Loaders",
    description: "A solid ink block inhales and exhales on a steady cadence.",
    html: `<div class="c-ld-pulse-block" aria-label="Loading">
  <div class="block"></div>
</div>`,
    css: `.c-ld-pulse-block {
  display: inline-flex;
}
.c-ld-pulse-block .block {
  width: 36px; height: 36px;
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  animation: c-pulse-block 1.2s ease-in-out infinite;
}
@keyframes c-pulse-block {
  0%, 100% { transform: scale(1); background: var(--ink, #0E0E0C); }
  50% { transform: scale(0.7); background: var(--rust, #C2410C); }
}`,
  },
  {
    id: "ld-stripe-sweep",
    number: "045",
    title: "Stripe Sweep",
    category: "Loaders",
    description: "Diagonal rust stripes sweep across an ink panel.",
    html: `<div class="c-ld-stripe-sweep" aria-label="Loading">
  <div class="sweep"></div>
</div>`,
    css: `.c-ld-stripe-sweep {
  width: 220px; height: 30px;
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-ld-stripe-sweep .sweep {
  width: 200%; height: 100%;
  background: repeating-linear-gradient(
    45deg,
    var(--rust, #C2410C) 0 10px,
    transparent 10px 20px
  );
  animation: c-stripe 1s linear infinite;
}
@keyframes c-stripe {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}`,
  },
  {
    id: "ld-cursor-blink",
    number: "046",
    title: "Cursor Blink",
    category: "Loaders",
    description: "A single blinking caret with a quiet label.",
    html: `<div class="c-ld-cursor-blink" aria-label="Loading">
  <span class="cur" aria-hidden="true"></span>
  <span class="lbl">indexing</span>
</div>`,
    css: `.c-ld-cursor-blink {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-mono, monospace);
  font-size: 13px;
  color: var(--ink, #0E0E0C);
}
.c-ld-cursor-blink .cur {
  display: inline-block;
  width: 8px; height: 18px;
  background: var(--rust, #C2410C);
  animation: c-cursor-blink 700ms steps(1) infinite;
}
.c-ld-cursor-blink .lbl {
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--smoke, #6B6660);
  font-size: 11px;
}
@keyframes c-cursor-blink { 50% { opacity: 0; } }`,
  },
  {
    id: "ld-clock-tick",
    number: "047",
    title: "Clock Tick",
    category: "Loaders",
    description: "An ink clock face with two hands ticking at different rates.",
    html: `<div class="c-ld-clock-tick" aria-label="Loading">
  <svg viewBox="0 0 50 50" width="48" height="48">
    <circle cx="25" cy="25" r="22" fill="none" stroke="var(--ink, #0E0E0C)" stroke-width="1.5"/>
    <line x1="25" y1="25" x2="25" y2="10" stroke="var(--ink, #0E0E0C)" stroke-width="1.5" class="h"/>
    <line x1="25" y1="25" x2="38" y2="25" stroke="var(--rust, #C2410C)" stroke-width="1.5" class="m"/>
    <circle cx="25" cy="25" r="1.5" fill="var(--ink, #0E0E0C)"/>
  </svg>
</div>`,
    css: `.c-ld-clock-tick .h {
  transform-origin: 25px 25px;
  animation: c-clock-h 4s steps(8) infinite;
}
.c-ld-clock-tick .m {
  transform-origin: 25px 25px;
  animation: c-clock-m 1s steps(8) infinite;
}
@keyframes c-clock-h { to { transform: rotate(360deg); } }
@keyframes c-clock-m { to { transform: rotate(360deg); } }`,
  },
];
