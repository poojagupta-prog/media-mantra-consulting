"use client";

import type { ReactNode } from "react";

export function ScrollToSection({
  targetId,
  className,
  children,
  focusTarget = false,
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
  focusTarget?: boolean;
}) {
  function handleClick() {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior, block: "start" });

    if (focusTarget) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
