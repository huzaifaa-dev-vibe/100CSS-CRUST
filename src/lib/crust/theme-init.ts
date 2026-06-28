/**
 * Inline pre-hydration script.
 * Runs synchronously in <head> before React mounts, so the very first
 * paint already has the correct `.dark` class on <html>.
 *
 * Priority: ?theme= URL param > localStorage("theme") > prefers-color-scheme.
 *
 * This is what makes Crust's dark mode accessible to non-JS agents:
 * a curl/scraping agent that hits `/?theme=dark` gets server-rendered HTML
 * with `<html class="dark">` on the first byte — no client JS needed.
 */
export const themeInitScript = `
(function() {
  try {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get('theme');
    var stored = localStorage.getItem('theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = fromUrl || stored || (systemDark ? 'dark' : 'light');
    var root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.colorScheme = theme;
    // Persist URL choice so it sticks across navigations
    if (fromUrl === 'dark' || fromUrl === 'light') {
      localStorage.setItem('theme', fromUrl);
    }
  } catch (e) {
    // localStorage may be blocked (private mode, sandboxed iframe) — fall back to system
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemDark) document.documentElement.classList.add('dark');
  }
})();
`;
