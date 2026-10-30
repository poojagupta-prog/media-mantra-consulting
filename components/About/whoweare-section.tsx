import { Reveal } from "@/components/ui/reveal";

export function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] grid gap-10 py-24 md:grid-cols-[1fr_2fr] md:py-32"
    >
      <Reveal>
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase text-teal">
          01 / Who we are
        </p>
        <div className="mt-8 hidden h-px w-24 bg-teal/40 md:block" />
      </Reveal>
      <Reveal>
        <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
          A little curious.
          <br />A lot{" "}
          <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
            committed.
          </span>
        </h2>
        <div className="mt-10 grid gap-8 text-base leading-8 text-muted md:grid-cols-2">
          <p>
            Media Mantra Consulting is a meeting place for strategists,
            storytellers, and creative thinkers. Based in Dubai, we help
            ambitious brands find the ideas that feel unmistakably their own.
          </p>
          <p>
            We combine a close understanding of the region with an
            outward-looking perspective. Our work is thoughtful, energetic, and
            always grounded in the people on the other side of the message.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
