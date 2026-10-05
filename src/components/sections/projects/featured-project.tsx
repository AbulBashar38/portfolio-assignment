import { ArrowUpRightIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ProjectMedia } from "@/components/sections/projects/project-media";
import { StackList } from "@/components/sections/projects/stack-list";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const reversed = index % 2 === 1;

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
    >
      <Reveal
        className={cn("lg:col-span-7", reversed && "lg:order-2")}
        direction={reversed ? "left" : "right"}
      >
        <ProjectMedia image={project.cover} />
      </Reveal>

      <Reveal
        delay={0.1}
        className={cn("lg:col-span-5", reversed && "lg:order-1")}
      >
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          <span className="text-brand">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span aria-hidden className="h-px w-6 bg-border" />
          <span>{project.year}</span>
          <span aria-hidden>·</span>
          <span>{project.role}</span>
        </p>

        <h3
          id={`${project.id}-title`}
          className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl"
        >
          {project.title}
        </h3>

        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {project.summary}
        </p>

        <StackList items={project.stack} className="mt-6" />

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button asChild variant="outline" className="h-10 px-4">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Visit live site
                <ArrowUpRightIcon data-icon="inline-end" />
              </a>
            </Button>
          )}
        </div>
      </Reveal>
    </article>
  );
}
