import { Marquee } from "@/components/motion/marquee";
import { coreStack, skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

const tools = skillGroups.find((group) => group.id === "tools")?.skills ?? [];

/** Full-bleed band: core stack in large type, tools in small caps underneath. */
export function StackMarquee() {
  return (
    <div
      aria-label={`Core stack: ${coreStack.join(", ")}`}
      role="img"
      className="relative left-1/2 mt-24 w-screen -translate-x-1/2 border-y py-8 md:mt-32 md:py-10"
    >
      <Marquee duration={45}>
        {coreStack.map((name, index) => (
          <span key={name} className="flex items-center">
            <span
              className={cn(
                "px-6 font-display text-5xl leading-none tracking-tight whitespace-nowrap md:px-10 md:text-7xl",
                index % 2 === 1 && "text-muted-foreground italic",
              )}
            >
              {name}
            </span>
            <span aria-hidden className="size-2 rotate-45 bg-brand" />
          </span>
        ))}
      </Marquee>

      <Marquee duration={60} reverse className="mt-6 md:mt-8">
        {tools.map((name) => (
          <span
            key={name}
            className="px-5 font-mono text-xs tracking-[0.2em] whitespace-nowrap text-muted-foreground uppercase"
          >
            {name}
            <span aria-hidden className="ml-10 text-brand">
              /
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
