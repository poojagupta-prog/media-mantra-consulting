"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function Button({
  children,
  href = "/contact",
  light = false,
}: {
  children: ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-8 rounded-full py-2 pl-6 pr-2 text-xs font-medium transition-colors ${light ? "bg-white text-foreground hover:bg-[#c6eee5]" : "bg-teal text-white hover:bg-[#005e63]"}`}
    >
      {children}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full ${light ? "bg-foreground text-white" : "bg-white text-teal"}`}
      >
        <ArrowUpRight
          size={18}
          className="transition-transform group-hover:rotate-45"
        />
      </span>
    </Link>
  );
}
