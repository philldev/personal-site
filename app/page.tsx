import { Button } from "@/components/ui/button";
import { Title } from "./_title";

export default function Home() {
  return (
    <>
      <section id="about" className="pt-20 pb-32">
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

          {/* <p className="text-xs text-foreground/5"> */}
          {/*   My favorite techstack is CURSOR, V0, and chatgpt. hahaha jk */}
          {/* </p> */}

          <div className="flex gap-4">
            <Button asChild>
              <a href="https://github.com/philldev">View Github</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://www.linkedin.com/in/deddy-wolley-b09ab312a/">
                View Linkedin
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="work" className="py-20">
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-4xl font-medium">Work</h1>
          <p className="text-muted-foreground">Cooking... 🍳</p>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-4xl font-medium">Blog</h1>
          <p className="text-muted-foreground">Cooking... 🍳</p>
        </div>
      </section>
    </>
  );
}
