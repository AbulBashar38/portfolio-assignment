import { ArrowDownIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HeroPortrait } from "@/components/sections/hero/hero-portrait";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ScrollCue } from "@/components/sections/hero/scroll-cue";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { heroTimeline } from "@/lib/motion";

export function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative overflow-hidden pt-28 pb-20 md:pt-32 lg:flex lg:min-h-svh lg:items-center lg:pb-24"
    >
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col lg:col-span-7">
          <Reveal direction="none" delay={heroTimeline.meta}>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              <span>{profile.location}</span>
              <span
                aria-hidden
                className="hidden h-px w-6 bg-border sm:block"
              />
              <span className="inline-flex items-center gap-2 text-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand" />
                </span>
                {profile.availability}
              </span>
            </p>
          </Reveal>

          <h1
            id="home-title"
            className="mt-5 font-display text-[clamp(3.75rem,12vw,8rem)] leading-[0.86] tracking-[-0.02em] lg:text-[clamp(4.5rem,14vh,8rem)]"
          >
            <TextReveal
              as="span"
              onMount
              delay={heroTimeline.firstName}
              text={firstName}
              className="block"
            />
            <TextReveal
              as="span"
              onMount
              delay={heroTimeline.lastName}
              text={lastName}
              className="block md:pl-[0.6em]"
            />
          </h1>

          <TextReveal
            as="p"
            onMount
            delay={heroTimeline.role}
            text={profile.role}
            className="mt-5 font-display text-3xl text-brand italic md:text-4xl"
          />

          <Reveal delay={heroTimeline.summary}>
            <p className="mt-6 max-w-[52ch] text-base text-muted-foreground md:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal
            delay={heroTimeline.actions}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild className="h-11 px-5">
              <a href="#projects">
                See selected work
                <ArrowDownIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 px-5">
              <a href="#contact">Get in touch</a>
            </Button>
          </Reveal>

          <Reveal delay={heroTimeline.socials} className="mt-10">
            <SocialLinks />
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-8">
          <HeroPortrait />
        </div>
      </Container>

      <Reveal
        direction="none"
        delay={heroTimeline.scrollCue}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <ScrollCue />
      </Reveal>
    </section>
  );
}
