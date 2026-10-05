import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-8 px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        01 — Home
      </p>
      <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
        {profile.name}
        <span className="block italic text-brand">{profile.role}</span>
      </h1>
      <p className="max-w-[60ch] text-lg text-muted-foreground">
        {profile.summary}
      </p>
      <div className="flex gap-3">
        <Button size="lg">View projects</Button>
        <Button size="lg" variant="outline">
          Contact
        </Button>
      </div>
    </main>
  );
}
