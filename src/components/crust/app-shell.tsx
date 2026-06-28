"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { useCrust } from "@/lib/crust/store";
import Nav from "./nav";
import HomeView from "./views/home";
import ComponentsView from "./views/components";
import DocsView from "./views/docs";
import AboutView from "./views/about";
import Footer from "./footer";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AppShell() {
  const { view } = useCrust();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll once
  useEffect(() => {
    const l = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = l;
    let raf = 0;
    const tick = (now: number) => {
      l.raf(now);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      l.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [view]);

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {view === "home" && <HomeView />}
            {view === "components" && <ComponentsView />}
            {view === "docs" && <DocsView />}
            {view === "about" && <AboutView />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
