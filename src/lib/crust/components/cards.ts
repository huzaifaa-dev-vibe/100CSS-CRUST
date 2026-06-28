import type { CrustComponent } from "../components";

export const cards: CrustComponent[] = [
  {
    id: "card-tilt-3d",
    number: "026",
    title: "Tilt 3D",
    category: "Cards",
    description: "Card tilts in 3D following the cursor, with depth shift on the label.",
    deps: ["GSAP"],
    html: `<div class="c-card-tilt-3d" data-tilt>
  <div class="inner">
    <span class="num">001</span>
    <h3>Baklava</h3>
    <p>Layered phyllo, pistachio, honey. 22 minutes.</p>
  </div>
</div>`,
    css: `.c-card-tilt-3d {
  perspective: 800px;
  width: 280px; height: 200px;
}
.c-card-tilt-3d .inner {
  position: relative;
  width: 100%; height: 100%;
  padding: 22px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
}
.c-card-tilt-3d .num {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--smoke, #6B6660);
}
.c-card-tilt-3d h3 {
  margin: 8px 0 6px;
  font-family: var(--font-fraunces, serif);
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink, #0E0E0C);
  transform: translateZ(40px);
}
.c-card-tilt-3d p {
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
  margin: 0;
  transform: translateZ(20px);
}`,
  },
  {
    id: "card-hover-reveal",
    number: "027",
    title: "Hover Reveal",
    category: "Cards",
    description: "A summary card that lifts the curtain on hover to expose the body.",
    html: `<article class="c-card-hover-reveal">
  <header>
    <span class="cat">Recipe</span>
    <span class="num">№ 042</span>
  </header>
  <div class="curtain">
    <h3>Sourdough starter, day 7</h3>
    <p>It doubles in 4 hours now. Smells like yogurt and apples. Time to bake.</p>
  </div>
</article>`,
    css: `.c-card-hover-reveal {
  width: 280px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-card-hover-reveal header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 14px;
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--smoke, #6B6660);
  border-bottom: 1.5px solid var(--ink, #0E0E0C);
}
.c-card-hover-reveal .curtain {
  padding: 18px 14px;
  max-height: 56px;
  overflow: hidden;
  transition: max-height 360ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-card-hover-reveal h3 {
  margin: 0 0 6px;
  font-family: var(--font-fraunces, serif);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink, #0E0E0C);
}
.c-card-hover-reveal p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
  line-height: 1.5;
}
.c-card-hover-reveal:hover .curtain { max-height: 200px; }`,
  },
  {
    id: "card-flip",
    number: "028",
    title: "Flip",
    category: "Cards",
    description: "Click to flip the card and reveal the back face.",
    html: `<div class="c-card-flip" data-flip>
  <div class="face front">
    <span class="num">№ 003</span>
    <h3>Tap to flip</h3>
  </div>
  <div class="face back">
    <p>Surprise. The back is the front now.</p>
  </div>
</div>`,
    css: `.c-card-flip {
  position: relative;
  width: 260px; height: 180px;
  perspective: 1000px;
  cursor: pointer;
}
.c-card-flip .face {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: 18px;
  backface-visibility: hidden;
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-card-flip .front { background: var(--bone, #E8E3D6); }
.c-card-flip .back {
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
  transform: rotateY(180deg);
}
.c-card-flip .num {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--smoke, #6B6660);
  margin-bottom: 8px;
}
.c-card-flip h3 {
  font-family: var(--font-fraunces, serif);
  font-size: 24px;
  font-weight: 500;
  color: var(--ink, #0E0E0C);
  margin: 0;
}
.c-card-flip p {
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  margin: 0;
}
.c-card-flip.flipped .front { transform: rotateY(-180deg); }
.c-card-flip.flipped .back { transform: rotateY(0); }`,
  },
  {
    id: "card-expand-grid",
    number: "029",
    title: "Expand Grid",
    category: "Cards",
    description: "A 2x2 grid where the hovered tile expands to fill the row.",
    html: `<div class="c-card-expand-grid" data-grid>
  <div class="tile">A</div>
  <div class="tile">B</div>
  <div class="tile">C</div>
  <div class="tile">D</div>
</div>`,
    css: `.c-card-expand-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5px;
  width: 320px; height: 220px;
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-card-expand-grid .tile {
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-fraunces, serif);
  font-size: 32px;
  color: var(--ink, #0E0E0C);
  background: var(--bone, #E8E3D6);
  transition: flex 320ms cubic-bezier(0.22, 1, 0.36, 1), background 240ms ease;
}
.c-card-expand-grid .tile:hover { background: var(--rust, #C2410C); color: var(--paper, #F4F1EA); }`,
  },
  {
    id: "card-magnetic-border",
    number: "030",
    title: "Magnetic Border",
    category: "Cards",
    description: "A floating accent border that snaps to the hovered edge.",
    html: `<div class="c-card-magnetic-border" data-mb>
  <div class="bd top"></div>
  <div class="bd right"></div>
  <div class="bd bottom"></div>
  <div class="bd left"></div>
  <div class="inner">
    <span class="num">№ 005</span>
    <h3>Magnetic</h3>
    <p>Hover near an edge.</p>
  </div>
</div>`,
    css: `.c-card-magnetic-border {
  position: relative;
  width: 280px; height: 200px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-card-magnetic-border .bd {
  position: absolute;
  background: var(--rust, #C2410C);
  transition: opacity 200ms ease;
  opacity: 0;
}
.c-card-magnetic-border .bd.top { top: -1.5px; left: -1.5px; right: -1.5px; height: 1.5px; }
.c-card-magnetic-border .bd.right { top: -1.5px; right: -1.5px; bottom: -1.5px; width: 1.5px; }
.c-card-magnetic-border .bd.bottom { left: -1.5px; right: -1.5px; bottom: -1.5px; height: 1.5px; }
.c-card-magnetic-border .bd.left { top: -1.5px; left: -1.5px; bottom: -1.5px; width: 1.5px; }
.c-card-magnetic-border.edge-top .bd.top { opacity: 1; }
.c-card-magnetic-border.edge-right .bd.right { opacity: 1; }
.c-card-magnetic-border.edge-bottom .bd.bottom { opacity: 1; }
.c-card-magnetic-border.edge-left .bd.left { opacity: 1; }
.c-card-magnetic-border .inner { padding: 22px; }
.c-card-magnetic-border .num {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--smoke, #6B6660);
}
.c-card-magnetic-border h3 {
  margin: 8px 0 4px;
  font-family: var(--font-fraunces, serif);
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.02em;
}
.c-card-magnetic-border p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
}`,
  },
  {
    id: "card-spotlight",
    number: "031",
    title: "Spotlight",
    category: "Cards",
    description: "A radial spotlight follows the cursor inside the card surface.",
    html: `<div class="c-card-spotlight" data-spot>
  <div class="glow" aria-hidden="true"></div>
  <div class="content">
    <span class="num">№ 006</span>
    <h3>Spotlight</h3>
    <p>Move the cursor across me.</p>
  </div>
</div>`,
    css: `.c-card-spotlight {
  position: relative;
  width: 280px; height: 200px;
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-card-spotlight .glow {
  position: absolute;
  width: 200px; height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(194,65,12,0.35), transparent 60%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 200ms ease;
}
.c-card-spotlight:hover .glow { opacity: 1; }
.c-card-spotlight .content {
  position: relative;
  z-index: 2;
  padding: 22px;
  color: var(--paper, #F4F1EA);
}
.c-card-spotlight .num {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--ochre, #D4A24C);
}
.c-card-spotlight h3 {
  margin: 8px 0 4px;
  font-family: var(--font-fraunces, serif);
  font-size: 26px;
  font-weight: 500;
}
.c-card-spotlight p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
}`,
  },
  {
    id: "card-stamp-shift",
    number: "032",
    title: "Stamp Shift",
    category: "Cards",
    description: "Card slides up; a rust stamp slides in from the side.",
    html: `<article class="c-card-stamp-shift">
  <div class="stamp">FRESH</div>
  <div class="body">
    <span class="num">№ 007</span>
    <h3>Country loaf</h3>
    <p>72% hydration, baked at 240°C.</p>
  </div>
</article>`,
    css: `.c-card-stamp-shift {
  position: relative;
  width: 260px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-card-stamp-shift:hover { transform: translateY(-4px); }
.c-card-stamp-shift .stamp {
  position: absolute;
  top: 14px; right: -60px;
  padding: 4px 10px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--paper, #F4F1EA);
  background: var(--rust, #C2410C);
  border: 1.5px solid var(--ink, #0E0E0C);
  transition: right 320ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-card-stamp-shift:hover .stamp { right: 14px; }
.c-card-stamp-shift .body { padding: 22px; }
.c-card-stamp-shift .num {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--smoke, #6B6660);
}
.c-card-stamp-shift h3 {
  margin: 8px 0 4px;
  font-family: var(--font-fraunces, serif);
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.02em;
}
.c-card-stamp-shift p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
}`,
  },
  {
    id: "card-grain-overlay",
    number: "033",
    title: "Grain Overlay",
    category: "Cards",
    description: "Card with a subtle moving grain texture over a tinted surface.",
    html: `<article class="c-card-grain-overlay">
  <div class="grain" aria-hidden="true"></div>
  <div class="body">
    <span class="num">№ 008</span>
    <h3>Whole wheat</h3>
    <p>Stone-milled, slow-fermented.</p>
  </div>
</article>`,
    css: `.c-card-grain-overlay {
  position: relative;
  width: 260px; height: 180px;
  background: var(--moss, #3F5B3A);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-card-grain-overlay .grain {
  position: absolute; inset: -50%;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  opacity: 0.18;
  mix-blend-mode: overlay;
  animation: c-grain-shift 1.2s steps(6) infinite;
}
@keyframes c-grain-shift {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-5%, 3%); }
  40% { transform: translate(3%, -4%); }
  60% { transform: translate(-3%, 5%); }
  80% { transform: translate(4%, 2%); }
  100% { transform: translate(0, 0); }
}
.c-card-grain-overlay .body {
  position: relative; z-index: 2;
  padding: 22px;
  color: var(--paper, #F4F1EA);
}
.c-card-grain-overlay .num {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--ochre, #D4A24C);
}
.c-card-grain-overlay h3 {
  margin: 8px 0 4px;
  font-family: var(--font-fraunces, serif);
  font-size: 26px;
  font-weight: 500;
}
.c-card-grain-overlay p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: rgba(244, 241, 234, 0.7);
}`,
  },
  {
    id: "card-corner-fold",
    number: "034",
    title: "Corner Fold",
    category: "Cards",
    description: "A dog-ear fold peels back to reveal a hidden message.",
    html: `<article class="c-card-corner-fold">
  <div class="body">
    <span class="num">№ 009</span>
    <h3>Pita</h3>
    <p>Pocket bread. Charred bottom.</p>
  </div>
  <div class="fold" aria-hidden="true">
    <span>eat me</span>
  </div>
</article>`,
    css: `.c-card-corner-fold {
  position: relative;
  width: 260px; height: 180px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-card-corner-fold .body { padding: 22px; }
.c-card-corner-fold .num {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--smoke, #6B6660);
}
.c-card-corner-fold h3 {
  margin: 8px 0 4px;
  font-family: var(--font-fraunces, serif);
  font-size: 26px;
  font-weight: 500;
}
.c-card-corner-fold p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
}
.c-card-corner-fold .fold {
  position: absolute;
  top: 0; right: 0;
  width: 0; height: 0;
  border-style: solid;
  border-width: 0 40px 40px 0;
  border-color: transparent var(--rust, #C2410C) transparent transparent;
  transition: border-width 280ms cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;
}
.c-card-corner-fold .fold span {
  position: absolute;
  top: 8px; right: -34px;
  width: 40px; height: 40px;
  font-family: var(--font-mono, monospace);
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--paper, #F4F1EA);
  transform: rotate(45deg);
  display: flex; align-items: center; justify-content: center;
  opacity: 0;
  transition: opacity 200ms ease 100ms;
}
.c-card-corner-fold:hover .fold {
  border-width: 0 80px 80px 0;
}
.c-card-corner-fold:hover .fold span { opacity: 1; }`,
  },
  {
    id: "card-stacked-layers",
    number: "035",
    title: "Stacked Layers",
    category: "Cards",
    description: "Three cards in a stack — hover fans them out in 3D.",
    html: `<div class="c-card-stacked-layers">
  <div class="card l3">Bottom</div>
  <div class="card l2">Middle</div>
  <div class="card l1">Top</div>
</div>`,
    css: `.c-card-stacked-layers {
  position: relative;
  width: 240px; height: 160px;
  perspective: 800px;
}
.c-card-stacked-layers .card {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-fraunces, serif);
  font-size: 22px;
  color: var(--ink, #0E0E0C);
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-card-stacked-layers .l2 { background: var(--ochre, #D4A24C); }
.c-card-stacked-layers .l3 { background: var(--rust, #C2410C); color: var(--paper, #F4F1EA); }
.c-card-stacked-layers:hover .l1 { transform: translate(-60px, -20px) rotate(-6deg); }
.c-card-stacked-layers:hover .l2 { transform: translate(0, -10px) rotate(0deg); }
.c-card-stacked-layers:hover .l3 { transform: translate(60px, 0) rotate(6deg); }`,
  },
  {
    id: "card-image-reveal",
    number: "036",
    title: "Image Reveal",
    category: "Cards",
    description: "Ink panel wipes away on hover to reveal a tinted image.",
    html: `<article class="c-card-image-reveal">
  <div class="img" aria-hidden="true"></div>
  <div class="cover">
    <span class="num">№ 011</span>
    <h3>Brioche</h3>
    <p>Hover to peel back the curtain.</p>
  </div>
</article>`,
    css: `.c-card-image-reveal {
  position: relative;
  width: 280px; height: 200px;
  border: 1.5px solid var(--ink, #0E0E0C);
  overflow: hidden;
}
.c-card-image-reveal .img {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--ochre, #D4A24C), var(--rust, #C2410C));
}
.c-card-image-reveal .cover {
  position: absolute; inset: 0;
  padding: 22px;
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
  transform-origin: bottom;
  transition: transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-card-image-reveal:hover .cover { transform: scaleY(0); }
.c-card-image-reveal .num {
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--ochre, #D4A24C);
}
.c-card-image-reveal h3 {
  margin: 8px 0 4px;
  font-family: var(--font-fraunces, serif);
  font-size: 26px;
  font-weight: 500;
}
.c-card-image-reveal p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
}`,
  },
  {
    id: "card-stat-block",
    number: "037",
    title: "Stat Block",
    category: "Cards",
    description: "Editorial stat card with massive Fraunces numeral and footnote.",
    html: `<article class="c-card-stat-block">
  <header><span class="num">№ 012</span><span class="cat">METRIC</span></header>
  <div class="stat">
    <span class="value">72<sup>%</sup></span>
    <span class="label">Hydration</span>
  </div>
  <footer><p>Optimal water-to-flour ratio for an open crumb.</p></footer>
</article>`,
    css: `.c-card-stat-block {
  width: 280px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-card-stat-block header {
  display: flex; justify-content: space-between;
  padding: 10px 14px;
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--smoke, #6B6660);
  border-bottom: 1.5px solid var(--ink, #0E0E0C);
}
.c-card-stat-block .stat {
  padding: 24px 18px 8px;
  display: flex; align-items: baseline; gap: 12px;
}
.c-card-stat-block .value {
  font-family: var(--font-fraunces, serif);
  font-size: 84px;
  font-weight: 500;
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--ink, #0E0E0C);
}
.c-card-stat-block .value sup {
  font-size: 24px;
  color: var(--rust, #C2410C);
  vertical-align: super;
}
.c-card-stat-block .label {
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
}
.c-card-stat-block footer {
  padding: 10px 14px 14px;
  border-top: 1.5px solid var(--ink, #0E0E0C);
}
.c-card-stat-block footer p {
  margin: 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 12px;
  color: var(--smoke, #6B6660);
  line-height: 1.5;
}`,
  },
];
