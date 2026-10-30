import { Reveal } from "@/components/ui/reveal";

export function PhilosophySection() {
  return (
    <section
      className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] grid gap-10 py-24 md:grid-cols-[1fr_2fr] md:py-32"
      aria-labelledby="philosophy-title"
    >
      <Reveal>
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase text-teal">
          06 / Our philosophy
        </p>
      </Reveal>
      <Reveal>
        <h2
          id="philosophy-title"
          className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]"
        >
          Great communication starts with{" "}
          <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
            being human.
          </span>
        </h2>
        <p className="mt-9 max-w-2xl text-base leading-8 text-muted">
          Behind every brand is a story. Behind every story, people. We believe
          the work that lasts is honest, useful, and generous enough to give its
          audience something back.
        </p>
        <div className="mt-10 border-l-2 border-orange pl-6">
          <p className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-3xl leading-snug">
            “Say something true. Say it beautifully. Make it matter.”
          </p>
        </div>
      </Reveal>
    </section>
  );
}
