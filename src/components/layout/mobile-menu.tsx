"use client";

import { MenuIcon } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { sectionNumber } from "@/lib/sections";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

export function MobileMenu({ active }: { active: SectionId }) {
  const [open, setOpen] = useState(false);
  // Scrolling while the sheet's scroll lock is active does nothing,
  // so remember the target and scroll once the sheet has closed.
  const target = useRef<SectionId | null>(null);

  function navigate(id: SectionId) {
    target.current = id;
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full gap-0 sm:max-w-sm"
        onCloseAutoFocus={(event) => {
          if (!target.current) return;
          event.preventDefault();
          document.getElementById(target.current)?.scrollIntoView();
          history.replaceState(null, "", `#${target.current}`);
          target.current = null;
        }}
      >
        <div className="border-b px-6 pt-5 pb-4">
          <SheetTitle className="font-display text-2xl font-normal">
            {profile.name}
          </SheetTitle>
          <SheetDescription className="font-mono text-xs uppercase tracking-[0.2em]">
            {profile.role}
          </SheetDescription>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
          <motion.ul
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
            className="flex flex-col"
          >
            {navigation.map((item) => (
              <motion.li
                key={item.id}
                variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(item.id);
                  }}
                  aria-current={active === item.id ? "location" : undefined}
                  className={cn(
                    "flex items-baseline gap-4 border-b py-3 font-display text-4xl tracking-tight transition-colors",
                    active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="font-mono text-xs text-brand">{sectionNumber(item.id)}</span>
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="flex flex-col gap-3 border-t px-6 py-5 text-sm">
          <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground">
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-brand"
            >
              Resume
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
