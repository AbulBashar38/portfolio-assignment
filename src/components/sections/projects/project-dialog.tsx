import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import { StackList } from "@/components/sections/projects/stack-list";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </h4>
  );
}

interface ProjectDialogProps {
  project: Project;
  /** Must contain at least one `DialogTrigger`. */
  children: React.ReactNode;
}

export function ProjectDialog({ project, children }: ProjectDialogProps) {
  const meta = [
    { label: "Role", value: project.role },
    { label: "Client", value: project.client },
    { label: "Year", value: String(project.year) },
    { label: "Duration", value: project.duration },
  ];

  return (
    <Dialog>
      {children}

      <DialogContent className="max-h-[92svh] gap-0 overflow-y-auto rounded-md p-0 text-base sm:max-w-5xl">
        <header className="px-6 pt-10 md:px-10 md:pt-12">
          <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-brand uppercase">
            Case study
          </p>
          <DialogTitle className="mt-3 font-display text-4xl leading-[1.05] font-normal tracking-tight md:text-6xl">
            {project.title}
          </DialogTitle>
          <DialogDescription className="mt-4 max-w-[60ch] text-base md:text-lg">
            {project.summary}
          </DialogDescription>

          <dl className="mt-8 grid grid-cols-2 border-y md:grid-cols-4">
            {meta.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "py-4",
                  index % 2 === 1 && "border-l pl-4 md:pl-6",
                  index >= 2 && "border-t md:border-t-0",
                  index === 2 && "md:border-l md:pl-6",
                )}
              >
                <dt className="font-mono text-[0.625rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="px-6 pt-8 md:px-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border bg-muted">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(min-width: 1024px) 60rem, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="grid gap-12 px-6 py-10 md:grid-cols-12 md:px-10 md:py-12">
          <div className="space-y-10 md:col-span-7">
            <section className="space-y-4">
              <Label>Overview</Label>
              {project.overview.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>

            <div className="grid gap-8 sm:grid-cols-2">
              <section className="space-y-3">
                <Label>Challenge</Label>
                <p>{project.challenge}</p>
              </section>
              <section className="space-y-3">
                <Label>Approach</Label>
                <p>{project.solution}</p>
              </section>
            </div>

            <section className="space-y-4">
              <Label>What I did</Label>
              <ul className="space-y-3">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-3 shrink-0 bg-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-10 md:col-span-4 md:col-start-9">
            <section className="space-y-4">
              <Label>Outcome</Label>
              <ol className="border-t">
                {project.results.map((result, index) => (
                  <li key={result} className="flex gap-4 border-b py-4">
                    <span className="pt-1 font-mono text-[0.6875rem] text-brand tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl leading-snug">
                      {result}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="space-y-4">
              <Label>Stack</Label>
              <StackList items={project.stack} />
            </section>

            {project.liveUrl && (
              <Button asChild className="h-11 w-full">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit live site
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
              </Button>
            )}
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
