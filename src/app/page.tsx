import { About } from "@/components/sections/about/about";
import { Contact } from "@/components/sections/contact/contact";
import { Education } from "@/components/sections/education/education";
import { Experience } from "@/components/sections/experience/experience";
import { Hero } from "@/components/sections/hero/hero";
import { Projects } from "@/components/sections/projects/projects";
import { Skills } from "@/components/sections/skills/skills";
import { PersonJsonLd } from "@/components/seo/person-json-ld";

export default function Home() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <PersonJsonLd />
    </main>
  );
}
