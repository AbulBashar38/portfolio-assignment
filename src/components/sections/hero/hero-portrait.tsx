"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { profile } from "@/data/profile";
import { easeOut } from "@/lib/motion";

export function HeroPortrait() {
  return (
    <figure className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
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
          className="absolute inset-0"
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

      <figcaption className="mt-4 flex items-center justify-between font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
        <span>Fig. 01</span>
        <span>
          {profile.name} — {profile.location.split(",")[0]}
        </span>
      </figcaption>
    </figure>
  );
}
