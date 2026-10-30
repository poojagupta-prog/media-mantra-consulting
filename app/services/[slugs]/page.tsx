import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowDown } from "lucide-react";
import { services } from "@/components/common/data";
import { servicePerspectives } from "./service-perspectives";
import { ScrollToSection } from "@/components/ui/scroll-to-section";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slugs: slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slugs]">): Promise<Metadata> {
  const { slugs } = await params;
  const service = services.find((item) => item.slug === slugs);
  return service
    ? { title: service.title, description: service.text }
    : { title: "Service not found" };
}

const designs = {
  "media-relations": {
    eyebrow: "The story finds its people",
    headline: ["Make headlines.", "Make meaning."],
    statement: "The right story, in the right hands, at the right moment.",
    palette: "bg-[#e7e6dd]",
    accent: "text-[#b64d28]",
  },
  "public-relations": {
    eyebrow: "Connection is everything",
    headline: ["Be seen.", "Be understood."],
    statement: "Build the conversation around what matters most.",
    palette: "bg-[#c9eae2]",
    accent: "text-teal",
  },
  "social-digital-media": {
    eyebrow: "Made for the moment",
    headline: ["Stop the scroll.", "Start a dialogue."],
    statement: "Show up where your audience lives, listens and shares.",
    palette: "bg-[#dcebe7]",
    accent: "text-[#007f83]",
  },
  "event-management": {
    eyebrow: "The energy in the room",
    headline: ["Make it happen.", "Make it last."],
    statement: "An experience people can feel, remember and carry forward.",
    palette: "bg-[#e3e7f0]",
    accent: "text-[#355b9a]",
  },
  "reputation-building-management": {
    eyebrow: "Trust is built every day",
    headline: ["Earn confidence.", "Keep it close."],
    statement: "A stronger reputation begins with clarity and care.",
    palette: "bg-[#f1e2e8]",
    accent: "text-[#b02b63]",
  },
  "seo-performance-marketing": {
    eyebrow: "Visibility with purpose",
    headline: ["Get found.", "Go further."],
    statement: "Turn intent into action, and action into momentum.",
    palette: "bg-[#f4e6c8]",
    accent: "text-[#90660c]",
  },
  podcast: {
    eyebrow: "A space to listen",
    headline: ["Find your voice.", "Start a conversation."],
    statement: "Stories sound different when people lean in to listen.",
    palette: "bg-[#e5def0]",
    accent: "text-[#71539a]",
  },
  "content-marketing": {
    eyebrow: "Stories with substance",
    headline: ["Create interest.", "Keep it."],
    statement: "Useful ideas, beautifully told and built to travel.",
    palette: "bg-[#f6e9d5]",
    accent: "text-[#ac632e]",
  },
  "strategic-content-planning": {
    eyebrow: "Every story has a place",
    headline: ["Think ahead.", "Speak clearly."],
    statement: "A plan that connects the big picture to every detail.",
    palette: "bg-[#dce9e3]",
    accent: "text-[#296c5d]",
  },
  "brand-elevation": {
    eyebrow: "The next chapter starts here",
    headline: ["Stand apart.", "Rise above."],
    statement: "Make the next version of your brand unmistakable.",
    palette: "bg-[#f6ded2]",
    accent: "text-[#c15b35]",
  },
} as const;

const heroImages = {
  "media-relations":
    "https://images.unsplash.com/photo-1689421755395-c18b8cd24db3?auto=format&fit=crop&w=2400&q=85",
  "public-relations":
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=85",
  "social-digital-media":
    "https://images.unsplash.com/photo-1781606424661-de1dc2b4c6e1?auto=format&fit=crop&w=2400&q=85",
  "event-management":
    "https://images.unsplash.com/photo-1774092137702-2abdbf38e683?auto=format&fit=crop&w=2400&q=85",
  "reputation-building-management":
    "https://images.unsplash.com/photo-1758518726775-70e538b0d46e?auto=format&fit=crop&w=2400&q=85",
  "seo-performance-marketing":
    "https://images.unsplash.com/photo-1784729553968-07da5d7b7c99?auto=format&fit=crop&w=2400&q=85",
  podcast:
    "https://images.unsplash.com/photo-1782274265689-4f10a91d4abb?auto=format&fit=crop&w=2400&q=85",
  "content-marketing":
    "https://images.unsplash.com/photo-1769159523569-bdf28e5f9441?auto=format&fit=crop&w=2400&q=85",
  "strategic-content-planning":
    "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=2400&q=85",
  "brand-elevation":
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2400&q=85",
} as const;

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slugs]">) {
  const { slugs } = await params;
  const service = services.find((item) => item.slug === slugs);
  if (!service) notFound();
  const design = designs[service.slug as keyof typeof designs];
  const perspective =
    servicePerspectives[service.slug as keyof typeof servicePerspectives];
  const index = services.indexOf(service);
  const next = services[(index + 1) % services.length];

  return (
    <div>
      <section className="relative isolate flex min-h-[650px] flex-col overflow-hidden bg-[#19181b] text-white md:min-h-[720px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImages[service.slug as keyof typeof heroImages]}')`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,17,17,.88)_0%,rgba(10,17,17,.65)_46%,rgba(10,17,17,.2)_100%),linear-gradient(0deg,rgba(10,17,17,.62),transparent_45%)]"
        />
        <div className="mx-auto flex w-[min(1440px,calc(100%-112px))] flex-1 flex-col max-[768px]:w-[calc(100%-40px)]">
          <Link
            href="/services"
            className="mt-10 inline-flex w-fit items-center gap-2 text-xs font-medium text-white/85 transition-colors hover:text-white md:mt-14"
          >
            <ArrowLeft size={16} /> All services
          </Link>
          <div className="my-auto py-20">
            <span className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/35 bg-black/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[.13em] text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange" /> 0{index + 1} /{" "}
              {design.eyebrow}
            </span>
            <h1 className="max-w-5xl text-[clamp(3.8rem,8vw,8.5rem)] font-[650] leading-[.92] tracking-[-.075em] text-balance">
              {service.title}
              <span className="text-[#92dfd4]">.</span>
            </h1>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/35 py-8 md:py-10">
            <p className="max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              {service.text}
            </p>
            <ScrollToSection
              targetId="approach"
              className="inline-flex shrink-0 items-center gap-3 border-b border-white/50 pb-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-white"
            >
              Discover the approach <ArrowDown size={16} />
            </ScrollToSection>
          </div>
        </div>
      </section>
      <section
        id="approach"
        className="scroll-mt-24 bg-background py-20 md:py-28"
      >
        <div className="mx-auto grid w-[min(1440px,calc(100%-112px))] gap-12 max-[768px]:w-[calc(100%-40px)] md:grid-cols-[.75fr_1.25fr] md:gap-20">
          <div>
            <p
              className={`mb-7 font-mono text-[10px] uppercase tracking-[.13em] ${design.accent}`}
            >
              The thinking behind the work
            </p>
            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-[550] leading-none tracking-[-.065em]">
              {design.headline[0]}
              <br />
              <span
                className={`font-[Georgia,'Times_New_Roman',serif] font-normal italic ${design.accent}`}
              >
                {design.headline[1]}
              </span>
            </h2>
          </div>
          <div className="md:pt-10">
            <p className="max-w-2xl text-xl leading-9 md:text-2xl md:leading-10">
              {service.detail}
            </p>
            <p className="mt-8 max-w-xl text-sm leading-7 text-muted">
              {design.statement}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#19181b] py-20 text-white md:py-28">
        <div className="mx-auto grid w-[min(1440px,calc(100%-112px))] gap-10 max-[768px]:w-[calc(100%-40px)] lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-7 font-mono text-[10px] uppercase tracking-[.13em] text-[#92dfd4]">
              From our desk / {perspective.label}
            </p>
            <h2 className="max-w-2xl text-[clamp(2.8rem,5vw,5.5rem)] font-[550] leading-[1.02] tracking-[-.065em]">
              {perspective.question}
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-xl leading-9 text-white/75">
              {perspective.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {perspective.signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/25 px-4 py-2 font-mono text-[10px] uppercase tracking-[.08em] text-[#92dfd4]"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={`${design.palette} py-20 md:py-28`}>
        <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p
                className={`mb-6 font-mono text-[10px] uppercase tracking-[.13em] ${design.accent}`}
              >
                The approach / {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-[550] leading-none tracking-[-.065em]">
                A clear path
                <br />
                <span
                  className={`font-[Georgia,'Times_New_Roman',serif] font-normal italic ${design.accent}`}
                >
                  from idea to impact.
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted">
              Every brief is different. These are the moves that give this
              discipline its shape.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {perspective.phases.map(([name, description], i) => (
              <div
                key={name}
                className={`flex min-h-64 flex-col rounded-[24px] bg-white p-7 ${i === 1 ? "md:-translate-y-4" : ""}`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-[.13em] ${design.accent}`}
                >
                  0{i + 1} / {perspective.label}
                </span>
                <div className="mt-auto pt-12">
                  <h3 className="text-2xl font-medium leading-tight tracking-[-.045em]">
                    {name}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid w-[min(1440px,calc(100%-112px))] gap-10 max-[768px]:w-[calc(100%-40px)] md:grid-cols-[.75fr_1.25fr]">
          <div>
            <p
              className={`mb-6 font-mono text-[10px] uppercase tracking-[.13em] ${design.accent}`}
            >
              What we can deliver
            </p>
            <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-[550] leading-none tracking-[-.065em]">
              The work,
              <br />
              <span
                className={`font-[Georgia,'Times_New_Roman',serif] font-normal italic ${design.accent}`}
              >
                made tangible.
              </span>
            </h2>
          </div>
          <div className="border-t border-black/20">
            {service.offerings.map((offering, i) => (
              <div
                key={offering}
                className="flex items-center gap-6 border-b border-black/20 py-6"
              >
                <span className="font-mono text-[10px] text-muted">
                  0{i + 1}
                </span>
                <p className="text-xl font-medium tracking-[-.04em] md:text-2xl">
                  {offering}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-foreground/80 py-20 text-white md:py-28">
        <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
          <p className="mb-7 font-mono text-[10px] uppercase tracking-[.13em] text-[#92dfd4]">
            The next step starts here
          </p>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <h2 className="text-[clamp(3.3rem,7vw,7rem)] font-[600] leading-[.95] tracking-[-.07em]">
              Let’s make
              <br />
              <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-[#92dfd4]">
                an impact.
              </span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-5 rounded-full bg-[#c9eae2] py-3 pl-6 pr-3 text-sm font-medium text-foreground hover:bg-white"
            >
              Start a conversation{" "}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-7 text-sm">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 hover:text-[#92dfd4]"
            >
              <ArrowLeft size={16} /> All services
            </Link>
            <Link
              href={`/services/${next.slug}`}
              className="inline-flex items-center gap-2 hover:text-[#92dfd4]"
            >
              Next: {next.title} <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
