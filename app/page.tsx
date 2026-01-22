import { Button } from "@/components/ui/button";
import { Title } from "./_title";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Deddy Wolley",
  description:
    "Frontend Engineer with 5+ years of experience building scalable, high-performance web applications using React and Next.js.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.deddywolley.com",
    siteName: "Deddy Wolley",
    title: "Deddy Wolley",
    description:
      "Frontend Engineer with 5+ years of experience building scalable, high-performance web applications using React and Next.js.",
  },
};

const githubUrl = "https://github.com/philldev";
const linkedinUrl = "https://www.linkedin.com/in/deddy-wolley/";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            name: "Deddy Wolley",
            url: "https://deddywolley.com",
            jobTitle: "Software Engineer",
            description:
              "Deddy Wolley is a software engineer who loves building things with javascript.",
            sameAs: [githubUrl, linkedinUrl],
          }),
        }}
      />
      <section id="about" className="pt-20 max-w-3xl w-full mx-auto">
        <div className="grid gap-6">
          <p>Hey there! I&apos;m Deddy, a</p>
          <Title initialText="Frontend Engineer" />
          <p className="max-w-2xl">
            Frontend Engineer at{" "}
            <a
              className="underline text-amber-300 font-bold"
              href="https://www.weekendinc.com"
              target="_blank"
            >
              WeekendInc
            </a>{" "}
            (Remote, Jakarta 🇮🇩), working on high-traffic production platforms.
          </p>

          <p className="text-foreground/60 text-sm">
            I build and maintain production web applications using JavaScript,
            React, Next.js, and Tailwind CSS, with a strong preference for
            TypeScript. I focus on performance, scalability, and usability,
            applying SSR, SSG, and ISR strategies where they add real value. I
            care deeply about clean architecture, reusable UI systems, and the
            small details that make interfaces feel right. Outside of product
            work, I enjoy building tools with Node.js and Bun, and continuously
            improving developer experience through better tooling and workflows.
          </p>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="/work">Featured Work</Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">Github</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">Linkedin</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
