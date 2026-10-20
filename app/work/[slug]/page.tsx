import { getProjectBySlug, projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project
    ? createPageMetadata({
        title: project.title,
        description: project.description,
        path: `/work/${slug}`,
      })
    : { title: "Project not found" };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <article className="inner-page">
      <Link href="/work" className="back-link">
        ← Back to work
      </Link>
      <h1 className="page-title">{project.title}</h1>
      <p className="mt-5 text-sm text-muted-foreground">
        {[project.year, project.role].filter(Boolean).join(" · ")}
      </p>
      <Image
        src={project.image}
        alt=""
        width={608}
        height={342}
        priority
        className="project-cover mt-8"
      />
      <ul className="mt-6 flex flex-wrap gap-1" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li className="skill-tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      {project.link && (
        <a
          className="project-action mt-6"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit project ↗
        </a>
      )}
      <div className="prose case-prose mt-10 max-w-none">
        <ReactMarkdown>{project.content}</ReactMarkdown>
      </div>
    </article>
  );
}
