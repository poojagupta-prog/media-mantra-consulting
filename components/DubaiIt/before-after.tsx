"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <div
      className="relative h-[clamp(420px,52vw,680px)] w-full overflow-hidden rounded-[28px] bg-[#0c3f68] shadow-[0_24px_70px_#073f4324] max-[768px]:h-[520px] max-[768px]:rounded-[18px]"
      style={{ "--split": `${position}%` } as CSSProperties}
    >
      <Image
        src="/images/dubai-it/dubai-after.png"
        alt="Completed Burj Khalifa and Downtown Dubai at dusk"
        fill
        sizes="(max-width: 768px) 100vw, 85vw"
        className="object-cover object-[center_1%]"
      />
      <div className="absolute inset-0 [clip-path:inset(0_calc(100%_-_var(--split))_0_0)]">
        <Image
          src="/images/dubai-it/dubai-before.png"
          alt="The Burj Khalifa area during construction"
          fill
          sizes="(max-width: 768px) 100vw, 85vw"
          className="object-cover object-[center_53%]"
        />
        <span className="pointer-events-none absolute top-7 left-7 z-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold tracking-[.07em] text-[#19181b] uppercase max-[768px]:top-[18px] max-[768px]:left-4 max-[768px]:px-[13px] max-[768px]:py-2 max-[768px]:text-[10px]">
          Before
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 [clip-path:inset(0_0_0_var(--split))]">
        <span className="absolute top-7 right-7 z-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold tracking-[.07em] text-[#19181b] uppercase max-[768px]:top-[18px] max-[768px]:right-4 max-[768px]:px-[13px] max-[768px]:py-2 max-[768px]:text-[10px]">
          After
        </span>
      </div>
      <span className="pointer-events-none absolute bottom-[34px] left-9 z-2 text-[clamp(1.8rem,4vw,3.5rem)] tracking-[-.05em] text-white [text-shadow:0_2px_18px_#0009] max-[768px]:bottom-[22px] max-[768px]:left-5">
        Burj Khalifa
      </span>
      <span
        className="pointer-events-none absolute top-0 bottom-0 left-(--split) z-2 w-[3px] -translate-x-1/2 bg-white"
        aria-hidden="true"
      >
        <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white bg-teal text-[27px] text-white shadow-[0_8px_24px_#0005] max-[768px]:size-[50px]">
          ↔
        </span>
      </span>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Compare Burj Khalifa before and after"
        className="absolute inset-0 z-3 m-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
