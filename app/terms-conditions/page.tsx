import { consultingMetadata } from "@/lib/consulting-metadata";
import { LegalPage } from "@/components/legal/legal-page";
import { termsAndConditions } from "@/components/legal/content";

export const metadata = consultingMetadata("/terms-conditions");

export default function TermsAndConditionsPage() {
  return <LegalPage kind="terms" document={termsAndConditions} />;
}
