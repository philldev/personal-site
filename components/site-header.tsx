import Link from "next/link";
import { GithubIcon } from "./icons";
import { SphereLogo } from "./sphere-logo";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header flex items-center justify-between gap-3">
      <Link href="/" className="domain-link flex items-center gap-1.5">
        <SphereLogo />
        <span>deddywolley.com</span>
      </Link>
      <nav aria-label="Site controls" className="flex items-center gap-2">
        <a
          className="icon-button"
          href="https://github.com/philldev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Deddy on GitHub"
        >
          <GithubIcon />
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
