import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsAndConditions } from "@/components/legal/content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions for using the Media Mantra Consultancy FZCO website, including intellectual property, privacy and governing law.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsAndConditionsPage() {
  return <LegalPage kind="terms" document={termsAndConditions} />;
}
