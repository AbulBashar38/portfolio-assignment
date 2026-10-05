"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillGroups } from "@/data/skills";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Skill groups as a numbered index. On desktop, hovering a group previews it;
 * clicking, tapping and arrow keys work everywhere.
 */
export function SkillsExplorer() {
  const [active, setActive] = useState(skillGroups[0].id);

  return (
    <Tabs
      value={active}
      onValueChange={setActive}
      orientation="vertical"
      className="grid gap-10 lg:grid-cols-12 lg:gap-8"
    >
      <TabsList
        variant="line"
        aria-label="Skill groups"
        className="-mx-5 flex h-auto w-auto [scrollbar-width:none] flex-row items-stretch justify-start gap-6 overflow-x-auto rounded-none p-0 px-5 max-lg:flex-row! sm:-mx-8 sm:px-8 lg:col-span-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {skillGroups.map((group, index) => {
          const isActive = active === group.id;
          return (
            <TabsTrigger
              key={group.id}
              value={group.id}
              onMouseEnter={() => setActive(group.id)}
              className="h-auto flex-none justify-start gap-3 rounded-none border-0 border-border px-0 py-3 text-left shadow-none after:hidden max-lg:w-auto! lg:gap-5 lg:border-b lg:py-5 data-active:bg-transparent dark:data-active:border-border dark:data-active:bg-transparent"
            >
              <span
                className={cn(
                  "font-mono text-[0.6875rem] tabular-nums transition-colors",
                  isActive ? "text-brand" : "text-muted-foreground",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "font-display text-2xl font-normal tracking-tight transition-[color,translate] duration-300 lg:text-4xl",
                  isActive
                    ? "text-foreground lg:translate-x-2"
                    : "text-muted-foreground",
                )}
              >
                {group.title}
              </span>
              <span className="ml-auto hidden font-mono text-[0.6875rem] text-muted-foreground tabular-nums lg:inline">
                ({String(group.skills.length).padStart(2, "0")})
              </span>
              {isActive && (
                <motion.span
                  layoutId="skills-indicator"
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="absolute inset-x-0 -bottom-px h-px bg-brand"
                />
              )}
            </TabsTrigger>
          );
        })}
      </TabsList>

      <div className="lg:col-span-6 lg:col-start-7 lg:pt-5">
        {skillGroups.map((group) => (
          <TabsContent key={group.id} value={group.id} className="text-base">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="font-display text-2xl leading-snug tracking-tight md:text-3xl"
            >
              {group.description}
            </motion.p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {group.skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.03,
                    ease: easeOut,
                  }}
                  className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-brand hover:text-brand"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
