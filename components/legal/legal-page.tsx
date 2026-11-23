import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BrandStar } from "@/components/ui/brand-star";
import type { LegalDocument } from "./content";
import { LegalContents } from "./legal-contents";
import styles from "./legal-page.module.css";

// Keep the document's wording while making its contact details and policy references usable.
function LinkedText({ text }: { text: string }) {
  const tokens = text.split(/(https:\/\/mediamantraconsulting\.com\/|info@mediamantraconsulting\.com|\+971-561791863|Privacy Policy)/g);
  return tokens.map((token, index) => {
    if (token === "Privacy Policy") return <Link key={index} href="/privacy-policy">{token}</Link>;
    if (token === "info@mediamantraconsulting.com") return <a key={index} href={`mailto:${token}`}>{token}</a>;
    if (token === "+971-561791863") return <a key={index} href="tel:+971561791863">{token}</a>;
    if (token === "https://mediamantraconsulting.com/") return <Link key={index} href="/">{token}</Link>;
    return token;
  });
}

export function LegalPage({ kind, document }: { kind: "privacy" | "terms"; document: LegalDocument }) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms and Conditions";
  const relatedHref = isPrivacy ? "/terms-conditions" : "/privacy-policy";
  const relatedTitle = isPrivacy ? "Terms and Conditions" : "Privacy Policy";

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="legal-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}><span /> Media Mantra / Legal</p>
          <div className={styles.heroHeading}>
            <h1 id="legal-title">
              {isPrivacy ? <>Privacy <em>Policy.</em></> : <>Terms and<br /><em>Conditions.</em></>}
            </h1>
            <BrandStar className={styles.brand} />
          </div>
          <div className={styles.heroBottom}>
            <p>{isPrivacy ? "Your privacy. Our responsibility." : "Clear terms. Shared understanding."}</p>
            <span>Last updated <time dateTime="2026-11-06">6 November 2026</time></span>
          </div>
        </div>
        <div className={styles.orbit} aria-hidden="true" />
      </section>

      <div className={`${styles.container} ${styles.layout}`}>
        <aside className={styles.sidebar}>
          <nav aria-label={`${title} contents`} className={styles.contents}>
            <p className={styles.eyebrow}>On this page <ArrowDown size={13} aria-hidden="true" /></p>
            <LegalContents sections={document.sections.map(({ id, title }) => ({ id, title }))} />
            <Link href={relatedHref} className={styles.related}>{relatedTitle}<ArrowUpRight size={15} aria-hidden="true" /></Link>
          </nav>
        </aside>

        <article className={styles.article} aria-label={title}>
          <div className={styles.introduction}>
            {document.introduction.map((text, index) => <p key={index}><LinkedText text={text} /></p>)}
          </div>
          {document.sections.map((section, index) => (
            <section id={section.id} key={section.id} className={styles.section} aria-labelledby={`${section.id}-title`}>
              <div className={styles.sectionHeading}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
              </div>
              <div className={styles.sectionBody}>
                {section.blocks.map((block, blockIndex) => block.type === "list" ? (
                  <ul key={blockIndex}>{block.items.map((text, itemIndex) => <li key={itemIndex}><LinkedText text={text} /></li>)}</ul>
                ) : block.type === "heading" ? (
                  <h3 key={blockIndex}>{block.text}</h3>
                ) : <p key={blockIndex}><LinkedText text={block.text} /></p>)}
              </div>
            </section>
          ))}
          <div className={styles.contact}>
            <p className={styles.eyebrow}>Let’s keep things clear</p>
            <h2>Have a <em>question?</em></h2>
            <p>Get in touch with our team.</p>
            <a href="mailto:info@mediamantraconsulting.com">info@mediamantraconsulting.com<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </article>
      </div>
    </div>
  );
}
