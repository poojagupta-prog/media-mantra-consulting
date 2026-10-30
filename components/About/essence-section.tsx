import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function EssenceSection() {
  return (
    <section
      className="overflow-hidden bg-orange py-24 md:py-32"
      aria-labelledby="essence-title"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <Reveal>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-8">
            05 / Our essence
          </p>
          <h2
            id="essence-title"
            className="text-[clamp(3.7rem,8.2vw,8.5rem)] leading-[.93] tracking-[-.075em] font-[650] max-[768px]:text-[clamp(3.5rem,12vw,6rem)] max-w-6xl"
          >
            Heart in the work.
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
              Fire in the ideas.
            </span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 border-t border-foreground/25 pt-8 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <Sparkles className="h-12 w-12" strokeWidth={1} />
            <p className="mt-6 max-w-sm text-lg leading-8">
              We bring empathy, optimism, and a healthy dose of fearless
              thinking to every conversation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-sm leading-7">
              Our essence is the energy between different minds working toward
              the same idea. We make space for every voice, stay open to the
              unexpected, and care as much about the journey as the result.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
