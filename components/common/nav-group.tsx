"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export const navGroups: Record<
  string,
  { label: string; items: [string, string][] }
> = {
  "/about": {
    label: "About us",
    items: [
      ["/about", "Our story"],
      ["/about#team", "Management team"],
      ["/awards", "Awards & recognition"],
      ["/gallery", "Gallery"],
    ],
  },
  "/#case-studies": {
    label: "Our work",
    items: [
      ["/#case-studies", "Case studies"],
      ["/dubai-it", "Dubai IT"],
    ],
  },
  "/case-studies": {
    label: "Stories",
    items: [
      ["/case-studies", "Case studies"],
      ["/blogs", "Blogs"],
    ],
  },
  "/news-room": {
    label: "Insights & media",
    items: [
      ["/news-room", "Newsroom & insights"],
      ["/podcasts", "Podcasts"],
    ],
  },
};

export function NavGroup({
  group,
  mobile = false,
  onNavigate,
}: {
  group: (typeof navGroups)[string];
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  return (
    <details
      ref={ref}
      className={mobile ? "nav-group nav-group-mobile" : "nav-group"}
      onMouseEnter={(e) => {
        if (!mobile) e.currentTarget.open = true;
      }}
      onMouseLeave={(e) => {
        if (!mobile) e.currentTarget.open = false;
      }}
      onBlur={(e) => {
        // Touch browsers can blur the summary before dispatching a link click.
        // Keep mobile panels open until selection so the tap target stays visible.
        if (!mobile && !e.currentTarget.contains(e.relatedTarget))
          e.currentTarget.open = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.currentTarget.open = false;
          e.currentTarget.querySelector("summary")?.focus();
        }
      }}
    >
      <summary>
        {group.label}
        <span
          aria-hidden="true"
          className={
            mobile
              ? "flex h-9 w-9 items-center justify-center rounded-full border border-black/10"
              : ""
          }
        >
          <ChevronDown size={14} className="transition-transform rotate-180" />
        </span>
      </summary>
      <div className="nav-group-panel">
        {group.items.map(([href, label]) => (
          <Link
            href={href}
            key={href}
            aria-current={pathname === href ? "page" : undefined}
            onClick={() => {
              if (ref.current) ref.current.open = false;
              onNavigate?.();
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </details>
  );
}
