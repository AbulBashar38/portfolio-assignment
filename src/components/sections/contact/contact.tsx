import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ContactDetails } from "@/components/sections/contact/contact-details";
import { ContactForm } from "@/components/sections/contact/contact-form";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        id="contact"
        title="Let's build something."
        description="Open to new roles and interesting projects — tell me what you're working on."
      />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <ContactDetails />
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
