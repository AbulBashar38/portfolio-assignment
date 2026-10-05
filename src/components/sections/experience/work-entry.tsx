import { Reveal } from "@/components/motion/reveal";
import { StackList } from "@/components/sections/projects/stack-list";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";

export function WorkEntry({ entry }: { entry: Experience }) {
  return (
    <article className="relative grid gap-6 pl-8 md:grid-cols-12 md:gap-8 md:pl-12">
      <span
        aria-hidden
        className={cn(
          "absolute top-1 left-0 size-2.5 -translate-x-1/2 rounded-full border-2 border-background ring-1",
          entry.current
            ? "bg-brand ring-brand"
            : "bg-foreground/40 ring-foreground/30",
        )}
      />

      <Reveal direction="none" className="md:col-span-3">
        <p className="font-mono text-xs tracking-[0.2em] uppercase">
          {entry.period}
        </p>
        {entry.current && (
          <span className="mt-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.2em] text-brand uppercase">
            <span className="size-1.5 rounded-full bg-brand" />
            Current
          </span>
        )}
      </Reveal>

      <Reveal delay={0.1} className="md:col-span-8 md:col-start-5">
        <h3 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
          {entry.role}
          <span className="text-muted-foreground italic"> at </span>
          {entry.company}
        </h3>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {entry.summary}
        </p>

        <ul className="mt-6 space-y-3">
          {entry.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-brand" />
              {highlight}
            </li>
          ))}
        </ul>

        <StackList items={entry.stack} className="mt-6" />
      </Reveal>
    </article>
  );
}
