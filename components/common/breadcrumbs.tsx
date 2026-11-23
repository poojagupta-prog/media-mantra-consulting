"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

type Breadcrumb = { href: string; label: string };

export function Breadcrumbs({ labels }: { labels: Record<string, string> }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentPath = `/${segments.join("/")}`;

  if (currentPath === "/") return null;

  // These pages already render breadcrumbs within their bespoke story heroes.
  if (currentPath === "/case-studies" || currentPath.startsWith("/case-studies/")) {
    return null;
  }

  const items: Breadcrumb[] = [{ href: "/", label: "Home" }];
  for (let index = 0; index < segments.length; index++) {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    if (labels[href]) items.push({ href, label: labels[href] });
  }
  if (currentPath !== "/" && !labels[currentPath]) {
    items.push({ href: currentPath, label: "Page not found" });
  }

  return (
    <nav aria-label="Breadcrumb" className="border-b border-black/10 bg-background">
      <ol className="mx-auto flex w-[min(1440px,calc(100%-112px))] flex-wrap items-center gap-x-3 gap-y-2 py-4 text-xs leading-5 max-[768px]:w-[calc(100%-40px)]">
        {items.map((item, index) => (
          <li key={item.href} className="flex min-w-0 items-center gap-3">
            {index > 0 && (
              <ChevronRight size={12} aria-hidden="true" className="shrink-0 text-foreground/40" />
            )}
            {index === items.length - 1 ? (
              <span aria-current="page" className="min-w-0 font-medium text-foreground [overflow-wrap:anywhere]">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="shrink-0 text-foreground/65 transition-colors hover:text-teal hover:underline underline-offset-4">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
