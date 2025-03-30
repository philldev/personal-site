import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="grid gap-8">
        <p>Hey there! I'm Deddy, a</p>
        <h1 className="text-4xl md:text-9xl">Web Developer</h1>
        <p className="max-w-2xl">
          currently working as a frontend engineer at{" "}
          <a
            className="underline text-amber-300 font-bold"
            href="https://www.weekendinc.com"
          >
            Weekendinc
          </a>{" "}
          in Jakarta 🇮🇩.
        </p>

        <p>
          I'm passionate about building things with Javascript, and I've gained
          experience with some frameworks and libraries like React, Next.js, and
          TailwindCSS. I use NEOVIM(BTW) as my primary text editor, and WEZTERM
          as my terminal
        </p>

        <div className="flex gap-4">
          <Button>View Github</Button>
          <Button variant="secondary">View Linkedin</Button>
        </div>
      </section>
    </>
  );
}
