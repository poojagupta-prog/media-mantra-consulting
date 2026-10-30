import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ScrollStatement } from "@/components/common/scroll-motion";

import { mantras } from "./about-data";

export function MantrasSection() {
  return (
    <section id="mantras" className="bg-[#19181b] py-24 text-white md:py-32">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <Reveal>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-7 text-[#92dfd4]">
            07 / The things we live by
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550] mb-14">
            Our{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-[#92dfd4]">
              Mantras.
            </span>
          </h2>
        </Reveal>
        <ScrollStatement>
          Think boldly. Listen closely. Create with purpose.
        </ScrollStatement>
        <div className="mt-16">
          {mantras.map((item) => (
            <Reveal
              key={item.number}
              className="grid gap-5 border-t border-white/20 py-9 md:grid-cols-[80px_1fr_1fr]"
            >
              <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase pt-2 text-[#92dfd4]">
                {item.number}
              </span>
              <h3 className="text-4xl tracking-[-.05em] md:text-5xl">
                {item.title}
              </h3>
              <p className="max-w-sm text-sm leading-7 text-white/60">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 border-b border-[#92dfd4] pb-2 text-sm text-[#92dfd4]"
          >
            Have a story in mind? Let’s talk{" "}
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
