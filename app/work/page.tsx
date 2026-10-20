import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Work",
  description: "Selected frontend projects and case studies by Deddy Wolley.",
  path: "/work",
});
export default function WorkPage() {
  return (
    <section className="inner-page">
      <Link className="back-link" href="/">
        ← Back home
      </Link>
      <h1 className="page-title">Selected work</h1>
      <p className="page-lead">
        A closer look at the platforms, interfaces, and booking experiences
        I&apos;ve helped bring to life.
      </p>
      <div className="mt-10 flex flex-col gap-10">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="project-card"
          >
            <Image
              src={project.image}
              alt=""
              width={608}
              height={342}
              className="project-cover"
            />
            <h2>{project.title} ↗</h2>
            <p>{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-1" aria-label="Technologies">
              {project.tags.slice(0, 4).map((tag) => (
                <li key={tag} className="skill-tag">
                  {tag}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}
