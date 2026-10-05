import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { AboutPhoto } from "@/components/sections/about/about-photo";
import { QuickFacts } from "@/components/sections/about/quick-facts";
import { StatsBand } from "@/components/sections/about/stats-band";
import { profile } from "@/data/profile";

export function About() {
  const [lead, ...paragraphs] = profile.bio;

  return (
    <Section id="about">
      <SectionHeading id="about" title="Engineer, team lead, student." />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <AboutPhoto />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="font-display text-2xl leading-snug tracking-tight md:text-3xl">
              {lead}
            </p>
          </Reveal>

          <div className="mt-8 space-y-5 text-base text-muted-foreground md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.1 * (index + 1)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <QuickFacts />
        </div>
      </div>

      <StatsBand />
    </Section>
  );
}
