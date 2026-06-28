"use client";

import Image from "next/image";

interface ImagePlaceholderProps {
  className?: string;
}

export function ImagePlaceholder({
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`
      relative
      h-full
      w-full
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      ${className}
      `}
    >
      <Image
        src="/images/hero2.jpg"
        alt="Swapna Construction"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 80vw"
        className="
        object-cover
        object-center
        "
      />

      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}