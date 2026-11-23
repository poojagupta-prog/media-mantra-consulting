"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { listingUrl } from "@/lib/blogs/query";

export function BlogSearch({ q, category }: { q: string; category: string }) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (input.current && document.activeElement !== input.current) {
      input.current.value = q;
    }
  }, [q]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
  }, [category]);

  const search = (value: string) => {
    router.replace(listingUrl({ q: value.trim().slice(0, 160), category }), {
      scroll: false,
    });
  };

  return (
    <form
      action="/blogs"
      method="get"
      className="blog-search"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        if (timer.current) clearTimeout(timer.current);
        search(input.current?.value ?? "");
      }}
    >
      <label className="blog-search-field">
        <Search size={18} aria-hidden="true" />
        <span className="sr-only">Search articles</span>
        <input
          ref={input}
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search ideas, topics, perspectives…"
          maxLength={160}
          onChange={(event) => {
            const value = event.currentTarget.value;
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(() => search(value), 400);
          }}
        />
      </label>
      <input type="hidden" name="category" value={category} />
      <button type="submit">
        Find articles <ArrowRight size={17} aria-hidden="true" />
      </button>
    </form>
  );
}
