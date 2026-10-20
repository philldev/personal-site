import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionEntrances } from "@/components/section-entrances";
import { siteUrl } from "@/lib/site-metadata";
import "./globals.css";

const aspekta = localFont({
  src: "../public/fonts/AspektaVF.woff2",
  variable: "--font-aspekta",
  weight: "100 900",
  display: "swap",
});
const description =
  "Deddy Wolley is a senior frontend engineer building React and Next.js applications, Shopify themes, and commerce apps. Based in Manado, Indonesia.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deddy Wolley — Senior Frontend Engineer",
    template: "%s | Deddy Wolley",
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Deddy Wolley",
    title: "Deddy Wolley — Senior Frontend Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Deddy Wolley — Senior Frontend Engineer",
    description,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light';document.documentElement.classList.toggle('dark',d)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${aspekta.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SectionEntrances />
        <div className="site-shell">
          <div className="content-panel">
            <SiteHeader />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </div>
          <SiteFooter />
        </div>
        {process.env.VERCEL_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
