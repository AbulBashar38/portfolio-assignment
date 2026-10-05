import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="content" className="flex min-h-svh items-center pt-16">
      <Container>
        <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          <span className="text-brand">Error</span> — Page not found
        </p>

        <div className="relative mt-6 w-fit">
          <h1 className="font-display text-[clamp(7rem,28vw,16rem)] leading-[0.8] tracking-[-0.04em]">
            404
          </h1>
          <span
            aria-hidden
            className="absolute -right-6 bottom-3 size-6 bg-brand md:-right-10 md:size-10"
          />
        </div>

        <p className="mt-10 max-w-[44ch] text-lg text-muted-foreground">
          This page doesn&apos;t exist — the portfolio lives on a single page.
          Head back and pick up where you left off.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-5">
            <Link href="/">
              <ArrowLeftIcon data-icon="inline-start" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-5">
            <Link href="/#contact">Get in touch</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
