"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const answerId = useId();

  return (
    <div className="py-6">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-base"
      >
        {question}
        <Plus
          size={18}
          className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-45" : ""}`}
        />
      </button>
      <div
        id={answerId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 text-sm leading-7 text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({
  data,
}: {
  data: { id: number; question: string; answer: string }[];
}) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <div className="divide-y divide-black/20">
      {data.map(({ id, question, answer }) => (
        <FAQItem
          key={id}
          question={question}
          answer={answer}
          open={openQuestion === id}
          onToggle={() =>
            setOpenQuestion((current) => (current === id ? null : id))
          }
        />
      ))}
    </div>
  );
}
