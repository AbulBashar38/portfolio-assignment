import type { Transition } from "motion/react";

/** Expo-out curve used across the site — fast start, soft landing. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const durations = {
  fast: 0.4,
  base: 0.6,
  slow: 0.9,
} as const;

export const baseTransition: Transition = {
  duration: durations.base,
  ease: easeOut,
};

/** Trigger in-view animations a little before the element is fully visible. */
export const viewport = { once: true, margin: "0px 0px -10% 0px" } as const;
