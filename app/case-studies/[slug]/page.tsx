import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Suspense } from "react";
import { galleryImage, getPortfolioStudy, portfolioStudies } from "@/components/CaseStudies/case-studies-data";
import { StudyCard } from "@/components/CaseStudies/study-card";

export function generateStaticParams() { return portfolioStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getPortfolioStudy(slug);
  if (!study) return { title: "Case study not found" };
  return { title: `${study.title} | Concept Case Study`, description: `Illustrative ${study.sector} concept: ${study.description}`, alternates: { canonical: `/case-studies/${slug}` }, openGraph: { title: `${study.title} | Concept Case Study`, description: study.description, images: [{ url: study.image, alt: study.alt }] } };
}

export default function CaseStudyDetailPage({ params }: PageProps<"/case-studies/[slug]">) {
  return <Suspense fallback={<div role="status" className="min-h-[70vh] bg-[#19181b] px-5 py-20 text-white"><div className="mx-auto max-w-[1440px]"><p className="font-mono text-xs uppercase tracking-[.14em] text-[#92dfd4]">Case study</p><div className="mt-12 h-20 max-w-2xl animate-pulse rounded bg-white/10 motion-reduce:animate-none" /><span className="sr-only">Loading case study</span></div></div>}><CaseStudyContent params={params} /></Suspense>;
}

async function CaseStudyContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getPortfolioStudy(slug);
  if (!study) notFound();
  const related = portfolioStudies.filter((item) => item.slug !== slug).slice(0, 2);
  return <article>
    <header className="bg-[#19181b] pb-14 pt-8 text-white md:pb-20"><div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
      <nav aria-label="Breadcrumb" className="mb-16 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[.12em] text-white/60"><Link href="/" className="hover:text-[#92dfd4]">Home</Link><span>/</span><Link href="/case-studies" className="hover:text-[#92dfd4]">Case studies</Link><span>/</span><span aria-current="page" className="text-white">{study.brand}</span></nav>
      <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><div><span className="font-mono text-[11px] uppercase tracking-[.15em] text-[#92dfd4]">{study.sector} / Concept example</span><p className="mt-5 text-sm text-white/60">Illustrative portfolio story</p></div><div><h1 className="max-w-[15ch] text-[clamp(3rem,6vw,6.5rem)] leading-[.98] tracking-[-.065em]">{study.title}</h1><p className="mt-7 max-w-[580px] text-base leading-7 text-white/70">{study.description}</p></div></div>
    </div></header>
    <div className="relative h-[45vh] min-h-[340px] max-h-[720px] bg-[#dcece5] md:h-[65vh]"><Image src={study.image} alt={study.alt} fill preload sizes="100vw" className="object-cover" /><div className="absolute bottom-5 left-5 rounded-full bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-[.12em]">Concept visual</div></div>
    <div className="mx-auto grid w-[min(1440px,calc(100%-112px))] gap-12 py-20 max-[768px]:w-[calc(100%-40px)] md:grid-cols-[1fr_2fr] md:py-28"><aside><p className="font-mono text-[10px] uppercase tracking-[.14em] text-teal">Project overview</p><p className="mt-5 text-sm text-muted">Sector <span className="block text-foreground">{study.sector}</span></p><p className="mt-5 text-sm text-muted">Disciplines</p><ul className="mt-2 space-y-1 text-sm">{study.services.map((service) => <li key={service}>{service}</li>)}</ul></aside><div><h2 className="max-w-[16ch] text-[clamp(2.3rem,4vw,4.5rem)] leading-[1.04] tracking-[-.055em]">A story shaped around what matters.</h2><p className="mt-8 max-w-[650px] text-base leading-8 text-muted">{study.description}</p><p className="mt-5 border-l-2 border-orange pl-5 text-sm leading-7 text-muted">This is an illustrative campaign concept based on sample content already featured on this site. It does not describe verified client work or measured results.</p></div></div>
    <section className="bg-[#e7f0eb] py-20 md:py-28"><div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]"><p className="mb-10 font-mono text-[10px] uppercase tracking-[.14em] text-teal">The thinking / 01—03</p><div className="grid gap-10 md:grid-cols-3">{[{ number: "01", title: "The challenge", copy: study.challenge }, { number: "02", title: "The strategy", copy: study.strategy }, { number: "03", title: "The execution", copy: study.execution }].map((section) => <div key={section.number} className="border-t border-foreground/20 pt-5"><span className="font-mono text-xs text-teal">{section.number}</span><h2 className="mt-8 text-3xl tracking-[-.05em]">{section.title}</h2><p className="mt-5 text-sm leading-7 text-muted">{section.copy}</p></div>)}</div></div></section>
    <section className="mx-auto w-[min(1440px,calc(100%-112px))] py-20 max-[768px]:w-[calc(100%-40px)] md:py-28"><div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-teal">Illustrative outcome</p><div><h2 className="text-[clamp(2.3rem,4vw,4.5rem)] leading-[1.04] tracking-[-.055em]">What the idea could make possible.</h2><p className="mt-7 max-w-[650px] text-base leading-8 text-muted">{study.result}</p></div></div><div className="mt-16 grid gap-4 md:grid-cols-2">{study.gallery.map((image, index) => <figure key={image} className="relative aspect-[4/3] overflow-hidden bg-[#e0efec]"><Image src={galleryImage(image)} alt={`${study.sector} concept moodboard image ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" className="object-cover" /><figcaption className="absolute bottom-3 left-3 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.1em]">Concept moodboard {String(index + 1).padStart(2, "0")}</figcaption></figure>)}</div></section>
    <section className="bg-[#19181b] py-20 text-white md:py-28"><div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]"><div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.14em] text-[#92dfd4]">Keep exploring</p><h2 className="text-[clamp(2.3rem,4vw,4rem)] tracking-[-.055em]">More stories</h2></div><Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-[#92dfd4]"><ArrowLeft size={16} /> All case studies</Link></div><div className="grid gap-6 md:grid-cols-2">{related.map((item) => <StudyCard key={item.slug} study={item} />)}</div><Link href="/contact" className="mt-12 inline-flex items-center gap-2 text-sm text-[#92dfd4]">Let’s discuss your story <ArrowUpRight size={16} /></Link></div></section>
  </article>;
}
