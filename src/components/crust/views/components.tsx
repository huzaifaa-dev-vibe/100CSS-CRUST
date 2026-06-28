"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { COMPONENTS, CATEGORIES, type Category } from "@/lib/crust/components";
import ComponentCard from "../component-card";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ComponentsView() {
  const [cat, setCat] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");

  // key forces remount (and reset of visibleCount) when filters change
  return (
    <ComponentsGrid
      key={`${cat}::${query}`}
      cat={cat}
      setCat={setCat}
      query={query}
      setQuery={setQuery}
    />
  );
}

function ComponentsGrid({
  cat,
  setCat,
  query,
  setQuery,
}: {
  cat: Category | "All";
  setCat: (c: Category | "All") => void;
  query: string;
  setQuery: (s: string) => void;
}) {
  const [visibleCount, setVisibleCount] = useState(24);

  const filtered = useMemo(() => {
    let list = COMPONENTS;
    if (cat !== "All") list = list.filter((c) => c.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q),
      );
    }
    return list;
  }, [cat, query]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-8 md:py-14">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 border-ink-b pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rust">
            02 — Components
          </span>
          <h1 className="mt-3 font-display text-[52px] font-medium leading-[0.92] tracking-tightest text-ink md:text-[88px]">
            All 100
          </h1>
          <p className="mt-3 max-w-[52ch] font-sans text-[15px] leading-[1.55] text-smoke">
            Every Crust component in one place. Click any card to swap between
            the live preview and the underlying HTML + CSS. Copy-paste and ship.
          </p>
        </div>
        <div className="flex w-full max-w-[340px] items-center gap-2 border-ink bg-bone px-3 py-2.5 md:w-auto">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-smoke"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components…"
            className="flex-1 bg-transparent font-sans text-[14px] text-ink outline-none placeholder:text-smoke"
            aria-label="Search components"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-smoke hover:text-ink"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-smoke">
              Categories
            </span>
            <span className="font-mono text-[10px] text-smoke tabular-nums">
              {filtered.length}
            </span>
          </div>
          <ul className="flex flex-row flex-wrap gap-1.5 lg:flex-col lg:gap-0">
            <li>
              <button
                onClick={() => setCat("All")}
                className={`block w-full px-3 py-2 text-left font-mono text-[11px] uppercase tracking-[0.08em] transition-colors lg:border-l-[1.5px] lg:border-ink ${
                  cat === "All"
                    ? "bg-ink text-paper lg:border-rust"
                    : "text-smoke hover:bg-bone hover:text-ink"
                }`}
              >
                All
                <span className="ml-2 text-[9px] text-smoke/70">
                  {COMPONENTS.length}
                </span>
              </button>
            </li>
            {CATEGORIES.map((c) => {
              const count = COMPONENTS.filter((x) => x.category === c).length;
              const isActive = cat === c;
              return (
                <li key={c}>
                  <button
                    onClick={() => setCat(c)}
                    className={`block w-full px-3 py-2 text-left font-mono text-[11px] uppercase tracking-[0.08em] transition-colors lg:border-l-[1.5px] lg:border-ink ${
                      isActive
                        ? "bg-ink text-paper lg:border-rust"
                        : "text-smoke hover:bg-bone hover:text-ink"
                    }`}
                  >
                    {c}
                    <span className="ml-2 text-[9px] text-smoke/70">
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 hidden border-ink-t pt-4 lg:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-smoke">
              Tip
            </p>
            <p className="mt-1 font-sans text-[12px] leading-[1.5] text-smoke">
              Click any card to switch between live preview and source code.
              Every component is pure CSS — copy and paste.
            </p>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
            {visible.map((c, i) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: Math.min(i * 0.02, 0.3) }}
              >
                <ComponentCard component={c} index={i} />
              </motion.div>
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="mt-10 flex flex-col items-center gap-4 border-ink-t pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-smoke">
                Showing {visible.length} of {filtered.length}
              </p>
              <button
                onClick={() => setVisibleCount((n) => n + 24)}
                className="border-ink bg-paper px-6 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Load more →
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-3 border-ink bg-bone p-16 text-center">
              <p className="font-display text-[32px] font-medium tracking-tight text-ink">
                Nothing in the oven.
              </p>
              <p className="font-sans text-[14px] text-smoke">
                No components match your search. Try a different term.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setCat("All");
                }}
                className="mt-2 border-ink bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
