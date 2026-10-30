import { Reveal } from "@/components/ui/reveal";

export function VisionSection() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#19181b] py-24 text-white md:py-32"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] relative z-10">
        <Reveal>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-10 text-[#92dfd4]">
            02 / Our visions and goals
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550] max-w-5xl">
            We want the world to{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-[#92dfd4]">
              feel something
            </span>{" "}
            when a brand speaks.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal className="border border-white/20 p-8 md:p-12">
            <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase text-[#92dfd4]">
              The vision / What we see
            </span>
            <h3 className="mt-8 text-3xl tracking-[-.05em] md:text-4xl">
              More meaningful connections.
            </h3>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              A world where brands contribute to culture instead of interrupting
              it, and where every story creates a reason to care.
            </p>
          </Reveal>
          <Reveal
            delay={0.12}
            className="border border-white/20 bg-[#263c3b] p-8 md:p-12"
          >
            <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase text-[#92dfd4]">
              The goal / What we do
            </span>
            <h3 className="mt-8 text-3xl tracking-[-.05em] md:text-4xl">
              Ideas that move people.
            </h3>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Turn business ambition into clear narratives, memorable
              experiences, and lasting relationships that grow beyond a single
              moment.
            </p>
          </Reveal>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 text-[25rem] leading-none text-white/[.03]"
      >
        ✳
      </span>
    </section>
  );
}
