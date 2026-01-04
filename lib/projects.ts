export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  link: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: "oneux",
    title: "ONE UX — Frontend Architecture for a Multi-Site Marketing Platform",
    description:
      "A shared Next.js frontend platform that enables frequent campaign launches across multiple websites, optimized for SEO, performance, and smooth page navigation through server-rendered HTML.",
    year: "2024",
    role: "Frontend Engineer",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Docker",
      "CI/CD",
      "AWS ECS",
      "Incremental Static Regeneration",
      "UI Builder",
    ],
    image: "/case-study-1.svg",
    link: "https://amild.id",
    content: `
I helped our team design and implement the **frontend architecture** of **ONE UX**, a multi-site marketing platform that runs multiple websites from a **single shared Next.js codebase**, with a strong focus on SEO, performance, and scalability at the frontend layer.

### The Challenge
Our client needed to **launch campaigns frequently** and update multiple websites quickly, but the existing frontend setup relied on separate standalone projects. This led to duplicated UI logic, slower iteration, and inconsistent performance across sites.

### The Solution
I helped design the **frontend system** using **Next.js with Incremental Static Regeneration (ISR)**. Pages are rendered as **HTML on the server**, allowing users to navigate between pages with a smoother, more predictable experience compared to purely client-rendered pages. All sites share the same frontend components, layouts, and SEO behavior, while a **custom frontend page builder** enables flexible page composition without repeated frontend development work.

ISR was chosen to ensure fast initial loads, strong SEO, and the ability to update content without full rebuilds.

### The Result
- Faster frontend rollout of new websites and campaign pages for our client
- Faster code builds due to Next.js **Incremental Static Regeneration**
- Improved user experience when navigating between pages due to server-rendered HTML
- Improved Core Web Vitals and SEO reliability

### My Contribution
I helped our team with frontend architecture decisions, implemented the ISR strategy on the frontend, built the page builder abstractions, and handled frontend migration of existing sites. I also supported other frontend developers by helping with **project onboarding**, sharing architectural context, and unblocking implementation questions.
`,
  },
  {
    slug: "premiro",
    title: "Premiro — Insurance Landing Page & Booking Flow (Frontend)",
    description:
      "SEO-optimized, multi-language insurance landing pages with reusable form architecture, built to deliver a smooth booking experience across multiple insurance products.",
    year: "2025",
    role: "Frontend Engineer",
    tags: [
      "Next.js",
      "Incremental Static Regeneration",
      "SEO",
      "Multi-Language",
      "Form Architecture",
      "Booking Flow",
    ],
    image: "/case-study-2.svg",
    link: "https://premiro.com",
    content: `
A multi-language insurance landing page and booking flow built with a reusable form architecture, optimized for SEO and user experience through server-rendered pages.

I helped our team build the **frontend implementation** of **Premiro**, an insurance landing page and booking platform designed to support multiple insurance products, each with its own form structure and validation rules.

### The Challenge
Premiro needed to support:
- **Multiple insurance products**, each requiring different form fields and validation logic
- A **multi-step booking experience** that remained clear and easy to use
- **Multi-language support** for both Indonesian (ID) and English (EN)
- Strong **SEO requirements** for landing pages while maintaining a smooth user experience

Managing complex, product-specific forms while ensuring good SEO and UX was the main challenge.

### The Solution
I designed and implemented the **frontend architecture using Next.js**, enabling pages to be rendered as HTML for better search engine visibility and faster initial loads.

A **reusable form logic and component system** was created to handle different insurance products while keeping form behavior, validation, and layout consistent.

Internationalization was integrated so content, form labels, and validation messages could be translated cleanly for both ID and EN, without compromising SEO.

### The Result
- SEO-friendly landing pages with fast initial page loads
- Improved user experience during form navigation and submission
- Reduced duplication through shared form logic and components
- Consistent experience across multiple insurance products and languages

### My Contribution
I was the **only frontend developer** on the project, working closely with the **tech lead**. I handled day-to-day frontend implementation and architecture, built reusable form logic and components, implemented SEO and UX improvements with Next.js, integrated multi-language support, and collaborated with the tech lead on technical direction and reviews.
`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
