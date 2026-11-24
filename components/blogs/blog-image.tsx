"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function BlogImage({ alt, src, style, ...props }: ImageProps) {
  const [failedSrc, setFailedSrc] = useState<ImageProps["src"]>();

  return (
    <Image
      {...props}
      alt={alt}
      src={src}
      style={failedSrc === src ? { ...style, visibility: "hidden" } : style}
      onError={() => setFailedSrc(src)}
    />
  );
}
