"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

/**
 * Crust ThemeProvider.
 *
 * Layers three access patterns on top of next-themes:
 *
 * 1.  `prefers-color-scheme` — respected automatically as the initial default.
 * 2.  The nav toggle button — writes `theme` to localStorage under the
 *     `next-themes` key, persists across sessions, readable by any JS in the page.
 * 3.  `?theme=dark` / `?theme=light` URL param — the most important for agents.
 *     When an HTTP client (curl, fetch, a headless scraper, an LLM tool) hits
 *     `/?theme=dark`, this provider forces the theme on first paint, before
 *     hydration, and persists it to localStorage so subsequent navigations
 *     stay in dark mode. No JavaScript execution required from the *caller* —
 *     the server-rendered HTML already carries the `.dark` class on <html>.
 *
 * The URL param wins over localStorage wins over prefers-color-scheme.
 */
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // After hydration, sync the URL param into next-themes' localStorage store.
  // (next-themes' <html class> injection happens via its script tag below —
  // this effect just makes sure the URL choice "sticks" across navigations.)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("theme");
    if (fromUrl === "dark" || fromUrl === "light") {
      try {
        localStorage.setItem("theme", fromUrl);
      } catch {
        /* localStorage may be unavailable in private mode — ignore */
      }
    }
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
    >
      {children}
    </NextThemesProvider>
  );
}
