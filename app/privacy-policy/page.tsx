import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/components/legal/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Media Mantra Consultancy FZCO collects, uses and protects your personal information, and the choices and rights you have.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalPage kind="privacy" document={privacyPolicy} />;
}
