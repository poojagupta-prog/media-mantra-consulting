"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useContactModal } from "@/hooks/use-contact-modal";

/** Opens the enquiry modal while preserving normal modified-click navigation. */
export function ContactModalLink(props: Omit<ComponentProps<typeof Link>, "onNavigate">) {
  const { open } = useContactModal();

  return (
    <Link
      {...props}
      aria-haspopup="dialog"
      onNavigate={(event) => {
        event.preventDefault();
        open();
      }}
    />
  );
}
