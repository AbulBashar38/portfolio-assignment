import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ContactDetails } from "@/components/sections/contact/contact-details";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        id="contact"
        title="Let's build something."
        description="Open to new roles and interesting projects. Tell me what you're working on — I usually reply within a day or two."
      />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <ContactDetails />
        </Reveal>
      </div>
    </Section>
  );
}
