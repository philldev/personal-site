# Deddy Wolley — personal site

Next.js 15 App Router, React 19, Tailwind CSS 4, and a self-hosted Aspekta variable font. The responsive light/dark design follows the supplied Paper JSX exports.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Theme follows the system preference until the visitor chooses one; the selection persists in local storage. The dark-mode control uses the supplied moon SVG.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

## Content and assets

- Homepage copy, project summaries, and experience: `app/page.tsx`.
- Case studies: `lib/projects.ts`; existing `/work` and `/work/[slug]` routes are preserved.
- Colors and responsive layout: `app/globals.css`.
- Portrait: `public/images/portrait.webp`, compressed from the owner-supplied high-resolution photograph.
- Project markers and case-study illustrations are local vector/CSS assets. The illustrations describe the work; they are not product screenshots.
- Aspekta font and its SIL Open Font License: `public/fonts/`.

## GitHub activity

`lib/github.ts` reads the public GitHub contribution calendar server-side, caches requests for one hour, and validates all days before displaying them. It needs no token. If GitHub is unavailable or its markup changes, the site shows the real saved calendar in `lib/github-snapshot.json`, clearly labeled with its saved date. No simulated contributions are shown. Only contributions exposed on the public profile are available.

The desktop grid shows the past year; mobile shows the latest 26 weeks. Each cell exposes a date and count through its native tooltip, and the chart has an accessible text summary.

## Motion

Paper's dithering shaders are loaded near the viewport and pause offscreen, when the tab is hidden, or when reduced motion is requested. CSS provides a static fallback if WebGL cannot render. Shader backgrounds share the exact panel colors in both themes.

Vercel Analytics runs on production Vercel deployments. There are no required environment variables.

## Dependency maintenance

Next.js and its lint config are aligned at 15.5.28. A compatible PostCSS override (8.5.31) patches the framework's older transitive version. The remaining audit findings affect the lint toolchain (`braces` through `fast-glob`) and the typography build plugin (`postcss-selector-parser`); no forced major-version changes have been applied.

Copy decisions and remaining content recommendations: [Copy audit](docs/copy-audit.md).

### Section entrances

`components/section-entrances.tsx` uses native browser animations and intersection observers for one-time blur/fade/lift entrances with staggered work and experience rows, inspired by the Echo reference. Content remains visible without JavaScript. Reduced motion shows everything immediately. No animation dependency is required.

## Launch metadata, icons, and motion controls

Route-specific social metadata is shared through `lib/site-metadata.ts`; this also defines the canonical hostname used by the sitemap and robots file. Requests to the apex hostname redirect permanently to `www` while keeping the path. Verify HTTPS and provider-level indexing headers on the actual production deployment.

The monochrome dithered sphere favicon is path-based SVG, with an ICO containing 16/32/48px images and a 180px Apple touch icon. Both artwork sections expose keyboard-accessible Pause/Play controls; reduced-motion visitors receive static artwork without controls. AMild's result copy describes pre-rendered HTML and ISR rather than unmeasured improvements.
