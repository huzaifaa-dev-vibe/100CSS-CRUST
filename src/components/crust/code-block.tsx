"use client";

import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  lang?: string;
  label?: string;
}

export default function CodeBlock({ code, lang = "html", label }: CodeBlockProps) {
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { codeToHtml } = await import("shiki");
        const out = await codeToHtml(code, {
          lang,
          theme: "github-dark",
        });
        if (mounted) setHtml(out);
      } catch {
        if (mounted) {
          // Fallback: plain pre with mono font
          setHtml(`<pre class="shiki-fallback"><code>${escapeHtml(code)}</code></pre>`);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [code, lang]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="relative h-full">
      <button
        type="button"
        onClick={copy}
        aria-label="Copy code"
        className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 border-ink bg-paper px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-rust hover:text-paper"
      >
        {copied ? <Check size={12} /> : <Copy size={12} />}
        {copied ? "copied" : "copy"}
      </button>
      {label && (
        <div className="absolute top-2.5 left-3 z-10 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/60">
          {label}
        </div>
      )}
      <div
        className="h-full overflow-auto bg-ink text-paper"
        style={{ padding: "44px 18px 18px" }}
      >
        {html ? (
          <div
            className="shiki-crust [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 [&_code]:!font-mono [&_code]:!text-[12.5px] [&_code]:!leading-[1.65]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="font-mono text-[12.5px] leading-[1.65] whitespace-pre">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
