import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "./newsroom-data";

export function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col">
      <a href={article.href} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col" aria-label={`${article.title} — read on ${article.publisher} (opens in a new tab)`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-[#e5e8e2]">
          <Image src={article.image} alt={article.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-teal transition-colors group-hover:bg-teal group-hover:text-white"><ArrowUpRight size={19} aria-hidden="true" /></span>
        </div>
        <div className="flex flex-1 flex-col pt-6">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[.1em] text-teal">{article.publisher}</p>
          <h3 className="text-[clamp(1.4rem,2.1vw,1.9rem)] font-medium leading-[1.2] tracking-[-.045em] transition-colors group-hover:text-teal">{article.title}</h3>
          <div className="mt-auto pt-6"><div className="flex items-center justify-between gap-3 border-t border-black/15 pt-4"><span className="font-mono text-[10px] uppercase tracking-wider text-muted">{article.category}</span><span className="text-xs font-semibold">Read article <span aria-hidden="true">↗</span></span></div></div>
        </div>
      </a>
    </article>
  );
}
