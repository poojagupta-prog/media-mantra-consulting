import { ArrowDown, Asterisk } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/common/scroll-motion";
import { ScrollToSection } from "@/components/ui/scroll-to-section";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#c9eae2] pt-16 md:pt-22">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] relative z-10">
        <Reveal>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-9 flex items-center gap-3 text-teal">
            <span className="h-2 w-2 rounded-full bg-orange" /> About Media
            Mantra Consulting / Dubai
          </p>
          <h1 className="text-[clamp(3.7rem,8.2vw,8.5rem)] leading-[.93] tracking-[-.075em] font-[650] max-[768px]:text-[clamp(3.5rem,12vw,6rem)] max-w-6xl">
            People first.
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
              Possibility always.
            </span>
          </h1>
        </Reveal>
        <div className="mt-12 grid items-end gap-8 md:grid-cols-[.75fr_1.25fr] md:gap-12">
          <Reveal className="pb-12 md:pb-16">
            <Asterisk
              aria-hidden="true"
              className="motion-safe:animate-[spin_20s_linear_infinite] mb-8 h-16 w-16 text-orange md:h-24 md:w-24"
              strokeWidth={1.2}
            />
            <p className="max-w-sm text-lg leading-8">
              We are a creative communications consultancy built around one
              simple belief: a good story can change what happens next.
            </p>
            <ScrollToSection
              targetId="who-we-are"
              className="mt-9 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-xs font-semibold uppercase tracking-wider"
            >
              Get to know us <ArrowDown size={16} />
            </ScrollToSection>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
              alt="Creative team collaborating around a table"
              className="h-80 md:h-115"
            />
            <span className="absolute -bottom-5 right-4 rotate-[-5deg] bg-orange px-5 py-4 text-sm font-semibold shadow-[6px_6px_0_#19181b] md:right-8">
              Different minds. One big energy. ✳
            </span>
          </Reveal>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-4 h-80 w-80 rounded-full border border-teal/20 md:h-150 md:w-150"
      />
    </section>
  );
}
