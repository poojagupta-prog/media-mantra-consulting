import { JsonLd } from "@/components/common/json-ld";
import { faqData } from "@/components/Home/home-faq";
import { HomeView } from "@/components/Home/home-view";
import { consultingMetadata } from "@/lib/consulting-metadata";
import { dubaiBusiness, schemaContext, siteUrl } from "@/lib/schema";

const homeMetadata = consultingMetadata("/");
export const metadata = {
  ...homeMetadata,
  // Keep the trailing slash in the spreadsheet's absolute homepage URL.
  metadataBase: null,
};

const structuredData = {
  "@context": schemaContext,
  "@graph": [
    dubaiBusiness,
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}#faq`,
      mainEntity: faqData.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <HomeView>
      <JsonLd data={structuredData} />
    </HomeView>
  );
}
