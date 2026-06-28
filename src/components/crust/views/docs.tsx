"use client";

import { useState } from "react";
import CodeBlock from "../code-block";

const SECTIONS = [
  { id: "install", n: "01", label: "Install" },
  { id: "theming", n: "02", label: "Theming" },
  { id: "darkmode", n: "03", label: "Dark mode" },
  { id: "tokens", n: "04", label: "Tokens" },
  { id: "usage", n: "05", label: "Usage" },
  { id: "contributing", n: "06", label: "Contributing" },
];

const INSTALL_NPM = `npm install crust-css

# or with bun
bun add crust-css

# or with pnpm
pnpm add crust-css`;

const INSTALL_IMPORT = `// In your global stylesheet
@import "crust-css/dist/crust.css";

// Or in your component
import "crust-css/dist/crust.css";`;

const THEMING_CSS = `:root {
  /* Crust palette — override any of these to rebrand */
  --ink: #0E0E0C;
  --paper: #F4F1EA;
  --bone: #E8E3D6;
  --rust: #C2410C;
  --moss: #3F5B3A;
  --ochre: #D4A24C;
  --clay: #8C5A3C;
  --smoke: #6B6660;

  /* Typography */
  --font-display: "Fraunces", serif;
  --font-sans: "Inter Tight", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Geometry */
  --border-ink: 1.5px solid var(--ink);
  --radius: 4px;
}`;

const USAGE_HTML = `<!-- Drop a component anywhere -->
<button class="c-btn-fill-slide">
  <span>Get Crust</span>
</button>

<!-- Or scope it yourself -->
<div class="my-app">
  <button class="c-btn-fill-slide">
    <span>Get Crust</span>
  </button>
</div>`;

const USAGE_JS = `// Optional: wire up interactivity
import { mountCrust } from "crust-js";

// Scans for [data-ripple], [data-magnetic], etc.
mountCrust(document.body);

// Or target a single component
mountCrust(document.querySelector('.c-btn-fill-slide'));`;

const DARKMODE_CSS = `/* The "kiln" dark theme — automatically applied when .dark
   is on <html>. Every component adapts; you don't need to touch them. */
.dark {
  --ink: #ECE6D7;     /* warm off-white text */
  --paper: #14110D;   /* charred warm near-black background */
  --bone: #221E18;    /* lifted dark surface */
  --rust: #E85D2C;    /* brighter rust for contrast on dark */
  --moss: #8FAE82;
  --ochre: #E5B96A;
  --clay: #C49070;
  --smoke: #8C857A;
  color-scheme: dark;
}`;

const DARKMODE_AGENT = `# Three ways to switch themes — pick the one your agent can use.

# 1. URL param (best for HTTP-only agents: curl, fetch, scrapers, LLM tools)
curl "https://your-site.com/?theme=dark"
curl "https://your-site.com/?theme=light"
#  -> server-rendered HTML arrives with <html class="dark"> on first byte.
#     No JavaScript execution required from the caller.

# 2. Nav toggle (best for browser-driving agents: Playwright, agent-browser)
#    Click the sun/moon button in the top-right. aria-label tells you the
#    direction: "Switch to dark mode" or "Switch to light mode".

# 3. Programmatic (best for embedded scripts / browser console)
localStorage.setItem("theme", "dark"); location.reload();`;


export default function DocsView() {
  const [active, setActive] = useState("install");

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-8 md:py-14">
      <div className="mb-12 border-ink-b pb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
          03 — Documentation
        </span>
        <h1 className="mt-3 font-display text-[52px] font-medium leading-[0.92] tracking-tightest text-ink md:text-[88px]">
          The manual
        </h1>
        <p className="mt-3 max-w-[58ch] font-sans text-[15px] leading-[1.55] text-smoke">
          Six short sections. Install Crust in your project, learn how to theme
          it, switch to dark mode, study the design tokens, wire up
          interactivity, and contribute back.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)]">
          <ul className="flex flex-row gap-1.5 lg:flex-col lg:gap-0">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => {
                    setActive(s.id);
                    document
                      .getElementById(s.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`block w-full px-3 py-2 text-left font-mono text-[11px] uppercase tracking-[0.08em] transition-colors lg:border-l-[1.5px] lg:border-ink ${
                    active === s.id
                      ? "bg-ink text-paper lg:border-rust"
                      : "text-smoke hover:bg-bone hover:text-ink"
                  }`}
                >
                  <span className="mr-2 text-[9px] text-smoke/70">{s.n}</span>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="max-w-[800px]">
          {/* Install */}
          <section id="install" className="scroll-mt-20 pb-14">
            <SectionHeader n="01" title="Install" />
            <p className="mb-6 font-sans text-[15px] leading-[1.65] text-ink">
              Crust ships as a single CSS file. Add it to any project — Next.js,
              Astro, Vite, plain HTML — and you&apos;re ready. No build step
              required, no JavaScript runtime, no dependencies.
            </p>
            <div className="mb-4 h-[160px] border-ink">
              <CodeBlock code={INSTALL_NPM} lang="bash" label="terminal" />
            </div>
            <div className="h-[120px] border-ink">
              <CodeBlock code={INSTALL_IMPORT} lang="js" label="javascript" />
            </div>
          </section>

          {/* Theming */}
          <section id="theming" className="scroll-mt-20 border-ink-t pt-10 pb-14">
            <SectionHeader n="02" title="Theming" />
            <p className="mb-6 font-sans text-[15px] leading-[1.65] text-ink">
              Crust uses CSS custom properties for everything. Override the
              palette at the root and every component updates instantly — no
              recompile, no build step, no vendor prefix drama.
            </p>
            <div className="h-[380px] border-ink">
              <CodeBlock code={THEMING_CSS} lang="css" label="css" />
            </div>
          </section>

          {/* Dark mode */}
          <section id="darkmode" className="scroll-mt-20 border-ink-t pt-10 pb-14">
            <SectionHeader n="03" title="Dark mode" />
            <p className="mb-6 font-sans text-[15px] leading-[1.65] text-ink">
              Crust ships with a warm &quot;kiln&quot; dark theme — charred
              paper background, warm off-white ink, and brighter rust/moss/ochre
              accents tuned for contrast on dark surfaces. Toggle it from the
              sun/moon button in the nav, or hit any page with{" "}
              <code className="bg-bone px-1.5 py-0.5 font-mono text-[12.5px] text-ink">
                ?theme=dark
              </code>{" "}
              in the URL. Every one of the 100 components adapts automatically
              because they all read from the same eight CSS variables.
            </p>
            <div className="mb-4 h-[260px] border-ink">
              <CodeBlock code={DARKMODE_CSS} lang="css" label="css" />
            </div>
            <div className="h-[260px] border-ink">
              <CodeBlock code={DARKMODE_AGENT} lang="bash" label="agent access" />
            </div>
          </section>

          {/* Tokens */}
          <section id="tokens" className="scroll-mt-20 border-ink-t pt-10 pb-14">
            <SectionHeader n="04" title="Tokens" />
            <p className="mb-6 font-sans text-[15px] leading-[1.65] text-ink">
              The full token system. Eight colors, three font families, one
              border weight, one radius. That&apos;s it. The discipline is the
              point.
            </p>
            <div className="overflow-hidden border-ink">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-ink-b bg-bone">
                    <th className="border-ink-r px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-smoke">
                      Token
                    </th>
                    <th className="border-ink-r px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-smoke">
                      Value
                    </th>
                    <th className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-smoke">
                      Use
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["--ink", "#0E0E0C", "Primary text, borders", "var(--ink)"],
                    ["--paper", "#F4F1EA", "Background (warm off-white)", "var(--paper)"],
                    ["--bone", "#E8E3D6", "Surfaces, cards", "var(--bone)"],
                    ["--rust", "#C2410C", "Primary accent (CTA, highlights)", "var(--rust)"],
                    ["--moss", "#3F5B3A", "Secondary accent", "var(--moss)"],
                    ["--ochre", "#D4A24C", "Tertiary / badges", "var(--ochre)"],
                    ["--clay", "#8C5A3C", "Muted accent", "var(--clay)"],
                    ["--smoke", "#6B6660", "Muted text", "var(--smoke)"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-ink-b last:border-ink-b-0">
                      <td className="border-ink-r px-4 py-3 font-mono text-[12px] text-ink">
                        {row[0]}
                      </td>
                      <td className="border-ink-r px-4 py-3">
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="inline-block h-4 w-4 border-ink"
                            style={{ background: row[1] }}
                          />
                          <span className="font-mono text-[12px] text-ink">
                            {row[1]}
                          </span>
                        </span>
                      </td>
                      <td className="px-4 py-3 font-sans text-[13px] text-smoke">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Usage */}
          <section id="usage" className="scroll-mt-20 border-ink-t pt-10 pb-14">
            <SectionHeader n="05" title="Usage" />
            <p className="mb-6 font-sans text-[15px] leading-[1.65] text-ink">
              Each component is a self-contained HTML + CSS pair. Drop the
              markup anywhere, ensure the CSS is loaded, and you&apos;re done.
              For interactive components (ripples, magnetics, tabs), mount the
              optional JavaScript runtime.
            </p>
            <div className="mb-4 h-[150px] border-ink">
              <CodeBlock code={USAGE_HTML} lang="html" label="html" />
            </div>
            <div className="h-[150px] border-ink">
              <CodeBlock code={USAGE_JS} lang="javascript" label="javascript" />
            </div>
          </section>

          {/* Contributing */}
          <section id="contributing" className="scroll-mt-20 border-ink-t pt-10 pb-14">
            <SectionHeader n="06" title="Contributing" />
            <p className="mb-4 font-sans text-[15px] leading-[1.65] text-ink">
              Crust is open-source and PRs are welcome. Before contributing a
              new component, please follow these rules — they exist to keep the
              library consistent and editorial:
            </p>
            <ol className="space-y-3 font-sans text-[14px] leading-[1.65] text-ink">
              <li>
                <strong className="font-mono text-[12px] text-rust">01.</strong>{" "}
                Every component must work without JavaScript. CSS is the source
                of truth; behavior is a progressive enhancement.
              </li>
              <li>
                <strong className="font-mono text-[12px] text-rust">02.</strong>{" "}
                Use only the eight palette tokens. No new colors. No purple, no
                blue, no neon gradients, no glow.
              </li>
              <li>
                <strong className="font-mono text-[12px] text-rust">03.</strong>{" "}
                Borders are <code className="bg-bone px-1 font-mono text-[12px]">1.5px solid var(--ink)</code>.
                Radius is 0–6px max. No rounded blobs.
              </li>
              <li>
                <strong className="font-mono text-[12px] text-rust">04.</strong>{" "}
                Scope all CSS under a <code className="bg-bone px-1 font-mono text-[12px]">.c-{`{id}`}</code> wrapper class. Never leak styles to the global scope.
              </li>
              <li>
                <strong className="font-mono text-[12px] text-rust">05.</strong>{" "}
                Include a numbered label, a one-line description, and live
                preview + code tabs in the component card.
              </li>
              <li>
                <strong className="font-mono text-[12px] text-rust">06.</strong>{" "}
                Test in Chrome, Firefox, Safari. Degrade gracefully if CSS
                Houdini or container queries are unsupported.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
        {n} —
      </span>
      <h2 className="font-display text-[40px] font-medium leading-none tracking-tight text-ink md:text-[48px]">
        {title}
      </h2>
    </div>
  );
}
