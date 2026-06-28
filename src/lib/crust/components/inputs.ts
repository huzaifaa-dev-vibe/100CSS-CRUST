import type { CrustComponent } from "../components";

export const inputs: CrustComponent[] = [
  {
    id: "inp-floating-label",
    number: "016",
    title: "Floating Label",
    category: "Inputs",
    description: "Label rests inside, then floats up to the border on focus.",
    html: `<div class="c-inp-floating-label">
  <input id="c-fl" type="text" placeholder=" " />
  <label for="c-fl">Your email</label>
</div>`,
    css: `.c-inp-floating-label {
  position: relative;
  width: 260px;
}
.c-inp-floating-label input {
  width: 100%;
  padding: 18px 14px 8px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  outline: none;
  transition: border-color 200ms ease;
}
.c-inp-floating-label input:focus { border-color: var(--rust, #C2410C); }
.c-inp-floating-label label {
  position: absolute;
  left: 14px; top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  color: var(--smoke, #6B6660);
  pointer-events: none;
  transition: all 180ms cubic-bezier(0.22, 1, 0.36, 1);
  background: var(--paper, #F4F1EA);
  padding: 0 4px;
}
.c-inp-floating-label input:focus + label,
.c-inp-floating-label input:not(:placeholder-shown) + label {
  top: 0;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rust, #C2410C);
}`,
  },
  {
    id: "inp-underline-grow",
    number: "017",
    title: "Underline Grow",
    category: "Inputs",
    description: "Minimal input — focus grows a 1.5px rust underline from the center.",
    html: `<div class="c-inp-underline-grow">
  <input type="text" placeholder="Search components…" />
</div>`,
    css: `.c-inp-underline-grow {
  position: relative;
  width: 280px;
}
.c-inp-underline-grow input {
  width: 100%;
  padding: 10px 0;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 15px;
  color: var(--ink, #0E0E0C);
  background: transparent;
  border: none;
  border-bottom: 1.5px solid var(--ink, #0E0E0C);
  outline: none;
}
.c-inp-underline-grow input::placeholder { color: var(--smoke, #6B6660); }
.c-inp-underline-grow::after {
  content: "";
  position: absolute;
  bottom: 0; left: 50%;
  width: 0; height: 1.5px;
  background: var(--rust, #C2410C);
  transition: width 280ms cubic-bezier(0.22, 1, 0.36, 1), left 280ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-inp-underline-grow:focus-within::after {
  width: 100%; left: 0;
}`,
  },
  {
    id: "inp-otp-cells",
    number: "018",
    title: "OTP Cells",
    category: "Inputs",
    description: "Six mono cells that fill and advance on type, with rust focus ring.",
    html: `<div class="c-inp-otp-cells" data-otp>
  <input maxlength="1" inputmode="numeric" />
  <input maxlength="1" inputmode="numeric" />
  <input maxlength="1" inputmode="numeric" />
  <input maxlength="1" inputmode="numeric" />
  <input maxlength="1" inputmode="numeric" />
  <input maxlength="1" inputmode="numeric" />
</div>`,
    css: `.c-inp-otp-cells {
  display: inline-flex;
  gap: 10px;
}
.c-inp-otp-cells input {
  width: 42px; height: 52px;
  text-align: center;
  font-family: var(--font-mono, monospace);
  font-size: 20px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  outline: none;
  transition: border-color 160ms ease, background 160ms ease;
}
.c-inp-otp-cells input:focus {
  border-color: var(--rust, #C2410C);
  background: var(--bone, #E8E3D6);
}`,
  },
  {
    id: "inp-char-counter",
    number: "019",
    title: "Char Counter",
    category: "Inputs",
    description: "Live character counter that turns rust as you approach the limit.",
    html: `<div class="c-inp-char-counter">
  <textarea placeholder="Write something brief…" maxlength="120" data-counter></textarea>
  <div class="row">
    <span class="hint">Max 120 characters</span>
    <span class="count"><b data-count>0</b>/120</span>
  </div>
</div>`,
    css: `.c-inp-char-counter {
  width: 320px;
}
.c-inp-char-counter textarea {
  width: 100%;
  height: 90px;
  padding: 12px 14px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  outline: none;
  resize: none;
  transition: border-color 200ms ease;
}
.c-inp-char-counter textarea:focus { border-color: var(--rust, #C2410C); }
.c-inp-char-counter .row {
  display: flex; justify-content: space-between;
  margin-top: 6px;
  font-family: var(--font-mono, monospace);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--smoke, #6B6660);
}
.c-inp-char-counter .count b { color: var(--ink, #0E0E0C); font-weight: 600; }
.c-inp-char-counter.near .count b { color: var(--rust, #C2410C); }`,
  },
  {
    id: "inp-search-clear",
    number: "020",
    title: "Search with Clear",
    category: "Inputs",
    description: "Inline search field with a magnifier and a clearing X.",
    html: `<div class="c-inp-search-clear">
  <svg class="ico" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
  <input type="text" placeholder="Search…" data-search />
  <button class="clr" aria-label="Clear" data-clear>
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
  </button>
</div>`,
    css: `.c-inp-search-clear {
  display: inline-flex; align-items: center; gap: 8px;
  width: 280px;
  padding: 8px 12px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-inp-search-clear .ico { color: var(--smoke, #6B6660); }
.c-inp-search-clear input {
  flex: 1;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  background: transparent;
  border: none;
  outline: none;
}
.c-inp-search-clear input::placeholder { color: var(--smoke, #6B6660); }
.c-inp-search-clear .clr {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  color: var(--smoke, #6B6660);
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  opacity: 0;
  transition: opacity 160ms ease, color 160ms ease, background 160ms ease;
}
.c-inp-search-clear.has-value .clr { opacity: 1; }
.c-inp-search-clear .clr:hover { color: var(--paper, #F4F1EA); background: var(--rust, #C2410C); }`,
  },
  {
    id: "inp-password-reveal",
    number: "021",
    title: "Password Reveal",
    category: "Inputs",
    description: "Password input with a tasteful eye toggle and strength hairline.",
    html: `<div class="c-inp-password-reveal">
  <input type="password" placeholder="Password" data-pw />
  <button type="button" aria-label="Toggle visibility" data-eye>
    <svg class="open" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
    <svg class="shut" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 2 20 20M6.7 6.7C3.6 8.5 2 12 2 12s3.5 7 10 7c2 0 3.8-.5 5.3-1.3M9.9 4.2A10.4 10.4 0 0 1 12 4c6.5 0 10 8 10 8-.7 1.4-1.7 2.7-2.9 3.7"/></svg>
  </button>
  <div class="strength" aria-hidden="true"><span data-bar></span></div>
</div>`,
    css: `.c-inp-password-reveal {
  position: relative;
  width: 280px;
}
.c-inp-password-reveal input {
  width: 100%;
  padding: 12px 40px 12px 14px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  outline: none;
  transition: border-color 200ms ease;
}
.c-inp-password-reveal input:focus { border-color: var(--rust, #C2410C); }
.c-inp-password-reveal button {
  position: absolute;
  right: 8px; top: 50%;
  transform: translateY(-50%);
  display: inline-flex; align-items: center; justify-content: center;
  width: 28px; height: 28px;
  color: var(--smoke, #6B6660);
  background: transparent;
  border: none;
  cursor: pointer;
}
.c-inp-password-reveal .shut { display: none; }
.c-inp-password-reveal.is-visible .open { display: none; }
.c-inp-password-reveal.is-visible .shut { display: block; }
.c-inp-password-reveal .strength {
  margin-top: 8px;
  height: 1.5px;
  background: var(--bone, #E8E3D6);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-inp-password-reveal .strength span {
  display: block;
  height: 100%;
  width: 0%;
  background: var(--rust, #C2410C);
  transition: width 240ms ease;
}`,
  },
  {
    id: "inp-tag-input",
    number: "022",
    title: "Tag Input",
    category: "Inputs",
    description: "Press Enter to wrap text into a removable tag chip.",
    html: `<div class="c-inp-tag-input" data-tags>
  <span class="tag">rust<button aria-label="Remove" data-tag-rm>×</button></span>
  <span class="tag">moss<button aria-label="Remove" data-tag-rm>×</button></span>
  <input type="text" placeholder="Add tag, Enter" />
</div>`,
    css: `.c-inp-tag-input {
  display: flex; flex-wrap: wrap; gap: 6px; align-items: center;
  width: 320px;
  padding: 8px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-inp-tag-input input {
  flex: 1; min-width: 120px;
  padding: 4px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--ink, #0E0E0C);
  background: transparent;
  border: none; outline: none;
}
.c-inp-tag-input .tag {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 8px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  color: var(--paper, #F4F1EA);
  background: var(--ink, #0E0E0C);
}
.c-inp-tag-input .tag button {
  background: transparent;
  border: none;
  color: var(--ochre, #D4A24C);
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
}`,
  },
  {
    id: "inp-range-slider",
    number: "023",
    title: "Range Slider",
    category: "Inputs",
    description: "Ink rail with a square rust thumb and a numeric readout.",
    html: `<div class="c-inp-range-slider">
  <input type="range" min="0" max="100" value="42" data-range />
  <div class="readout"><span data-range-val>42</span> / 100</div>
</div>`,
    css: `.c-inp-range-slider {
  width: 280px;
}
.c-inp-range-slider input[type=range] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.5px;
  background: var(--ink, #0E0E0C);
  outline: none;
}
.c-inp-range-slider input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px; height: 22px;
  background: var(--rust, #C2410C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
}
.c-inp-range-slider input[type=range]::-moz-range-thumb {
  width: 14px; height: 22px;
  background: var(--rust, #C2410C);
  border: 1.5px solid var(--ink, #0E0E0C);
  cursor: pointer;
  border-radius: 0;
}
.c-inp-range-slider .readout {
  margin-top: 10px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--smoke, #6B6660);
}
.c-inp-range-slider .readout span { color: var(--ink, #0E0E0C); font-weight: 600; }`,
  },
  {
    id: "inp-checkbox-tick",
    number: "024",
    title: "Checkbox Tick",
    category: "Inputs",
    description: "Square ink checkbox that draws a rust checkmark on check.",
    html: `<label class="c-inp-checkbox-tick">
  <input type="checkbox" />
  <span class="box" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6"/></svg>
  </span>
  <span class="lbl">I agree to the crust</span>
</label>`,
    css: `.c-inp-checkbox-tick {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 14px;
  color: var(--ink, #0E0E0C);
  cursor: pointer;
  user-select: none;
}
.c-inp-checkbox-tick input { display: none; }
.c-inp-checkbox-tick .box {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  background: var(--paper, #F4F1EA);
  border: 1.5px solid var(--ink, #0E0E0C);
  color: var(--rust, #C2410C);
}
.c-inp-checkbox-tick .box svg {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  transition: stroke-dashoffset 240ms cubic-bezier(0.22, 1, 0.36, 1);
}
.c-inp-checkbox-tick input:checked + .box svg { stroke-dashoffset: 0; }`,
  },
  {
    id: "inp-radio-emboss",
    number: "025",
    title: "Radio Emboss",
    category: "Inputs",
    description: "Square radio group with an embossed ink fill on selection.",
    html: `<div class="c-inp-radio-emboss" data-radio>
  <label><input type="radio" name="rg" checked /><span>Small</span></label>
  <label><input type="radio" name="rg" /><span>Medium</span></label>
  <label><input type="radio" name="rg" /><span>Large</span></label>
</div>`,
    css: `.c-inp-radio-emboss {
  display: inline-flex;
  border: 1.5px solid var(--ink, #0E0E0C);
}
.c-inp-radio-emboss label {
  position: relative;
  cursor: pointer;
}
.c-inp-radio-emboss label + label { border-left: 1.5px solid var(--ink, #0E0E0C); }
.c-inp-radio-emboss input { display: none; }
.c-inp-radio-emboss span {
  display: inline-block;
  padding: 10px 18px;
  font-family: var(--font-inter-tight, sans-serif);
  font-size: 13px;
  color: var(--ink, #0E0E0C);
  background: var(--paper, #F4F1EA);
  transition: background 180ms ease, color 180ms ease;
}
.c-inp-radio-emboss input:checked + span {
  background: var(--ink, #0E0E0C);
  color: var(--paper, #F4F1EA);
}`,
  },
];
