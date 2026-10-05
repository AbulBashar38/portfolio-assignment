"use client";

import { type MotionValue, useReducedMotion, useTransform } from "motion/react";

/**
 * Maps scroll progress (0–1) to a translate value for parallax effects.
 * Returns a static "0%" for visitors who prefer reduced motion — MotionConfig
 * only disables animations, not scroll-linked transforms like this one.
 */
export function useParallax(
  progress: MotionValue<number>,
  from: string,
  to: string,
) {
  const reduceMotion = useReducedMotion();
  return useTransform(
    progress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : [from, to],
  );
}
