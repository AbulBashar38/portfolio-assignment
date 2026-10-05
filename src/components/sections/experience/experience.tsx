import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { WorkEntry } from "@/components/sections/experience/work-entry";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        id="experience"
        title="Where I've worked."
        description="Four years across product teams, agencies and open source — mostly leading frontend work."
      />

      <div className="space-y-20 md:space-y-24">
        {experience.map((entry) => (
          <WorkEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </Section>
  );
}
