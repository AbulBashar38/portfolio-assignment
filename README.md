# Abul Basar — Portfolio

A single-page personal portfolio built with Next.js. It presents my background, education, skills, projects, experience and contact details in one responsive, animated page.

## Sections

Home · About Me · Education · Skills · Projects · Experience & Activities · Contact

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4 with light / dark theme tokens
- [shadcn/ui](https://ui.shadcn.com) on Radix primitives
- next-themes, lucide-react
- Fonts: Instrument Serif, Geist, Geist Mono (via `next/font`)
- ESLint

## Editing content

All text and image references live in `src/data/`. Update those files to change what the site shows — components never hardcode personal details.

## Getting started

Requires Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

| Command      | Description                  |
| ------------ | ---------------------------- |
| `pnpm dev`   | Start the development server |
| `pnpm build` | Create a production build    |
| `pnpm start` | Serve the production build   |
| `pnpm lint`  | Run ESLint                   |

## Project structure

```text
src/
  app/          root layout, page and global styles
  components/
    ui/         shadcn/ui primitives
    providers/  theme provider
  data/         all site content (profile, education, experience, projects, skills…)
  lib/          shared utilities
  types/        shared TypeScript types
public/
  images/       profile photos, project screenshots, certificates (WebP)
docs/
  PLAN.md       build plan and progress
```
