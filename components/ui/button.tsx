"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { ContactModalLink } from "@/components/common/contact-modal-link";

export function Button({
  children,
  href = "/contact-us",
  light = false,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  light?: boolean;
  onClick?: () => void;
}) {
  const NavigationLink = href === "/contact-us" ? ContactModalLink : Link;
  const className = `group inline-flex items-center gap-8 rounded-full py-2 pl-6 pr-2 text-xs font-medium transition-colors ${light ? "bg-white text-foreground hover:bg-[#c6eee5]" : "bg-teal text-white hover:bg-[#005e63]"}`;
  const content = (
    <>
      {children}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full ${light ? "bg-foreground text-white" : "bg-white text-teal"}`}
      >
        <ArrowUpRight
          size={18}
          className="transition-transform group-hover:rotate-45"
        />
      </span>
    </>
  );

  return onClick ? (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  ) : (
    <NavigationLink href={href} className={className}>
      {content}
    </NavigationLink>
  );
}
