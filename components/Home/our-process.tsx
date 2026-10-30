import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";

export function OurProcess() {
  return (
    <section
      id="our-process"
      className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] grid items-start gap-14 py-24 md:grid-cols-[1fr_1.1fr] md:py-32"
    >
      <div className="md:sticky md:top-16">
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 text-teal">
          From intent to impact
        </p>
        <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
          Good stories
          <br />
          don’t happen
          <br />
          <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
            by accident.
          </span>
        </h2>
        <p className="mb-8 mt-7 max-w-sm text-sm leading-7 text-muted">
          A clear process. An open conversation. A shared ambition to make every
          move mean something.
        </p>
        <ArrowText href="/services">Explore our capabilities</ArrowText>
      </div>
      <div>
        {[
          [
            "01",
            "Listen to the landscape.",
            "We start with your business, your audience, and the conversations around you. Insight gives the story its direction.",
          ],
          [
            "02",
            "Find your distinctive voice.",
            "We define the narrative, messages, and creative angle that connect your ambition with what people care about.",
          ],
          [
            "03",
            "Bring the story to life.",
            "We connect media, content, creators, and experiences in a coordinated communications plan.",
          ],
          [
            "04",
            "Learn. Refine. Keep moving.",
            "We review message quality, audience response, and agreed outcomes to understand what resonated and what comes next.",
          ],
        ].map(([n, title, text]) => (
          <Reveal key={n} className="border-t border-black/20 py-10 md:py-14">
            <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase text-teal">
              {n} /
            </span>
            <h3 className="mt-5 text-3xl tracking-[-.04em]">{title}</h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
