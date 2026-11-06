import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";


export function IntroductionSection() {
  return (
    <section
      id="intro"
      className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] py-22 md:py-32"
    >
      <Reveal className="grid gap-10 md:grid-cols-[1fr_2.5fr]">
        <div>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase text-teal">
            This is Media Mantra Consulting
          </p>
          <div className="mt-8 border-l-2 border-teal/30 pl-5">
            <p className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-3xl text-teal">
              Built on insight.
              <br />
              Made for impact.
            </p>
            <p className="mt-4 max-w-52 text-xs leading-6 text-muted">
              Independent thinking. Local understanding. A story that’s
              unmistakably yours.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
            Attention is fleeting.
            <br />
            Let’s build something
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
              that stays.
            </span>
          </h2>
          <div className="mt-9 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-4 text-teal">
                A partner in your ambition
              </h3>
              <p className="text-base leading-8 text-muted">
                We’re a Dubai-focused PR consultancy for ambitious brands. Part
                strategic thinkers. Part cultural explorers. Entirely obsessed
                with making your story matter.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-4 text-teal">
                From clarity to conversation
              </h3>
              <p className="mb-6 text-base leading-8 text-muted">
                From the first spark to the next big headline, we bring the
                clarity, creativity, and connections to move you forward.
              </p>
              <ArrowText href="/about">
                Meet the minds behind the mantra
              </ArrowText>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
