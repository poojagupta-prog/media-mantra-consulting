"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "./data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#f8fbf9] p-7 md:p-12">
      {submitted ? (
        <div
          role="status"
          className="flex min-h-120 flex-col items-start justify-center"
        >
          <CheckCircle2 size={40} className="mb-6 text-teal" />
          <h2 className="text-3xl tracking-tight">That’s a great start.</h2>
          <p className="mb-7 mt-4 text-sm leading-7 text-muted">
            Thanks for trying the demo! Your message has not been sent or
            stored. On the live website, this is where your conversation would
            begin.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="rounded-full bg-teal px-6 py-3 text-sm text-white"
          >
            Try another enquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <h2 className="mb-3 text-3xl leading-tight tracking-[-.05em]">
            Let’s make something happen.
          </h2>
          <p className="mb-8 text-xs text-muted">
            All fields marked * are required.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
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
              />
            </label>
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
                {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
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
          </div>
          <p className="my-6 text-xs leading-5 text-muted">
            This is a demo form. No information will be sent or stored.
          </p>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-5 rounded-full bg-teal px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#005e63]"
          >
            Let’s start a conversation
            <ArrowUpRight size={18} />
          </button>
        </form>
      )}
    </div>
  );
}
