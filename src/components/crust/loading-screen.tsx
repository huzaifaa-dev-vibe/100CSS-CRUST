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

const WORD = "Crust";

// Typewriter cadence.
// Phase 1 — "typing":   letters appear L→R, caret follows the last visible letter.
//                       Caret is visible ONLY in this phase.
// Phase 2 — "holding":  full word sits, no caret, no animation.
// Phase 3 — "fading-out": whole word fades out (opacity 1→0), no caret.
// Phase 4 — "empty":    nothing visible, brief pause, no caret.
// Phase 5 — "fading-in": whole word fades back in (opacity 0→1), no caret.
// → loop back to "holding".
//
// The caret only ever exists during the initial "typing" phase. After that,
// the word gently pulses (fade out / fade in) for the rest of the 7s loader.
const TYPE_MS = 130;        // ms per letter when typing forward
const HOLD_MS = 1800;       // hold the complete word, no caret
const FADE_MS = 500;        // fade out / fade in duration
const EMPTY_MS = 300;       // pause while empty between fades

type Phase = "typing" | "holding" | "fading-out" | "empty" | "fading-in";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [typedCount, setTypedCount] = useState(0); // 0..WORD.length
  const [phase, setPhase] = useState<Phase>("typing");

  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const phaseStartRef = useRef<number>(0);
  const DURATION = 7000;

  useEffect(() => {
    startRef.current = performance.now();
    phaseStartRef.current = startRef.current;
    let currentCount = 0;
    let currentPhase: Phase = "typing";

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(pct);

      const phaseElapsed = now - phaseStartRef.current;

      if (currentPhase === "typing") {
        // Reveal one letter every TYPE_MS — caret follows the last visible letter
        const target = Math.min(WORD.length, Math.floor(phaseElapsed / TYPE_MS) + 1);
        if (target !== currentCount) {
          currentCount = target;
          setTypedCount(target);
        }
        if (currentCount >= WORD.length) {
          // Word complete — drop the caret, hold the clean word
          currentPhase = "holding";
          phaseStartRef.current = now;
          setPhase("holding");
        }
      } else if (currentPhase === "holding") {
        if (phaseElapsed >= HOLD_MS) {
          currentPhase = "fading-out";
          phaseStartRef.current = now;
          setPhase("fading-out");
        }
      } else if (currentPhase === "fading-out") {
        if (phaseElapsed >= FADE_MS) {
          currentPhase = "empty";
          phaseStartRef.current = now;
          setPhase("empty");
        }
      } else if (currentPhase === "empty") {
        if (phaseElapsed >= EMPTY_MS) {
          currentPhase = "fading-in";
          phaseStartRef.current = now;
          setPhase("fading-in");
        }
      } else if (currentPhase === "fading-in") {
        if (phaseElapsed >= FADE_MS) {
          currentPhase = "holding";
          phaseStartRef.current = now;
          setPhase("holding");
        }
      }

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Loader done — ensure full word is visible, then exit
        setTypedCount(WORD.length);
        setPhase("holding");
        setTimeout(onDone, 450);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onDone]);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIdx((i) => (i + 1) % STATUSES.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const skip = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setProgress(100);
    setTypedCount(WORD.length);
    setPhase("holding");
    setTimeout(onDone, 200);
  };

  // Caret is visible ONLY during the active "typing" phase.
  const showCaret = phase === "typing";

  // Word opacity by phase. We set a target opacity and let CSS transition
  // handle the fade smoothly (re-renders happen via rAF state updates).
  const wordOpacity =
    phase === "empty" ? 0 :
    phase === "fading-out" ? 0 :
    phase === "fading-in" ? 1 :
    1; // typing, holding

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
          {/*
            Two-layer structure so the caret can follow the last visible
            letter left-to-right while the word stays centered:

            1. GHOST layer (visibility:hidden) — renders the full word
               invisibly to reserve the correct width for centering.

            2. VISIBLE layer (position:absolute, left:0) — renders only
               the typed letters + caret, left-aligned over the ghost.
               As letters appear, the caret naturally moves right.
          */}
          <h1
            className="relative font-display leading-none tracking-tightest"
            style={{ fontSize: "clamp(96px, 18vw, 240px)", fontWeight: 400 }}
            aria-label="Crust"
          >
            {/* Ghost — reserves full word width for centering */}
            <span aria-hidden style={{ visibility: "hidden", whiteSpace: "pre" }}>
              {WORD}
            </span>

            {/* Visible letters + caret — absolutely positioned over the ghost */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                whiteSpace: "pre",
                opacity: wordOpacity,
                transition: `opacity ${FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              {WORD.split("").map((ch, i) => {
                const visible = i < typedCount;
                if (!visible) return null; // unrendered = takes zero width
                return (
                  <span
                    key={i}
                    style={{
                      display: "inline-block",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(0.4em)",
                      transition:
                        "opacity 180ms ease, transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {ch}
                  </span>
                );
              })}
              {/*
                Caret — only renders during the "typing" phase.
                Because invisible letters are not rendered at all (above),
                the caret sits immediately after the last VISIBLE letter,
                moving left → right as letters appear.
              */}
              {showCaret && (
                <span
                  aria-hidden
                  className="inline-block bg-ink"
                  style={{
                    width: "0.08em",
                    height: "0.78em",
                    marginBottom: "0.12em",
                    marginLeft: "0.04em",
                    animation: "crust-blink 600ms steps(1) infinite",
                    verticalAlign: "baseline",
                  }}
                />
              )}
            </span>
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
