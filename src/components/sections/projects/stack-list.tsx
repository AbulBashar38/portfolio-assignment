import { cn } from "@/lib/utils";

/** Inline tech list in small caps, separated by slashes. */
export function StackList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap gap-x-2 gap-y-1 font-mono text-[0.6875rem] tracking-[0.15em] text-muted-foreground uppercase",
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-2">
          {item}
          {index < items.length - 1 && (
            <span aria-hidden className="text-brand">
              /
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
