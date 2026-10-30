import type { Metadata } from "next";
import "./globals.css";
import { EntryLoader } from "@/components/common/entry-loader";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { ScrollToSection } from "@/components/ui/scroll-to-section";

export const metadata: Metadata = {
  title: {
    default: "Media Mantra Consulting | PR & Communications in Dubai",
    template: "%s | Media Mantra Consulting",
  },
  description:
    "Media Mantra Consulting: a Dubai-focused PR and communications agency demo. Explore public relations, brand storytelling, reputation, and regional communications.",
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
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
