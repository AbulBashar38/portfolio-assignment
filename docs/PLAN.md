# Build Plan

One step at a time. Each step = several small commits. Tick a box when its step is done.
Deadline: **9 October 2026, 11:59 PM**.

## Phase 1 — Foundation

- [x] **Step 0 — Project docs.** Build plan and project guidelines.
- [x] **Step 1 — Scaffold.** Next.js + TypeScript + Tailwind + ESLint at repo root with pnpm; strip boilerplate; base README.
- [x] **Step 2 — Design system.** Fonts via `next/font`, color tokens (light/dark), Tailwind theme, globals, shadcn init + `cn` util, theme provider.
- [x] **Step 3 — Content layer.** Types + `src/data/*` (profile, education, experience, activities, projects, skills, achievements); copy needed images into `public/images/`.
- [x] **Step 4 — Layout primitives.** Container, Section wrapper with numbered label, SectionHeading, motion wrappers (`Reveal`, `Stagger`), reduced-motion support.

## Phase 2 — Sections

- [x] **Step 5 — Navbar.** Sticky header, smooth-scroll anchors, active-section highlight, mobile Sheet menu, theme toggle.
- [x] **Step 6 — Home / Hero.** Name, role, short pitch, CTAs (projects, resume), social links, portrait, animated headline, subtle shapes.
- [x] **Step 7 — About Me.** Bio, photo, quick facts, animated stats counters.
- [x] **Step 8 — Education.** Degrees (SEU, Polytechnic) with CGPA, period, location; certifications.
- [x] **Step 9 — Skills.** Grouped categories (frontend, backend, architecture, quality, tools, leadership), tech marquee, hover states — no percentage bars.
- [x] **Step 10 — Projects.** Featured project layout + grid, tags, live links, detail Dialog with screenshot gallery, challenge/solution/results.
- [ ] **Step 11 — Experience & Activities.** Work timeline with highlights; leadership/volunteer activities; achievements & certificates.
- [ ] **Step 12 — Contact & Footer.** Contact form (validated) + direct email/phone/location/socials, copy-email, footer with back-to-top.

## Phase 3 — Polish & ship

- [ ] **Step 13 — Motion pass.** Tune page-load sequence, scroll reveals, hover/micro-interactions consistently across sections.
- [ ] **Step 14 — Responsive & a11y QA.** Test 375 / 768 / 1280 / 1440, keyboard nav, focus, contrast, alt text; fix issues.
- [ ] **Step 15 — SEO & performance.** Metadata, OG image, favicon/manifest, sitemap/robots, 404 page, image optimization, Lighthouse pass.
- [ ] **Step 16 — Deploy.** Final README, push to public GitHub, deploy on Vercel, add live link to README.
- [ ] **Step 17 — Presentation assets.** Desktop + mobile screenshots of each section for the Google Slides deck; outline of slide content (requirements, stack, features, challenges, future work).
