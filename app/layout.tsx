import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deddy Wolley",
  description: "Deddy Wolley",
};

const headerLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Blog",
    href: "#",
  },
];

const footerLinks = [
  {
    label: "x.com @deddywolley",
    href: "https://x.com/@deddywolley",
  },
  {
    label: "IG @deddywolley",
    href: "https://www.instagram.com/deddywolley/",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/deddy-wolley-b09ab312a/",
  },
  {
    label: "github",
    href: "https://github.com/philldev",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-foreground bg-background`,
          "font-mono font-light",
          "text-sm md:text-base",
          "min-h-svh flex flex-col",
        )}
      >
        <div className="fixed h-screen w-screen inset-0 bg-gradient-to-b from-slate-950/20 to-amber-950/20" />
        <div className="fixed h-screen w-screen inset-0 bg-gradient-to-br from-blue-950/10 to-slate-950/10" />
        <header className="h-16 sticky top-0 z-50 md:px-10 px-4 backdrop-blur-md border-b border-white/5">
          <div className="w-full h-full flex items-center justify-between gap-4 max-w-3xl mx-auto">
            <Link href="/" className="tracking-widest font-bold">
              DEDDY W.
            </Link>
            <div className="flex items-center gap-4 text-muted-foreground">
              {headerLinks.map((link) => (
                <div key={link.label}>
                  <Link shallow={false} href={link.href}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </header>
        <main className="px-4 relative md:px-10 flex-1 flex flex-col">
          {children}
        </main>
        <footer className="px-4 md:px-10 py-4">
          <ul className="flex gap-4 text-xs max-w-3xl mx-auto w-full">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link shallow={false} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
