"use client";

import { useEffect, useRef } from "react";
import type { CrustComponent } from "@/lib/crust/components";

/**
 * Renders a single Crust component preview.
 * - Injects the CSS into a <style> element scoped by id.
 * - Wires up common interaction patterns via data attributes.
 */
export default function ComponentPreview({
  component,
  active,
}: {
  component: CrustComponent;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const styleId = `crust-style-${component.id}`;

  useEffect(() => {
    // Inject scoped CSS once
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = component.css;
      document.head.appendChild(style);
    }
  }, [component.css, styleId]);

  useEffect(() => {
    if (!active || !ref.current) return;
    const root = ref.current;
    const cleanupFns: Array<() => void> = [];

    // ---- Ripple buttons (data-ripple) ----
    const ripples = root.querySelectorAll<HTMLElement>("[data-ripple]");
    ripples.forEach((btn) => {
      const handler = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const rip = document.createElement("span");
        rip.className = "rip";
        rip.style.width = rip.style.height = `${size}px`;
        rip.style.left = `${e.clientX - rect.left - size / 2}px`;
        rip.style.top = `${e.clientY - rect.top - size / 2}px`;
        btn.appendChild(rip);
        setTimeout(() => rip.remove(), 700);
      };
      btn.addEventListener("click", handler);
      cleanupFns.push(() => btn.removeEventListener("click", handler));
    });

    // ---- Magnetic buttons (data-magnetic) ----
    const magnetics = root.querySelectorAll<HTMLElement>("[data-magnetic]");
    magnetics.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      };
      const leave = () => {
        btn.style.transform = "translate(0, 0)";
      };
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      cleanupFns.push(() => {
        btn.removeEventListener("mousemove", move);
        btn.removeEventListener("mouseleave", leave);
      });
    });

    // ---- Tilt cards (data-tilt) ----
    const tilts = root.querySelectorAll<HTMLElement>("[data-tilt]");
    tilts.forEach((card) => {
      const inner = card.querySelector<HTMLElement>(".inner");
      if (!inner) return;
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        inner.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 16}deg)`;
      };
      const leave = () => {
        inner.style.transform = "rotateY(0) rotateX(0)";
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cleanupFns.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });

    // ---- Spotlights (data-spot) ----
    const spots = root.querySelectorAll<HTMLElement>("[data-spot]");
    spots.forEach((card) => {
      const glow = card.querySelector<HTMLElement>(".glow");
      if (!glow) return;
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        glow.style.left = `${e.clientX - rect.left}px`;
        glow.style.top = `${e.clientY - rect.top}px`;
      };
      card.addEventListener("mousemove", move);
      cleanupFns.push(() => card.removeEventListener("mousemove", move));
    });

    // ---- Magnetic border (data-mb) ----
    const mbs = root.querySelectorAll<HTMLElement>("[data-mb]");
    mbs.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const edgeT = y;
        const edgeB = rect.height - y;
        const edgeL = x;
        const edgeR = rect.width - x;
        const min = Math.min(edgeT, edgeB, edgeL, edgeR);
        card.classList.remove("edge-top", "edge-right", "edge-bottom", "edge-left");
        if (min === edgeT) card.classList.add("edge-top");
        else if (min === edgeR) card.classList.add("edge-right");
        else if (min === edgeB) card.classList.add("edge-bottom");
        else card.classList.add("edge-left");
      };
      const leave = () => {
        card.classList.remove("edge-top", "edge-right", "edge-bottom", "edge-left");
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cleanupFns.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });

    // ---- Follow cursor (data-follow) ----
    const follows = root.querySelectorAll<HTMLElement>("[data-follow]");
    follows.forEach((card) => {
      const cursor = card.querySelector<HTMLElement>(".cursor");
      if (!cursor) return;
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        cursor.style.left = `${e.clientX - rect.left}px`;
        cursor.style.top = `${e.clientY - rect.top}px`;
      };
      card.addEventListener("mousemove", move);
      cleanupFns.push(() => card.removeEventListener("mousemove", move));
    });

    // ---- Flip cards (data-flip) ----
    const flips = root.querySelectorAll<HTMLElement>("[data-flip]");
    flips.forEach((card) => {
      const handler = () => card.classList.toggle("flipped");
      card.addEventListener("click", handler);
      cleanupFns.push(() => card.removeEventListener("click", handler));
    });

    // ---- Pill toggles (data-pill) ----
    const pills = root.querySelectorAll<HTMLElement>("[data-pill]");
    pills.forEach((group) => {
      const buttons = group.querySelectorAll<HTMLButtonElement>("button[data-pill-btn]");
      const indicator = group.querySelector<HTMLElement>(".pill-indicator");
      const move = (btn: HTMLButtonElement) => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        if (indicator) {
          indicator.style.width = `${btn.offsetWidth}px`;
          indicator.style.transform = `translateX(${btn.offsetLeft - 4}px)`;
        }
      };
      // Initialize to first
      const firstActive = group.querySelector<HTMLButtonElement>("button.active") || buttons[0];
      if (firstActive && indicator) {
        requestAnimationFrame(() => {
          indicator.style.width = `${firstActive.offsetWidth}px`;
          indicator.style.transform = `translateX(${firstActive.offsetLeft - 4}px)`;
        });
      }
      buttons.forEach((btn) => {
        const h = () => move(btn);
        btn.addEventListener("click", h);
        cleanupFns.push(() => btn.removeEventListener("click", h));
      });
    });

    // ---- Segmented controls (data-seg) ----
    const segs = root.querySelectorAll<HTMLElement>("[data-seg]");
    segs.forEach((group) => {
      const buttons = group.querySelectorAll<HTMLButtonElement>("button[data-seg-btn]");
      const ind = group.querySelector<HTMLElement>(".ind");
      const move = (btn: HTMLButtonElement) => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        if (ind) {
          ind.style.width = `${btn.offsetWidth}px`;
          ind.style.transform = `translateX(${btn.offsetLeft}px)`;
        }
      };
      const firstActive = group.querySelector<HTMLButtonElement>("button.active") || buttons[0];
      if (firstActive && ind) {
        requestAnimationFrame(() => {
          ind.style.width = `${firstActive.offsetWidth}px`;
          ind.style.transform = `translateX(${firstActive.offsetLeft}px)`;
        });
      }
      buttons.forEach((btn) => {
        const h = () => move(btn);
        btn.addEventListener("click", h);
        cleanupFns.push(() => btn.removeEventListener("click", h));
      });
    });

    // ---- Tab underline (data-tu) ----
    const tus = root.querySelectorAll<HTMLElement>("[data-tu]");
    tus.forEach((group) => {
      const buttons = group.querySelectorAll<HTMLButtonElement>("button[data-tu-btn]");
      const bar = group.querySelector<HTMLElement>(".bar");
      const move = (btn: HTMLButtonElement) => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        if (bar) {
          bar.style.width = `${btn.offsetWidth}px`;
          bar.style.transform = `translateX(${btn.offsetLeft}px)`;
        }
      };
      const firstActive = group.querySelector<HTMLButtonElement>("button.active") || buttons[0];
      if (firstActive && bar) {
        requestAnimationFrame(() => {
          bar.style.width = `${firstActive.offsetWidth}px`;
          bar.style.transform = `translateX(${firstActive.offsetLeft}px)`;
        });
      }
      buttons.forEach((btn) => {
        const h = () => move(btn);
        btn.addEventListener("click", h);
        cleanupFns.push(() => btn.removeEventListener("click", h));
      });
    });

    // ---- Tab bar (data-tb) — same as tab underline ----
    const tbs = root.querySelectorAll<HTMLElement>("[data-tb]");
    tbs.forEach((group) => {
      const buttons = group.querySelectorAll<HTMLButtonElement>("button[data-tb-btn]");
      const ind = group.querySelector<HTMLElement>(".ind");
      const move = (btn: HTMLButtonElement) => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        if (ind) {
          ind.style.width = `${btn.offsetWidth}px`;
          ind.style.transform = `translateX(${btn.offsetLeft}px)`;
        }
      };
      const firstActive = group.querySelector<HTMLButtonElement>("button.active") || buttons[0];
      if (firstActive && ind) {
        requestAnimationFrame(() => {
          ind.style.width = `${firstActive.offsetWidth}px`;
          ind.style.transform = `translateX(${firstActive.offsetLeft}px)`;
        });
      }
      buttons.forEach((btn) => {
        const h = () => move(btn);
        btn.addEventListener("click", h);
        cleanupFns.push(() => btn.removeEventListener("click", h));
      });
    });

    // ---- Accordions (data-acc) ----
    const accs = root.querySelectorAll<HTMLElement>("[data-acc]");
    accs.forEach((acc) => {
      const head = acc.querySelector<HTMLElement>(".head");
      if (!head) return;
      const handler = () => acc.classList.toggle("open");
      head.addEventListener("click", handler);
      cleanupFns.push(() => head.removeEventListener("click", handler));
    });

    // ---- Collapsible curtain (data-cur) ----
    const curs = root.querySelectorAll<HTMLElement>("[data-cur]");
    curs.forEach((c) => {
      const trigger = c.querySelector<HTMLElement>(".trigger");
      if (!trigger) return;
      const handler = () => c.classList.toggle("open");
      trigger.addEventListener("click", handler);
      cleanupFns.push(() => trigger.removeEventListener("click", handler));
    });

    // ---- Eye toggles (data-eye) ----
    const eyes = root.querySelectorAll<HTMLElement>("[data-eye]");
    eyes.forEach((btn) => {
      const handler = () => {
        const pressed = btn.getAttribute("aria-pressed") === "true";
        btn.setAttribute("aria-pressed", String(!pressed));
      };
      btn.addEventListener("click", handler);
      cleanupFns.push(() => btn.removeEventListener("click", handler));
    });

    // ---- Password reveal ([data-pw] + [data-eye] in same root) ----
    const pws = root.querySelectorAll<HTMLElement>("[data-pw]");
    pws.forEach((input) => {
      const root2 = input.closest<HTMLElement>(".c-inp-password-reveal");
      if (!root2) return;
      const eyeBtn = root2.querySelector<HTMLElement>("[data-eye]");
      if (!eyeBtn) return;
      const toggle = () => {
        const isPw = input.getAttribute("type") === "password";
        input.setAttribute("type", isPw ? "text" : "password");
        root2.classList.toggle("is-visible", isPw);
      };
      eyeBtn.addEventListener("click", toggle);
      cleanupFns.push(() => eyeBtn.removeEventListener("click", toggle));
      // Strength meter
      const bar = root2.querySelector<HTMLElement>("[data-bar]");
      if (bar) {
        const upd = () => {
          const v = (input as HTMLInputElement).value;
          const score = Math.min(100, v.length * 8 + (/[A-Z]/.test(v) ? 20 : 0) + (/[0-9]/.test(v) ? 20 : 0));
          bar.style.width = `${score}%`;
        };
        input.addEventListener("input", upd);
        cleanupFns.push(() => input.removeEventListener("input", upd));
      }
    });

    // ---- Char counter (data-counter) ----
    const counters = root.querySelectorAll<HTMLTextAreaElement>("[data-counter]");
    counters.forEach((ta) => {
      const root2 = ta.closest<HTMLElement>(".c-inp-char-counter");
      if (!root2) return;
      const countEl = root2.querySelector<HTMLElement>("[data-count]");
      const upd = () => {
        const n = ta.value.length;
        const max = Number(ta.getAttribute("maxlength") || 120);
        if (countEl) countEl.textContent = String(n);
        root2.classList.toggle("near", n > max * 0.8);
      };
      ta.addEventListener("input", upd);
      cleanupFns.push(() => ta.removeEventListener("input", upd));
    });

    // ---- Search clear ----
    const searches = root.querySelectorAll<HTMLInputElement>("[data-search]");
    searches.forEach((input) => {
      const root2 = input.closest<HTMLElement>(".c-inp-search-clear");
      if (!root2) return;
      const clearBtn = root2.querySelector<HTMLElement>("[data-clear]");
      const upd = () => {
        root2.classList.toggle("has-value", input.value.length > 0);
      };
      input.addEventListener("input", upd);
      if (clearBtn) {
        const clear = () => {
          input.value = "";
          upd();
          input.focus();
        };
        clearBtn.addEventListener("click", clear);
        cleanupFns.push(() => clearBtn.removeEventListener("click", clear));
      }
      cleanupFns.push(() => input.removeEventListener("input", upd));
    });

    // ---- Tag input (data-tags) ----
    const tags = root.querySelectorAll<HTMLElement>("[data-tags]");
    tags.forEach((wrap) => {
      const input = wrap.querySelector<HTMLInputElement>("input");
      if (!input) return;
      const addTag = (text: string) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.innerHTML = `${text}<button aria-label="Remove" data-tag-rm>×</button>`;
        wrap.insertBefore(tag, input);
        const rm = tag.querySelector("button");
        rm?.addEventListener("click", () => tag.remove());
        cleanupFns.push(() => rm?.removeEventListener("click", () => tag.remove()));
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Enter" && input.value.trim()) {
          e.preventDefault();
          addTag(input.value.trim());
          input.value = "";
        }
      };
      input.addEventListener("keydown", onKey);
      cleanupFns.push(() => input.removeEventListener("keydown", onKey));
      // Wire existing remove buttons
      wrap.querySelectorAll<HTMLButtonElement>("[data-tag-rm]").forEach((b) => {
        const h = () => b.closest(".tag")?.remove();
        b.addEventListener("click", h);
        cleanupFns.push(() => b.removeEventListener("click", h));
      });
    });

    // ---- OTP cells (data-otp) ----
    const otps = root.querySelectorAll<HTMLElement>("[data-otp]");
    otps.forEach((wrap) => {
      const inputs = Array.from(wrap.querySelectorAll<HTMLInputElement>("input"));
      inputs.forEach((inp, i) => {
        const onIn = () => {
          if (inp.value && i < inputs.length - 1) inputs[i + 1].focus();
        };
        const onKey = (e: KeyboardEvent) => {
          if (e.key === "Backspace" && !inp.value && i > 0) inputs[i - 1].focus();
        };
        inp.addEventListener("input", onIn);
        inp.addEventListener("keydown", onKey);
        cleanupFns.push(() => {
          inp.removeEventListener("input", onIn);
          inp.removeEventListener("keydown", onKey);
        });
      });
    });

    // ---- Range slider (data-range) ----
    const ranges = root.querySelectorAll<HTMLInputElement>("[data-range]");
    ranges.forEach((inp) => {
      const root2 = inp.closest<HTMLElement>(".c-inp-range-slider");
      if (!root2) return;
      const val = root2.querySelector<HTMLElement>("[data-range-val]");
      const upd = () => {
        if (val) val.textContent = inp.value;
      };
      inp.addEventListener("input", upd);
      cleanupFns.push(() => inp.removeEventListener("input", upd));
    });

    // ---- Radio emboss (data-radio) — no JS needed, just CSS ----

    // ---- Toggle text (data-tt) ----
    const tts = root.querySelectorAll<HTMLElement>("[data-tt]");
    tts.forEach((btn) => {
      const lbl = btn.querySelector<HTMLElement>(".lbl");
      const handler = () => {
        const pressed = btn.getAttribute("aria-pressed") === "true";
        btn.setAttribute("aria-pressed", String(!pressed));
        if (lbl) lbl.textContent = pressed ? "OFF" : "ON";
      };
      btn.addEventListener("click", handler);
      cleanupFns.push(() => btn.removeEventListener("click", handler));
    });

    // ---- Dial rotate (data-dial) ----
    const dials = root.querySelectorAll<HTMLElement>("[data-dial]");
    dials.forEach((wrap) => {
      const dial = wrap.querySelector<HTMLElement>(".dial");
      const readout = wrap.querySelector<HTMLElement>(".readout");
      if (!dial) return;
      let angle = 0;
      const handler = () => {
        angle = (angle + 45) % 360;
        dial.style.transform = `rotate(${angle}deg)`;
        if (readout) readout.textContent = `${Math.round(angle / 45) + 1} / 8`;
      };
      dial.addEventListener("click", handler);
      cleanupFns.push(() => dial.removeEventListener("click", handler));
    });

    // ---- Scramble text (data-scramble) — simple JS scramble ----
    const scrambles = root.querySelectorAll<HTMLElement>("[data-scramble]");
    scrambles.forEach((el) => {
      const finalText = el.textContent || "";
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*";
      let raf: number | null = null;
      const start = () => {
        let iter = 0;
        const total = finalText.length * 6;
        const tick = () => {
          el.textContent = finalText
            .split("")
            .map((ch, i) =>
              i < iter / 6 ? finalText[i] : chars[Math.floor(Math.random() * chars.length)],
            )
            .join("");
          iter++;
          if (iter < total) raf = requestAnimationFrame(tick);
          else el.textContent = finalText;
        };
        tick();
      };
      el.addEventListener("mouseenter", start);
      cleanupFns.push(() => {
        el.removeEventListener("mouseenter", start);
        if (raf) cancelAnimationFrame(raf);
      });
    });

    // ---- Typewriter loader (data-typewriter) ----
    const typewriters = root.querySelectorAll<HTMLElement>("[data-typewriter]");
    typewriters.forEach((wrap) => {
      const text = wrap.querySelector<HTMLElement>(".text");
      if (!text) return;
      const phrases = ["loading…", "compiling…", "almost there…"];
      let pi = 0;
      let ci = 0;
      let deleting = false;
      let timer: ReturnType<typeof setTimeout>;
      const tick = () => {
        const cur = phrases[pi];
        if (!deleting) {
          ci++;
          text.textContent = cur.slice(0, ci);
          if (ci === cur.length) {
            deleting = true;
            timer = setTimeout(tick, 1200);
            return;
          }
        } else {
          ci--;
          text.textContent = cur.slice(0, ci);
          if (ci === 0) {
            deleting = false;
            pi = (pi + 1) % phrases.length;
          }
        }
        timer = setTimeout(tick, deleting ? 50 : 80);
      };
      timer = setTimeout(tick, 300);
      cleanupFns.push(() => clearTimeout(timer));
    });

    // ---- Rotator (data-words) ----
    const rotators = root.querySelectorAll<HTMLElement>("[data-words]");
    rotators.forEach((el) => {
      const words = (el.getAttribute("data-words") || "").split(",");
      let i = 0;
      const id = setInterval(() => {
        i = (i + 1) % words.length;
        el.textContent = words[i];
      }, 1800);
      cleanupFns.push(() => clearInterval(id));
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, [active, component.id]);

  return (
    <div
      ref={ref}
      className={`c-${component.id} flex min-h-[280px] w-full items-center justify-center p-8`}
      dangerouslySetInnerHTML={{ __html: component.html }}
    />
  );
}
