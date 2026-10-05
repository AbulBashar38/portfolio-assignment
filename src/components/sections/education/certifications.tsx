import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { certifications } from "@/data/education";

export function Certifications() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-12">
      <Reveal className="md:col-span-3">
        <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Courses & certificates
        </h3>
      </Reveal>

      <Stagger as="ol" className="grid gap-x-10 sm:grid-cols-2 md:col-span-9">
        {certifications.map((certification, index) => (
          <StaggerItem
            as="li"
            key={certification.title}
            className="flex gap-4 border-b py-5"
          >
            <span className="pt-1 font-mono text-[0.6875rem] text-brand tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-base">{certification.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {certification.issuer}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
