import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { articles } from "@/components/Newsroom/newsroom-data";

export function MediaImage({
  src,
  alt,
  className = "",
  preload = false,
}: {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
      preload={preload}
      className={`object-cover ${className}`}
    />
  );
}
export function Label({ children }: { children: ReactNode }) {
  return <p className="media-label">{children}</p>;
}
export function Heading({
  label,
  title,
  accent,
  children,
}: {
  label: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="media-heading">
      <div>
        <Label>{label}</Label>
        <h2>
          {title} {accent && <em>{accent}</em>}
        </h2>
      </div>
      {children && <p className="media-copy">{children}</p>}
    </Reveal>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="media-link" href={href}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Closing({
  title = "Let’s make the next story matter.",
  text = "Bring your ambition. We’ll bring a fresh perspective.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="media-closing">
      <div className="media-wrap">
        <Label>A conversation is a good beginning</Label>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>Start a conversation</Button>
      </div>
    </section>
  );
}
export function RelatedNews({
  label = "From the newsroom",
  podcast = false,
}: {
  label?: string;
  podcast?: boolean;
}) {
  const selected = podcast
    ? [articles[8], articles[6], articles[10]]
    : [articles[1], articles[4], articles[6]];
  return (
    <section className="media-wrap media-section">
      <Heading label={label} title="Stories with" accent="substance.">
        {podcast
          ? "Explore the podcast’s launch story, leadership perspectives and conversations from our newsroom."
          : "Existing press coverage from our newsroom. These articles are not evidence of Dubai IT involvement or award wins."}
      </Heading>
      <div className="media-three">
        {selected.map((a) => (
          <a
            key={a.href}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="media-news group"
          >
            <div className="media-picture">
              <MediaImage
                src={a.image}
                alt={a.alt}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Label>{a.publisher} ↗</Label>
            <h3>{a.title}</h3>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
      <TextLink href="/news-room">Visit the newsroom</TextLink>
    </section>
  );
}
