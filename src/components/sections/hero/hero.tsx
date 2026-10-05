import { ArrowDownIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HeroPortrait } from "@/components/sections/hero/hero-portrait";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 lg:flex lg:min-h-svh lg:items-center lg:pb-24"
    >
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col lg:col-span-7">
          <Reveal direction="none">
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {profile.location}
            </p>
          </Reveal>

          <h1
            id="home-title"
            aria-label={profile.name}
            className="mt-6 font-display text-[clamp(4rem,13vw,9.5rem)] leading-[0.86] tracking-[-0.02em]"
          >
            <TextReveal as="span" onMount text={firstName} className="block" />
            <TextReveal
              as="span"
              onMount
              delay={0.1}
              text={lastName}
              className="block md:pl-[0.6em]"
            />
          </h1>

          <TextReveal
            as="p"
            onMount
            delay={0.35}
            text={profile.role}
            className="mt-5 font-display text-3xl text-brand italic md:text-4xl"
          />

          <Reveal delay={0.6}>
            <p className="mt-8 max-w-[52ch] text-base text-muted-foreground md:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.7} className="mt-10 flex flex-wrap gap-3">
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

          <Reveal delay={0.8} className="mt-12">
            <SocialLinks />
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-8">
          <HeroPortrait />
        </div>
      </Container>
    </section>
  );
}
