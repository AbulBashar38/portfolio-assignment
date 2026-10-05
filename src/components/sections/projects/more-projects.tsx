import { ArrowUpRightIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ProjectDialog } from "@/components/sections/projects/project-dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import type { Project } from "@/types";

export function MoreProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-32 md:mt-40">
      <Reveal>
        <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          More work
        </h3>
      </Reveal>

      <Stagger as="ul" className="mt-6 border-b">
        {projects.map((project) => (
          <StaggerItem as="li" key={project.id} className="border-t">
            <ProjectDialog project={project}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group grid w-full cursor-pointer gap-4 py-8 text-left transition-colors hover:bg-muted/40 md:grid-cols-12 md:items-center md:gap-8 md:px-4"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground md:col-span-1">
                    {project.year}
                  </span>
                  <span className="md:col-span-6">
                    <span className="block font-display text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-1.5">
                      {project.title}
                    </span>
                    <span className="mt-2 block text-muted-foreground">
                      {project.summary}
                    </span>
                  </span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.15em] text-muted-foreground uppercase md:col-span-4">
                    {project.stack.slice(0, 3).join(" / ")}
                  </span>
                  <span className="hidden justify-end md:col-span-1 md:flex">
                    <ArrowUpRightIcon className="size-5 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-brand" />
                  </span>
                </button>
              </DialogTrigger>
            </ProjectDialog>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
