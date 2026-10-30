"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="bg-[linear-gradient(90deg,#ff6a35,#e50064,#007f83,#00afbf,#00c96b)] pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 origin-left"
      style={{ scaleX }}
    />
  );
}

export function ParallaxImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.18]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        style={reduced ? undefined : { y, scale }}
      />
    </div>
  );
}

export function ScrollStatement({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });
  const words = children.split(" ");
  return (
    <p
      ref={ref}
      className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550] max-w-5xl"
      aria-label={children}
    >
      {words.map((word, i) => (
        <ScrollWord
          key={`${word}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          reduced={!!reduced}
        >
          {word}
        </ScrollWord>
      ))}
    </p>
  );
}

function ScrollWord({
  children,
  progress,
  range,
  reduced,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  reduced: boolean;
}) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return (
    <motion.span
      aria-hidden="true"
      className="mr-[.22em] inline-block"
      style={{ opacity: reduced ? 1 : opacity }}
    >
      {children}
    </motion.span>
  );
}

export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode[];
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : 0.13 } },
      }}
      className={className}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: reduced ? 0 : 35 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: reduced ? 0 : 0.65 },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
