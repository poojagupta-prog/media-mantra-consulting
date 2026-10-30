import { ScrollStatement } from "../common/scroll-motion";

export function Manifesto() {
  return (
    <section className="bg-teal py-24 text-white md:py-32">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-10 text-white/65">
          Our mantra
        </p>
        <ScrollStatement>
          Be clear. Be bold. Be culturally connected. Tell stories that earn
          attention — and give people a reason to care.
        </ScrollStatement>
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mt-12 text-[#b6e9df]">
          Media Mantra Consulting / PR & communications / Dubai
        </p>
      </div>
    </section>
  );
}
