import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";
import { caseStudies } from "../common/data";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-title"
      className="bg-[#19181b] py-20 text-white md:py-24"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-7">
          <div>
            <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 text-[#92dfd4]">
              Stories in action
            </p>
            <h2
              id="case-studies-title"
              className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]"
            >
              Big ideas.
              <br />
              <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-[#92dfd4]">
                Lasting impressions.
              </span>
            </h2>
          </div>
          <ArrowText href="/case-studies">View all case studies</ArrowText>
        </Reveal>
        <div className="grid gap-7 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Reveal key={study.brand} className="h-full">
              <Link
                href="/case-studies"
                aria-label={`Read the ${study.brand.toLowerCase()} case study`}
                className={`group flex h-full flex-col overflow-hidden rounded-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92dfd4] ${study.color}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  >
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-3 text-muted">
                    {study.category}
                  </p>
                  <p className="mb-4 text-xs font-semibold">{study.brand}</p>
                  <h3 className="text-2xl leading-tight tracking-[-.045em]">
                    {study.title}
                  </h3>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-[#075c5e]">
                    Read case study{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
