import type { CrustComponent } from "../components";

export const toggles: CrustComponent[] = [
  {
    id: "tg-switch-square",
    number: "048",
    title: "Switch Square",
    category: "Toggles",
    description: "Crisp square switch with an ink thumb that snaps to rust.",
    html: `<label class="c-tg-switch-square">
  <input type="checkbox" data-switch />
  <span class="track" aria-hidden="true"><span class="thumb"></span></span>
  <span class="lbl">Crust mode</span>
</label>`,
    css: `.c-tg-switch-square {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  cursor: pointer;
  user-select: none;
}
.c-tg-switch-square input { display: none; }
.c-tg-switch-square .track {
  position: relative;
  width: 46px; height: 24px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  transition: background 200ms ease;
}
.c-tg-switch-square .thumb {
  position: absolute;
  top: 2px; left: 2px;
  width: 18px; height: 18px;
  background: var(--ink, #0E0E0C);
  transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1), background 220ms ease;
}
.c-tg-switch-square input:checked + .track { background: var(--ink, #0E0E0C); }
.c-tg-switch-square input:checked + .track .thumb {
  transform: translateX(22px);
  background: var(--rust, #C2410C);
}`,
  },
  {
    id: "tg-segmented",
    number: "049",
    title: "Segmented Control",
    category: "Toggles",
    description: "Three-option segmented control with a sliding ink indicator.",
    html: `<div class="c-tg-segmented" data-seg>
  <button class="active" data-seg-btn>List</button>
  <button data-seg-btn>Grid</button>
  <button data-seg-btn>Masonry</button>
  <span class="ind" aria-hidden="true"></span>
</div>`,
    css: `.c-tg-segmented {
  position: relative;
  display: inline-flex;
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-tg-segmented button {
  position: relative; z-index: 2;
  padding: 8px 16px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 200ms ease;
}
.c-tg-segmented button.active { color: var(--paper, #F4F1EA); }
.c-tg-segmented .ind {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 33.33%;
  background: var(--ink, #0E0E0C);
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 1;
}`,
  },
  {
    id: "tg-accordion-chevron",
    number: "050",
    title: "Accordion Chevron",
    category: "Toggles",
    description: "Single-section accordion with a rotating chevron indicator.",
    html: `<div class="c-tg-accordion-chevron" data-acc>
  <button class="head">
    <span>What is Crust?</span>
    <svg class="ch" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
  </button>
  <div class="panel">
    <p>A CSS component library with editorial polish. 100 effects, one consistent voice.</p>
  </div>
</div>`,
    css: `.c-tg-accordion-chevron {
  width: 320px;
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-tg-accordion-chevron .head {
  display: flex; justify-content: space-between; align-items: center;
  width: 100%;
  padding: 12px 16px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  font-weight: 500;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: none;
  cursor: pointer;
}
.c-tg-accordion-chevron .ch { transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1); }
.c-tg-accordion-chevron.open .ch { transform: rotate(180deg); }
.c-tg-accordion-chevron .panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 320ms cubic-bezier(0.22, 1, 0.36, 1);
  border-top: 1.5px solid var(--ink, #0E0E0C);
}
.c-tg-accordion-chevron.open .panel { max-height: 120px; }
.c-tg-accordion-chevron .panel p {
  margin: 0;
  padding: 12px 16px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--smoke, #6B6660);
  line-height: 1.55;
}`,
  },
  {
    id: "tg-collapsible-curtain",
    number: "051",
    title: "Collapsible Curtain",
    category: "Toggles",
    description: "A panel that drops down like a theater curtain.",
    html: `<div class="c-tg-collapsible-curtain" data-cur>
  <button class="trigger">Reveal ↓</button>
  <div class="curtain"><div class="body">Curtain rises on a hidden act.</div></div>
</div>`,
    css: `.c-tg-collapsible-curtain {
  width: 280px;
}
.c-tg-collapsible-curtain .trigger {
  width: 100%;
  padding: 10px 14px;
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
}
.c-tg-collapsible-curtain .curtain {
  max-height: 0;
  overflow: hidden;
  border-left: 1.5px solid var(--ink, #0E0E0C);
  border-right: 1.5px solid var(--ink, #0E0E0C);
  transition: max-height 480ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-tg-collapsible-curtain.open .curtain { max-height: 120px; }
.c-tg-collapsible-curtain .body {
  padding: 14px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--ink, #0E0E0C);
  background: var(--bone, #E8E3D6);
  border-bottom: 1.5px solid var(--ink, #0E0E0C);
}`,
  },
  {
    id: "tg-tab-underline",
    number: "052",
    title: "Tab Underline",
    category: "Toggles",
    description: "Three tabs with a 1.5px underline that slides between them.",
    html: `<div class="c-tg-tab-underline" data-tu>
  <button class="active" data-tu-btn>Crust</button>
  <button data-tu-btn>Crumb</button>
  <button data-tu-btn>Loaf</button>
  <span class="bar" aria-hidden="true"></span>
</div>`,
    css: `.c-tg-tab-underline {
  position: relative;
  display: inline-flex;
  border-bottom: 1.5px solid var(--ink, #0E0E0C);
}
.c-tg-tab-underline button {
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
.c-tg-tab-underline button.active { color: var(--ink, #0E0E0C); }
.c-tg-tab-underline .bar {
  position: absolute;
  bottom: -1.5px; left: 0;
  width: 0; height: 1.5px;
  background: var(--rust, #C2410C);
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), width 280ms cubic-bezier(0.22, 1, 0.36, 1);
}`,
  },
  {
    id: "tg-toggle-eye",
    number: "053",
    title: "Toggle Eye",
    category: "Toggles",
    description: "An SVG eye that opens and closes on click — for visibility toggles.",
    html: `<button class="c-tg-toggle-eye" data-eye aria-pressed="false" aria-label="Toggle visibility">
  <svg viewBox="0 0 40 24" width="40" height="24">
    <path class="lid" d="M2 12 Q20 -2 38 12 Q20 26 2 12 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <circle class="iris" cx="20" cy="12" r="4" fill="currentColor"/>
  </svg>
</button>`,
    css: `.c-tg-toggle-eye {
  display: inline-flex; align-items: center; justify-content: center;
  width: 56px; height: 36px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  transition: background 200ms ease, color 200ms ease;
}
.c-tg-toggle-eye .lid {
  transform-origin: center;
  transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
  transform-box: fill-box;
}
.c-tg-toggle-eye .iris { transition: opacity 200ms ease; }
.c-tg-toggle-eye[aria-pressed="true"] {
  background: var(--ink, #0E0E0C);
  color: var(--rust, #C2410C);
}
.c-tg-toggle-eye[aria-pressed="false"] .lid { transform: scaleY(0.15); }
.c-tg-toggle-eye[aria-pressed="false"] .iris { opacity: 0; }`,
  },
  {
    id: "tg-dial-rotate",
    number: "054",
    title: "Dial Rotate",
    category: "Toggles",
    description: "A circular dial with 8 detents; drag or click to rotate.",
    html: `<div class="c-tg-dial-rotate" data-dial>
  <div class="dial"><span class="mark"></span></div>
  <div class="readout">3 / 8</div>
</div>`,
    css: `.c-tg-dial-rotate {
  display: inline-flex; align-items: center; gap: 16px;
}
.c-tg-dial-rotate .dial {
  position: relative;
  width: 64px; height: 64px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  border-radius: 50%;
  cursor: grab;
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-tg-dial-rotate .mark {
  position: absolute;
  top: 4px; left: 50%;
  transform: translateX(-50%);
  width: 4px; height: 12px;
  background: var(--rust, #C2410C);
}
.c-tg-dial-rotate .readout {
  font-family: var(--font-mono, monospace);
  font-size: 13px;
  color: var(--ink, #0E0E0C);
}`,
  },
  {
    id: "tg-toggle-text",
    number: "055",
    title: "Toggle Text",
    category: "Toggles",
    description: "A pill that swaps its label between ON and OFF states.",
    html: `<button class="c-tg-toggle-text" data-tt aria-pressed="false">
  <span class="lbl">OFF</span>
  <span class="dot" aria-hidden="true"></span>
</button>`,
    css: `.c-tg-toggle-text {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 8px 14px;
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  transition: background 220ms ease, color 220ms ease;
}
.c-tg-toggle-text .dot {
  width: 10px; height: 10px;
  background: var(--smoke, #6B6660);
  border: 1.5px solid var(--ink, #0E0E0C);
  transition: background 220ms ease;
}
.c-tg-toggle-text[aria-pressed="true"] {
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
}
.c-tg-toggle-text[aria-pressed="true"] .dot { background: var(--rust, #C2410C); }`,
  },
];
