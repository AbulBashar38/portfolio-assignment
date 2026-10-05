import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import type { SectionId } from "@/types";

const outline: { id: Exclude<SectionId, "home">; title: string; description: string }[] = [
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
      <section id="home" aria-labelledby="home-title" className="flex min-h-svh items-center">
        <Container className="flex flex-col gap-8">
          <Reveal direction="none">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {profile.location} — {profile.availability}
            </p>
          </Reveal>
          <h1 id="home-title" className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
            <TextReveal as="span" onMount text={profile.name} className="block" />
            <TextReveal
              as="span"
              onMount
              delay={0.2}
              text={profile.role}
              className="block italic text-brand"
            />
          </h1>
          <Reveal delay={0.5}>
            <p className="max-w-[60ch] text-lg text-muted-foreground">{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.6} className="flex gap-3">
            <Button size="lg" asChild>
              <a href="#projects">View projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </Reveal>
        </Container>
      </section>

      {outline.map((section) => (
        <Section key={section.id} id={section.id}>
          <SectionHeading
            id={section.id}
            title={section.title}
            description={section.description}
          />
          <Reveal>
            <div className="rounded-lg border border-dashed p-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Section content
            </div>
          </Reveal>
        </Section>
      ))}
    </main>
  );
}
