import { ArrowUpIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { LocalTime } from "@/components/layout/local-time";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t">
      <Container className="pt-16 pb-10 md:pt-24">
        <p
          aria-hidden
          className="font-display text-[19vw] leading-[0.8] tracking-[-0.03em] whitespace-nowrap text-foreground/[0.07] select-none lg:text-[12.5rem]"
        >
          {profile.name}
        </p>

        <div className="mt-12 grid gap-6 border-t pt-8 font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase sm:grid-cols-3 sm:items-center">
          <p>
            © {year} {profile.name}
          </p>
          <p className="sm:text-center">
            {profile.location.split(",")[0]} · <LocalTime /> GMT+6
          </p>
          <a
            href="#home"
            className="group inline-flex min-h-6 items-center gap-2 py-1 transition-colors hover:text-foreground sm:justify-self-end"
          >
            Back to top
            <ArrowUpIcon className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
