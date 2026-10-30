"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Marquee() {
  const reduced = useReducedMotion();
  return (
    <div
      className="overflow-hidden bg-teal py-5 text-white"
      aria-label="Dubai PR, storytelling, culture, connection"
    >
      <motion.div
        aria-hidden="true"
        className="w-max flex"
        animate={{ x: reduced ? 0 : ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {[0, 1].map((n) => (
          <div
            key={n}
            className="flex shrink-0 items-center gap-10 pr-10 text-xl font-medium uppercase tracking-[-.03em] md:text-3xl"
          >
            {["Dubai PR", "Storytelling", "Culture", "Connection"].map((t) => (
              <span key={t} className="flex items-center gap-10">
                {t}
                <span className="text-[#92dfd4]">✳</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
