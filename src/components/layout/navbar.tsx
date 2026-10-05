"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "motion/react";

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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
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
          <MobileMenu active={active} />
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden sm:inline-flex"
          >
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
              <ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}
