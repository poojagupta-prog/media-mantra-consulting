import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { ComposedStudy, StorySection } from "./story-types";
import { AnimatedMetric, StoryGallery } from "./story-interactions";

function Breadcrumbs({ brand }: { brand: string }) {
  return <nav className="cs-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/case-studies">Case studies</Link><span aria-hidden="true">/</span><span aria-current="page">{brand}</span></nav>;
}

export function StoryHero({ study, story }: ComposedStudy) {
  if (story.hero === "editorial") {
    return <header className="cs-hero cs-hero-editorial"><div className="cs-wrap">
      <Breadcrumbs brand={study.brand} />
      <div className="cs-editorial-title"><p className="cs-eyebrow">{story.heroKicker}</p><h1>{story.heroLines.map((line, index) => <span key={line} className={index === story.heroLines.length - 1 ? "cs-hero-emphasis" : undefined}>{line}{" "}</span>)}</h1><p className="cs-editorial-description">{study.description}</p><a href={`#${story.sections[0].id}`} className="cs-read"><ArrowDown size={20} aria-hidden="true" /><span>Explore the story</span></a></div>
      <figure className="cs-editorial-art"><div><Image src={story.heroImage.src} alt={story.heroImage.alt} fill preload sizes="(max-width: 768px) 100vw, 90vw" className="object-cover" /></div><figcaption>{story.heroImage.caption}</figcaption></figure>
      <div className="cs-hero-meta"><span>{study.sector}</span><span>{story.period}</span></div>
    </div></header>;
  }
  if (story.hero === "architectural") {
    return <header className="cs-hero cs-hero-architectural">
      <div className="cs-wrap">
        <Breadcrumbs brand={study.brand} />
        <div className="cs-architectural-grid">
          <div className="cs-architectural-copy">
            <p className="cs-eyebrow">{story.heroKicker}</p>
            <h1>{story.heroLines.map((line, index) => <span key={line} className={index === story.heroLines.length - 1 ? "cs-hero-emphasis" : undefined}>{line}{" "}</span>)}</h1>
            <p className="cs-architectural-description">{study.description}</p>
            <a href={`#${story.sections[0].id}`} className="cs-read"><ArrowDown size={20} aria-hidden="true" /><span>Explore the portfolio</span></a>
            <p className="cs-architectural-period">{story.period}</p>
          </div>
          <figure className="cs-architectural-art"><div><Image src={story.heroImage.src} alt={story.heroImage.alt} fill preload sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" /></div><figcaption>{story.heroImage.caption}</figcaption></figure>
        </div>
      </div>
    </header>;
  }
  const immersive = story.hero === "immersive";
  return <header className={`cs-hero cs-hero-${story.hero}`}>
    {immersive && <Image src={story.heroImage.src} alt={story.heroImage.alt} fill preload sizes="100vw" className="cs-hero-photo" />}
    <div className="cs-wrap cs-hero-content">
      <Breadcrumbs brand={study.brand} />
      <div className="cs-hero-heading">
        <p className="cs-eyebrow">{story.heroKicker}</p>
        <h1>{story.heroLines.map((line, index) => <span key={line} className={index === story.heroLines.length - 1 ? "cs-hero-emphasis" : undefined}>{line}{index < story.heroLines.length - 1 ? " " : ""}</span>)}</h1>
        <div className="cs-hero-bottom"><p>{study.description}</p><a href={`#${story.sections[0].id}`} className="cs-read"><ArrowDown size={20} aria-hidden="true" /><span>Explore the story</span></a></div>
      </div>
      <div className="cs-hero-meta"><span>{study.sector}</span><span>{story.period}</span><span>Media Mantra Consulting <ArrowUpRight size={12} aria-hidden="true" /></span></div>
    </div>
    {!immersive && <figure className="cs-campaign-art cs-wrap"><div className="cs-campaign-image"><Image src={story.heroImage.src} alt={story.heroImage.alt} fill preload sizes="(max-width: 768px) 100vw, 90vw" className="object-contain" /></div><figcaption>{story.heroImage.caption}</figcaption></figure>}
    {immersive && story.theme === "alliance" && <p className="cs-hero-caption">{story.heroImage.caption}</p>}
  </header>;
}

export function StoryContents({ study, story }: ComposedStudy) {
  return <nav className="cs-contents" aria-label="Story chapters"><div className="cs-wrap"><span className="cs-contents-brand">{study.brand} <span>/ The story</span></span><div>{story.sections.filter((s) => ["narrative", "chapters", "metrics", "gallery", "project", "press", "evidence"].includes(s.kind)).map((section) => <a key={section.id} href={`#${section.id}`}>{section.kind === "project" ? section.client.split(" ")[0] : section.eyebrow.split(" / ")[1]}</a>)}</div></div></nav>;
}

/** Low-level sections can be reordered and combined independently for every story. */
export function StorySectionView({ section }: { section: StorySection }) {
  const label = <p className="cs-eyebrow">{section.eyebrow}</p>;
  switch (section.kind) {
    case "press": return <section id={section.id} className="cs-section cs-press"><div className="cs-wrap"><div className="cs-chapter-heading"><div>{label}<h2>{section.title}</h2></div><p className="cs-intro">{section.copy}</p></div><div className="cs-press-list">{section.items.map((item) => <div className="cs-press-item" key={item.publication}><p className="cs-press-publication">{item.publication}</p><div><h3>{item.title}</h3><p>{item.copy}</p></div></div>)}</div></div></section>;
    case "evidence": return <section id={section.id} className="cs-section cs-evidence"><div className="cs-wrap cs-editorial-grid"><div>{label}<h2>{section.title}</h2><p className="cs-intro">{section.copy}</p></div><div><dl className="cs-evidence-list">{section.rows.map((row) => <div key={row.label}><dt>{row.label}</dt><dd><strong>{row.value}</strong><span>{row.context}</span></dd></div>)}</dl><p className="cs-evidence-note">{section.note}</p></div></div></section>;
    case "project": return <section id={section.id} className="cs-section cs-project" aria-labelledby={`${section.id}-title`}><div className="cs-wrap cs-project-layout">
      <aside className="cs-project-identity"><span className="cs-project-number" aria-hidden="true">{section.number}</span><p className="cs-project-client">{section.client}</p><p className="cs-project-location">{section.location}</p></aside>
      <div className="cs-project-story">{label}<h2 id={`${section.id}-title`}>{section.title}</h2><div className="cs-prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <dl className="cs-project-metrics">{section.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
        {section.publications && <div className="cs-project-publications"><p className="cs-eyebrow">Selected publications</p><ul>{section.publications.map((name) => <li key={name}>{name}</li>)}</ul></div>}
        {section.note && <p className="cs-project-note">{section.note}</p>}
      </div>
    </div></section>;
    case "narrative": return <section id={section.id} className={`cs-section cs-narrative ${section.tone === "tint" ? "cs-tint" : ""}`}><div className="cs-wrap cs-editorial-grid"><div>{label}{section.aside && <p className="cs-margin-note">{section.aside}</p>}</div><div><h2>{section.title}</h2><div className="cs-prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></div></section>;
    case "statement": return <section id={section.id} className="cs-section cs-statement"><div className="cs-wrap">{label}<h2>{section.title}</h2><div className="cs-statement-foot"><p>{section.copy}</p><span className="cs-eyebrow">{section.note}</span></div></div></section>;
    case "chapters": return <section id={section.id} className={`cs-section cs-chapters cs-chapters-${section.items.length}`}><div className="cs-wrap"><div className="cs-chapter-heading"><div>{label}<h2>{section.title}</h2></div>{section.introduction && <p className="cs-intro">{section.introduction}</p>}</div><div className="cs-chapter-list">{section.items.map((item, index) => <div className="cs-chapter" key={item.title}><span className="cs-chapter-number">{String(index + 1).padStart(2, "0")}</span><div>{item.label && <p className="cs-eyebrow">{item.label}</p>}<h3>{item.title}</h3><p>{item.copy}</p></div></div>)}</div></div></section>;
    case "timeline": return <section id={section.id} className="cs-section cs-timeline"><div className="cs-wrap cs-editorial-grid"><div className="cs-sticky-heading">{label}<h2>{section.title}</h2>{section.period && <p className="cs-period">{section.period}</p>}</div><div>{section.months && <div className="cs-months" aria-label={`Campaign period: ${section.period}`}>{section.months.map((month) => <span key={month}>{month}</span>)}</div>}<ol className="cs-timeline-list">{section.items.map((item, index) => <li key={item.title}><span className="cs-timeline-marker">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p></li>)}</ol></div></div></section>;
    case "metrics": return <section id={section.id} className="cs-section cs-results"><div className="cs-wrap">{label}<h2>{section.title}</h2><div className="cs-metrics">{section.metrics.map((metric) => <AnimatedMetric key={metric.label} {...metric} />)}</div><p className="cs-results-copy">{section.copy}</p><p className="cs-source-note">{section.note}</p></div></section>;
    case "gallery": return <section id={section.id} className="cs-section cs-coverage"><div className="cs-wrap"><div className="cs-chapter-heading"><div>{label}<h2>{section.title}</h2></div><p className="cs-intro">{section.copy}</p></div>{section.publications && <ul className="cs-publications" aria-label="Notable publications named in the campaign record">{section.publications.map((name) => <li key={name}>{name}</li>)}</ul>}<StoryGallery images={section.images} /></div></section>;
    case "image": return <section id={section.id} className="cs-image-section"><figure><div className="cs-full-image"><Image src={section.image.src} alt={section.image.alt} fill sizes="100vw" className="object-cover" /></div><figcaption className="cs-wrap">{section.image.caption}</figcaption></figure><div className="cs-image-title cs-wrap">{label}<h2>{section.title}</h2>{section.copy && <p>{section.copy}</p>}</div></section>;
    default: { const exhaustive: never = section; return exhaustive; }
  }
}
