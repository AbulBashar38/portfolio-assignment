import { ExpandIcon } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { achievements } from "@/data/activities";

export function Achievements() {
  return (
    <div className="mt-32 grid gap-8 md:mt-40 md:grid-cols-12">
      <Reveal className="md:col-span-3">
        <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Recognition & certificates
        </h3>
      </Reveal>

      <Stagger
        as="ul"
        className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3"
      >
        {achievements.map((achievement) => (
          <StaggerItem as="li" key={achievement.id}>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label={`View certificate: ${achievement.title}`}
                  className="group block w-full cursor-pointer text-left"
                >
                  <span className="relative block aspect-[7/5] overflow-hidden rounded-sm border bg-muted">
                    <Image
                      src={achievement.image.src}
                      alt={achievement.image.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover grayscale-[35%] transition-[filter,scale] duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                    <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-background/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ExpandIcon className="size-3.5" />
                    </span>
                  </span>
                  <span className="mt-4 block font-display text-xl leading-snug tracking-tight">
                    {achievement.title}
                  </span>
                  <span className="mt-1 block font-mono text-[0.6875rem] tracking-[0.15em] text-muted-foreground uppercase">
                    {achievement.issuer} · {achievement.year}
                  </span>
                </button>
              </DialogTrigger>

              <DialogContent className="gap-0 rounded-md p-0 sm:max-w-3xl [&>[data-slot=dialog-close]]:bg-background/90 [&>[data-slot=dialog-close]]:backdrop-blur">
                <div className="relative aspect-[7/5] w-full overflow-hidden rounded-t-md bg-muted">
                  <Image
                    src={achievement.image.src}
                    alt={achievement.image.alt}
                    fill
                    sizes="(min-width: 768px) 48rem, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <DialogTitle className="font-display text-2xl font-normal tracking-tight">
                    {achievement.title}
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-base">
                    {achievement.issuer} · {achievement.year} —{" "}
                    {achievement.description}
                  </DialogDescription>
                </div>
              </DialogContent>
            </Dialog>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
