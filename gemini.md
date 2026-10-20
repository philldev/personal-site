# Project context: personal site

Personal portfolio for Deddy Wolley. Follow the supplied Paper design exports: a centered 640px content panel, Aspekta typography, light/dark themes, monochrome dithering, and green GitHub activity.

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4.
- Custom components in `components/`; shadcn and Radix are no longer used.
- Shared theme and responsive styles: `app/globals.css`.
- Fonts: self-hosted Aspekta variable font in `public/fonts/`, with its license.
- Theme follows system preference until overridden locally. Use the supplied moon SVG in dark mode.
- Homepage copy and experience: `app/page.tsx`. Case studies: `lib/projects.ts`.
- GitHub activity: server-side, cached public calendar with a dated real snapshot fallback. Never substitute fabricated activity.
- Paper dithering shaders use exact panel backgrounds, respect reduced motion, and pause when offscreen.
- Preserve `/work` and `/work/[slug]` routes.
- Use npm and `package-lock.json`; see README for verification commands.
