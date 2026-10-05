import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { About } from "@/components/sections/about/about";
import { Education } from "@/components/sections/education/education";
import { Experience } from "@/components/sections/experience/experience";
import { Hero } from "@/components/sections/hero/hero";
import { Projects } from "@/components/sections/projects/projects";
import { Skills } from "@/components/sections/skills/skills";
import type { SectionId } from "@/types";

const outline: {
  id: Exclude<
    SectionId,
    "home" | "about" | "education" | "skills" | "projects"
  >;
  title: string;
  description: string;
}[] = [
  {
    id: "contact",
    title: "Let's build something.",
    description: "Open to new roles and interesting projects.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />

      {outline.map((section) => (
        <Section key={section.id} id={section.id}>
          <SectionHeading
            id={section.id}
            title={section.title}
            description={section.description}
          />
          <Reveal>
            <div className="rounded-lg border border-dashed p-10 text-center font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Section content
            </div>
          </Reveal>
        </Section>
      ))}
    </main>
  );
}
