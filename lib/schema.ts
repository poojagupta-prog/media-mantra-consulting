export const schemaContext = "https://schema.org";
export const siteUrl = "https://www.mediamantraconsulting.com/";
export const organizationRef = { "@id": `${siteUrl}#organization` };
const websiteRef = { "@id": `${siteUrl}#website` };
const founderRef = { "@id": `${siteUrl}about-us#udit-pathak` };
const name = "Media Mantra Consulting";
const legalName = "Media Mantra Consultancy FZCO";
const email = "info@mediamantraconsulting.com";
const dubaiPhone = "+971-56-179-1863";

const dubaiAddress = {
  "@type": "PostalAddress",
  streetAddress: "Churchill Tower, 6th floor, 615, Business Bay",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
};

export const siteSchema = {
  "@context": schemaContext,
  "@graph": [
    {
      "@type": "Organization",
      ...organizationRef,
      name,
      legalName,
      url: siteUrl,
      logo: `${siteUrl}logo.png`,
      email,
      sameAs: [
        "https://www.linkedin.com/company/media-mantra-mena/",
        "https://www.youtube.com/@PRwithUdit",
      ],
      contactPoint: [
        { "@type": "ContactPoint", telephone: dubaiPhone, contactType: "sales", areaServed: "AE" },
        { "@type": "ContactPoint", telephone: "+91-99907-95002", contactType: "sales", areaServed: "IN" },
      ],
      address: [
        dubaiAddress,
        {
          "@type": "PostalAddress",
          streetAddress: "Ground floor, Plot no. 63, Institutional Area, Sector 32",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122001",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "16 Earl Street",
          addressLocality: "Hunters Hill",
          addressRegion: "NSW",
          postalCode: "2110",
          addressCountry: "AU",
        },
      ],
      founder: [{ "@type": "Person", ...founderRef, name: "Udit Pathak" }],
    },
    {
      "@type": "WebSite",
      ...websiteRef,
      name,
      url: siteUrl,
      publisher: organizationRef,
    },
  ],
};

export const dubaiBusiness = {
  "@type": "ProfessionalService",
  "@id": `${siteUrl}#dubai`,
  name: `${legalName} — PR Agency in Dubai`,
  url: siteUrl,
  parentOrganization: organizationRef,
  telephone: dubaiPhone,
  email,
  address: dubaiAddress,
  areaServed: "AE",
};

export const aboutSchema = {
  "@context": schemaContext,
  "@graph": [
    {
      "@type": "AboutPage",
      url: `${siteUrl}about-us`,
      about: organizationRef,
    },
    {
      "@type": "Person",
      ...founderRef,
      name: "Udit Pathak",
      jobTitle: "Co-founder & Director",
      worksFor: organizationRef,
      sameAs: ["https://www.linkedin.com/in/uditpathak/"],
    },
  ],
};

export function breadcrumbSchema(items: readonly { href: string; label: string }[]) {
  return {
    "@context": schemaContext,
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ href, label }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: new URL(href, siteUrl).href,
    })),
  };
}
