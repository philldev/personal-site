import { Button } from "@/components/ui/button";
import { Title } from "./_title";

export const metadata = {
  title: "Deddy Wolley - Software Engineer",
  description: "software engineer.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.deddywolley.com",
    siteName: "Deddy Wolley",
    title: "Deddy Wolley - Software Engineer",
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
            url: "https://deddywolley.vercel.app",
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
            I&apos;ve build production applications with JavaScript, frequently
            using Next.js and Tailwind CSS. I&apos;m also a fan of TypeScript
            and a Neovim user. For personal tools, I prefer Node.js or Bun (Rust
            maybe soon). I find Bun particularly enjoyable to work with.
          </p>

          <div className="flex gap-4">
            <Button asChild>
              <a href={githubUrl}>View Github</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={linkedinUrl}>View Linkedin</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
