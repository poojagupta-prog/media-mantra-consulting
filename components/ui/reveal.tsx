"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: reduced ? 0 : 0.7,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
