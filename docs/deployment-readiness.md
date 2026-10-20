# Deployment readiness audit

## Fix-pass status — 20 October 2026

Implemented and locally verified:

- Per-route Open Graph and Twitter titles, descriptions, and canonical sharing URLs.
- Sitemap discovery in robots.txt and a permanent apex-to-www redirect that preserves the path.
- A specific AMild result describing pre-rendered HTML and ISR; aligned the homepage metadata and share image with the current senior role.
- Keyboard-accessible Pause/Play controls for both artwork sections; reduced motion remains static.
- A monochrome path-based DW SVG, 16/32/48px ICO, and 180px Apple touch icons; all icon endpoints return 200.
- Production build, lint, TypeScript, contribution-data tests, rendered metadata checks, redirect checks, motion-control checks, and automated accessibility checks pass.

Existing dates and role attribution remain as supplied rather than being guessed. Deployment itself has not been performed. HTTPS, provider indexing headers, real-host redirects, and Search Console submission still require the deployed production URL.

Final isolated local mobile Lighthouse run: **99 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**, with **2.2s LCP, 10ms TBT, and zero CLS**. This is one local lab result, not a production field measurement. The isolated report is `/private/tmp/site-revamp-preview/lighthouse-mobile-isolated.json`.

## Original audit snapshot

The findings below describe the pre-fix build and are retained as the audit record.

Audited 20 October 2026 against the local production build at `http://127.0.0.1:3000/`.

**Verdict: close to launch-ready; complete a small finishing pass before treating this as the final release.** No application changes or deployment were made during this audit.

## Verified baseline

- All five public pages return HTTP 200: home, work index, ONE UX, Premiro, and AMild.
- An unknown project returns HTTP 404 with `noindex`.
- Page titles, descriptions, and canonical URLs are unique and correct for the public routes.
- The sitemap contains all five public URLs, consistently using `https://www.deddywolley.com`.
- Homepage Person structured data is present; images load; tested mobile pages have no horizontal overflow.
- Lint, TypeScript, and all four contribution-data tests pass. The current production build passed on the preceding implementation pass.
- Normal shader animation and reduced-motion behavior pass browser checks. Content remains readable without JavaScript.

## Local mobile Lighthouse result

One simulated mobile run on the homepage, using Chrome against the production build:

| Category / metric | Result |
| --- | --- |
| Performance | 97 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| First Contentful Paint | 0.9s |
| Largest Contentful Paint | 2.4s |
| Total Blocking Time | 130ms |
| Cumulative Layout Shift | 0 |

These are local lab measurements, not production field Core Web Vitals. Lighthouse's SEO score does not validate route-specific social-sharing metadata. Raw local evidence is in `/private/tmp/site-revamp-preview/lighthouse-mobile.json` and `/private/tmp/site-revamp-preview/launch-audit.json`.

## 1. SEO

### Fix before promoting case studies: route-specific social metadata

The `/work` index and all three case studies inherit the homepage's Open Graph title, description, and URL. Twitter title and description also remain the homepage defaults. Their ordinary page titles/descriptions and canonicals are correct, but a shared project link does not describe that project in its social metadata.

**Recommendation:** define matching Open Graph and Twitter metadata for each route. Set each `og:url` to its canonical URL. Retain the working shared 1200×630 PNG initially; project-specific social images are optional polish.

Relevant code: `app/layout.tsx:24`, `app/work/page.tsx`, `app/work/[slug]/page.tsx`. Next.js documents metadata inheritance and shallow merging in its [metadata reference](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).

### Small discovery improvement: sitemap reference

`robots.txt` is valid and allows crawling, but does not reference the working sitemap.

**Recommendation:** include `Sitemap: https://www.deddywolley.com/sitemap.xml`. This improves discoverability; its absence does not make the pages unindexable. Google documents the robots.txt reference in its [sitemap guide](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

### Verify on the real deployment

Confirm HTTPS, the redirect from the alternate hostname to the chosen `www` canonical host, and that production does not receive a `noindex` response header. Then submit the sitemap in Search Console. Localhost cannot establish these hosting-level behaviors or whether Google has indexed the new release.

## 2. Final copy

**Status: publishable foundation; no placeholder paragraphs or invented numerical results found.** The homepage positioning, employer links, and case-study structure are clear. Smart Web correctly remains an unlinked summary.

Recommended final editorial checks:

- AMild's result says “improved performance and SEO” without supporting measurements. That outcome was supplied by the owner, but it remains broad. If measurements are unavailable, a more specific result is: “The revamp moved core page content into pre-rendered HTML and introduced ISR for content updates.” Keep performance/SEO phrased as the project's goal elsewhere.
- Confirm the carried-over ONE UX (2024), Premiro (2025), and employment dates. AMild's year is intentionally absent rather than guessed.
- Retain the distinction between ONE UX's shared platform and AMild's migration. Confirm their relationship before adding cross-links or implying they were separate achievements if they overlap.
- Confirm that Premiro's “sole frontend developer” wording accurately describes the owner's role; it is carried over from the existing project content.

Real product screenshots and measured outcomes would strengthen the stories, but are not needed to ship this version. Current case-study images are conceptual illustrations.

## 3. Animations

**Working:** short, one-time section entrances; reduced motion; no-JavaScript readability; lazy shader loading; offscreen/hidden-tab pause behavior in the implementation. Cursor and background effects have been removed.

**Recommended pre-launch change:** the two decorative shader sections loop automatically while visible and have no visible pause control. Prefer playing briefly and freezing within five seconds, or add an accessible pause/play control. A five-second play-then-freeze treatment preserves the design without adding another persistent control.

This warrants a manual motion-accessibility check even with a Lighthouse accessibility score of 100. W3C's [Pause, Stop, Hide guidance](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) addresses nonessential automatically moving content lasting more than five seconds alongside other content.

Keep the current entrance timing. There is no performance evidence here that justifies adding a new animation library or redesigning the entrance effects.

## 4. Favicon

**Functional, visually unfinished.** `/icon.svg` returns 200 and is correctly linked by Next.js. It is the old amber “DW” on a dark rounded square, which does not match the monochrome redesign. It also uses a system-font-dependent SVG text element.

- Replace it with a monochrome, path-based monogram that is legible at 16px and 32px.
- Add an ICO fallback; `/favicon.ico` currently returns 404.
- Add a 180×180 Apple touch icon; no Apple icon is currently advertised, and `/apple-touch-icon.png` returns 404.

The existing SVG means the site is not missing a favicon in supported browsers. The additional formats improve compatibility and home-screen presentation; they are not indexing blockers. Next.js supports these through its [metadata file conventions](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

## Recommended finishing order

1. Correct route-specific Open Graph and Twitter metadata; reference the sitemap in robots.txt.
2. Bound the artwork autoplay or add a pause control.
3. Replace the amber favicon and add the fallback/touch formats.
4. Sign off the short factual copy checks above.
5. Deploy a preview, verify production-host behavior, and run the final mobile check against the real URL.
