import { Reveal } from "@/components/ui/reveal";

import { principles } from "./about-data";

export function ApproachSection() {
  return (
    <section
      className="bg-[#e4efeb] py-24 md:py-32"
      aria-labelledby="approach-title"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-7 text-teal">
            04 / Our approach
          </p>
          <h2
            id="approach-title"
            className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]"
          >
            We start with{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
              why.
            </span>
            <br />
            Then make it{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
              wow.
            </span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-muted">
            The most effective communication comes from a clear understanding of
            the challenge, a brave idea, and the craft to bring it to life.
          </p>
        </Reveal>
        <div>
          {principles.map((item) => (
            <Reveal
              key={item.number}
              className="grid gap-4 border-t border-foreground/20 py-7 sm:grid-cols-[60px_1fr]"
            >
              <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase pt-2 text-teal">
                {item.number}
              </span>
              <div>
                <h3 className="text-3xl tracking-[-.05em]">{item.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
