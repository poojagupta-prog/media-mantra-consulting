import { Heading } from "@/components/media/shared";
import { ScrollStatement } from "@/components/common/scroll-motion";

export function DubaiIdea() {
  return (
    <section id="the-idea" className="media-wrap media-section">
      <Heading label="01 / The idea" title="A city that" accent="does.">
        Introduced by His Highness Sheikh Mohammed bin Rashid Al Maktoum, Vice
        President and Prime Minister of the UAE and Ruler of Dubai, Dubai-it
        gives a name to the city’s philosophy: turn bold ideas into reality
        through action, excellence and speed.
      </Heading>
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[#073f43] px-[clamp(28px,6vw,88px)] py-[clamp(36px,6vw,82px)] text-[#f7f5f1]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-28 size-[clamp(280px,43vw,620px)] rounded-full border border-[#92dfd433]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 size-[clamp(200px,32vw,460px)] rounded-full border border-[#92dfd422]"
        />
        <div className="relative z-10 mb-[clamp(50px,8vw,120px)] flex items-center gap-4 font-mono text-[10px] tracking-[.14em] uppercase">
          <span className="size-2 rounded-full bg-[#92dfd4]" />
          The Dubai-it mindset
          <span className="ml-auto text-[#92dfd4]">01 / 03</span>
        </div>
        <div className="relative z-10 max-w-[1050px] text-[#f7f5f1] [&_p]:text-[clamp(2.7rem,6.4vw,7rem)] [&_p]:leading-[1.04] [&_p]:tracking-[-.065em]">
          <ScrollStatement>
            We say what we do, and we do what we say.
          </ScrollStatement>
        </div>
        <div className="relative z-10 mt-[clamp(54px,8vw,112px)] flex items-center justify-between gap-4 border-t border-white/25 pt-6 font-mono text-[10px] tracking-[.12em] uppercase">
          <span>Words into action</span>
          <span className="text-[#92dfd4]">Dubai-it ↗</span>
        </div>
      </div>
      <p className="mt-5 max-w-[760px] text-xs leading-[1.7] text-muted">
        The initiative is presented on the{" "}
        <a
          href="https://www.dubai-it.ae/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal underline underline-offset-[3px]"
        >
          official Dubai-it website ↗
        </a>
        . Media Mantra Consulting shares this spirit through its own work; this
        page does not claim an official role in the initiative.
      </p>
    </section>
  );
}
