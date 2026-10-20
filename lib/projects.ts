export interface Project {
  slug: string;
  title: string;
  description: string;
  year?: string;
  role: string;
  tags: string[];
  image: string;
  link?: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: "oneux",
    title: "ONE UX — A shared frontend for multiple sites",
    description:
      "A shared Next.js codebase and JSON-driven page builder for launching and maintaining multiple marketing sites.",
    year: "2024",
    role: "Frontend Engineer",
    tags: [
      "Next.js",
      "React",
      "Page builder",
      "ISR",
      "Tailwind CSS",
      "Docker",
      "CI/CD",
      "AWS ECS",
    ],
    image: "/case-study-1.svg",
    content: `
I helped design and build the frontend architecture for **ONE UX**, a platform that brings multiple marketing sites into a shared Next.js codebase.

## The problem
Separate frontend projects meant repeating UI work, maintaining similar components in different places, and onboarding developers to multiple codebases. The team needed a common foundation that could still support different sites and campaign pages.

## The approach
We used shared components and layouts alongside a **JSON-driven page builder**. Pages could be composed from reusable building blocks rather than implemented separately for every site.

**Incremental Static Regeneration (ISR)** allowed content updates without rebuilding every page. Pre-rendered HTML also made page content available before client-side JavaScript ran.

## My contribution
- Helped shape the frontend architecture and shared component system.
- Built page-builder abstractions and implemented the frontend ISR strategy.
- Helped migrate existing sites onto the shared frontend.
- Onboarded developers and shared architectural context to unblock implementation work.

## The result
The team gained a shared foundation for building marketing sites, reusing components, and keeping frontend conventions consistent across projects.
`,
  },
  {
    slug: "premiro",
    title: "Premiro — Insurance pages and booking flows",
    description:
      "Multilingual insurance pages and reusable booking forms for products with different fields and validation rules.",
    year: "2025",
    role: "Frontend Engineer",
    tags: ["Next.js", "Booking forms", "Internationalization", "ISR", "SEO"],
    image: "/case-study-2.svg",
    link: "https://premiro.com",
    content: `
I built the frontend for **Premiro**, an insurance site with product-specific booking flows in Indonesian and English. I was the **sole frontend developer**, working closely with the tech lead.

## The problem
Different insurance products needed different form fields, validation rules, and booking steps. The frontend also had to support two languages and make landing-page content accessible to search engines.

## The approach
I used **Next.js** for the landing pages and built reusable form logic and components for the booking experience. Shared patterns kept the forms consistent while allowing each product to define its own fields and validation.

Internationalization covered page content, form labels, and validation messages in both Indonesian and English.

## My contribution
- Handled day-to-day frontend implementation and architecture.
- Built reusable form components and product-specific validation flows.
- Implemented multilingual content and booking interfaces.
- Worked with the tech lead on technical direction and reviews.

## The result
Premiro gained a consistent booking interface across insurance products and languages, with shared frontend patterns that reduced duplicated form logic.
`,
  },
  {
    slug: "amild",
    title: "AMild — From client-rendered React to Next.js",
    description:
      "A marketing-site revamp using Next.js and Incremental Static Regeneration to improve performance and SEO.",
    role: "Frontend Engineer",
    tags: ["Next.js", "React", "ISR", "Performance", "SEO"],
    image: "/case-study-3.svg",
    link: "https://amild.id",
    content: `
I helped propose and deliver the revamp of **AMild’s marketing site**, moving it from a client-rendered React application to **Next.js with Incremental Static Regeneration (ISR)**.

## The problem
The existing site rendered its content on the client. The revamp focused on improving performance and SEO by changing how pages were rendered and delivered.

## The approach
We moved to Next.js with ISR, allowing pages to be pre-rendered and refreshed as content changed. Visitors could receive page content in the initial HTML instead of waiting for client-side rendering to populate it.

## My contribution
I helped propose the move from client-rendered React to Next.js with ISR and contributed to the site revamp.

## The result
The revamp moved core page content into pre-rendered HTML and introduced ISR for content updates.
`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
