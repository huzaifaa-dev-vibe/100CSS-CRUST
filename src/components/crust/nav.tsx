"use client";

import { useCrust, type CrustView } from "@/lib/crust/store";
import { motion } from "framer-motion";

const NAV_ITEMS: Array<{ id: CrustView; label: string; n: string }> = [
  { id: "home", label: "Home", n: "01" },
  { id: "components", label: "Components", n: "02" },
  { id: "docs", label: "Docs", n: "03" },
  { id: "about", label: "About", n: "04" },
];

export default function Nav() {
  const { view, setView } = useCrust();

  return (
    <header className="sticky top-0 z-50 border-ink-b bg-paper/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <button
          onClick={() => setView("home")}
          className="flex items-center gap-2.5"
          aria-label="Crust home"
        >
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="h-7 w-7 object-contain"
            style={{ filter: "contrast(1.05)" }}
          />
          <span className="font-display text-[22px] font-medium leading-none tracking-tightest text-ink">
            Crust
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-smoke sm:inline">
            v1.0
          </span>
        </button>

        {/* Nav items */}
        <nav className="flex items-center gap-0">
          {NAV_ITEMS.map((item) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className="group relative flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-smoke transition-colors hover:text-ink md:px-4"
                aria-current={isActive ? "page" : undefined}
              >
                <span className="text-[9px] text-smoke/70 group-hover:text-rust">
                  {item.n}
                </span>
                <span className={isActive ? "text-ink" : ""}>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-[1.5px] left-3 right-3 h-[1.5px] bg-rust md:left-4 md:right-4"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 border-ink bg-ink px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-rust hover:border-rust md:inline-flex"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Star
        </a>
      </div>
    </header>
  );
}
