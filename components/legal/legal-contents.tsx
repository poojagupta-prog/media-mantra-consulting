"use client";

import { useEffect, useState } from "react";

export function LegalContents({ sections }: { sections: { id: string; title: string }[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id));
    let frame = 0;

    function updateActiveSection() {
      frame = 0;
      const readingLine = Math.min(120, window.innerHeight * 0.2);
      let current: string | null = null;

      for (const element of elements) {
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if (top <= readingLine) current = element.id;
        // Highlight the first section as it enters view, before its heading
        // reaches the reading line. Later sections activate at that line.
        else if (!current && top < window.innerHeight) current = element.id;
        else break;
      }

      setActiveId(current);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sections]);

  return (
    <ol>
      {sections.map((section, index) => (
        <li key={section.id}>
          <a href={`#${section.id}`} aria-current={activeId === section.id ? "location" : undefined}>
            <span>{String(index + 1).padStart(2, "0")}</span>{section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}
