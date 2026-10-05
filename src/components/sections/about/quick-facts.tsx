import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

const current = experience.find((role) => role.current) ?? experience[0];
const studying = education.find((entry) => entry.current) ?? education[0];

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Currently", value: `${current.role} at ${current.company}` },
  { label: "Studying", value: `${studying.field}, ${studying.institution}` },
  { label: "Focus", value: profile.focus.join(" · ") },
  { label: "Languages", value: profile.languages.join(", ") },
];

export function QuickFacts() {
  return (
    <Stagger as="div" className="mt-12 border-t">
      <dl>
        {facts.map((fact) => (
          <StaggerItem
            key={fact.label}
            className="grid grid-cols-[7rem_1fr] gap-4 border-b py-4 sm:grid-cols-[9rem_1fr]"
          >
            <dt className="pt-0.5 font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
              {fact.label}
            </dt>
            <dd className="text-sm md:text-base">{fact.value}</dd>
          </StaggerItem>
        ))}
      </dl>
    </Stagger>
  );
}
