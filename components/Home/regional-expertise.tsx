import Image from "next/image";
import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";

const clients = [
  { name: "Blaupunkt", file: "black-logo .svg" },
  { name: "Liferay", file: "liferay  .png" },
  { name: "AUM Development", file: "aum .png" },
  { name: "Morph", file: "morph-logo.svg" },
  { name: "Visionet", file: "visionet - .svg", dark: true },
  { name: "BNW Developments", file: "bnw .jpg" },
  { name: "Boxx AI", file: "BoxxAI  .png" },
  { name: "DECA Properties", file: "deca.jpg" },
  { name: "TradeBridge", file: " trade bridge logo.png" },
  { name: "Centurion Properties", file: " Centurion - .jpg" },
  { name: "NDOT", file: " NDOT- .webp" },
  { name: "Amirah Developments", file: "amirah - .png" },
  { name: "E2E Networks", file: "e2e-logo.webp", dark: true },
  { name: "BAMX", file: "bamx - .png" },
  { name: "EBTL", file: "EBTL - .png" },
  { name: "Armaf", file: "armaf-logo.webp", mobileOnly: true },
];

export function RegionalExpertise() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-title"
      className="mx-auto w-[min(1440px,calc(100%-112px))] py-20 max-[768px]:w-[calc(100%-40px)] md:py-28"
    >
      <Reveal className="mb-10 grid items-end gap-7 md:mb-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="mb-6 flex items-center gap-3 font-mono text-[10px] leading-relaxed tracking-[.16em] text-teal uppercase">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal" />
            Our clients
          </p>
          <h2
            id="clients-title"
            className="text-[clamp(2.6rem,4.5vw,4.8rem)] font-[550] leading-[1.05] tracking-[-.065em]"
          >
            Ambitious brands.
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] font-normal text-teal italic">
              Shared ambition.
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-base leading-8 text-muted lg:mb-1 lg:justify-self-end">
          Different industries. Distinct voices. Meet the brands we help turn
          bold ideas into stories that matter.
        </p>
      </Reveal>

      <Reveal>
        <ul
          aria-label="Our clients"
          className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-foreground/10 bg-foreground/10 sm:grid-cols-3 lg:grid-cols-5"
        >
          {clients.map(({ name, file, dark, mobileOnly }) => (
            <li
              key={name}
              className={`group flex min-w-0 items-center justify-center px-5 py-5 sm:px-6 sm:py-6 ${mobileOnly ? "sm:hidden" : ""} ${
                dark
                  ? "bg-[#073f43] text-white/70 motion-safe:transition-colors motion-safe:duration-300 hover:bg-[#0a5054]"
                  : "bg-white text-muted motion-safe:transition-colors motion-safe:duration-300 hover:bg-[#eef3ef]"
              }`}
            >
              <div className="relative mx-auto my-5 h-20 w-full max-w-44 sm:my-7 sm:h-24">
                <Image
                  src={`/clients/${encodeURIComponent(file)}`}
                  alt={name}
                  fill
                  sizes="(max-width: 639px) 38vw, (max-width: 1023px) 25vw, 176px"
                  className="object-contain motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[Georgia,'Times_New_Roman',serif] text-lg text-teal italic sm:text-xl">
          Good company. Great stories.
        </p>
        <ArrowText href="/case-studies">Explore our work</ArrowText>
      </Reveal>
    </section>
  );
}
