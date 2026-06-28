"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutView() {
  return (
    <article className="mx-auto max-w-[820px] px-5 py-10 md:px-8 md:py-16">
      <header className="mb-12 border-ink-b pb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
          04 — About
        </span>
        <h1 className="mt-3 font-display text-[56px] font-medium leading-[0.92] tracking-tightest text-ink md:text-[96px]">
          Why <em className="italic text-rust">Crust</em>?
        </h1>
        <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.12em] text-smoke">
          A short editorial · 4 min read · by the Crust team
        </p>
      </header>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
        className="space-y-8 font-sans text-[17px] leading-[1.7] text-ink"
      >
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          <p>
            Crust began as a protest. We were tired of component libraries that
            all looked the same — the same purple-to-blue gradients, the same
            glassmorphism cards floating over blurry blobs, the same buttons
            that glowed when you hovered them. The web had become a place where
            every interface whispered the same word: <em className="italic">slop</em>.
          </p>
        </motion.section>

        <motion.section>
          <Pullquote>
            Soft inside, sharp outside. That&apos;s the crust. That&apos;s the
            whole philosophy.
          </Pullquote>
        </motion.section>

        <motion.section
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          <NumberedHeading n="01" title="A return to ink on paper" />
          <p>
            The first decision was the palette. We threw out the entire Material
            color wheel and started over with a single warm off-white background
            — <code className="bg-bone px-1 font-mono text-[14px]">#F4F1EA</code>,
            the color of unbleached flour — paired with a near-black ink for
            text and a single rust accent for everything that needed attention.
            The result is a system that feels like printed paper, not glowing
            glass. Every surface has weight. Every border is a hairline you can
            feel under your fingertip.
          </p>
          <p>
            We added three secondary colors — moss, ochre, clay — for cases
            where rust would be too loud: success states, badges, muted
            highlights. Eight colors total. No more. The discipline is the
            point. When you have only eight colors, you stop reaching for
            visual novelty and start thinking about hierarchy.
          </p>
        </motion.section>

        <motion.section
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          <NumberedHeading n="02" title="Editorial rigor" />
          <p>
            The second decision was typography. We wanted the body to feel like
            a developer&apos;s tool — clean, mono-capable, slightly utilitarian
            — but the headlines to feel like a magazine. Inter Tight for UI,
            JetBrains Mono for code and labels, and Fraunces for display:
            Fraunces is a variable serif with an adjustable optical size and a
            soft axis that lets it sing at 144pt headlines while still reading
            well at 24pt sub-heads. It has personality without being precious.
          </p>
          <p>
            Every section in Crust is numbered. <span className="font-mono text-[14px]">01 —</span>,{" "}
            <span className="font-mono text-[14px]">02 —</span>,{" "}
            <span className="font-mono text-[14px]">03 —</span>. The numbering
            is small caps mono, set in muted smoke gray, anchored to the
            leftmost column of a 12-column grid. It&apos;s a tiny detail, but
            it&apos;s the difference between a component library and a
            <em className="italic"> designed </em> component library.
          </p>
        </motion.section>

        <motion.section
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          <NumberedHeading n="03" title="CSS first, always" />
          <p>
            The third decision was the hardest: every component must work
            without JavaScript. The CSS is the source of truth. Ripples,
            magnetics, tab transitions, accordion expansion — all of it has a
            pure-CSS implementation that ships by default. The optional
            JavaScript runtime is a progressive enhancement layered on top,
            wired up via <code className="bg-bone px-1 font-mono text-[14px]">data-*</code> attributes.
          </p>
          <p>
            This means Crust works in any framework — React, Vue, Svelte,
            plain HTML — without adapters. It works in static sites without a
            hydration step. It works in email clients (mostly). It works in
            that weird legacy Rails app your company is afraid to touch. The
            crust is portable; the crumb is yours.
          </p>
        </motion.section>

        <motion.section
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          <NumberedHeading n="04" title="The hundred" />
          <p>
            We shipped Crust with 100 components on day one. Not 12, not 24,
            not the &quot;core 40 and roadmap.&quot; One hundred. Each one is
            hand-crafted — no generated variants, no design-token-derived
            permutations. Each one has its own preview, its own source code,
            its own personality within the system. Buttons feel different from
            cards. Loaders feel different from progress bars. The library has
            range.
          </p>
          <p>
            100 is also a number that forces honesty. You can&apos;t fake 100
            components. You can&apos;t ship 100 components that all look the
            same. You have to think about each one — what makes a toggle
            different from a switch, what makes a tooltip different from a
            popover, what makes a card different from a panel. The number is
            the discipline.
          </p>
        </motion.section>

        <motion.section
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          <Pullquote>
            Components with a crust. Soft inside, sharp outside. Built for
            developers who think design is engineering.
          </Pullquote>
        </motion.section>

        <motion.section
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          <NumberedHeading n="05" title="What&apos;s next" />
          <p>
            Crust is open source and we&apos;re just getting started. The next
            release adds CSS Houdini paint worklets for true per-pixel grain,
            a dark &quot;kiln&quot; theme that inverts to ink-on-paper, and a
            Figma library that mirrors every component one-to-one. The
            long-term goal is to become the default CSS layer for editorial
            products — documentation, marketing, dashboards, anything where
            the words matter as much as the buttons.
          </p>
          <p>
            If that sounds like your kind of fight, contribute. Open a PR.
            Argue about a border weight. The crust is for everyone who&apos;s
            tired of slop.
          </p>
        </motion.section>

        <motion.section
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
          className="border-ink-t pt-10"
        >
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-smoke">
            ✶ Crust v1.0 · released {new Date().getFullYear()} · MIT licensed
          </p>
        </motion.section>
      </motion.div>
    </article>
  );
}

function NumberedHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-rust">
        {n} —
      </span>
      <h2 className="font-display text-[32px] font-medium leading-[1.05] tracking-tight text-ink md:text-[40px]">
        {title}
      </h2>
    </div>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-[3px] border-rust bg-bone px-6 py-6">
      <p className="font-display text-[26px] font-medium leading-[1.25] tracking-tight text-ink md:text-[32px]">
        {children}
      </p>
    </blockquote>
  );
}
