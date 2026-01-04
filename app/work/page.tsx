import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work | Deddy Wolley",
  description: "Featured work and case studies by Deddy Wolley.",
};

export default function WorkPage() {
  return (
    <section className="py-20 max-w-3xl w-full mx-auto">
      <h1 className="text-4xl font-bold mb-4">Featured Work</h1>
      <p className="text-muted-foreground text-lg mb-10">
        A selection of projects and case studies where I&apos;ve focused on
        performance, usability, and building high-quality digital experiences.
      </p>
      <div className="grid gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`}>
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors cursor-pointer h-full">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
