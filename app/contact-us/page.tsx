import { JsonLd } from "@/components/common/json-ld";
import { organizationRef, schemaContext } from "@/lib/schema";
import { consultingMetadata } from "@/lib/consulting-metadata";
import { ContactView } from "@/components/Contact/contact";

export const metadata = consultingMetadata("/contact-us");

const Contact = () => {
  return (
    <>
      <JsonLd data={{
        "@context": schemaContext,
        "@type": "ContactPage",
        url: metadata.alternates.canonical,
        about: organizationRef,
      }} />
      <ContactView />
    </>
  );
};

export default Contact;
