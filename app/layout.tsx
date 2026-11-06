import type { Metadata } from "next";
import "./globals.css";
import { EntryLoader } from "@/components/common/entry-loader";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { ScrollToSection } from "@/components/ui/scroll-to-section";
import { AnchorNavigation } from "@/components/common/anchor-navigation";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { links, services } from "@/components/common/data";
import { blogs } from "@/lib/blogs/data";
import { ContactModalProvider } from "@/components/common/contact-modal";

const breadcrumbLabels: Record<string, string> = {
  ...Object.fromEntries(links),
  "/contact": "Contact",
  "/blogs": "Blogs",
  "/awards": "Awards",
  "/gallery": "Gallery",
  "/podcasts": "Podcasts",
  "/dubai-it": "Dubai-it",
  ...Object.fromEntries(services.map(({ slug, title }) => [`/services/${slug}`, title])),
  ...Object.fromEntries(blogs.map(({ slug, title }) => [`/blogs/${slug}`, title])),
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mediamantraconsulting.com",
  ),
  title: {
    default: "PR Agency in Dubai UAE | Media Mantra Consultancy FZCO",
    template: "%s | Media Mantra Consulting",
  },
  description:
    "Media Mantra is a PR agency in Dubai, UAE for media relations, reputation management, events and digital PR. Talk to our team today.",
  keywords: [
    "pr agency in dubai uae",
    "PR company in Dubai",
    "public relations agency Dubai",
    "UAE PR services",
    "media relations Dubai",
    "reputation management Dubai",
    "PR firm UAE",
    "event management Dubai",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth motion-reduce:scroll-auto"
    >
      <head>
        <link
          rel="preload"
          href="/fonts/geist-4.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono-5.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[#b6e9df] selection:text-foreground [&_:focus-visible]:outline-[3px] [&_:focus-visible]:outline-[#37b9ad] [&_:focus-visible]:outline-offset-[5px] [&_button]:cursor-pointer [&_summary]:cursor-pointer [&_a]:[-webkit-tap-highlight-color:transparent] [&_button]:[-webkit-tap-highlight-color:transparent] motion-reduce:[&_*]:animate-none! motion-reduce:[&_*]:transition-none! motion-reduce:[&_*::before]:animate-none! motion-reduce:[&_*::before]:transition-none! motion-reduce:[&_*::after]:animate-none! motion-reduce:[&_*::after]:transition-none!">
        <ContactModalProvider>
          <AnchorNavigation />
          <EntryLoader />
          <ScrollToSection
            targetId="main-content"
            focusTarget
            className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-white px-5 py-3 focus:translate-y-0"
          >
            Skip to content
          </ScrollToSection>
          <Header />
          <main id="main-content" className="flex-1">
            <Suspense fallback={null}>
              <Breadcrumbs labels={breadcrumbLabels} />
            </Suspense>
            {children}
          </main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
