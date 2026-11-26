import { consultingMetadata } from "@/lib/consulting-metadata";
import { ContactView } from "@/components/Contact/contact";

export const metadata = consultingMetadata("/contact-us");

const Contact = () => {
  return <ContactView />;
};

export default Contact;
