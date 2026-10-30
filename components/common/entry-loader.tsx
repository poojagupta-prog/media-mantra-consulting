"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const endings = ["EDIA", "ANTRA"];

export function EntryLoader() {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let timeline: gsap.core.Timeline | undefined;
    let skipTween: gsap.core.Tween | undefined;
    let skipping = false;
    let touchStartY = 0;
    const finish = () => {
      timeline?.kill();
      skipTween?.kill();
      document.body.style.overflow = previousOverflow;
      setVisible(false);
    };
    const skip = () => {
      if (skipping) return;
      skipping = true;
      timeline?.kill();
      skipTween = gsap.to(node, {
        yPercent: -100,
        duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? 0.01
          : 0.6,
        ease: "power3.inOut",
        onComplete: finish,
      });
    };
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) skip();
    };
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (event: TouchEvent) => {
      if (touchStartY - (event.touches[0]?.clientY ?? touchStartY) > 30) skip();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (["Escape", "ArrowDown", "PageDown", " "].includes(event.key)) skip();
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", onWheel, { passive: true });
    node.addEventListener("touchstart", onTouchStart, { passive: true });
    node.addEventListener("touchmove", onTouchMove, { passive: true });

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        timeline = gsap
          .timeline({ onComplete: finish })
          .to(node, { opacity: 0, duration: 0.15 });
        return;
      }

      const tails = gsap.utils.toArray<HTMLElement>(".entry-ending");
      // Own the transforms in GSAP: CSS translations can be parsed as an
      // extra pixel offset that remains after yPercent returns to zero.
      gsap.set(".entry-initial, .entry-letter", { y: 0, yPercent: 115 });
      gsap.set(".entry-punchline span", { y: 0, yPercent: 110 });
      gsap.set(".entry-wordmark, .entry-punchline", {
        visibility: "visible",
      });
      gsap.set(tails.slice(1), { visibility: "hidden" });
      timeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: finish,
      });
      timeline
        .fromTo(
          ".entry-initial",
          { yPercent: 115, rotate: -12 },
          { yPercent: 0, rotate: 0, duration: 0.7, ease: "power4.out" },
          0.1,
        )
        .fromTo(
          ".entry-dot",
          { scale: 0 },
          { scale: 1, duration: 0.4, ease: "back.out(2)" },
          0.45,
        )
        .to(
          ".entry-tail",
          { width: () => tails[0].offsetWidth, duration: 0.6 },
          0.65,
        )
        .to(
          ".entry-ending-0 .entry-letter",
          { yPercent: 0, duration: 0.55, stagger: 0.045 },
          0.72,
        )
        .to(
          ".entry-ending-0 .entry-letter",
          { yPercent: -115, duration: 0.4, stagger: 0.025 },
          1.4,
        )
        .set(".entry-ending-0", { visibility: "hidden" }, 1.9)
        .to(
          ".entry-tail",
          { width: () => tails[1].offsetWidth, duration: 0.55 },
          1.9,
        )
        .set(".entry-ending-1", { visibility: "visible" }, 1.9)
        .to(
          ".entry-ending-1 .entry-letter",
          { yPercent: 0, duration: 0.55, stagger: 0.035 },
          1.95,
        )
        .to(".entry-wordmark", { y: "-0.36em", duration: 0.65 }, 2.7)
        .fromTo(
          ".entry-punchline span",
          { yPercent: 110, rotate: 4 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 0.7,
            stagger: 0.09,
            ease: "power4.out",
          },
          2.85,
        )
        .to(".entry-dot", { backgroundColor: "#92dfd4", duration: 0.3 }, 2.9)
        .to(
          ".entry-stage",
          { y: -50, opacity: 0, duration: 0.4, ease: "power2.in" },
          4.05,
        )
        .to(".entry-meta", { opacity: 0, duration: 0.25 }, 4.1)
        .to(
          node,
          {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.8,
            ease: "power4.inOut",
          },
          4.25,
        );
    }, node);

    return () => {
      ctx.revert();
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onWheel);
      node.removeEventListener("touchstart", onTouchStart);
      node.removeEventListener("touchmove", onTouchMove);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={root}
      className="entry-loader"
      aria-label="Media Mantra introduction"
    >
      <div className="entry-meta entry-header">
        <span>
          MEDIA MANTRA
          <span className="entry-brand-sub">CONSULTING / DUBAI</span>
        </span>
      </div>
      <div className="entry-stage" aria-hidden="true">
        <div className="entry-wordmark">
          <span className="entry-initial-mask">
            <span className="entry-initial">M</span>
          </span>
          <span className="entry-tail">
            {endings.map((ending, index) => (
              <span
                key={`${ending}-${index}`}
                className={`entry-ending entry-ending-${index}`}
              >
                {[...ending].map((letter, i) => (
                  <span className="entry-letter" key={i}>
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </span>
          <span className="entry-dot" />
        </div>
        <div className="entry-punchline">
          <div>
            <span>CREATING A</span>
          </div>
          <div>
            <span className="entry-noise">New You.</span>
          </div>
        </div>
      </div>
      <div className="entry-meta entry-footer">
        <span>
          A LITTLE M.
          <br />A LOT OF IMPACT.
        </span>
        <span className="entry-footer-note">
          TURNING WORDS
          <br />
          INTO WORLDS.
        </span>
      </div>
      <noscript>
        <style>{".entry-loader { display: none; }"}</style>
      </noscript>
    </div>
  );
}
