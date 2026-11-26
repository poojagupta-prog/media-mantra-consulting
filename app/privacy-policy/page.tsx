import { consultingMetadata } from "@/lib/consulting-metadata";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/components/legal/content";

export const metadata = consultingMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  return <LegalPage kind="privacy" document={privacyPolicy} />;
}
