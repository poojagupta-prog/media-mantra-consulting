import { ArrowDownRight, MapPin } from "lucide-react";
import { Reveal } from "../ui/reveal";
import ContactForm from "../common/contact-form";

export function ContactView() {
  return (
    <section className="relative overflow-hidden bg-[#e0efeb] py-16 md:py-24">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-10 text-teal">
            New beginnings / Start here
          </p>
          <h1 className="text-[clamp(3.7rem,8.2vw,8.5rem)] leading-[.93] tracking-[-.075em] font-[650] max-[768px]:text-[clamp(3.5rem,12vw,6rem)]">
            Hello,
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
              possibility.
            </span>
          </h1>
          <p className="mb-8 mt-8 max-w-sm text-sm leading-7 text-muted">
            An ambitious brief. A fresh challenge. A spark of an idea.
            Whatever’s on your mind, let’s turn it into something worth talking
            about.
          </p>
          <ArrowDownRight
            className="mb-12 hidden h-24 w-24 text-teal lg:block"
            strokeWidth={1}
          />
          <div className="max-w-sm border-t border-black/20 pt-7">
            <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-4">
              From Dubai, with perspective.
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              Dubai, United Arab Emirates
            </p>
            <p className="mt-7 text-xs leading-6 text-muted">
              This is a concept website. Try the enquiry experience — no
              information is sent or stored.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
