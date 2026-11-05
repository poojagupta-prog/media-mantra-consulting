"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowUpRight, Check, LoaderCircle, X } from "lucide-react";
import { ContactModalContext } from "@/hooks/use-contact-modal";
import { useContactForm } from "@/hooks/use-contact-form";
import { services } from "./data";
import { contactEmails } from "./contact-details";
import { BrandStar } from "@/components/ui/brand-star";

export function ContactModalProvider({
  children,
  endpoint = "/api/contact",
}: {
  children: ReactNode;
  endpoint?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      {isOpen && <ContactModal endpoint={endpoint} onClose={close} />}
    </ContactModalContext.Provider>
  );
}

function ContactModal({
  endpoint,
  onClose,
}: {
  endpoint: string;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const feedbackId = useId();
  const { submit, status, error, isSubmitting } = useContactForm(endpoint);

  useEffect(() => {
    if (status !== "success") return;

    const timeout = window.setTimeout(onClose, 2000);
    return () => window.clearTimeout(timeout);
  }, [status, onClose]);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected)
        previousFocus.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="contact-modal"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          onClose();
      }}
    >
      <div className="contact-modal-content">
        <button
          type="button"
          onClick={onClose}
          className="contact-modal-close"
          aria-label="Close contact form"
        >
          <X size={19} aria-hidden="true" />
        </button>
        <form
          aria-busy={isSubmitting}
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            void submit({
              name: String(data.get("name") ?? "").trim(),
              email: String(data.get("email") ?? "").trim(),
              company: String(data.get("company") ?? "").trim(),
              service: String(data.get("service") ?? ""),
              message: String(data.get("message") ?? "").trim(),
            });
          }}
        >
          <div className="contact-modal-eyebrow">
            <BrandStar size={34} /> Start a conversation
          </div>
          <h2 id={titleId} className="contact-modal-title">
            Good things start
            <br />
            with <em>hello.</em>
          </h2>
          <p id={descriptionId} className="contact-modal-description">
            Tell us a little about your brand. Let’s make your next chapter
            worth talking about.
          </p>
          <fieldset
            disabled={isSubmitting || status === "success"}
            className="contact-modal-fields"
          >
            <legend className="sr-only">
              Your contact details and enquiry
            </legend>
            <label>
              Your name <span aria-hidden="true">*</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                maxLength={120}
              />
            </label>
            <label>
              Work email <span aria-hidden="true">*</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@company.com"
                required
                maxLength={254}
              />
            </label>
            <label className="sm:col-span-2">
              Company <span className="contact-modal-optional">(optional)</span>
              <input
                name="company"
                autoComplete="organization"
                placeholder="Your brand or organisation"
                maxLength={150}
              />
            </label>
            <label className="sm:col-span-2">
              What can we help with? <span aria-hidden="true">*</span>
              <select name="service" defaultValue="" required>
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
            <label className="sm:col-span-2">
              Your big idea <span aria-hidden="true">*</span>
              <textarea
                name="message"
                rows={3}
                placeholder="Your goals, your challenges, or that spark of an idea…"
                required
                maxLength={5000}
              />
            </label>
          </fieldset>
          <p className="contact-modal-note">
            * Required fields. We’ll use these details to respond to your
            enquiry.
          </p>
          {error && (
            <p
              id={feedbackId}
              role="alert"
              className="contact-modal-feedback contact-modal-error"
            >
              {error} <a href={`mailto:${contactEmails[0]}`}>Email us</a>
            </p>
          )}
          {status === "success" && (
            <p id={feedbackId} role="status" className="contact-modal-feedback">
              Thank you — your enquiry has been sent. We look forward to
              connecting.
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting || status === "success"}
            aria-describedby={
              error || status === "success" ? feedbackId : undefined
            }
            className="contact-modal-submit"
          >
            {isSubmitting
              ? "Sending your enquiry…"
              : status === "success"
                ? "Enquiry sent"
                : "Let’s make it happen"}
            <span aria-hidden="true">
              {isSubmitting ? (
                <LoaderCircle size={19} className="animate-spin" />
              ) : status === "success" ? (
                <Check size={19} />
              ) : (
                <ArrowUpRight size={20} />
              )}
            </span>
          </button>
        </form>
      </div>
    </dialog>
  );
}
