"use client";

import { useState } from "react";
import { articles } from "./newsroom-data";
import { ArticleCard } from "./article-card";

const filters = [
  "All stories",
  "Company news",
  "Partnerships",
  "People & perspectives",
] as const;

export function CoverageSection() {
  const [active, setActive] = useState<string>("All stories");
  const visible = articles.filter(
    (article) => active === "All stories" || article.category === active,
  );
  return (
    <section id="coverage" className="scroll-mt-8 py-20 md:py-28">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[.13em] text-teal">
              The press edit / Across the media
            </p>
            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-[550] leading-none tracking-[-.065em]">
              Making{" "}
              <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">
                headlines.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-muted">
            Company milestones, new collaborations and conversations with the
            people behind Media Mantra.
          </p>
        </div>
        <div className="mb-12 mt-10 flex flex-wrap items-center justify-between gap-5 border-y border-black/15 py-5">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter news coverage"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
                className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-colors ${active === filter ? "border-teal bg-teal text-white" : "border-black/15 hover:border-teal hover:text-teal"}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <p
            aria-live="polite"
            aria-atomic="true"
            className="font-mono text-[10px] uppercase tracking-wider text-muted"
          >
            {String(visible.length).padStart(2, "0")} stories
          </p>
        </div>
        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((article) => (
            <ArticleCard key={article.href} article={article} />
          ))}
        </div>
        <p className="mt-12 border-t border-black/15 pt-5 text-xs leading-6 text-muted">
          Headlines and photography from our press coverage. Articles open on
          the original publisher’s website in a new tab.
        </p>
      </div>
    </section>
  );
}
