import type { CrustComponent } from "../components";

export const backgrounds: CrustComponent[] = [
  {
    id: "bg-dot-grid",
    number: "091",
    title: "Dot Grid",
    category: "Backgrounds",
    description: "Ink dot grid on warm paper — subtle, structural, never noisy.",
    html: `<div class="c-bg-dot-grid"></div>`,
    css: `.c-bg-dot-grid {
  width: 320px; height: 180px;
  background-color: var(--paper, #F4F1EA);
  background-image: radial-gradient(var(--ink, #0E0E0C) 1px, transparent 1px);
  background-size: 14px 14px;
  border: 1.5px solid var(--ink, #0E0E0C);
}`,
  },
  {
    id: "bg-grid-paper",
    number: "092",
    title: "Grid Paper",
    category: "Backgrounds",
    description: "Engineering graph paper with 1.5px ink hairlines every 24px.",
    html: `<div class="c-bg-grid-paper"></div>`,
    css: `.c-bg-grid-paper {
  width: 320px; height: 180px;
  background-color: var(--paper, #F4F1EA);
  background-image:
    linear-gradient(var(--ink, #0E0E0C) 1.5px, transparent 1.5px),
    linear-gradient(90deg, var(--ink, #0E0E0C) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  background-position: -1.5px -1.5px;
  border: 1.5px solid var(--ink, #0E0E0C);
}`,
  },
  {
    id: "bg-halftone",
    number: "093",
    title: "Halftone",
    category: "Backgrounds",
    description: "Halftone dots that fade from ink to paper across the surface.",
    html: `<div class="c-bg-halftone"></div>`,
    css: `.c-bg-halftone {
  width: 320px; height: 180px;
  background-color: var(--paper, #F4F1EA);
  background-image: radial-gradient(var(--ink, #0E0E0C) 1.2px, transparent 1.5px);
  background-size: 10px 10px;
  background-position: 0 0;
  border: 1.5px solid var(--ink, #0E0E0C);
  -webkit-mask-image: linear-gradient(120deg, var(--ink, #0E0E0C) 0%, transparent 90%);
  mask-image: linear-gradient(120deg, var(--ink, #0E0E0C) 0%, transparent 90%);
}`,
  },
  {
    id: "bg-noise-paper",
    number: "094",
    title: "Noise Paper",
    category: "Backgrounds",
    description: "Animated SVG noise overlay that gives any surface a paper feel.",
    html: `<div class="c-bg-noise-paper"><div class="grain" aria-hidden="true"></div></div>`,
    css: `.c-bg-noise-paper {
  position: relative;
  width: 320px; height: 180px;
  background: var(--moss, #3F5B3A);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-bg-noise-paper .grain {
  position: absolute; inset: -50%;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  opacity: 0.22;
  mix-blend-mode: overlay;
  animation: c-noise 0.8s steps(8) infinite;
}
@keyframes c-noise {
  0% { transform: translate(0, 0); }
  12.5% { transform: translate(-3%, 2%); }
  25% { transform: translate(2%, -4%); }
  37.5% { transform: translate(-2%, 3%); }
  50% { transform: translate(4%, -2%); }
  62.5% { transform: translate(-4%, -3%); }
  75% { transform: translate(3%, 4%); }
  87.5% { transform: translate(-1%, 1%); }
  100% { transform: translate(0, 0); }
}`,
  },
  {
    id: "bg-diagonal-stripes",
    number: "095",
    title: "Diagonal Stripes",
    category: "Backgrounds",
    description: "Repeating 45° stripes — ink and paper, even rhythm.",
    html: `<div class="c-bg-diagonal-stripes"></div>`,
    css: `.c-bg-diagonal-stripes {
  width: 320px; height: 180px;
  background: repeating-linear-gradient(
    45deg,
    var(--ink, #0E0E0C) 0 6px,
    var(--paper, #F4F1EA) 6px 12px
  );
  border: 1.5px solid var(--ink, #0E0E0C);
}`,
  },
];

export const badges: CrustComponent[] = [
  {
    id: "bd-status-dot",
    number: "096",
    title: "Status Dot",
    category: "Badges",
    description: "Square dot + mono label — available, busy, away, off.",
    html: `<div class="c-bd-status-dot">
  <span class="dot"></span>
  <span class="lbl">available</span>
</div>`,
    css: `.c-bd-status-dot {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 4px 10px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-bd-status-dot .dot {
  width: 8px; height: 8px;
  background: var(--moss, #3F5B3A);
  border: 1.5px solid var(--ink, #0E0E0C);
}`,
  },
  {
    id: "bd-numbered-tag",
    number: "097",
    title: "Numbered Tag",
    category: "Badges",
    description: "Editorial tag with an inline section number.",
    html: `<span class="c-bd-numbered-tag">
  <span class="n">042</span>
  <span class="lbl">Recipe</span>
</span>`,
    css: `.c-bd-numbered-tag {
  display: inline-flex; align-items: stretch;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-bd-numbered-tag .n {
  padding: 4px 8px;
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
}
.c-bd-numbered-tag .lbl {
  padding: 4px 8px;
  background: var(--paper, #F4F1EA);
  color: var(--ink, #0E0E0C);
}`,
  },
  {
    id: "bd-count-chip",
    number: "098",
    title: "Count Chip",
    category: "Badges",
    description: "Rust count chip — perfect for notifications and tallies.",
    html: `<span class="c-bd-count-chip">
  <span class="lbl">unbaked</span>
  <span class="n">7</span>
</span>`,
    css: `.c-bd-count-chip {
  display: inline-flex; align-items: center;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-bd-count-chip .lbl {
  padding: 4px 8px;
  background: var(--paper, #F4F1EA);
  color: var(--ink, #0E0E0C);
}
.c-bd-count-chip .n {
  padding: 4px 8px;
  background: var(--rust, #C2410C);
  color: var(--paper, #F4F1EA);
  font-weight: 700;
}`,
  },
  {
    id: "bd-version-pill",
    number: "099",
    title: "Version Pill",
    category: "Badges",
    description: "Mono version pill with a small moss dot for stable releases.",
    html: `<span class="c-bd-version-pill">
  <span class="dot"></span>
  v2.4.1
</span>`,
    css: `.c-bd-version-pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 10px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  border-radius: 999px;
}
.c-bd-version-pill .dot {
  width: 6px; height: 6px;
  background: var(--moss, #3F5B3A);
  border-radius: 50%;
}`,
  },
  {
    id: "bd-ribbon-corner",
    number: "100",
    title: "Ribbon Corner",
    category: "Badges",
    description: "Editorial ribbon that folds over a corner with a rust accent.",
    html: `<div class="c-bd-ribbon-corner">
  <span class="ribbon">NEW</span>
</div>`,
    css: `.c-bd-ribbon-corner {
  position: relative;
  width: 200px; height: 140px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-bd-ribbon-corner .ribbon {
  position: absolute;
  top: 12px; left: -8px;
  padding: 4px 12px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--paper, #F4F1EA);
  background: var(--rust, #C2410C);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-bd-ribbon-corner .ribbon::before {
  content: "";
  position: absolute;
  top: -1.5px; left: -8px;
  width: 0; height: 0;
  border-style: solid;
  border-width: 8px 8px 0 0;
  border-color: var(--ink, #0E0E0C) transparent transparent transparent;
}
.c-bd-ribbon-corner .ribbon::after {
  content: "";
  position: absolute;
  bottom: -8px; left: -1.5px;
  width: 0; height: 0;
  border-style: solid;
  border-width: 0 0 8px 8px;
  border-color: transparent transparent var(--clay, #8C5A3C) transparent;
}`,
  },
];
