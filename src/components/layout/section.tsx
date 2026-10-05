import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

interface SectionProps {
  id: SectionId;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

/** A full-width page section, anchored by `id` and labelled by its heading. */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("relative py-24 md:py-32", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
