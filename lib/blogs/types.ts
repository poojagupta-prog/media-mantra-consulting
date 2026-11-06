export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
    sourceUrl?: string;
  } | null;
  author: { name: string | null };
  publishedAt: string;
  updatedAt?: string;
  category: string;
  sourceCategories?: string[];
  tags: string[];
  featured: boolean;
  seo: { title?: string; description?: string };
  sourceUrl?: string;
  contentHtml?: string;
}
export interface TocEntry {
  id: string;
  text: string;
  level: number;
}
export interface PreparedBlog extends Blog {
  hasLocalBody: boolean;
  contentHtml: string;
  readingMinutes: number;
  toc: TocEntry[];
}
export interface BlogQuery {
  page?: string;
  q?: string;
  category?: string;
}
export interface BlogRepository {
  getAll(): Promise<Blog[]>;
}
