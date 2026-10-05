import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Abul Basar",
  role: "Senior Frontend Engineer",
  headline:
    "Frontend engineer building scalable, high-performance web applications.",
  summary:
    "I build web applications with React, Next.js and TypeScript, lead frontend teams, and ship production systems across Web3, healthcare, SaaS and eCommerce.",
  bio: [
    "I'm a frontend engineer with more than four years of experience building web applications, leading frontend teams and turning product ideas into production systems. My work spans Web3 marketplaces, AI-driven healthcare platforms, SaaS products and eCommerce — platforms that together serve over 10,000 users.",
    "My core is React, Next.js, TypeScript and Redux Toolkit, with a focus on frontend architecture and performance. On the backend I work with Node.js, Express, MongoDB, PostgreSQL, Prisma and Socket.IO, so I can carry a feature from the database to the interface.",
    "Beyond writing code, I enjoy designing component systems, mentoring engineers and working closely with product and design to ship software that holds up in production. I'm currently studying Computer Science & Engineering at Southeast University alongside my work.",
  ],
  email: "abulbasarofficial5403@gmail.com",
  phone: "+880 1908 899996",
  location: "Dhaka, Bangladesh",
  availability: "Available for new opportunities",
  focus: ["Frontend architecture", "Performance", "Team leadership"],
  languages: ["Bengali", "English"],
  resumeUrl:
    "https://drive.google.com/file/d/1r5lye-VSh5gaexeSSUXiTjK48lcESKW8/view?usp=sharing",
  portrait: {
    src: "/images/profile/portrait.webp",
    alt: "Portrait of Abul Basar in a navy blazer",
    width: 951,
    height: 942,
  },
  aboutPhoto: {
    src: "/images/profile/about.webp",
    alt: "Abul Basar smiling outdoors",
    width: 810,
    height: 1125,
  },
  socials: [
    {
      platform: "github",
      label: "GitHub",
      handle: "AbulBashar38",
      href: "https://github.com/AbulBashar38",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      handle: "abulbashar5403",
      href: "https://www.linkedin.com/in/abulbashar5403/",
    },
    {
      platform: "x",
      label: "X",
      handle: "@basarofficial54",
      href: "https://x.com/basarofficial54",
    },
    {
      platform: "website",
      label: "Website",
      handle: "abulbasar.dev",
      href: "https://www.abulbasar.dev/",
    },
  ],
  stats: [
    { value: 4, suffix: "+", label: "Years of experience" },
    { value: 10, suffix: "K+", label: "Users served" },
    { value: 10, suffix: "+", label: "Engineers mentored" },
    { value: 30, suffix: "+", label: "Developers coordinated" },
  ],
};
