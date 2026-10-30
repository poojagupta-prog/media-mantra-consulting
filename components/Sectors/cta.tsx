import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const container =
  "mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]";

export function CTA() {
  return (
    <section className="overflow-hidden bg-foreground/80 py-20 text-white md:py-28">
      <div
        className={`${container} flex flex-wrap items-end justify-between gap-10`}
      >
        <div>
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[.13em] text-[#92dfd4]">
            Your world. Our next conversation.
          </p>
          <h2 className="text-[clamp(3.2rem,7vw,7rem)] font-[600] leading-[.98] tracking-[-.07em]">
            Different sector?
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-[#92dfd4]">
              Same curiosity.
            </span>
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-7 text-white/70">
            Great stories don’t fit into boxes. Tell us about your business,
            your ambitions and what you want to change.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-6 rounded-full bg-[#c9eae2] py-3 pl-6 pr-3 text-sm font-medium text-foreground transition-colors hover:bg-white"
        >
          Start a conversation{" "}
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white">
            <ArrowUpRight size={22} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}
