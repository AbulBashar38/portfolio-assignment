"use client";

import { motion } from "motion/react";

import { baseTransition, viewport } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

const elements = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  p: motion.p,
  span: motion.span,
  figure: motion.figure,
};

interface RevealProps {
  children: React.ReactNode;
  as?: keyof typeof elements;
  direction?: Direction;
  delay?: number;
  className?: string;
}

/** Fades content in (with a short slide) the first time it scrolls into view. */
export function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  const Component = elements[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </Component>
  );
}
