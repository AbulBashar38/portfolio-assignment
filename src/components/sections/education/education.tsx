import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Certifications } from "@/components/sections/education/certifications";
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
            className="group relative grid gap-6 border-t py-10 md:grid-cols-12 md:gap-8 md:py-12"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-brand transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />

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
              <h3 className="font-display text-3xl leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-1.5 md:text-4xl">
                {entry.institution}
              </h3>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                {entry.degree}
                <span className="text-foreground"> — {entry.field}</span>
              </p>
            </div>

            <div className="flex items-baseline gap-3 md:col-span-3 md:flex-col md:items-end md:gap-1">
              <p className="font-display text-5xl leading-none tracking-tight tabular-nums md:text-6xl">
                {entry.grade}
              </p>
              <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
                CGPA / {entry.gradeScale}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Certifications />
    </Section>
  );
}
