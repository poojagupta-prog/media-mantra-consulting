import { ArrowDownRight, MapPin } from "lucide-react";
import { Reveal } from "../ui/reveal";
import ContactForm from "../common/contact-form";
import { offices, contactEmails } from "../common/contact-details";

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
          <div className="border-t border-black/20 pt-6">
            <p className="mb-5 font-mono text-[10px] uppercase leading-relaxed tracking-[.13em] text-teal">
              Two offices. One connected team.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {offices.map((office) => (
                <section key={office.title} className="min-w-0">
                  <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <MapPin size={16} className="shrink-0 text-teal" aria-hidden="true" />
                    {office.title}
                  </h2>
                  <address className="space-y-3 text-xs leading-6 not-italic text-muted">
                    <p>{office.address}</p>
                    <a
                      href={`tel:${office.telephone}`}
                      className="inline-block font-medium text-teal hover:underline focus-visible:outline-offset-4"
                    >
                      {office.phone}
                    </a>
                    <div className="flex flex-col items-start gap-1">
                      {contactEmails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="max-w-full break-words text-teal hover:underline focus-visible:outline-offset-4"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </address>
                </section>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-muted">
              Share your brief using the enquiry form. Our team will get back
              to you using the contact details you provide.
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
