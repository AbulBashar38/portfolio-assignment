"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { useParallax } from "@/hooks/use-parallax";
import type { ImageAsset } from "@/types";

interface ProjectMediaProps {
  image: ImageAsset;
  label?: string;
}

/** Screenshot frame with a slow scroll drift and a hover zoom + label. */
export function ProjectMedia({
  image,
  label = "View case study",
}: ProjectMediaProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useParallax(scrollYProgress, "-4%", "4%");

  return (
    <span
      ref={ref}
      className="group/media relative block aspect-[16/10] overflow-hidden rounded-sm border bg-muted"
    >
      <motion.span
        style={{ y }}
        className="absolute inset-x-0 -top-[5%] block h-[110%]"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.03]"
        />
      </motion.span>

      <span className="absolute right-4 bottom-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-background/90 px-3.5 py-2 text-xs font-medium opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover/media:translate-y-0 group-hover/media:opacity-100">
        {label}
        <ArrowUpRightIcon className="size-3.5" />
      </span>
    </span>
  );
}
