import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "recog-technologies",
    company: "Recog Technologies",
    role: "Software Engineer",
    period: "Jun 2025 — Present",
    summary:
      "Working across frontend and backend on a UK-based healthcare management platform serving around 12,000 users, with a focus on performance, layered architecture and production-ready deployments.",
    highlights: [
      "Improved frontend performance and Lighthouse scores for the healthcare platform",
      "Restructured legacy Laravel-based modules using a layered frontend architecture",
      "Built backend features with Node.js and Express, including API integrations and business logic",
      "Built and maintained responsive React applications",
      "Contributed to both frontend and backend of an eCommerce system (Laravel + React)",
    ],
    stack: ["React", "Node.js", "Express", "Laravel"],
    current: true,
  },
  {
    id: "akbar-tech-consultancy",
    company: "Akbar Tech Consultancy",
    role: "Senior Frontend Engineer",
    period: "Apr 2024 — Jun 2025",
    summary:
      "Led frontend development for dashboard applications used by 1,000–2,000 active users, delivering UI for UK-based clients and mentoring the frontend team.",
    highlights: [
      "Led frontend development for dashboards serving 1K–2K active users",
      "Improved performance through memoization, optimized rendering and API handling",
      "Mentored a team of 5 frontend engineers, improving code quality and delivery",
      "Integrated Stripe payments and the Google Places API",
      "Established coding practices and a shared component structure across the team",
    ],
    stack: ["React", "Stripe", "Google Places API"],
  },
  {
    id: "seaclub",
    company: "Seaclub",
    role: "Lead Frontend Engineer & Team Lead",
    period: "Jan 2022 — Apr 2024",
    summary:
      "Led a distributed team of 6 frontend engineers across multiple countries, building a Web3 marketplace from scratch for 5,000–10,000 users.",
    highlights: [
      "Built the platform from scratch with Next.js, Redux and Tailwind CSS",
      "Improved SEO and performance using SSR, ISR and SSG",
      "Designed a scalable frontend architecture and enforced best practices",
      "Built complex features including custom image-processing tools and dynamic user flows",
      "Recognized as Employee of the Year",
    ],
    stack: ["Next.js", "Redux", "Tailwind CSS", "Web3"],
  },
];
