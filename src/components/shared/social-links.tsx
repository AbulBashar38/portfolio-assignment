import { ArrowUpRightIcon } from "lucide-react";

import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Text-based social links with an arrow that nudges on hover. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-3", className)}>
      {profile.socials.map((social) => (
        <li key={social.platform}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${social.label} (${social.handle})`}
            className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
              {social.label}
            </span>
            <ArrowUpRightIcon className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
