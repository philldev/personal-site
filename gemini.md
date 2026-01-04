# Project Context: Personal Site

Personal portfolio website for Deddy Wolley.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4, Motion (Framer Motion)
- **UI Components:** Shadcn UI (New York style)
- **Icons:** Lucide React (current), Hugeicons (preferred)
- **Fonts:** Geist Sans & Mono (current), Figtree (preferred)
- **Language:** TypeScript

## Architecture & Conventions
- **Routing:** Next.js App Router (`app/` directory).
- **Components:** 
  - Shared components in `components/`.
  - UI primitives in `components/ui/` (managed by Shadcn CLI).
- **Utilities:** Utility functions in `lib/utils.ts`.
- **Styling:** 
  - Uses Tailwind CSS 4 with `@theme` block in `app/globals.css`.
  - OKLCH color space for theme variables.
  - Dark mode is default (forced via `className="dark"` in `layout.tsx`).
  - Uses gradients for background depth (Amber/Slate/Blue).

## Style Guidelines
- **Theme:** Maia style with Orange/Amber accents.
- **Typography:** Modern and clean. `Figtree` font is the preferred sans-serif font.
- **Animations:** Use `motion` for fluid transitions. The `Typewriter` component is used for hero text.
- **Design Philosophy:** Minimalist, high contrast (dark mode), with atmospheric gradients.

## Key Files
- `app/layout.tsx`: Root layout with global navigation, footer, and background gradients.
- `app/page.tsx`: Main landing page content.
- `app/globals.css`: Tailwind 4 configuration and theme variables.
- `components/typewriter.tsx`: Custom typewriter effect using Framer Motion.

## Ongoing Tasks
- [ ] Add typewriter effect to the h1 text in `app/page.tsx`.
