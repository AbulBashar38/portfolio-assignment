"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

import { easeOut } from "@/lib/motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Counts from 0 to `value` the first time it scrolls into view.
 * The final value is server-rendered, so it reads correctly without JS.
 */
export function CountUp({
  value,
  suffix = "",
  duration = 1.6,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || !inView || reduceMotion) return;

    const controls = animate(0, value, {
      duration,
      ease: easeOut,
      onUpdate: (latest) => {
        element.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
