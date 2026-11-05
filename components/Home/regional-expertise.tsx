import { Reveal } from "../ui/reveal";

const perspectives = [
  {
    label: "Local perspective",
    title: "A local lens.",
    emphasis: "A global outlook.",
    text: "Regional context shapes the story. We consider the audiences, communities, and conversations that make the UAE distinct.",
    background: "bg-[#e7eeea]",
  },
  {
    label: "Cultural understanding",
    title: "Culture",
    emphasis: "before copy.",
    text: "From Arabic and English messaging to the nuances between markets, meaningful communication starts with cultural understanding.",
    background: "bg-[#efe9df]",
  },
  {
    label: "Meaningful connections",
    title: "The right",
    emphasis: "conversation.",
    text: "Business media, digital creators, industry voices, and community platforms. A thoughtful mix helps each story find its audience.",
    background: "bg-[#eee7e8]",
  },
];

export function RegionalExpertise() {
  return (
    <section
      aria-labelledby="regional-expertise-title"
      className="mx-auto w-[min(1440px,calc(100%-112px))] py-20 max-[768px]:w-[calc(100%-40px)] md:py-28"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 xl:gap-24">
        <Reveal className="lg:sticky lg:top-32 lg:py-5">
          <p className="mb-7 font-mono text-[10px] leading-relaxed tracking-[.16em] text-teal uppercase">
            Made for this market
          </p>
          <h2
            id="regional-expertise-title"
            className="text-[clamp(2.6rem,4.5vw,4.8rem)] font-[550] leading-[1.05] tracking-[-.065em]"
          >
            Global stories.
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] font-normal text-teal italic">
              Regional relevance.
            </span>
          </h2>
          <p className="mt-7 max-w-[19rem] text-base leading-8 text-muted">
            Dubai moves fast. Your communications should move with purpose.
          </p>
          <div className="mt-10 max-w-[19rem] border-t border-teal/25 pt-5 lg:mt-16">
            <p className="font-[Georgia,'Times_New_Roman',serif] text-xl italic text-teal">
              Rooted in the region. Open to the world.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {perspectives.map(({ label, title, emphasis, text, background }) => (
            <Reveal key={label}>
              <article className={`${background} rounded-[3px] px-6 py-8 sm:px-9 sm:py-10 xl:px-11`}>
                <p className="mb-5 font-mono text-[9px] leading-relaxed tracking-[.14em] text-[#44615b] uppercase">
                  {label}
                </p>
                <h3 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-medium leading-[1.12] tracking-[-.045em]">
                  {title}{" "}
                  <span className="font-[Georgia,'Times_New_Roman',serif] font-normal text-[#285c56] italic">
                    {emphasis}
                  </span>
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#575b57]">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
