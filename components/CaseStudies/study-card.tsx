import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioStudy } from "./case-studies-data";

export function StudyCard({ study, index = 0 }: { study: PortfolioStudy; index?: number }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[3px] bg-white text-foreground shadow-[0_12px_40px_rgba(25,24,27,.04)] transition-transform duration-500 motion-safe:hover:-translate-y-1 focus-visible:outline-teal" aria-label={`Explore concept case study: ${study.title}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e0efec]">
        <Image src={study.image} alt={study.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw" loading={index === 0 ? "eager" : "lazy"} className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04]" />
        <span className="absolute left-5 top-5 rounded-full bg-background/95 px-3 py-2 font-mono text-[10px] uppercase tracking-[.12em]">Concept example</span>
        <span className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-[#92dfd4]"><ArrowUpRight size={20} aria-hidden="true" /></span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[.14em] text-teal">{study.sector}</p>
        <h3 className="max-w-[20ch] text-[clamp(1.5rem,2.1vw,2rem)] leading-[1.12] tracking-[-.045em]">{study.title}</h3>
        <p className="mt-4 text-sm leading-6 text-muted">{study.description}</p>
        <span className="mt-auto flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[.06em] text-teal">Explore the story <ArrowUpRight size={16} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}
