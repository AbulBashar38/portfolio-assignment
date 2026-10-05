"use client";

import { MotionConfig } from "motion/react";

import { baseTransition } from "@/lib/motion";

/**
 * Shares the default transition and honours the OS "reduce motion" setting:
 * transform animations are skipped, opacity fades still run.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={baseTransition}>
      {children}
    </MotionConfig>
  );
}
