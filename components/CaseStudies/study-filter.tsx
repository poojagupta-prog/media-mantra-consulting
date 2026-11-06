"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioSectors, portfolioStudies } from "./case-studies-data";
import { StudyCard } from "./study-card";

export function StudyFilter() {
  const [active, setActive] = useState("All Case Studies");
  const visible = active === "All Case Studies" ? portfolioStudies : portfolioStudies.filter((study) => study.sector === active);
  return (
    <section id="work" className="scroll-mt-10 py-20 md:py-28" aria-labelledby="work-title">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-black/15 pb-7">
          <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.14em] text-teal">The collection</p><h2 id="work-title" className="text-[clamp(2.3rem,4vw,4rem)] leading-none tracking-[-.055em]">Explore the work<span className="text-orange">.</span></h2></div>
          <p aria-live="polite" className="font-mono text-[11px] uppercase tracking-[.1em] text-muted">{visible.length} {visible.length === 1 ? "story" : "stories"}</p>
        </div>
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter case studies by sector">
          {["All Case Studies", ...portfolioSectors].map((sector) => <button key={sector} type="button" onClick={() => setActive(sector)} aria-pressed={active === sector} className={`rounded-full border px-4 py-2.5 text-xs transition-colors ${active === sector ? "border-foreground bg-foreground text-white" : "border-black/15 text-foreground hover:border-teal hover:text-teal"}`}>{sector}</button>)}
        </div>
        {visible.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{visible.map((study, index) => <StudyCard key={study.slug} study={study} index={index} />)}</div> : <div className="rounded-[3px] border border-black/10 bg-[#e7f0eb] px-7 py-14 md:px-12"><span className="font-mono text-[10px] uppercase tracking-[.14em] text-teal">More stories to come</span><h3 className="mt-4 text-3xl tracking-[-.045em]">No case studies in {active} yet.</h3><p className="mt-3 max-w-xl text-sm leading-6 text-muted">Explore all concept examples or discover how we approach this sector.</p><div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-teal"><button type="button" onClick={() => setActive("All Case Studies")} className="underline underline-offset-4">View all case studies</button><Link href="/sectors" className="inline-flex items-center gap-1 underline underline-offset-4">Explore sectors <ArrowUpRight size={15} /></Link></div></div>}
      </div>
    </section>
  );
}
