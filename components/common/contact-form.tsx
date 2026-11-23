"use client";

import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { services } from "./data";
import { useContactForm } from "@/hooks/use-contact-form";
import { ContactPhoneFields } from "./contact-phone-fields";
import { contactEmails } from "./contact-details";

export default function ContactForm() {
  const { submit, reset, status, error, isSubmitting } = useContactForm();

  return (
    <div className="bg-[#f8fbf9] p-7 md:p-12">
      {status === "success" ? (
        <div
          role="status"
          className="flex min-h-120 flex-col items-start justify-center"
        >
          <CheckCircle2 size={40} className="mb-6 text-teal" />
          <h2 className="text-3xl tracking-tight">That’s a great start.</h2>
          <p className="mb-7 mt-4 text-sm leading-7 text-muted">
            Thank you — your enquiry has been sent to our team. We look forward
            to connecting.
          </p>
          <button
            onClick={reset}
            className="rounded-full bg-teal px-6 py-3 text-sm text-white"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form
          aria-busy={isSubmitting}
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            void submit({
              name: String(data.get("name") ?? "").trim(),
              email: String(data.get("email") ?? "").trim(),
              countryCode: String(data.get("countryCode") ?? "").trim(),
              phone: String(data.get("phone") ?? "").trim(),
              company: String(data.get("company") ?? "").trim(),
              service: String(data.get("service") ?? ""),
              message: String(data.get("message") ?? "").trim(),
            });
          }}
        >
          <h2 className="mb-3 text-3xl leading-tight tracking-[-.05em]">
            Let’s make something happen.
          </h2>
          <p className="mb-8 text-xs text-muted">
            All fields marked * are required.
          </p>
          <fieldset
            disabled={isSubmitting}
            className="grid gap-6 sm:grid-cols-2"
          >
            <legend className="sr-only">
              Your contact details and enquiry
            </legend>
            <label className="block text-[11px] font-semibold">
              Your name *
              <input
                className="w-full rounded-none border-0 border-b border-[#abc3be] bg-transparent px-0 py-3.5 text-[15px] [-webkit-tap-highlight-color:transparent] focus:outline-none! focus:border-teal focus:shadow-[0_2px_0_#007f83] mt-2"
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                maxLength={120}
              />
            </label>
            <label className="block text-[11px] font-semibold">
              Work email *
              <input
                className="w-full rounded-none border-0 border-b border-[#abc3be] bg-transparent px-0 py-3.5 text-[15px] [-webkit-tap-highlight-color:transparent] focus:outline-none! focus:border-teal focus:shadow-[0_2px_0_#007f83] mt-2"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@company.com"
                required
                maxLength={254}
              />
            </label>
            <ContactPhoneFields inputClassName="w-full min-w-0 rounded-none border-0 border-b border-[#abc3be] bg-transparent px-0 py-3.5 text-[15px] focus:outline-none! focus:border-teal focus:shadow-[0_2px_0_#007f83] mt-2" />
            <label className="block text-[11px] font-semibold sm:col-span-2">
              Company
              <input
                className="w-full rounded-none border-0 border-b border-[#abc3be] bg-transparent px-0 py-3.5 text-[15px] [-webkit-tap-highlight-color:transparent] focus:outline-none! focus:border-teal focus:shadow-[0_2px_0_#007f83] mt-2"
                name="company"
                autoComplete="organization"
                placeholder="Your brand or organisation"
                maxLength={150}
              />
            </label>
            <label className="block text-[11px] font-semibold sm:col-span-2">
              What can we help with? *
              <select
                className="w-full rounded-none border-0 border-b border-[#abc3be] bg-transparent px-0 py-3.5 text-[15px] [-webkit-tap-highlight-color:transparent] focus:outline-none! focus:border-teal focus:shadow-[0_2px_0_#007f83] mt-2"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option>Something else</option>
              </select>
            </label>
            <label className="block text-[11px] font-semibold sm:col-span-2">
              Your big idea *
              <textarea
                className="w-full rounded-none border-0 border-b border-[#abc3be] bg-transparent px-0 py-3.5 text-[15px] [-webkit-tap-highlight-color:transparent] focus:outline-none! focus:border-teal focus:shadow-[0_2px_0_#007f83] mt-2 resize-y"
                name="message"
                rows={4}
                placeholder="A little about your goals, your challenges, or what you have in mind…"
                required
                maxLength={5000}
              />
            </label>
          </fieldset>
          <p className="my-6 text-xs leading-5 text-muted">
            We’ll use these details to respond to your enquiry.
          </p>
          {error && (
            <p role="alert" className="mb-6 text-sm leading-6 text-[#8b302b]">
              {error}{" "}
              <a href={`mailto:${contactEmails[0]}`} className="underline">
                Email us
              </a>
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-5 rounded-full bg-teal px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#005e63]"
          >
            {isSubmitting
              ? "Sending your enquiry…"
              : "Let’s start a conversation"}
            {isSubmitting ? (
              <LoaderCircle
                size={18}
                className="animate-spin"
                aria-hidden="true"
              />
            ) : (
              <ArrowUpRight size={18} aria-hidden="true" />
            )}
          </button>
        </form>
      )}
    </div>
  );
}
