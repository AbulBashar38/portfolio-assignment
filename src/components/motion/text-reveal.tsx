"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";

import { durations, easeOut, viewport } from "@/lib/motion";

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
};

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: durations.slow, ease: easeOut },
  },
};

interface TextRevealProps {
  text: string;
  id?: string;
  as?: keyof typeof tags;
  className?: string;
  delay?: number;
  /** Animate on page load instead of when scrolled into view (use for the hero). */
  onMount?: boolean;
}

/**
 * Slides each word up from behind a mask. Screen readers get the plain text
 * from a visually hidden copy; the animated words are hidden from them.
 */
export function TextReveal({
  text,
  id,
  as = "h2",
  className,
  delay = 0,
  onMount = false,
}: TextRevealProps) {
  const Component = tags[as];
  const words = text.split(" ");
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport };

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.06, delayChildren: delay },
        },
      }}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            aria-hidden
            className="inline-block overflow-hidden pb-[0.08em] align-bottom"
          >
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 && " "}
        </Fragment>
      ))}
    </Component>
  );
}
