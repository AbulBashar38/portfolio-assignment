import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        id="education"
        title="Where I studied."
        description="An engineering diploma first, then computer science — studied alongside full-time work as a software engineer."
      />

      <Stagger as="ol" interval={0.12} className="border-b">
        {education.map((entry) => (
          <StaggerItem
            as="li"
            key={entry.id}
            className="grid gap-6 border-t py-10 md:grid-cols-12 md:gap-8 md:py-12"
          >
            <div className="flex flex-col gap-2 md:col-span-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase">
                {entry.period}
              </p>
              <p className="text-sm text-muted-foreground">{entry.location}</p>
              {entry.current && (
                <span className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.2em] text-brand uppercase">
                  <span className="size-1.5 rounded-full bg-brand" />
                  In progress
                </span>
              )}
            </div>

            <div className="md:col-span-6">
              <h3 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                {entry.institution}
              </h3>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                {entry.degree}
                <span className="text-foreground"> — {entry.field}</span>
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
