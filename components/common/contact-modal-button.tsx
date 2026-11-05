"use client";

import type { ReactNode } from "react";
import { useContactModal } from "@/hooks/use-contact-modal";
import { Button } from "@/components/ui/button";

export function ContactModalButton({ children }: { children: ReactNode }) {
  const { open } = useContactModal();
  return <Button onClick={open}>{children}</Button>;
}
