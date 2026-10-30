import { Mic2, Newspaper, Radio, Sparkles } from "lucide-react";
import { Reveal } from "../ui/reveal";
import { ArrowText } from "../ui/arrow-text";

export function EditorialSection() {
  return (
    <section
      className="bg-[#19181b] py-20 text-white md:py-28"
      aria-labelledby="story-formats-title"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <Reveal className="mb-12 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 text-[#92dfd4]">
              How a message travels
            </p>
            <h2
              id="story-formats-title"
              className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]"
            >
              One clear idea.
              <br />
              <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-[#92dfd4]">
                Many ways to move it.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/60">
            We connect the right message with the right format, voice and
            audience. Every channel has a job to do in the bigger story.
          </p>
        </Reveal>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              icon: Newspaper,
              number: "01",
              title: "Earn the headline",
              text: "Give journalists a timely, useful angle backed by substance and a voice worth hearing.",
              label: "Media / Editorial",
              color: "bg-[#e6efeb] text-[#073f43]",
            },
            {
              icon: Mic2,
              number: "02",
              title: "Put people forward",
              text: "Turn founders and experts into trusted voices through strong points of view and thoughtful commentary.",
              label: "People / Perspective",
              color: "bg-[#f4d9c8] text-[#552f23]",
            },
            {
              icon: Radio,
              number: "03",
              title: "Keep it moving",
              text: "Carry the conversation into social, creator and community spaces with content made for each one.",
              label: "Culture / Conversation",
              color: "bg-[#d7d8ee] text-[#363354]",
            },
          ].map(({ icon: Icon, number, title, text, label, color }, i) => (
            <Reveal
              key={number}
              delay={i * 0.08}
              className={`${color} flex h-full min-h-80 flex-col p-7 md:p-8`}
            >
              <div className="flex items-start justify-between">
                <Icon size={35} strokeWidth={1.3} aria-hidden="true" />
                <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase">
                  {number} / 03
                </span>
              </div>
              <div className="mt-auto">
                <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-4 opacity-65">
                  {label}
                </p>
                <h3 className="text-3xl tracking-tight">{title}</h3>
                <p className="mt-4 text-sm leading-7 opacity-75">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-6">
          <p className="flex items-center gap-3 text-sm text-white/70">
            <Sparkles size={18} className="text-[#92dfd4]" aria-hidden="true" />
            The best coverage starts with a story people care about.
          </p>
          <ArrowText href="/contact">Let’s find yours</ArrowText>
        </Reveal>
      </div>
    </section>
  );
}
