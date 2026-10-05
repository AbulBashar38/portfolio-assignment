"use client";

import { motion, type Variants } from "motion/react";

import { baseTransition, viewport } from "@/lib/motion";

const containers = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
};

const items = {
  div: motion.div,
  li: motion.li,
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

interface StaggerProps {
  children: React.ReactNode;
  as?: keyof typeof containers;
  /** Seconds between each child starting. */
  interval?: number;
  delay?: number;
  className?: string;
}

/** Reveals its `StaggerItem` children one after another when scrolled into view. */
export function Stagger({
  children,
  as = "div",
  interval = 0.08,
  delay = 0,
  className,
}: StaggerProps) {
  const Component = containers[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: interval, delayChildren: delay },
        },
      }}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  as?: keyof typeof items;
  className?: string;
}

export function StaggerItem({
  children,
  as = "div",
  className,
}: StaggerItemProps) {
  const Component = items[as];

  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
