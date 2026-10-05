"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

/** Vertical rail whose brand-coloured fill tracks scroll progress through the list. */
export function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative">
      <span
        aria-hidden
        className="absolute top-2 bottom-0 left-0 w-px bg-border"
      />
      <motion.span
        aria-hidden
        style={{ scaleY: progress }}
        className="absolute top-2 bottom-0 left-0 w-px origin-top bg-brand"
      />
      {children}
    </div>
  );
}
