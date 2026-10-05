import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { activities } from "@/data/activities";

export function Activities() {
  return (
    <div className="mt-24 grid gap-8 md:mt-32 md:grid-cols-12">
      <Reveal className="md:col-span-3">
        <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Leadership & community
        </h3>
      </Reveal>

      <Stagger as="ul" className="border-b md:col-span-9">
        {activities.map((activity) => (
          <StaggerItem
            as="li"
            key={activity.id}
            className="grid gap-2 border-t py-6 sm:grid-cols-[1fr_auto] sm:gap-8"
          >
            <div>
              <p className="font-display text-2xl leading-snug tracking-tight">
                {activity.role}
              </p>
              <p className="mt-1 text-muted-foreground">
                {activity.organization}
              </p>
              {activity.description && (
                <p className="mt-3 max-w-[56ch] text-sm text-muted-foreground">
                  {activity.description}
                </p>
              )}
            </div>
            <p className="font-mono text-xs tracking-[0.2em] whitespace-nowrap text-muted-foreground uppercase sm:pt-2">
              {activity.period}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
