import { FAQ } from "../common/faq";
import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";

export const faqData = [
  {
    id: 1,
    question: "What does a PR agency in Dubai do?",
    answer:
      "A PR agency in Dubai manages how your brand is seen by the media, customers and investors. That includes media relations, press releases, thought leadership, events, crisis communication and reputation management.",
  },
  {
    id: 2,
    question: "How much does a PR agency in the UAE cost?",
    answer:
      "It depends on scope, sector and duration. Most agencies work on monthly retainers, with separate pricing for events or one-off campaigns. We share a clear proposal once we understand your goals.",
  },
  {
    id: 3,
    question: "How do I choose the right PR company in Dubai?",
    answer:
      "Look for sector experience, real media relationships, transparent reporting and results you can verify. Ask to see case studies and how coverage connects to business outcomes.",
  },
  {
    id: 4,
    question: "How long does PR take to show results?",
    answer:
      "Early coverage can come within weeks. Trust and authority usually build over three to six months of consistent work.",
  },
  {
    id: 5,
    question: "Can you support both local and international brands?",
    answer:
      "Yes. We help UAE brands go global and international brands enter the Middle East, backed by our offices in India, Singapore and Australia.",
  },
  {
    id: 6,
    question: "Do you handle crisis communication and online reputation?",
    answer:
      "Yes. We build proactive reputation strategies and respond fast when issues arise.",
  },
];

export function HomeFAQ() {
  return (
    <section className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] grid gap-12 py-24 md:grid-cols-2">
      <Reveal>
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 text-teal">
          Before we say hello
        </p>
        <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
          A few good
          <br />
          <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
            questions.
          </span>
        </h2>
        <div className="mt-8">
          <ArrowText href="/contact-us">Have something else in mind?</ArrowText>
        </div>
      </Reveal>
      <FAQ data={faqData} />
    </section>
  );
}
