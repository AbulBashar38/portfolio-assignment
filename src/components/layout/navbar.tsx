"use client";

import { ArrowUpRightIcon } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navigation.map((item) => item.id);
const links = navigation.filter((item) => item.id !== "home");

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Keep the header visible while a nav click is smooth-scrolling the page:
  // stay pinned until scrolling has been idle for a moment.
  const pinned = useRef(false);
  const unpinTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const scheduleUnpin = () => {
    clearTimeout(unpinTimer.current);
    unpinTimer.current = setTimeout(() => (pinned.current = false), 200);
  };
  const pin = () => {
    pinned.current = true;
    setHidden(false);
    scheduleUnpin();
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 16);
    if (pinned.current) return scheduleUnpin();
    // Hide while reading downwards, bring back on any upward scroll.
    setHidden(y > previous && y > 240);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border/70 bg-background/85 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
          onClick={pin}
          className="font-display text-2xl leading-none tracking-tight"
          aria-label={`${profile.name} — back to top`}
        >
          {profile.name.split(" ")[0]}
          <span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={pin}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-brand"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            asChild
            className="ml-1 hidden sm:inline-flex"
          >
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
              <ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </Button>
          <MobileMenu active={active} />
        </div>
      </Container>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-brand"
      />
    </motion.header>
  );
}
