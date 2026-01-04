import { Button } from "@/components/ui/button";
import { Title } from "./_title";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Deddy Wolley",
  description: "Fullstack Web Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.deddywolley.com",
    siteName: "Deddy Wolley",
    title: "Deddy Wolley",
    description:
      "I'm a software engineer who loves building things with javascript.",
  },
};

const githubUrl = "https://github.com/philldev";
const linkedinUrl = "https://www.linkedin.com/in/deddy-wolley-b09ab312a/";

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
          <Title initialText="Web Developer" />
          <p className="max-w-2xl">
            currently working as a frontend engineer at{" "}
            <a
              className="underline text-amber-300 font-bold"
              href="https://www.weekendinc.com"
              target="_blank"
            >
              Weekendinc
            </a>{" "}
            in Jakarta 🇮🇩.
          </p>

          <p className="text-foreground/60 text-sm">
            I build and maintain production web applications using JavaScript,
            React, Next.js, and Tailwind CSS, with a strong preference for
            TypeScript. I care about performance, usability, and the small
            details that make interfaces feel right. Outside of product work, I
            enjoy building tools with Node.js and Bun, and I’m always exploring
            better ways to improve developer experience.
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