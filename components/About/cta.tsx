"use client";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#c9eae2] py-20 md:py-28">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] relative">
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-8">
          Good things start with a hello / Let’s collaborate
        </p>
        <Link
          href="/contact"
          className="group flex items-center justify-between gap-6"
        >
          <h2 className="text-[clamp(3.7rem,8.2vw,8.5rem)] leading-[.93] tracking-[-.075em] font-[650] max-[768px]:text-[clamp(3.5rem,12vw,6rem)]">
            Your next
            <br />
            big{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
              moment.
            </span>
          </h2>
          <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-teal text-white transition-transform duration-500 group-hover:rotate-45 md:h-36 md:w-36">
            <ArrowUpRight
              className="h-10 w-10 md:h-20 md:w-20"
              strokeWidth={1}
            />
          </span>
        </Link>
        <p className="mt-10 text-sm text-foreground/65">
          Bring the ambition. We’ll bring a fresh perspective.
        </p>
      </div>
    </section>
  );
}
