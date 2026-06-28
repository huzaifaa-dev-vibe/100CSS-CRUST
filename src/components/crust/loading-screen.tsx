"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STATUSES = [
  "compiling tokens…",
  "stitching components…",
  "warming the oven…",
  "calibrating hairlines…",
  "kneading the dough…",
  "firing the kiln…",
  "polishing the crust…",
];

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const word = "Crust";
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const DURATION = 7000;

  useEffect(() => {
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(pct);
      const lettersShown = Math.min(
        word.length,
        Math.floor((elapsed / 2200) * word.length),
      );
      setRevealed(lettersShown);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setRevealed(word.length);
        setTimeout(onDone, 450);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIdx((i) => (i + 1) % STATUSES.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const skip = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setProgress(100);
    setRevealed(word.length);
    setTimeout(onDone, 200);
  };

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
        onClick={skip}
        role="status"
        aria-label="Loading Crust"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper cursor-pointer"
      >
        <CornerMarks />

        <div className="relative flex items-end justify-center">
          <h1
            className="font-display leading-none tracking-tightest"
            style={{ fontSize: "clamp(96px, 18vw, 240px)", fontWeight: 400 }}
            aria-label="Crust"
          >
            {word.split("").map((ch, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  opacity: i < revealed ? 1 : 0,
                  transform: i < revealed ? "translateY(0)" : "translateY(0.4em)",
                  transition:
                    "opacity 220ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {ch}
              </span>
            ))}
            <span
              aria-hidden
              className="inline-block ml-1 bg-ink"
              style={{
                width: "0.08em",
                height: "0.78em",
                marginBottom: "0.12em",
                animation: "crust-blink 600ms steps(1) infinite",
              }}
            />
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 30 ? 0.7 : 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.18em] uppercase text-smoke mt-6"
        >
          Components with a crust
        </motion.p>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-24 w-[min(560px,82vw)]">
          <div className="relative h-[1.5px] w-full bg-ink/15">
            <div
              className="absolute left-0 top-0 h-full bg-rust"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-smoke">
            <span>
              <span className="text-ink tabular-nums">
                {String(Math.floor(progress)).padStart(3, "0")}
              </span>
              %
            </span>
            <span>{STATUSES[statusIdx]}</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.2em] uppercase text-smoke/70">
          click to skip
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function CornerMarks() {
  return (
    <>
      <Mark className="absolute top-6 left-6" />
      <Mark className="absolute top-6 right-6 rotate-90" />
      <Mark className="absolute bottom-6 right-6 rotate-180" />
      <Mark className="absolute bottom-6 left-6 -rotate-90" />
    </>
  );
}

function Mark({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      style={{ color: "var(--ink)" }}
    >
      <path d="M0 0H20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 0V20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
