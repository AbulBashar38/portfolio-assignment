"use client";

import { motion } from "motion/react";

/** "Scroll" label with a dot travelling down a thin rail. */
export function ScrollCue() {
  return (
    <a
      href="#about"
      className="group flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
    >
      <span className="relative block h-10 w-px overflow-hidden bg-border">
        <motion.span
          className="absolute top-0 left-0 h-3 w-px bg-brand"
          animate={{ y: [-12, 40] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.4,
          }}
        />
      </span>
      Scroll
    </a>
  );
}
