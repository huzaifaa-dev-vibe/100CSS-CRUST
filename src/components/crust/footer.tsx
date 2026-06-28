"use client";

import { useCrust } from "@/lib/crust/store";

export default function Footer() {
  const setView = useCrust((s) => s.setView);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-ink-t bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4 md:px-8 md:py-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="h-7 w-7 object-contain"
            />
            <span className="font-display text-[22px] font-medium leading-none tracking-tightest text-ink">
              Crust
            </span>
          </div>
          <p className="mt-3 max-w-[28ch] font-sans text-[13px] leading-[1.55] text-smoke">
            Components with a crust. Soft inside, sharp outside.
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-smoke">
            v1.0 · MIT · {year}
          </p>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-rust">
            Explore
          </p>
          <ul className="space-y-2 font-sans text-[13px] text-ink">
            <li>
              <button onClick={() => setView("home")} className="hover:text-rust">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setView("components")} className="hover:text-rust">
                Components
              </button>
            </li>
            <li>
              <button onClick={() => setView("docs")} className="hover:text-rust">
                Docs
              </button>
            </li>
            <li>
              <button onClick={() => setView("about")} className="hover:text-rust">
                About
              </button>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-rust">
            Categories
          </p>
          <ul className="space-y-2 font-sans text-[13px] text-smoke">
            <li>Buttons · Inputs</li>
            <li>Cards · Loaders</li>
            <li>Toggles · Progress</li>
            <li>Text · Backgrounds</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-rust">
            Connect
          </p>
          <ul className="space-y-2 font-sans text-[13px] text-ink">
            <li>
              <a href="#" className="hover:text-rust">GitHub</a>
            </li>
            <li>
              <a href="#" className="hover:text-rust">Twitter / X</a>
            </li>
            <li>
              <a href="#" className="hover:text-rust">Discord</a>
            </li>
            <li>
              <a href="#" className="hover:text-rust">RSS</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-ink-t">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-smoke md:flex-row md:items-center md:px-8">
          <p>© {year} Crust. Baked fresh, served warm.</p>
          <p>Made with ink, paper, and a little rust.</p>
        </div>
      </div>
    </footer>
  );
}
