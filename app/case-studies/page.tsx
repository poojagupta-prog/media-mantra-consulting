import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { StudyFilter } from "@/components/CaseStudies/study-filter";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore sector-led PR and communications concepts from Media Mantra Consulting. Featured stories are illustrative examples.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#19181b] py-16 text-white md:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-36 size-[400px] rounded-full border border-white/10 md:size-[650px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-5 -top-16 size-[300px] rounded-full border border-white/10 md:size-[520px]"
        />
        <div className="relative mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
          <nav
            aria-label="Breadcrumb"
            className="mb-20 font-mono text-[10px] uppercase tracking-[.14em] text-white/60"
          >
            <Link href="/" className="hover:text-[#92dfd4]">
              Home
            </Link>
            <span className="mx-3">/</span>
            <span aria-current="page" className="text-white">
              Case studies
            </span>
          </nav>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[.16em] text-[#92dfd4]">
            Stories in action / Portfolio
          </p>
          <h1 className="max-w-[11ch] text-[clamp(3.5rem,8vw,8rem)] font-[550] leading-[.95] tracking-[-.07em]">
            Ideas that{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-[#92dfd4]">
              move
            </span>{" "}
            people.
          </h1>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-white/20 pt-7">
            <p className="max-w-[560px] text-sm leading-7 text-white/70 md:text-base">
              Explore the thinking behind stories across the sectors we serve.
              The examples currently shown are illustrative concepts, not
              verified client campaigns.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[.08em] text-[#92dfd4]"
            >
              Explore stories <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <StudyFilter />
      <section className="bg-[#dcece5] py-16 md:py-24">
        <div className="mx-auto flex w-[min(1440px,calc(100%-112px))] flex-wrap items-end justify-between gap-8 max-[768px]:w-[calc(100%-40px)]">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[.14em] text-teal">
              Your story starts here
            </p>
            <h2 className="max-w-[16ch] text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] tracking-[-.06em]">
              Let’s create something worth talking about.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm text-white transition-colors hover:bg-teal"
          >
            Start a conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
