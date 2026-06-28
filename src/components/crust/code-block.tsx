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

  const langLabel = label || lang;

  return (
    <div className="relative flex h-full flex-col bg-ink">
      {/* Header bar — label on left, copy button on right.
          Sticky at top so it stays visible while scrolling code. */}
      <div className="flex items-center justify-between border-b-[1.5px] border-ink bg-ink px-3 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/50">
          {langLabel}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${langLabel} code`}
          className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
            copied
              ? "border-moss bg-moss text-paper"
              : "border-paper/30 bg-transparent text-paper/70 hover:border-rust hover:bg-rust hover:text-paper"
          }`}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? "copied" : `copy ${langLabel}`}
        </button>
      </div>

      {/* Scrollable code area — fills remaining height, scrolls vertically. */}
      <div className="flex-1 overflow-auto bg-ink" style={{ padding: "12px 16px" }}>
        {html ? (
          <div
            className="shiki-crust [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 [&_code]:!font-mono [&_code]:!text-[12px] [&_code]:!leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="font-mono text-[12px] leading-[1.6] whitespace-pre text-paper">
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
