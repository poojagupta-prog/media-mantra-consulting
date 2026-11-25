"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Blog } from "@/lib/blogs/types";

export function BlogFaq({ faqs }: { faqs: NonNullable<Blog["faqs"]> }) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="blog-faq" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>Frequently asked questions</h2>
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        const answerId = `${id}-answer-${index}`;

        return (
          <div className="blog-faq-card" data-open={open} key={faq.id}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={answerId}
              onClick={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            >
              {faq.question}
              <ChevronDown size={18} aria-hidden="true" />
            </button>
            <div className="blog-faq-answer" id={answerId} aria-hidden={!open}>
              <div>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
