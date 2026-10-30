import { Newspaper } from "lucide-react";
import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";
import { photos } from "../common/data";

export function PressRoomSection() {
  return (
    <section
      className="bg-[#f5f1e9] py-20 md:py-28"
      aria-labelledby="press-room-title"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 text-teal">
            Inside the press room / 01
          </p>
          <h2
            id="press-room-title"
            className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]"
          >
            The story is
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
              the strategy.
            </span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-muted">
            A memorable headline starts long before a pitch. We find the human
            angle in your business, shape it for the moment, and put it in front
            of the people who can move the conversation.
          </p>
          <div
            className="mt-9 flex flex-wrap gap-2"
            aria-label="Related services"
          >
            {[
              "Media Relations",
              "Public Relations",
              "Strategic Content Planning",
              "Brand Elevation",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-teal/25 px-4 py-2 text-xs text-teal"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <ArrowText href="/services/public-relations">
              Explore public relations
            </ArrowText>
          </div>
        </Reveal>
        <Reveal
          delay={0.12}
          className="relative mx-auto w-full max-w-2xl pb-9 pt-7 md:px-8"
        >
          <div
            className="absolute left-0 top-0 h-24 w-24 rounded-full bg-[#e96540] md:h-32 md:w-32"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-[#a5d9cb] md:h-44 md:w-44"
            aria-hidden="true"
          />
          <div className="relative rotate-[-2deg] border border-black/10 bg-white p-5 shadow-[12px_18px_0_0_#d9e5df] md:p-8">
            <div className="flex items-center justify-between border-b-2 border-black pb-3 text-[10px] font-semibold uppercase tracking-[.24em]">
              <span>The story desk</span>
              <span>Dubai / UAE</span>
            </div>
            <div className="grid gap-6 pt-6 sm:grid-cols-[1.1fr_.9fr]">
              <div>
                <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-4 text-[#c55937]">
                  The angle / 001
                </p>
                <p className="font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl">
                  Ideas become news when they mean something.
                </p>
                <p className="mt-5 text-xs leading-6 text-muted">
                  Insight-led narratives, credible voices and a sharp sense of
                  timing. That is how a story earns its place in the
                  conversation.
                </p>
              </div>
              <div className="relative min-h-55 overflow-hidden">
                <img
                  src={photos.city}
                  alt="Dubai skyline, the setting for regional brand stories"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#073f43] p-3 text-[10px] uppercase tracking-widest text-white">
                  On the ground / In the conversation ↗
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-black/20 pt-4 text-[10px] uppercase tracking-widest">
              <span>Perspective · Relevance · Reach</span>
              <Newspaper size={20} strokeWidth={1.5} aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
