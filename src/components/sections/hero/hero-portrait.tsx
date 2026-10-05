"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { profile } from "@/data/profile";
import { easeOut } from "@/lib/motion";

const corners = [
  "-top-3 -left-3",
  "-top-3 -right-3",
  "-bottom-3 -left-3",
  "-bottom-3 -right-3",
];

/** Print-style registration mark. */
function CropMark({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute size-6 text-muted-foreground/70 ${className}`}
    >
      <span className="absolute top-1/2 left-0 h-px w-full bg-current" />
      <span className="absolute top-0 left-1/2 h-full w-px bg-current" />
    </span>
  );
}

export function HeroPortrait() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // The photo drifts slower than the page; the circle drifts the other way.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const circleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <figure
      ref={ref}
      className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
    >
      <div className="relative">
        <motion.svg
          aria-hidden
          viewBox="0 0 100 100"
          style={{ y: circleY }}
          className="absolute -top-12 -right-10 size-44 text-brand sm:size-56 lg:-top-16 lg:-right-14 lg:size-64"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="49"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.35"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.8, ease: easeOut }}
          />
        </motion.svg>

        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted"
        >
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: easeOut }}
            style={{ y: imageY }}
            className="absolute inset-x-0 -top-[12%] h-[124%]"
          >
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
              className="object-cover object-top"
            />
          </motion.div>
        </motion.div>

        {corners.map((position) => (
          <CropMark key={position} className={position} />
        ))}

        <motion.span
          aria-hidden
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.3, ease: easeOut }}
          className="absolute -bottom-5 left-8 size-10 origin-bottom-left bg-brand"
        />
      </div>

      <figcaption className="mt-8 flex items-center justify-between font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
        <span>Fig. 01</span>
        <span>
          {profile.name} — {profile.location.split(",")[0]}
        </span>
      </figcaption>
    </figure>
  );
}
