"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function BlogImage({ alt, src, onError, ...props }: ImageProps) {
  const [failedSrc, setFailedSrc] = useState<ImageProps["src"]>();
  const unoptimized = props.unoptimized || failedSrc === src;

  return (
    <Image
      {...props}
      alt={alt}
      src={src}
      preload={props.preload && !unoptimized}
      unoptimized={unoptimized}
      onError={(event) => {
        if (!unoptimized) setFailedSrc(src);
        onError?.(event);
      }}
    />
  );
}
