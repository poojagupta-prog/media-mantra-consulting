"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ContactModalLink } from "@/components/common/contact-modal-link";

export function ArrowText({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const NavigationLink = href === "/contact" ? ContactModalLink : Link;
  return (
    <NavigationLink
      href={href}
      className="group inline-flex items-center gap-5 border-b border-current/30 pb-2 text-xs font-medium"
    >
      {children}
      <ArrowRight
        size={17}
        className="transition-transform group-hover:translate-x-1"
      />
    </NavigationLink>
  );
}
