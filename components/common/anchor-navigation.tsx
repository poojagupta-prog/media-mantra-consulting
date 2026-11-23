"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export function AnchorNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const pending = useRef<{ path: string; id: string } | null>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest("a[href*='#']");
      if (!link || link.hasAttribute("download") || (link.getAttribute("target") && link.getAttribute("target") !== "_self")) return;
      const url = new URL((link as HTMLAnchorElement).href);
      if (url.origin !== window.location.origin || !url.hash) return;
      const id = decodeURIComponent(url.hash.slice(1));
      const path = url.pathname + url.search;
      event.preventDefault();
      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        if (window.location.hash) window.history.replaceState(window.history.state, "", path);
        scrollToId(id);
      } else {
        pending.current = { path, id };
        router.push(path);
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useEffect(() => {
    const destination = pending.current;
    if (!destination || destination.path.split("?")[0] !== pathname) return;
    let frame: number;
    let attempts = 0;
    function findTarget() {
      if (scrollToId(destination!.id)) pending.current = null;
      else if (attempts++ < 60) frame = requestAnimationFrame(findTarget);
    }
    frame = requestAnimationFrame(findTarget);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start",
  });
  return true;
}
