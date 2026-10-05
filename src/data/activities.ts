import type { Achievement, Activity } from "@/types";

export const activities: Activity[] = [
  {
    id: "bangladesh-archive-2024",
    organization: "Bangladesh Archive 2024",
    role: "Frontend Team Lead",
    period: "Aug 2024 — Present",
    description:
      "Leading the frontend team of an open-source archive preserving 24,000+ verified records of the July 2024 Movement.",
  },
  {
    id: "ieee-cs-seu",
    organization: "IEEE Computer Society, SEU Student Branch Chapter",
    role: "Wing Head, Content & Publication",
    period: "2025 — Present",
  },
  {
    id: "youth-for-today",
    organization: "Youth for Today",
    role: "Board Member & Head of IT",
    period: "Mar 2025 — Present",
  },
  {
    id: "southeast-computer-club",
    organization: "Southeast University Computer Club",
    role: "Executive Member",
    period: "Jan 2026 — Present",
  },
];

export const achievements: Achievement[] = [
  {
    id: "employee-of-the-year",
    title: "Employee of the Year",
    issuer: "Seaclub",
    year: "2024",
    description:
      "Recognized for performance, dedication and contributions to the development team.",
    image: {
      src: "/images/certificates/seaclub-employee-of-the-year.webp",
      alt: "Seaclub Employee of the Year certificate",
      width: 800,
      height: 598,
    },
  },
  {
    id: "seu-computer-club",
    title: "Secretary of IT & Infrastructure",
    issuer: "Southeast University Computer Club",
    year: "2025",
    description:
      "Managed IT infrastructure and technical operations for the university computer club.",
    image: {
      src: "/images/certificates/seu-computer-club.webp",
      alt: "Southeast University Computer Club appointment certificate",
      width: 1200,
      height: 1200,
    },
  },
  {
    id: "agentx-competition",
    title: "AgentX Competition",
    issuer: "Netcom Learning",
    year: "2025",
    description: "Completed the AgentX developer competition.",
    image: {
      src: "/images/certificates/netcom-agentx-competition.webp",
      alt: "Netcom Learning AgentX competition certificate",
      width: 1200,
      height: 849,
    },
  },
  {
    id: "agentx-prompt-engineering",
    title: "AI + Prompt Engineering, Level 1",
    issuer: "AgentX",
    year: "2025",
    description:
      "Prompt engineering techniques for AI-assisted development.",
    image: {
      src: "/images/certificates/agentx-prompt-engineering.webp",
      alt: "AgentX AI and Prompt Engineering Level 1 certificate",
      width: 800,
      height: 580,
    },
  },
  {
    id: "microsoft-365",
    title: "Introduction to Microsoft 365",
    issuer: "Microsoft",
    year: "2025",
    description:
      "Foundational training on Microsoft 365 tools and productivity applications.",
    image: {
      src: "/images/certificates/microsoft-365.webp",
      alt: "Microsoft Introduction to Microsoft 365 certificate",
      width: 800,
      height: 548,
    },
  },
  {
    id: "programming-hero",
    title: "Complete Web Development",
    issuer: "Programming Hero",
    year: "2021",
    description:
      "Full-stack web development course covering React, Node.js and MongoDB.",
    image: {
      src: "/images/certificates/programming-hero.webp",
      alt: "Programming Hero Complete Web Development certificate",
      width: 1200,
      height: 928,
    },
  },
];
