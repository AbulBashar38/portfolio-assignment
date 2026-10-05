import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { SkillsExplorer } from "@/components/sections/skills/skills-explorer";
import { StackMarquee } from "@/components/sections/skills/stack-marquee";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        title="Tools I reach for."
        description="The stack I use day to day, grouped by where it fits in a product."
      />

      <Reveal>
        <SkillsExplorer />
      </Reveal>

      <StackMarquee />
    </Section>
  );
}
