"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCrust } from "@/lib/crust/store";
import { COMPONENTS, CATEGORIES } from "@/lib/crust/components";
import Marquee from "../marquee";
import ComponentCard from "../component-card";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeView() {
  const setView = useCrust((s) => s.setView);
  const heroRef = useRef<HTMLHeadingElement>(null);

  // GSAP-style word reveal (no gsap import here, just CSS-driven framer)
  useEffect(() => {
    if (!heroRef.current) return;
    const words = heroRef.current.querySelectorAll<HTMLElement>("[data-word]");
    words.forEach((w, i) => {
      w.style.animation = `none`;
      w.style.opacity = "0";
      w.style.transform = "translateY(0.4em)";
      requestAnimationFrame(() => {
        w.style.transition = `opacity 600ms ${EASE[0]}s cubic-bezier(${EASE.join(
          ",",
        )}), transform 700ms ${i * 80}ms cubic-bezier(${EASE.join(",")})`;
        w.style.opacity = "1";
        w.style.transform = "translateY(0)";
      });
    });
  }, []);

  const featured = [
    "btn-fill-slide",
    "card-tilt-3d",
    "ld-dot-wave",
    "txt-outline-fill",
    "pg-radial-circle",
    "bg-grid-paper",
  ]
    .map((id) => COMPONENTS.find((c) => c.id === id))
    .filter(Boolean) as typeof COMPONENTS;

  const stats = [
    { value: "100", label: "Hand-crafted effects", suffix: "" },
    { value: "12", label: "Distinct categories", suffix: "" },
    { value: "0", label: "External UI deps", suffix: "" },
    { value: "AA", label: "WCAG contrast", suffix: "" },
  ];

  return (
    <div className="relative">
      {/* ───── HERO ───── */}
      <section className="relative mx-auto max-w-[1400px] px-5 pt-16 pb-10 md:px-8 md:pt-24">
        <div className="grid-12 gap-4">
          <div className="col-span-12 flex items-center gap-3 md:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust">
              ✶ Now serving v1.0
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-smoke">
              · baked fresh daily
            </span>
          </div>

          <h1
            ref={heroRef}
            className="col-span-12 font-display text-[14vw] font-medium leading-[0.9] tracking-tightest text-ink md:text-[10vw] lg:text-[148px]"
            aria-label="Components with a crust."
          >
            <span className="block overflow-hidden">
              <span data-word className="inline-block">
                Components
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-word className="inline-block">
                with a{" "}
                <em className="font-display italic text-rust">crust.</em>
              </span>
            </span>
          </h1>

          <div className="col-span-12 mt-2 grid-12 gap-6 md:mt-6">
            <p className="col-span-12 max-w-[44ch] font-sans text-[16px] leading-[1.55] text-smoke md:col-span-6 md:col-start-7 md:text-[17px]">
              A production-grade CSS component library. 100 effects, one
              editorial voice. Soft inside, sharp outside — built for developers
              who think design is engineering.
            </p>
            <div className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:col-start-7 md:mt-2">
              <button
                onClick={() => setView("components")}
                className="group inline-flex items-center gap-3 border-ink bg-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-rust hover:border-rust"
              >
                Browse 100 components
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
              <button
                onClick={() => setView("docs")}
                className="inline-flex items-center gap-2 border-ink bg-paper px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-bone"
              >
                Read the docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───── MARQUEE ───── */}
      <section className="relative py-10">
        <Marquee
          items={[
            "Buttons",
            "Inputs",
            "Cards",
            "Loaders",
            "Toggles",
            "Tooltips",
            "Toasts",
            "Progress",
            "Navigation",
            "Text",
            "Backgrounds",
            "Badges",
          ]}
          speed={70}
        />
      </section>

      {/* ───── ANNOUNCEMENT BANNER ───── */}
      <AnnouncementBanner />

      {/* ───── STATS ───── */}
      <section className="border-ink-t border-ink-b bg-paper">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
              className={`p-6 md:p-8 ${
                i < stats.length - 1 ? "border-ink-r" : ""
              } ${i < 2 ? "border-ink-b md:border-ink-b-0" : ""}`}
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-[64px] font-medium leading-none tracking-tightest text-ink md:text-[88px]">
                  {s.value}
                </span>
                <span className="font-display text-[20px] text-rust">
                  {s.suffix}
                </span>
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-smoke">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── CATEGORIES ───── */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
              01 —
            </span>
            <h2 className="font-display text-[40px] font-medium leading-none tracking-tight md:text-[56px]">
              What&apos;s inside
            </h2>
          </div>
          <button
            onClick={() => setView("components")}
            className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-smoke transition-colors hover:text-ink md:inline-flex"
          >
            All 100 →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => {
            const count = COMPONENTS.filter((c) => c.category === cat).length;
            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.04 }}
                onClick={() => setView("components")}
                className="group flex flex-col items-start gap-3 border-ink bg-bone p-5 text-left transition-colors hover:bg-ink hover:text-paper"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-rust group-hover:text-ochre">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[26px] font-medium leading-none tracking-tight">
                  {cat}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-smoke group-hover:text-paper/70">
                  {count} components
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* ───── FEATURED ───── */}
      <section className="border-ink-t bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <div className="mb-8 flex items-baseline gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
              02 —
            </span>
            <h2 className="font-display text-[40px] font-medium leading-none tracking-tight md:text-[56px]">
              Six favorites
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
              >
                <ComponentCard component={c} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PHILOSOPHY ───── */}
      <section className="border-ink-t">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
              03 —
            </span>
            <h2 className="mt-3 font-display text-[40px] font-medium leading-[0.95] tracking-tight md:text-[56px]">
              The crust method
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-sans text-[18px] leading-[1.6] text-ink md:text-[20px]">
              Crust is built on three rules. <strong className="text-rust">One</strong>:
              every component must work without JavaScript. The CSS is the
              source of truth; behavior is a progressive enhancement layered on
              top. <strong className="text-rust">Two</strong>: no slop. No purple
              gradients, no glassmorphism, no glow effects, no neon. Just warm
              paper, ink hairlines, and a single rust accent that earns its
              place. <strong className="text-rust">Three</strong>: editorial
              discipline. Numbered sections, small caps mono labels, generous
              whitespace, asymmetric grids — the rigor of a Swiss magazine
              applied to a component library.
            </p>
            <p className="mt-6 font-sans text-[16px] leading-[1.6] text-smoke">
              The result is a system that feels hand-crafted at every scale.
              Each effect is small enough to read in one sitting, opinionated
              enough to ship in production, and quiet enough to get out of the
              way of your content. That&apos;s the crust.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FOOTER CTA ───── */}
      <section className="border-ink-t bg-ink text-paper">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-16 md:px-8 md:py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ochre">
            04 — Get started
          </span>
          <h2 className="font-display text-[44px] font-medium leading-[0.95] tracking-tight md:text-[72px]">
            Bake something
            <br />
            <em className="italic text-rust">worth sharing.</em>
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setView("components")}
              className="border-paper bg-paper px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-rust hover:text-paper hover:border-rust"
            >
              Browse components →
            </button>
            <button
              onClick={() => setView("about")}
              className="border-paper bg-transparent px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              The story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   Announcement banner — two-phase rollout notice
   ============================================================ */
function AnnouncementBanner() {
  return (
    <section className="border-ink-b bg-bone">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-8 md:py-12">
        {/* Section label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
            ✶ Notice
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-smoke">
            · posted 28 June 2026 · v1.0.2
          </span>
        </div>

        <h2 className="mb-6 max-w-[22ch] font-display text-[36px] font-medium leading-[0.95] tracking-tight md:text-[52px]">
          Two changes coming in July.
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Phase 1 — User auth */}
          <article className="border-ink bg-paper p-6">
            <header className="mb-3 flex items-baseline justify-between gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
                01 — July 5
              </span>
              <span className="border-ink bg-ochre px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink">
                User accounts
              </span>
            </header>
            <h3 className="mb-2 font-display text-[26px] font-medium leading-tight tracking-tight text-ink">
              Authentication for everyone
            </h3>
            <p className="font-sans text-[13.5px] leading-[1.55] text-smoke">
              We&apos;re adding user authentication. You&apos;ll be able to sign
              in, save favorite components, sync your theme across devices, and
              leave feedback on individual effects. Read-only access to the
              component library stays free for everyone — no account required to
              browse or copy code.
            </p>
          </article>

          {/* Phase 2 — Developer accounts */}
          <article className="border-ink bg-ink p-6 text-paper">
            <header className="mb-3 flex items-baseline justify-between gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ochre">
                02 — July 10
              </span>
              <span className="border-paper bg-rust px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-paper">
                Developer accounts
              </span>
            </header>
            <h3 className="mb-2 font-display text-[26px] font-medium leading-tight tracking-tight">
              Contribute your own components
            </h3>
            <p className="font-sans text-[13.5px] leading-[1.55] text-paper/70">
              Developer authentication opens. Sign in as a contributor, submit
              your own component (HTML + CSS + preview), and it goes into a
              review queue. The admin can edit your title or code before
              publishing. Developers also get authority to propose new
              categories and tags.
            </p>
          </article>
        </div>

        {/* Workflow detail strip */}
        <div className="mt-6 border-ink-t bg-bone pt-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-smoke">
            How the contribution pipeline will work
          </p>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ["01", "Submit", "Developer signs in and submits component (HTML + CSS + live preview) through the in-app form."],
              ["02", "Queue", "Submission enters a review queue. Status visible to the contributor in their dashboard."],
              ["03", "Review", "Admin reviews the code, may edit the title or adjust the code to fit the crust method (6 rules)."],
              ["04", "Publish", "Approved component goes live with the developer credited. Developer can also propose new categories and tags."],
            ].map(([n, title, body]) => (
              <li key={n} className="border-ink-t pt-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-rust">
                    {n}
                  </span>
                  <span className="font-display text-[17px] font-medium tracking-tight text-ink">
                    {title}
                  </span>
                </div>
                <p className="mt-1.5 font-sans text-[12.5px] leading-[1.5] text-smoke">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Fine print */}
        <p className="mt-6 max-w-[70ch] font-sans text-[12px] leading-[1.5] text-smoke">
          The library itself — all 100 components, the design system, dark mode,
          the docs — stays open-source under MIT. These accounts are for the
          hosted site experience and the contribution pipeline. Self-hosting
          remains free and unrestricted. Questions?{" "}
          <a
            href="https://github.com/huzaifaa-dev-vibe/100CSS-CRUST/discussions"
            target="_blank"
            rel="noreferrer"
            className="text-rust underline decoration-rust/40 underline-offset-2 hover:decoration-rust"
          >
            Open a discussion →
          </a>
        </p>
      </div>
    </section>
  );
}
