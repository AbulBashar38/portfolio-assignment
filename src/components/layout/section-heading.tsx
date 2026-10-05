import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { sectionLabel, sectionNumber } from "@/lib/sections";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

interface SectionHeadingProps {
  id: SectionId;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Editorial section header: a numbered mono label in the left column,
 * a large serif title and optional intro on the right.
 */
export function SectionHeading({
  id,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-14 grid gap-6 border-t pt-6 md:mb-20 md:grid-cols-12 md:gap-8",
        className,
      )}
    >
      <Reveal direction="none" className="md:col-span-3">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-brand">{sectionNumber(id)}</span>
          <span aria-hidden className="h-px w-8 bg-border" />
          {sectionLabel(id)}
        </p>
      </Reveal>

      <div className="md:col-span-9">
        <TextReveal
          id={`${id}-title`}
          text={title}
          className="font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl"
        />
        {description && (
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[56ch] text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
