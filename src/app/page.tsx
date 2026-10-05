import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Hero } from "@/components/sections/hero/hero";
import type { SectionId } from "@/types";

const outline: {
  id: Exclude<SectionId, "home">;
  title: string;
  description: string;
}[] = [
  {
    id: "about",
    title: "Engineer, team lead, student.",
    description: "Who I am and how I like to work.",
  },
  {
    id: "education",
    title: "Where I studied.",
    description: "Formal education and the courses that shaped how I build.",
  },
  {
    id: "skills",
    title: "Tools I reach for.",
    description: "The stack I use day to day, grouped by where it fits.",
  },
  {
    id: "projects",
    title: "Selected work.",
    description: "Production projects I've led or built end to end.",
  },
  {
    id: "experience",
    title: "Where I've worked.",
    description: "Roles, teams and the communities I contribute to.",
  },
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
