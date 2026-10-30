"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { links, services } from "./data";

const navigationLinks = links.filter(([href]) => href !== "/contact");

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [desktopServices, setDesktopServices] = useState(false);
  const closeMobile = () => {
    setOpen(false);
    setOpenServices(false);
  };
  return (
    <header className="relative z-50 border-b border-black/10 bg-background">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] flex h-[88px] items-center justify-between gap-8">
        <Link
          href="/"
          aria-label="Media Mantra Consulting home"
          className="shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Media Mantra Consulting"
            width={135}
            height={95}
            priority
            className="h-14 w-auto"
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden h-full items-center gap-1 xl:flex"
        >
          {navigationLinks.map(([href, label]) =>
            href === "/services" ? (
              <div
                key={href}
                className="relative flex h-full items-center"
                onMouseEnter={() => setDesktopServices(true)}
                onMouseLeave={() => setDesktopServices(false)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget))
                    setDesktopServices(false);
                }}
              >
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className={`relative inline-flex h-full items-center px-[15px] text-[13px] font-medium transition-colors duration-200 hover:text-teal pr-1 ${pathname.startsWith(href) ? "text-teal after:absolute after:right-[15px] after:bottom-[22px] after:left-[15px] after:h-0.5 after:rounded-[2px] after:bg-teal after:content-['']" : ""}`}
                  onClick={() => setDesktopServices(false)}
                >
                  Services
                </Link>
                <button
                  type="button"
                  aria-label="Show services"
                  aria-haspopup="true"
                  aria-expanded={desktopServices}
                  aria-controls="desktop-services-menu"
                  className="rounded-full p-2 text-foreground/60 hover:text-teal"
                  onClick={() => setDesktopServices(!desktopServices)}
                >
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${desktopServices ? "rotate-180" : ""}`}
                  />
                </button>
                {desktopServices && (
                  <div
                    id="desktop-services-menu"
                    className="absolute left-1/2 top-[calc(100%-5px)] z-50 w-[590px] -translate-x-1/2 pt-4"
                  >
                    <div className="rounded-[28px] border border-black/10 bg-background p-6 shadow-[0_24px_70px_rgba(25,24,27,.16)]">
                      <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-4">
                        <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase text-teal">
                          What we do
                        </span>
                        <Link
                          href="/services"
                          onClick={() => setDesktopServices(false)}
                          className="inline-flex items-center gap-1 text-xs font-medium hover:text-teal"
                        >
                          Explore all services <ArrowUpRight size={15} />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setDesktopServices(false)}
                            className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-[#e7f0eb]"
                            aria-current={
                              pathname === `/services/${service.slug}`
                                ? "page"
                                : undefined
                            }
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg text-teal">
                              {service.icon}
                            </span>
                            <span className="pt-1 text-sm font-medium leading-5 group-hover:text-teal">
                              {service.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`relative inline-flex h-full items-center px-[15px] text-[13px] font-medium transition-colors duration-200 hover:text-teal ${pathname === href ? "text-teal after:absolute after:right-[15px] after:bottom-[22px] after:left-[15px] after:h-0.5 after:rounded-[2px] after:bg-teal after:content-['']" : ""}`}
              >
                {label}
              </Link>
            ),
          )}
        </nav>
        <Link
          href="/contact"
          className="hidden shrink-0 items-center gap-5 rounded-full bg-foreground py-2 pl-5 pr-2 text-xs font-medium text-white transition-colors hover:bg-teal xl:inline-flex"
        >
          Let’s talk{" "}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground">
            <ArrowUpRight size={17} />
          </span>
        </Link>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 xl:hidden"
          onClick={() => {
            setOpen(!open);
            setOpenServices(false);
          }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-88px)] overflow-y-auto border-t border-black/10 bg-background px-5 pb-6 shadow-2xl overscroll-contain xl:hidden"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map(([href, label]) =>
            href === "/services" ? (
              <div key={href} className="border-b border-black/10">
                <div className="flex items-center justify-between">
                  <Link
                    href={href}
                    onClick={closeMobile}
                    className={`block py-3.5 text-[17px] font-medium tracking-[-.025em] ${pathname.startsWith(href) ? "text-teal" : ""}`}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    aria-label="Show services"
                    aria-expanded={openServices}
                    aria-controls="mobile-services-menu"
                    onClick={() => setOpenServices(!openServices)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-foreground/70"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openServices ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {openServices && (
                  <div id="mobile-services-menu" className="grid gap-0.5 border-t border-black/5 pb-3 pt-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={closeMobile}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] leading-5 ${pathname === `/services/${service.slug}` ? "bg-[#e6efeb] font-medium text-teal" : "text-foreground/75 hover:bg-black/[.035]"}`}
                        aria-current={
                          pathname === `/services/${service.slug}`
                            ? "page"
                            : undefined
                        }
                      >
                        <span className="w-5 shrink-0 font-mono text-[10px] text-muted">{String(index + 1).padStart(2, "0")}</span>
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                aria-current={pathname === href ? "page" : undefined}
                className={`block border-b border-black/10 py-3.5 text-[17px] font-medium tracking-[-.025em] ${pathname === href ? "text-teal" : ""}`}
              >
                {label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            onClick={closeMobile}
            className="mt-5 flex items-center justify-between rounded-full bg-teal py-2.5 pl-5 pr-3 text-[13px] font-medium text-white"
          >
            Start a conversation <ArrowUpRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}
