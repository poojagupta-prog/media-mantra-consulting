"use client";

import { useEffect, useRef, useState } from "react";

export type ContactEnquiry = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

/** POSTs an enquiry as JSON. The endpoint must return a successful HTTP status. */
export function useContactForm(endpoint = "/api/contact") {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const request = useRef<AbortController | null>(null);

  useEffect(() => () => request.current?.abort(), []);

  async function submit(enquiry: ContactEnquiry) {
    if (request.current) return;
    const controller = new AbortController();
    request.current = controller;
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
        signal: AbortSignal.any([
          controller.signal,
          AbortSignal.timeout(20_000),
        ]),
      });
      if (!response.ok) {
        throw new Error(
          "We couldn’t send your enquiry. Please try again or contact us by email.",
        );
      }
      setStatus("success");
    } catch (cause) {
      if (controller.signal.aborted) return;
      setError(
        cause instanceof Error && cause.name === "TimeoutError"
          ? "This is taking longer than expected. Please try again."
          : "We couldn’t send your enquiry. Please try again or contact us by email.",
      );
      setStatus("error");
    } finally {
      if (request.current === controller) request.current = null;
    }
  }

  function reset() {
    request.current?.abort();
    request.current = null;
    setStatus("idle");
    setError(null);
  }

  return {
    submit,
    reset,
    status,
    error,
    isSubmitting: status === "submitting",
  };
}
