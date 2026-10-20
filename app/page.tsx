import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { DitherArt } from "@/components/dither-art";
import { GithubActivity } from "@/components/github-activity";

export const metadata = { alternates: { canonical: "/" } };

const work = [
  {
    name: "one ux",
    description:
      "A shared Next.js platform and JSON-driven page builder for multiple marketing sites.",
    href: "/work/oneux",
    mark: "oneux",
  },
  {
    name: "premiro",
    description:
      "Multilingual insurance pages and a reusable booking flow, built with Next.js.",
    href: "/work/premiro",
    mark: "premiro",
  },
  {
    name: "smart web",
    description: "An internal inventory management app built with React.",
    mark: "smartweb",
  },
  {
    name: "amild",
    description:
      "A React-to-Next.js revamp using ISR to improve performance and SEO.",
    href: "/work/amild",
    mark: "amild",
  },
];
const experience = [
  {
    company: "bedfordlane",
    href: "https://www.bedfordlane.co/",
    role: "senior frontend engineer",
    period: "2026 — present",
    skills: [
      "Shopify",
      "Shopify themes",
      "Liquid",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Shopify apps",
      "Vite",
    ],
  },
  {
    company: "weekendinc",
    href: "https://weekendinc.com/",
    role: "frontend developer",
    period: "2020 — 2026",
    skills: [
      "AWS",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Bun",
      "Docker",
      "Vite",
      "Webpack",
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Deddy Wolley",
            url: "https://www.deddywolley.com",
            jobTitle: "Senior Frontend Engineer",
            sameAs: [
              "https://github.com/philldev",
              "https://www.linkedin.com/in/deddy-wolley/",
            ],
          }),
        }}
      />
      <div className="home-sections">
        <section id="about" className="intro" aria-labelledby="name-heading">
          <div className="profile flex items-start gap-3">
            <Image
              className="portrait"
              src="/images/portrait.jpg"
              alt="Portrait of Deddy Wolley"
              width={80}
              height={80}
              sizes="(max-width: 639px) 72px, 80px"
              priority
            />
            <div className="min-w-0">
              <h1 id="name-heading">Deddy Wolley</h1>
              <p className="profile-role">Senior frontend engineer</p>
              <p className="current-role">
                at{" "}
                <a
                  href="https://www.bedfordlane.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bedford Lane
                </a>
              </p>
            </div>
          </div>
          <div className="intro-copy">
            <p>
              I build web applications with React and Next.js, and custom
              Shopify themes and apps. I enjoy turning complex requirements into
              clear interfaces and reusable frontend systems.
            </p>
          </div>
        </section>
        <DitherArt shape="sphere" />
        <section aria-labelledby="work-heading">
          <div className="flex items-baseline justify-between">
            <h2 id="work-heading" className="section-title">
              works
            </h2>
            <Link className="subtle-link" href="/work">
              case studies →
            </Link>
          </div>
          <ul className="work-list">
            {work.map((project) => (
              <li key={project.name}>
                {project.href ? (
                  <Link
                    className="work-row group"
                    href={project.href}
                    {...(project.href.startsWith("https")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span
                      className={`project-mark mark-${project.mark}`}
                      aria-hidden="true"
                    />
                    <span className="min-w-0">
                      <span className="work-name">
                        {project.name}
                        <span className="work-arrow" aria-hidden="true">
                          {" "}
                          ↗
                        </span>
                      </span>
                      <span className="work-description">
                        {project.description}
                      </span>
                    </span>
                  </Link>
                ) : (
                  <div className="work-row">
                    <span
                      className={`project-mark mark-${project.mark}`}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <span className="work-name">{project.name}</span>
                      <span className="work-description">
                        {project.description}
                      </span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
        <Suspense
          fallback={
            <section
              className="activity-loading"
              aria-label="Loading GitHub activity"
            >
              <h2 className="section-title">github activity</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Loading contributions…
              </p>
            </section>
          }
        >
          <GithubActivity />
        </Suspense>
        <DitherArt shape="simplex" />
        <section aria-labelledby="experience-heading">
          <h2 className="section-title" id="experience-heading">
            experience &amp; skills
          </h2>
          <div className="experience-list">
            {experience.map((job) => (
              <div key={job.company} className="experience-row">
                <div className="job-info">
                  <h3>
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.company}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </h3>
                  <p>{job.role}</p>
                  <p>{job.period}</p>
                </div>
                <ul className="skill-list" aria-label={`${job.company} skills`}>
                  {job.skills.map((skill) => (
                    <li key={skill} className="skill-tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
