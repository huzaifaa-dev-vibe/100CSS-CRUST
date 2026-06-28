"use client";

import { useEffect, useRef } from "react";

export default function Marquee({
  items,
  speed = 60,
}: {
  items: string[];
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let x = 0;
    let last = performance.now();
    const pxPerSec = speed;
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      x -= pxPerSec * dt;
      const half = track.scrollWidth / 2;
      if (-x >= half) x += half;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <div className="relative w-full overflow-hidden border-ink-b border-ink-t bg-bone py-4">
      <div ref={trackRef} className="flex w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 font-display text-[42px] font-medium leading-none tracking-tight text-ink md:text-[64px]"
          >
            {item}
            <span className="text-rust" aria-hidden="true">
              ✶
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
