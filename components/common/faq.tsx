import { Plus } from "lucide-react";

export function FAQ() {
  return (
    <div className="divide-y divide-black/20">
      {[
        [
          "What does a partnership look like?",
          "We start by listening. Together, we define your objectives, develop an approach, and agree on a scope that fits your ambitions.",
        ],
        [
          "Can you support a one-off launch?",
          "Our illustrative services include focused launch campaigns as well as ongoing communications partnerships.",
        ],
        [
          "How do we get started?",
          "Tell us about your brand on the contact page. The form is a demo, so no details are sent or stored.",
        ],
      ].map(([q, a]) => (
        <details key={q} className="group py-6">
          <summary className="flex list-none items-center justify-between gap-4 text-base">
            {q}
            <Plus
              size={18}
              className="shrink-0 transition-transform group-open:rotate-45"
            />
          </summary>
          <p className="pt-4 text-sm leading-7 text-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}
