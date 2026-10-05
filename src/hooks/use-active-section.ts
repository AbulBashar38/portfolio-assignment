"use client";

import { useEffect, useState } from "react";

import type { SectionId } from "@/types";

/**
 * Returns the id of the section currently crossing the middle of the viewport.
 * A thin observation band avoids flicker when two sections are both partly visible.
 */
export function useActiveSection(ids: SectionId[]) {
  const [active, setActive] = useState<SectionId>(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
