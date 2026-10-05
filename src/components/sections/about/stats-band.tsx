import { CountUp } from "@/components/motion/count-up";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function StatsBand() {
  return (
    <Stagger
      as="ul"
      interval={0.1}
      className="mt-24 grid grid-cols-2 border-y lg:grid-cols-4"
    >
      {profile.stats.map((stat, index) => (
        <StaggerItem
          as="li"
          key={stat.label}
          className={cn(
            "flex flex-col gap-3 px-1 py-8 sm:px-6 lg:py-10",
            // Rules between cells: vertical on every column but the first,
            // horizontal between the two rows on small screens.
            index % 2 === 1 && "border-l",
            index >= 2 && "border-t lg:border-t-0",
            index === 2 && "lg:border-l",
            index === 0 && "sm:pl-0",
          )}
        >
          <CountUp
            value={stat.value}
            suffix={stat.suffix}
            className="font-display text-5xl leading-none tracking-tight tabular-nums md:text-6xl"
          />
          <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
            {stat.label}
          </span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
