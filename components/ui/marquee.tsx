"use client";
import { BrandStar } from "@/components/ui/brand-star";


import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const labels = ["Dubai PR", "Storytelling", "Culture", "Connection"];

export function Marquee() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const group = groupRef.current;
    if (!container || !group) return;

    const updateCopies = () => {
      const width = group.getBoundingClientRect().width;
      if (width) setCopies(Math.max(1, Math.ceil(container.clientWidth / width)));
    };

    const observer = new ResizeObserver(updateCopies);
    observer.observe(container);
    observer.observe(group);
    updateCopies();
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden bg-teal py-5 text-white"
      aria-label="Dubai PR, storytelling, culture, connection"
    >
      <motion.div
        aria-hidden="true"
        className="w-max flex"
        animate={{ x: reduced ? 0 : ["0%", "-50%"] }}
        transition={{ duration: 35 * copies, ease: "linear", repeat: Infinity }}
      >
        {Array.from({ length: copies * 2 }, (_, n) => (
          <div
            key={n}
            ref={n === 0 ? groupRef : undefined}
            className="flex shrink-0 items-center gap-10 pr-10 text-xl font-medium uppercase tracking-[-.03em] md:text-3xl"
          >
            {labels.map((t) => (
              <span key={t} className="flex items-center gap-10">
                {t}
                <BrandStar className="shrink-0 text-[#92dfd4]" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
