"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import type { CrustComponent } from "@/lib/crust/components";
import ComponentPreview from "./component-preview";
import CodeBlock from "./code-block";

const CATEGORY_COLORS: Record<string, string> = {
  Buttons: "var(--rust)",
  Inputs: "var(--moss)",
  Cards: "var(--ochre)",
  Loaders: "var(--clay)",
  Toggles: "var(--rust)",
  Tooltips: "var(--moss)",
  Toasts: "var(--ochre)",
  Progress: "var(--clay)",
  Navigation: "var(--rust)",
  Text: "var(--moss)",
  Backgrounds: "var(--ochre)",
  Badges: "var(--clay)",
};

export default function ComponentCard({
  component,
  index,
}: {
  component: CrustComponent;
  index: number;
}) {
  const [tab, setTab] = useState("preview");

  const accent = CATEGORY_COLORS[component.category] || "var(--rust)";

  return (
    <article
      className="group relative flex flex-col border-ink bg-bone"
      style={{ animationDelay: `${index * 24}ms` }}
    >
      {/* Header */}
      <header className="flex items-center justify-between gap-3 border-ink-b px-4 py-2.5">
        <div className="flex items-baseline gap-3 min-w-0">
          <span className="font-mono text-[11px] tracking-[0.08em] text-smoke tabular-nums">
            {component.number}
          </span>
          <h3 className="truncate font-display text-[19px] font-medium leading-tight tracking-tight text-ink">
            {component.title}
          </h3>
        </div>
        <span
          className="shrink-0 font-mono text-[10px] uppercase tracking-[0.1em]"
          style={{ color: accent }}
        >
          {component.category}
        </span>
      </header>

      {/* Description */}
      <p className="px-4 pt-2.5 pb-3 font-sans text-[12.5px] leading-[1.55] text-smoke">
        {component.description}
      </p>

      {/* Tabs */}
      <Tabs.Root
        value={tab}
        onValueChange={setTab}
        className="flex flex-1 flex-col"
      >
        <Tabs.List className="flex border-ink-b" aria-label="View">
          <Tabs.Trigger
            value="preview"
            className="flex-1 border-r-[1.5px] border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-smoke transition-colors hover:text-ink data-[state=active]:bg-ink data-[state=active]:text-paper"
          >
            Preview
          </Tabs.Trigger>
          <Tabs.Trigger
            value="code"
            className="flex-1 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-smoke transition-colors hover:text-ink data-[state=active]:bg-ink data-[state=active]:text-paper"
          >
            Code
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content
          value="preview"
          className="flex-1 bg-paper outline-none"
          tabIndex={-1}
        >
          <ComponentPreview component={component} active={tab === "preview"} />
        </Tabs.Content>

        <Tabs.Content
          value="code"
          className="outline-none"
          tabIndex={-1}
        >
          {/* Fixed-height code container — each panel scrolls internally
              so long CSS no longer stretches the card or the grid. */}
          <div className="flex flex-col" style={{ height: "380px" }}>
            <div style={{ height: "150px" }}>
              <CodeBlock
                code={component.html.trim()}
                lang="html"
                label="html"
              />
            </div>
            <div className="border-t-[1.5px] border-ink" style={{ height: "230px" }}>
              <CodeBlock
                code={component.css.trim()}
                lang="css"
                label="css"
              />
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>

      {/* Footer: dependencies */}
      {component.deps && component.deps.length > 0 ? (
        <footer className="flex flex-wrap items-center gap-1.5 border-ink-t px-4 py-2.5">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-smoke">
            Deps
          </span>
          {component.deps.map((d) => (
            <span
              key={d}
              className="border-ink bg-paper px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-ink"
            >
              {d}
            </span>
          ))}
        </footer>
      ) : (
        <footer className="border-ink-t px-4 py-2">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-smoke">
            No dependencies · pure CSS
          </span>
        </footer>
      )}
    </article>
  );
}
