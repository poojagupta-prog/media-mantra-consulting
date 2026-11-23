// Content transcribed from the supplied policy documents.
// Privacy response deadline confirmed by the site owner as six months.
export type LegalBlock =
  | { type: "paragraph" | "heading"; text: string }
  | { type: "list"; items: string[] };

export type LegalDocument = {
  introduction: string[];
  sections: { id: string; title: string; blocks: LegalBlock[] }[];
};

export const privacyPolicy: LegalDocument = {
  "introduction": [
    "Your privacy matters to us. This policy explains what personal data Media Mantra Consultancy FZCO collects when you use our website or contact us, why we collect it, and the choices you have."
  ],
  "sections": [
    {
      "id": "who-we-are",
      "title": "Who we are",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Media Mantra Consultancy FZCO (\"Media Mantra\", \"we\", \"us\", \"our\") is a company registered in Dubai, United Arab Emirates. We run this website at https://mediamantraconsulting.com/ and provide PR, communications and digital marketing services."
        },
        {
          "type": "paragraph",
          "text": "For any privacy question, you can reach us at info@mediamantraconsulting.com."
        }
      ]
    },
    {
      "id": "what-information-we-collect",
      "title": "What information we collect",
      "blocks": [
        {
          "type": "heading",
          "text": "Information you give us"
        },
        {
          "type": "list",
          "items": [
            "Your name, email address, phone number, company and job title",
            "The details of your enquiry, such as the services you are interested in and your message",
            "Information you send when you subscribe to updates, request a proposal or apply for a job"
          ]
        },
        {
          "type": "heading",
          "text": "Information collected automatically"
        },
        {
          "type": "list",
          "items": [
            "IP address, browser type, device, operating system and language",
            "Pages you visit, time spent, and the website or ad that brought you here",
            "Cookie and similar technology data (see section 5)"
          ]
        },
        {
          "type": "heading",
          "text": "Information from other sources"
        },
        {
          "type": "list",
          "items": [
            "Details you submit through lead forms on advertising platforms such as Google or Meta",
            "Publicly available business information, such as your company website or professional profile"
          ]
        },
        {
          "type": "paragraph",
          "text": "We do not knowingly collect sensitive personal data through this website. Please do not send it to us."
        }
      ]
    },
    {
      "id": "how-we-use-your-information",
      "title": "How we use your information",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We use personal data to:"
        },
        {
          "type": "list",
          "items": [
            "Reply to your enquiries and prepare proposals",
            "Provide, manage and improve our services",
            "Send you updates, insights or offers, where you have agreed or where the law allows",
            "Understand how our website is used and make it better",
            "Run and measure our advertising",
            "Keep our website secure and prevent misuse",
            "Meet legal and regulatory obligations"
          ]
        }
      ]
    },
    {
      "id": "our-legal-basis",
      "title": "Our legal basis",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We process personal data in line with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and, where it applies to you, other data protection laws such as the EU GDPR. Our basis is usually one of these:"
        },
        {
          "type": "list",
          "items": [
            "Your consent, for example marketing emails and non-essential cookies",
            "Taking steps at your request, such as answering an enquiry or preparing a proposal",
            "Our legitimate interests, such as running a secure website and improving our services, balanced against your rights",
            "Legal obligation, where the law requires us to keep or share information"
          ]
        },
        {
          "type": "paragraph",
          "text": "You can withdraw consent at any time."
        }
      ]
    },
    {
      "id": "cookies-and-tracking",
      "title": "Cookies and tracking",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We use cookies and similar tools to make the site work and to understand how it is used."
        },
        {
          "type": "paragraph",
          "text": "You can accept or reject non-essential cookies in our cookie banner, or block them in your browser settings. Blocking some cookies may affect how the site works."
        }
      ]
    },
    {
      "id": "who-we-share-your-information-with",
      "title": "Who we share your information with",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We do not sell your personal data. We share it only when needed, with:"
        },
        {
          "type": "list",
          "items": [
            "Service providers that help us run the business, such as website hosting, email, CRM, analytics and advertising platforms. They may only use your data for our purposes.",
            "Media Mantra group companies in India, the UAE, Singapore and Australia, where needed to handle your enquiry or deliver services",
            "Authorities or regulators, when the law requires it",
            "A buyer or successor, if our business is sold or restructured"
          ]
        }
      ]
    },
    {
      "id": "transfers-outside-the-uae",
      "title": "Transfers outside the UAE",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Some of our providers and group companies are based outside the UAE. When we transfer personal data abroad, we take steps to make sure it stays protected, as required by applicable law."
        }
      ]
    },
    {
      "id": "how-long-we-keep-your-information",
      "title": "How long we keep your information",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We keep personal data only as long as we need it for the reasons above. As a guide, enquiry data is kept for 24 months after our last contact, and marketing data until you unsubscribe. We may keep some records longer where the law requires it."
        }
      ]
    },
    {
      "id": "how-we-protect-your-information",
      "title": "How we protect your information",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We use reasonable technical and organisational measures to protect your data, such as access controls and secure hosting. No online system is completely secure, so we cannot guarantee absolute security. If a breach affects you, we will act and notify as the law requires."
        }
      ]
    },
    {
      "id": "your-rights",
      "title": "Your rights",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Depending on where you live, you may have the right to:"
        },
        {
          "type": "list",
          "items": [
            "Ask what personal data we hold about you and get a copy",
            "Ask us to correct data that is wrong or incomplete",
            "Ask us to delete or restrict your data",
            "Object to certain processing, including direct marketing",
            "Withdraw consent at any time",
            "Ask for your data in a portable format",
            "Complain to a data protection authority"
          ]
        },
        {
          "type": "paragraph",
          "text": "To use any of these rights, email info@mediamantraconsulting.com. We may need to confirm your identity first, and we aim to reply within 6 months. You can unsubscribe from marketing emails at any time using the link in them."
        }
      ]
    },
    {
      "id": "children",
      "title": "Children",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Our website and services are meant for businesses and adults. We do not knowingly collect personal data from anyone under 18. If you think a child has given us their data, please contact us and we will delete it."
        }
      ]
    },
    {
      "id": "links-to-other-websites",
      "title": "Links to other websites",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Our site may link to other websites, such as media outlets, client sites and social platforms. We do not control them and are not responsible for their privacy practices. Please read their policies before sharing any data."
        }
      ]
    },
    {
      "id": "changes-to-this-policy",
      "title": "Changes to this policy",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We may update this policy from time to time. The latest version will always be on this page with a new \"last updated\" date. For major changes, we will tell you in a clear way."
        }
      ]
    },
    {
      "id": "contact-us",
      "title": "Contact us",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Media Mantra Consultancy FZCO Churchill Tower, 6th floor, 615, Business Bay, United Arab Emirates Email: info@mediamantraconsulting.com Phone: +971-561791863"
        }
      ]
    }
  ]
};

export const termsAndConditions: LegalDocument = {
  "introduction": [
    "Thank you for visiting our website, https://mediamantraconsulting.com/ (the “Website”). This Website is owned and operated by Media Mantra Consultancy FZCO.",
    "By accessing or using this Website, you agree to comply with the following Terms and Conditions, as well as all applicable laws, statutes, and regulations. If you do not agree to these Terms, please refrain from using our Website. We may update or modify these Terms at any time, and any changes will be effective immediately upon posting. Continued use of the Website after any changes signifies your acceptance of the revised Terms."
  ],
  "sections": [
    {
      "id": "copyright-notice",
      "title": "Copyright notice",
      "blocks": [
        {
          "type": "paragraph",
          "text": "All content on this Website, including text, images, videos, audio files, data, and other materials, is owned by Media Mantra Consultancy FZCO, its clients, or content providers, and is protected by copyright and intellectual property laws. You may not copy, distribute, modify, or create derivative works of any materials on this Website without prior written consent from Media Mantra Consultancy FZCO or the owner of the materials. All rights not expressly granted in these Terms are reserved by Media Mantra Consultancy FZCO."
        }
      ]
    },
    {
      "id": "prohibited-conduct",
      "title": "Prohibited conduct",
      "blocks": [
        {
          "type": "paragraph",
          "text": "You may not resell access to this Website, or any content contained within the Website, to any third party. You may not use the Website for your own commercial purposes (other than considering or engaging in business with Media Mantra Consultancy FZCO) without the prior written consent of Media Mantra Consultancy FZCO."
        }
      ]
    },
    {
      "id": "privacy-consent",
      "title": "Privacy & consent",
      "blocks": [
        {
          "type": "paragraph",
          "text": "By registering on our Website, setting up an account, and agreeing to these T&C, you consent to the collection, use, and disclosure of your personal information as outlined in our Privacy Policy. We encourage you to review our Privacy Policy to understand how we handle your personal information."
        }
      ]
    },
    {
      "id": "third-party-links-and-content",
      "title": "Third-Party Links and Content",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This Website may contain links to third-party websites or services. Media Mantra Consultancy FZCO does not control or endorse these external sites and is not responsible for their content or practices. Accessing third-party links is at your own risk, and Media Mantra Consultancy FZCO disclaims liability for any loss or damage that may arise from their use."
        }
      ]
    },
    {
      "id": "limitation-of-liability",
      "title": "Limitation of Liability",
      "blocks": [
        {
          "type": "paragraph",
          "text": "To the fullest extent allowed by law, Media Mantra Consultancy FZCO shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:"
        },
        {
          "type": "list",
          "items": [
            "Your use or inability to use the Website.",
            "Unauthorized access to or alteration of your data or communications.",
            "Any other issues relating to the Website or the services we provide."
          ]
        }
      ]
    },
    {
      "id": "indemnification",
      "title": "Indemnification",
      "blocks": [
        {
          "type": "paragraph",
          "text": "You agree to indemnify, defend, and hold harmless Media Mantra Consultancy FZCO, along with its directors, officers, employees, consultants, agents, and affiliates, against any and all third-party claims, damages, costs, and expenses (including legal fees) arising out of your use of this Website or any breach of these Terms and Conditions."
        }
      ]
    },
    {
      "id": "governing-law-and-jurisdiction",
      "title": "Governing Law and Jurisdiction",
      "blocks": [
        {
          "type": "paragraph",
          "text": "These Terms and Conditions are governed by the laws of the United Arab Emirates, specifically the Emirate of Dubai. Any disputes related to these Terms or your use of the Website will fall under the exclusive jurisdiction of the courts in Dubai, UAE."
        }
      ]
    },
    {
      "id": "intellectual-property-rights",
      "title": "Intellectual Property Rights",
      "blocks": [
        {
          "type": "paragraph",
          "text": "All trademarks, service marks, and trade names displayed on this Website are the property of Media Mantra Consultancy FZCO or respective owners. You agree not to use or reproduce any such trademarks or service marks without prior written consent from Media Mantra Consultancy FZCO or the relevant rights holders."
        }
      ]
    },
    {
      "id": "disclaimer-of-warranties",
      "title": "Disclaimer of Warranties",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The Website and its content are provided “as is” and “as available,” without any guarantees of accuracy, reliability, or non-infringement. Media Mantra Consultancy FZCO does not guarantee that the Website will be error-free or continuously available, nor do we guarantee any results from its use."
        }
      ]
    },
    {
      "id": "termination-of-access",
      "title": "Termination of Access",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We reserve the right to terminate or suspend your access to the Website at any time, without prior notice, if we believe you have violated these Terms or applicable laws. Termination of access does not affect any pre-existing rights or obligations."
        }
      ]
    }
  ]
};
