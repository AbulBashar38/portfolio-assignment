import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Infinite horizontal scroller. The content is rendered twice and shifted by
 * half its width, so the loop is seamless. Pauses on hover.
 */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        className={cn(
          "flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
