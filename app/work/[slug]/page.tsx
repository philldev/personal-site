import { getProjectBySlug, projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Deddy Wolley`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-20 max-w-3xl w-full mx-auto">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Work
      </Link>

      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{project.role}</span>
          </div>
        </div>

        <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mt-10">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
