"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

export function ProjectGallery({ images }: { images: ImageAsset[] }) {
  const [current, setCurrent] = useState(0);
  const image = images[current];

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm border bg-muted">
        <AnimatePresence initial={false}>
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="absolute inset-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 60rem, 100vw"
              className="object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center gap-4">
          <ul className="flex flex-1 gap-2 overflow-x-auto pb-1">
            {images.map((thumbnail, index) => (
              <li key={thumbnail.src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show screenshot ${index + 1}: ${thumbnail.alt}`}
                  aria-current={index === current}
                  className={cn(
                    "relative block aspect-[16/10] w-20 overflow-hidden rounded-xs border transition-all md:w-28",
                    index === current
                      ? "border-brand ring-1 ring-brand"
                      : "opacity-60 hover:opacity-100",
                  )}
                >
                  <Image
                    src={thumbnail.src}
                    alt=""
                    fill
                    sizes="7rem"
                    className="object-cover object-top"
                  />
                </button>
              </li>
            ))}
          </ul>
          <p className="shrink-0 font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground tabular-nums">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </div>
  );
}
