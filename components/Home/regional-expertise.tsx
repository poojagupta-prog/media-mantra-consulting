import { Globe2, Languages, Radio } from "lucide-react";
import { Reveal } from "../ui/reveal";
import { Stagger } from "../common/scroll-motion";

export function RegionalExpertise() {
  const items = [
    {
      icon: Globe2,
      title: "A local lens. A global outlook.",
      text: "Regional context shapes the story. We consider the audiences, communities, and conversations that make the UAE distinct.",
      color: "text-teal",
      number: "01",
    },
    {
      icon: Languages,
      title: "Culture before copy.",
      text: "From Arabic and English messaging to the nuances between markets, meaningful communication starts with cultural understanding.",
      color: "text-pink",
      number: "02",
    },
    {
      icon: Radio,
      title: "The right conversation.",
      text: "Business media, digital creators, industry voices, and community platforms. A thoughtful mix helps each story find its audience.",
      color: "text-[#b64b24]",
      number: "03",
    },
  ];
  return (
    <section className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] py-22 md:py-28">
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 text-teal">
            Made for this market
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
            Global stories.
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
              Regional relevance.
            </span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-7 text-muted">
          Dubai moves fast. Your communications should move with purpose.
        </p>
      </Reveal>
      <Stagger className="grid gap-8 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text, color, number }) => (
          <article
            key={number}
            className="h-full border-t border-black/20 pt-7"
          >
            <div className="mb-9 flex items-center justify-between">
              <Icon className={color} size={32} strokeWidth={1.3} />
              <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase text-muted">
                {number}
              </span>
            </div>
            <h3 className="max-w-xs text-2xl leading-tight tracking-tight">
              {title}
            </h3>
            <p className="mt-5 text-sm leading-7 text-muted">{text}</p>
          </article>
        ))}
      </Stagger>
    </section>
  );
}
