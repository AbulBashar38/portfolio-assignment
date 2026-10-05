import type { Certification, Education } from "@/types";

export const education: Education[] = [
  {
    id: "southeast-university",
    institution: "Southeast University",
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    period: "2024 — 2027",
    grade: "3.75",
    gradeScale: "4.00",
    location: "Tejgaon, Dhaka",
    current: true,
  },
  {
    id: "shyamoli-ideal-polytechnic",
    institution: "Shyamoli Ideal Polytechnic Institute",
    degree: "Diploma in Engineering",
    field: "Electrical Technology",
    period: "2019 — 2024",
    grade: "3.87",
    gradeScale: "4.00",
    location: "Mohammadpur, Dhaka",
  },
];

export const certifications: Certification[] = [
  { title: "Reactive Accelerator", issuer: "Learn with Sumit" },
  { title: "Complete Web Development", issuer: "Programming Hero" },
  { title: "AI + Prompt Engineering, Level 1", issuer: "AgentX" },
  { title: "Introduction to Microsoft 365", issuer: "Microsoft" },
];
