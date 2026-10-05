"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { profile } from "@/data/profile";
import { useParallax } from "@/hooks/use-parallax";
import { easeOut, viewport } from "@/lib/motion";

export function AboutPhoto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // The outline frame lags behind the photo for a little depth.
  const frameY = useParallax(scrollYProgress, "6%", "-6%");

  return (
    <figure
      ref={ref}
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
    >
      <div className="relative">
        <motion.div
          aria-hidden
          style={{ y: frameY }}
          className="absolute inset-0 translate-x-4 translate-y-4 rounded-sm border border-brand/70 sm:translate-x-6 sm:translate-y-6"
        />

        <motion.div
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={viewport}
          transition={{ duration: 1.1, ease: easeOut }}
          className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-muted"
        >
          <Image
            src={profile.aboutPhoto.src}
            alt={profile.aboutPhoto.alt}
            fill
            sizes="(min-width: 1024px) 36vw, (min-width: 640px) 24rem, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
      </div>

      <figcaption className="mt-10 font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
        Fig. 02 — Off the clock
      </figcaption>
    </figure>
  );
}
