import type { ImageAsset, Project } from "@/types";

function shot(
  project: string,
  file: string,
  alt: string,
  height = 1000,
): ImageAsset {
  return {
    src: `/images/projects/${project}/${file}.webp`,
    alt,
    width: 1600,
    height,
  };
}

const archive = {
  hero: shot("bangladesh-archive", "hero", "Bangladesh Archive home page"),
  video: shot("bangladesh-archive", "video", "Bangladesh Archive video archive page"),
  podcast: shot("bangladesh-archive", "podcast", "Bangladesh Archive podcast page"),
  martyrs: shot("bangladesh-archive", "martyrs", "Bangladesh Archive martyrs memorial page"),
};

const ostool = {
  hero: shot("ostool-ai", "hero", "Ostool AI marketing site hero"),
  platform: shot("ostool-ai", "platform", "Ostool AI rental management platform overview"),
  blog: shot("ostool-ai", "blog", "Ostool AI blog page"),
  why: shot("ostool-ai", "why", "Ostool AI feature highlights section"),
  join: shot("ostool-ai", "join", "Ostool AI sign-up call to action"),
};

const ventureFly = {
  hero: shot("venture-fly-ai", "hero", "Venture Fly AI landing page"),
  features: shot("venture-fly-ai", "features", "Venture Fly AI features section"),
  form: shot("venture-fly-ai", "form", "Venture Fly AI guided validation form"),
  result: shot("venture-fly-ai", "result", "Venture Fly AI validation report"),
};

const roadMobility = {
  hero: shot("road-mobility", "hero", "Road Mobility landing page", 825),
  home: shot("road-mobility", "home", "Road Mobility analytics dashboard", 903),
  chart: shot("road-mobility", "chart", "Road Mobility VMT chart view", 904),
  profile: shot("road-mobility", "profile", "Road Mobility user profile page", 902),
};

const scheduleBuddy = {
  one: shot("schedule-buddy", "screen-1", "Schedule Buddy user directory with appointment buttons", 788),
  two: shot("schedule-buddy", "screen-2", "Schedule Buddy appointment list with status filters", 762),
  three: shot("schedule-buddy", "screen-3", "Schedule Buddy requested appointments awaiting approval", 759),
};

const seaclub = {
  home: shot("seaclub-marketplace", "home", "Seaclub marketplace home page", 784),
  profile: shot("seaclub-marketplace", "profile", "Seaclub provider profile page", 784),
  team: shot("seaclub-marketplace", "team", "Seaclub team page", 784),
};

export const projects: Project[] = [
  {
    id: "bangladesh-archive",
    title: "Bangladesh Archive 2024",
    summary:
      "A public archive preserving evidence of the July 2024 Movement — 24,000+ verified records across public, admin and data-collection apps.",
    year: 2024,
    role: "Frontend Team Lead",
    client: "Open-source initiative",
    duration: "Aug 2024 — Present",
    featured: true,
    liveUrl: "https://bangladesh2024.info",
    stack: ["Next.js", "React", "Redux", "Tailwind CSS", "shadcn/ui", "WebSockets"],
    overview: [
      "Bangladesh Archive collects, verifies and preserves large-scale social media content from the July 2024 Movement to keep a historically accurate, publicly accessible record.",
      "The project runs on 300+ contributors across frontend, backend, data collection, PR and project management, and is made up of three connected apps: a data-collection tool for automated ingestion, an admin dashboard for verification, and the public archive.",
    ],
    challenge:
      "Preserve evidence at scale while keeping UI and UX consistent across three applications built by a large, distributed contributor base.",
    solution:
      "Defined a shared design system, a modular Next.js architecture and a review workflow, then built the ingestion, admin and public apps with real-time updates.",
    results: [
      "24,000+ verified records preserved",
      "300+ contributors working from one UI system",
      "Three production apps shipped",
    ],
    contributions: [
      "Led and mentored a distributed frontend team inside a 300+ contributor project",
      "Built a Next.js app that handles large media files and high traffic",
      "Implemented the UI with Tailwind CSS and shadcn/ui for consistency and accessibility",
      "Built the data-collection app for automated social media ingestion",
      "Built the React + Redux admin dashboard for verification workflows",
      "Integrated REST APIs and WebSockets for real-time updates",
      "Set code review standards that raised overall code quality",
    ],
    cover: archive.hero,
    gallery: [archive.hero, archive.video, archive.podcast, archive.martyrs],
  },
  {
    id: "ostool-ai",
    title: "Ostool AI",
    summary:
      "An Arabic-first car rental system: a Payload CMS marketing site paired with a Next.js fleet and reservation management platform.",
    year: 2024,
    role: "Lead Frontend Engineer",
    client: "Ostool AI",
    duration: "2024",
    featured: true,
    liveUrl: "https://ostool.ai/en",
    stack: ["Next.js 15", "Payload CMS", "Redux Toolkit", "NextAuth", "next-intl", "Tailwind CSS", "Chart.js"],
    overview: [
      "Ostool AI gives rental companies one application to manage fleet, reservations, contracts, customers and maintenance, alongside a CMS-driven site for customer acquisition.",
      "It includes inventory management, booking flows, customer profiles, service records, role-based permissions, analytics dashboards with XLSX/PDF export, and full RTL/LTR support.",
    ],
    challenge:
      "Deliver two products — a CMS site and a SaaS platform — with Arabic-first UX, role-based operations and reliable reporting.",
    solution:
      "Built the Payload CMS site and an App Router platform with RTL-safe layouts, authentication, analytics dashboards and export workflows.",
    results: [
      "Arabic-first UX across site and app",
      "Rental workflows with roles and permissions",
      "CMS and platform shipped together",
    ],
    contributions: [
      "Designed and built the Payload CMS marketing site",
      "Built the core rental application with the Next.js App Router",
      "Implemented Arabic-first localization and RTL-safe layouts",
      "Architected Redux state for complex business domains",
      "Built dashboards, analytics and export workflows",
    ],
    cover: ostool.hero,
    gallery: [ostool.hero, ostool.platform, ostool.why, ostool.blog, ostool.join],
  },
  {
    id: "venture-fly-ai",
    title: "Venture Fly AI",
    summary:
      "An AI-assisted platform that walks founders through idea validation and produces structured, decision-ready reports.",
    year: 2024,
    role: "Full-Stack Engineer",
    client: "Venture Fly",
    duration: "4 months",
    featured: true,
    liveUrl: "https://ventureflyai.com",
    stack: ["Next.js 15", "React 19", "Node.js", "MongoDB", "Mongoose", "TanStack Query", "Tailwind CSS"],
    overview: [
      "Venture Fly AI helps entrepreneurs validate business ideas before investing time and money, assessing both the founder and the idea through personality and skills assessment plus AI-assisted market analysis.",
      "The flow moves from a public landing page through secure sign-in and a guided, backend-enforced validation process to a dashboard of structured reports.",
    ],
    challenge:
      "Make idea validation rigorous rather than generic, while keeping the experience guided and enforceable.",
    solution:
      "Built structured onboarding, backend-enforced progression and dashboards that surface AI-generated validation results.",
    results: [
      "Decision-ready validation reports",
      "Backend-enforced guided flow",
      "Clear founder–idea fit assessment",
    ],
    contributions: [
      "Built the entire frontend: onboarding, dashboards and validation flows",
      "Designed and implemented the Node.js + MongoDB backend",
      "Created Mongoose schemas and REST APIs",
      "Kept frontend routing and backend validation in sync",
    ],
    cover: ventureFly.hero,
    gallery: [ventureFly.hero, ventureFly.features, ventureFly.form, ventureFly.result],
  },
  {
    id: "road-mobility",
    title: "Road Mobility",
    summary:
      "A real-time U.S. mobility and vehicle-miles-traveled analytics platform with authenticated, export-ready dashboards.",
    year: 2024,
    role: "Frontend Engineer",
    client: "Road Mobility",
    duration: "3 months",
    featured: true,
    liveUrl: "https://road-mobility-five.vercel.app/v2/home",
    stack: ["Next.js 14", "TanStack Query", "Chart.js", "NextAuth", "MySQL", "Tailwind CSS"],
    overview: [
      "Road Mobility tracks near-real-time vehicle mobility and Vehicle Miles Traveled (VMT) across the United States, combining actual mobility signals with forecasts.",
      "Historical models broke down during COVID-era disruptions; Road Mobility gives energy, transportation and demand-forecasting teams faster indicators by region, motive and frequency.",
    ],
    challenge:
      "Surface mobility and VMT insights quickly, with role-based access and consistent chart and table views.",
    solution:
      "Built the landing site and an authenticated dashboard with role-aware routing and paired chart/table views powered by React Query.",
    results: [
      "Real-time mobility and VMT dashboards",
      "Role- and verification-based access",
      "Export-friendly analytics views",
    ],
    contributions: [
      "Shaped the product narrative for the public site",
      "Built the analytics dashboard with filters, charts and tables",
      "Implemented role- and verification-based access control",
      "Integrated actual vs. forecast mobility and VMT APIs",
      "Tuned client-side caching with React Query",
    ],
    cover: roadMobility.hero,
    gallery: [roadMobility.hero, roadMobility.home, roadMobility.chart, roadMobility.profile],
  },
  {
    id: "seaclub-marketplace",
    title: "Seaclub Marketplace",
    summary:
      "A Web3 marketplace connecting service providers and clients, built from scratch to production over two years.",
    year: 2024,
    role: "Lead Frontend Engineer",
    client: "Seaclub",
    duration: "2+ years",
    stack: ["Next.js", "Redux", "Tailwind CSS", "Web3", "REST APIs"],
    overview: [
      "Seaclub is a decentralized marketplace that connects service providers and clients within a blockchain ecosystem.",
      "I led an international frontend team through the full lifecycle, building a responsive platform with custom image cropping, animation and REST API integrations.",
    ],
    challenge:
      "Build a secure, responsive Web3 marketplace from scratch with blockchain integrations.",
    solution:
      "Led an international team to build the platform end to end, with custom image tooling, animations and API integrations.",
    results: [
      "Shipped from concept to production",
      "Led a team across multiple countries",
      "Employee of the Year recognition",
    ],
    contributions: [
      "Built the frontend architecture from scratch",
      "Implemented custom image cropping and animation systems",
      "Integrated REST APIs for blockchain interactions",
      "Set code standards and review processes",
    ],
    cover: seaclub.home,
    gallery: [seaclub.home, seaclub.profile, seaclub.team],
  },
  {
    id: "schedule-buddy",
    title: "Schedule Buddy",
    summary:
      "An appointment scheduling app: find people, request a meeting, and track it from pending to approved.",
    year: 2023,
    role: "Full-Stack Developer",
    client: "Personal project",
    duration: "2 months",
    liveUrl: "https://schedule-buddy-app.web.app",
    stack: ["React", "TypeScript", "Firebase", "Material UI"],
    overview: [
      "Schedule Buddy lets users browse a directory of people, request appointments, and manage incoming and outgoing requests with status filters for upcoming and past meetings.",
      "Firebase handles authentication and keeps appointment data in sync in real time across devices.",
    ],
    challenge:
      "Make booking and approving appointments between users simple and transparent.",
    solution:
      "A dashboard with separate views for people, my appointments and requests, backed by Firebase authentication and a real-time database.",
    results: ["Real-time sync", "Cross-device support", "Clear approval workflow"],
    contributions: [
      "Designed and built the app end to end",
      "Implemented Firebase authentication and real-time data",
      "Built the responsive UI with Material UI",
    ],
    cover: scheduleBuddy.one,
    gallery: [scheduleBuddy.one, scheduleBuddy.two, scheduleBuddy.three],
  },
];
