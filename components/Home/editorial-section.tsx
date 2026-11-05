import Link from "next/link";
import { Reveal } from "../ui/reveal";

const storyFormats = [
  {
    title: "Earn the",
    emphasis: "headline.",
    text: "Give journalists a timely, useful angle backed by substance and a voice worth hearing.",
    label: "Media relations",
    detail: "Stories worth telling. Coverage worth earning.",
    color: "text-[#b9ded2]",
  },
  {
    title: "Put people",
    emphasis: "forward.",
    text: "Turn founders and experts into trusted voices through strong points of view and thoughtful commentary.",
    label: "Thought leadership",
    detail: "A human voice. A lasting impression.",
    color: "text-[#efc4a9]",
  },
  {
    title: "Keep it",
    emphasis: "moving.",
    text: "Carry the conversation into social, creator and community spaces with content made for each one.",
    label: "Community engagement",
    detail: "Made for the moment. Built to travel.",
    color: "text-[#c9c3e4]",
  },
];

export function EditorialSection() {
  return (
    <section
      className="overflow-hidden bg-[#19181b] py-20 text-[#f5f1e9] md:py-28"
      aria-labelledby="story-formats-title"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <Reveal className="grid gap-8 pb-12 md:pb-16 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-7 font-mono text-[10px] leading-relaxed tracking-[.18em] text-[#b9ded2] uppercase">
              How a message travels
            </p>
            <h2
              id="story-formats-title"
              className="text-[clamp(2.6rem,5vw,5.1rem)] leading-[1.04] font-[550] tracking-[-.065em]"
            >
              One clear idea.
              <br />
              <span className="font-[Georgia,'Times_New_Roman',serif] font-normal text-[#b9ded2] italic">
                Many ways to move it.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#f5f1e9]/65 lg:mb-1 lg:justify-self-end">
            We connect the right message with the right format, voice and
            audience. Every channel has a job to do in the bigger story.
          </p>
        </Reveal>

        <div className="grid border-y border-[#f5f1e9]/20 md:grid-cols-3">
          {storyFormats.map(({ title, emphasis, text, label, detail, color }, i) => (
            <Reveal
              key={label}
              delay={i * 0.08}
              className="flex flex-col border-b border-[#f5f1e9]/15 py-9 last:border-b-0 md:border-r md:border-b-0 md:px-7 md:py-11 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-11 lg:py-14"
            >
              <p className={`font-mono text-[10px] leading-relaxed tracking-[.14em] uppercase ${color}`}>
                {label}
              </p>
              <h3 className="mt-8 text-[clamp(2rem,3.2vw,3.5rem)] leading-[1.08] font-medium tracking-[-.05em] md:mt-12">
                {title}
                <br />
                <span className={`font-[Georgia,'Times_New_Roman',serif] font-normal italic ${color}`}>
                  {emphasis}
                </span>
              </h3>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#f5f1e9]/65">
                {text}
              </p>
              <p className="mt-auto pt-9 text-xs leading-6 text-[#f5f1e9]/45 md:pt-12">
                {detail}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-md font-[Georgia,'Times_New_Roman',serif] text-xl leading-relaxed text-[#f5f1e9]/80 italic md:text-2xl">
            The best coverage starts with a story people care about.
          </p>
          <Link
            href="/contact"
            className="shrink-0 rounded-full border border-[#b9ded2]/50 px-7 py-3.5 text-sm font-medium text-[#b9ded2] transition-colors hover:border-[#b9ded2] hover:bg-[#b9ded2] hover:text-[#19181b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9ded2]"
          >
            Let’s find yours
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
