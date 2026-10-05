import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FeaturedProject } from "@/components/sections/projects/featured-project";
import { projects } from "@/data/projects";

const featured = projects.filter((project) => project.featured);

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        title="Selected work."
        description="Production projects I've led or built end to end — from open-source archives to SaaS platforms."
      />

      <div className="space-y-28 md:space-y-36">
        {featured.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
