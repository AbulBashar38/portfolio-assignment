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

/**
 * Page-load choreography for the hero, in seconds. The navbar slides in first,
 * the text column reads top to bottom, and the portrait builds up alongside it.
 */
export const heroTimeline = {
  meta: 0.2,
  firstName: 0.3,
  lastName: 0.4,
  role: 0.65,
  summary: 0.85,
  actions: 0.95,
  socials: 1.05,
  portrait: 0.45,
  circle: 1.1,
  accent: 1.5,
  scrollCue: 1.8,
} as const;
