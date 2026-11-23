"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const measurementId = "G-91SELXN3E0";
const storageKey = "analytics-cookie-choice";
type Choice = "accepted" | "declined";

export function AnalyticsCookies() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function readChoice() {
      let saved = null;
      try {
        saved = localStorage.getItem(storageKey);
      } catch {
        // Visitors can still choose for this page when storage is unavailable.
      }
      const current =
        saved === "accepted" || saved === "declined" ? saved : null;
      Reflect.set(
        window,
        `ga-disable-${measurementId}`,
        current !== "accepted",
      );
      setChoice(current);
      setShowPrompt(current === null && saved !== "seen");
    }
    function syncChoice(event: StorageEvent) {
      if (event.key === storageKey || event.key === null) readChoice();
    }
    readChoice();
    window.addEventListener("storage", syncChoice);
    return () => window.removeEventListener("storage", syncChoice);
  }, []);

  useEffect(() => {
    const element = dialog.current;
    if (!showPrompt || !element) return;
    element.showModal();
    try {
      localStorage.setItem(storageKey, "seen");
    } catch {
      // The prompt still works for this visit when storage is unavailable.
    }
    return () => element.close();
  }, [showPrompt]);

  function choose(next: Choice) {
    Reflect.set(window, `ga-disable-${measurementId}`, next !== "accepted");
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Keep the choice in memory for this visit.
    }
    setChoice(next);
    setShowPrompt(false);
  }

  return (
    <>
      {showPrompt && (
        <dialog
          ref={dialog}
          aria-label="Cookie preferences"
          aria-describedby="cookie-message"
          onCancel={() => choose("declined")}
          className="fixed inset-x-0 top-auto bottom-0 m-0 w-full max-w-none border-t border-white/20 bg-[#19181b] text-sm text-white backdrop:bg-black/30"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-14">
            <p id="cookie-message" className="leading-relaxed">
              We use cookies to keep this site working. May we also use optional
              cookies to understand how people use it?{" "}
              <a
                href="/privacy-policy#cookies-and-tracking"
                target="_blank"
                rel="noopener"
                className="text-[#92dfd4] underline underline-offset-4"
              >
                Read our Privacy Policy
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded border px-4 py-2"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => choose("declined")}
                className="rounded border px-4 py-2"
              >
                Decline
              </button>
            </div>
          </div>
        </dialog>
      )}
      {choice === "accepted" && (
        <>
          <Script id="google-analytics-init">{`
            gtag('config', '${measurementId}');
          `}</Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
        </>
      )}
    </>
  );
}
