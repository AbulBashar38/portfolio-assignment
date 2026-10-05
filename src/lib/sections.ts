import { navigation } from "@/data/navigation";
import type { SectionId } from "@/types";

/** Two-digit index of a section in page order, e.g. "02" for About. */
export function sectionNumber(id: SectionId) {
  const index = navigation.findIndex((item) => item.id === id);
  return String(index + 1).padStart(2, "0");
}

export function sectionLabel(id: SectionId) {
  return navigation.find((item) => item.id === id)?.label ?? id;
}
