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
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern headless e-commerce solution built with Next.js and Shopify, featuring lightning-fast page loads and seamless checkout experience.",
    year: "2024",
    role: "Lead Frontend Engineer",
    tags: ["Next.js", "Shopify", "Tailwind CSS"],
    image: "/case-study-1.svg",
    link: "https://example.com/ecommerce",
    content: `
      <p>This project involved migrating a legacy Monolithic e-commerce site to a modern headless architecture using Next.js and Shopify Storefront API.</p>
      <h3>Key Challenges</h3>
      <ul>
        <li>Optimizing Core Web Vitals for better SEO ranking.</li>
        <li>Implementing a custom cart and checkout flow.</li>
        <li>Synchronizing inventory across multiple sales channels.</li>
      </ul>
      <h3>Outcome</h3>
      <p>The new platform resulted in a 40% increase in conversion rates and a 60% improvement in page load speeds. The client also saw a significant boost in organic traffic due to improved SEO.</p>
    `,
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Real-time collaboration tool for remote teams allowing users to organize tasks, chat in real-time, and track project progress.",
    year: "2023",
    role: "Fullstack Developer",
    tags: ["React", "Firebase", "TypeScript"],
    image: "/case-study-2.svg",
    link: "https://example.com/task-app",
    content: `
      <p>Built a collaborative task management application designed for remote-first teams. The app features real-time updates, drag-and-drop boards, and integrated chat.</p>
      <h3>Technical Details</h3>
      <p>Used Firebase Firestore for real-time data synchronization and Cloud Functions for backend logic. The frontend was built with React and heavily utilized custom hooks for state management.</p>
      <h3>Features</h3>
      <ul>
        <li>Real-time Kanban board.</li>
        <li>Team chat with file sharing.</li>
        <li>Automated email notifications.</li>
      </ul>
    `,
  },
  {
    slug: "finance-dashboard",
    title: "Finance Dashboard",
    description:
      "Comprehensive analytics dashboard for personal finance tracking with interactive charts and budget management tools.",
    year: "2023",
    role: "Frontend Developer",
    tags: ["Next.js", "Recharts", "PostgreSQL"],
    image: "/case-study-3.svg",
    link: "https://example.com/finance",
    content: `
      <p>Developed a personal finance dashboard that aggregates data from various bank accounts and visualizes spending habits.</p>
      <h3>Implementation</h3>
      <p>Leveraged Recharts for rendering complex data visualizations. The backend was powered by Node.js and PostgreSQL to securely store transaction data.</p>
      <p>Focus was placed on data privacy and security, ensuring that all sensitive information was encrypted both in transit and at rest.</p>
    `,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
