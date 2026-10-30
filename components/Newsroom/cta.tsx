import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#c9eae2] py-16 md:py-24">
      <div className="mx-auto flex w-[min(1440px,calc(100%-112px))] flex-wrap items-end justify-between gap-9 max-[768px]:w-[calc(100%-40px)]">
        <div><p className="mb-6 font-mono text-[10px] uppercase tracking-[.13em] text-teal">For the media / Let’s connect</p><h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-[550] leading-none tracking-[-.065em]">Working on <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">a story?</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-muted">Get in touch for media enquiries, interviews and more about Media Mantra Consulting.</p></div>
        <Link href="/contact" className="inline-flex items-center gap-5 rounded-full bg-foreground py-3 pl-6 pr-3 text-sm font-medium text-white transition-colors hover:bg-teal">Contact our team <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground"><ArrowUpRight size={20} aria-hidden="true" /></span></Link>
      </div>
    </section>
  );
}
