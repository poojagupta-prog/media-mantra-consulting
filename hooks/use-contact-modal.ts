"use client";

import { createContext, useContext } from "react";

export type ContactModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const ContactModalContext = createContext<ContactModalState | null>(
  null,
);

/** Available anywhere beneath ContactModalProvider in the root layout. */
export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context)
    throw new Error(
      "useContactModal must be used within ContactModalProvider.",
    );
  return context;
}
