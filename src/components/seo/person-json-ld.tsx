import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

/** schema.org Person data so search engines understand who the page is about. */
export function PersonJsonLd() {
  const current = experience.find((role) => role.current);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    url: siteUrl,
    image: new URL(profile.portrait.src, siteUrl).toString(),
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    worksFor: current && { "@type": "Organization", name: current.company },
    alumniOf: education.map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.institution,
    })),
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Frontend architecture",
    ],
    sameAs: profile.socials.map((social) => social.href),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
