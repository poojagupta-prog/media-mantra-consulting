import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";

export default function NotFound() {
  return (
    <section className="overflow-hidden bg-[#c9eae2]">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] py-16 max-[768px]:w-[calc(100%-40px)] md:py-24">
        <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.13em] text-teal">
          <span className="h-2 w-2 rounded-full bg-orange" /> The journal / 404
        </p>

        <div className="grid gap-12 pt-14 md:pt-20 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-[650] leading-[.94] tracking-[-.075em]">
            This perspective
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">
              is off the page.
            </span>
          </h1>
          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-8">
              The article you’re looking for may have moved or no longer
              exists. There are plenty more ideas and stories to explore.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/blogs" className="group inline-flex items-center gap-8 rounded-full bg-teal py-2 pl-6 pr-2 text-xs font-medium text-white transition-colors hover:bg-[#005e63]">
                Explore the journal
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal">
                  <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:rotate-45" />
                </span>
              </Link>
              <Link href="/" className="inline-flex items-center gap-2 border-b border-teal/40 pb-2 text-xs font-semibold uppercase tracking-wider hover:text-teal">
                Back to home <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between gap-6 border-t border-teal/25 pt-6 md:mt-28">
          <span aria-hidden="true" className="text-[clamp(5rem,18vw,17rem)] font-[650] leading-[.7] tracking-[-.09em] text-teal/15">404</span>
          <div className="flex items-center gap-4 pb-1 font-mono text-[10px] uppercase tracking-[.12em] text-teal">
            <span>There’s always another story.</span>
            <Asterisk size={28} aria-hidden="true" className="shrink-0 text-orange" />
          </div>
        </div>
      </div>
    </section>
  );
}
