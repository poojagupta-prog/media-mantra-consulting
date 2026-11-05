import { FAQ } from "../common/faq";
import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";

const faqData = [
  {
    id: 1,
    question: "What does a partnership look like?",
    answer:
      "We start by listening. Together, we define your objectives, develop an approach, and agree on a scope that fits your ambitions.",
  },
  {
    id: 2,
    question: "Can you support a one-off launch?",
    answer:
      "Our illustrative services include focused launch campaigns as well as ongoing communications partnerships.",
  },
  {
    id: 3,
    question: "How do we get started?",
    answer:
      "Tell us about your brand using the contact form. Share your goals and the support you’re looking for, and our team will get back to you.",
  },
  {
    id: 4,
    question: "What makes you different?",
    answer:
      "We combine strategic thinking with creative execution to deliver impactful solutions that drive real results.",
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
          <ArrowText href="/contact">Have something else in mind?</ArrowText>
        </div>
      </Reveal>
      <FAQ data={faqData} />
    </section>
  );
}
