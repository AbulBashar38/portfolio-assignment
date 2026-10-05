export type SectionId =
  | "home"
  | "about"
  | "education"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type SocialPlatform = "github" | "linkedin" | "x" | "website";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  handle: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  summary: string;
  bio: string[];
  email: string;
  phone: string;
  location: string;
  availability: string;
  focus: string[];
  languages: string[];
  resumeUrl: string;
  portrait: ImageAsset;
  aboutPhoto: ImageAsset;
  socials: SocialLink[];
  stats: Stat[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  location: string;
  current?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
}

export interface Activity {
  id: string;
  organization: string;
  role: string;
  period: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: ImageAsset;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  year: number;
  role: string;
  client: string;
  duration: string;
  featured?: boolean;
  liveUrl?: string;
  stack: string[];
  overview: string[];
  challenge: string;
  solution: string;
  results: string[];
  contributions: string[];
  cover: ImageAsset;
  gallery: ImageAsset[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
}
