"use client";

import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export function ImageModal({
  isOpen,
  image,
  title,
  onClose,
}: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      z-[9999]
      bg-black/95
      flex
      items-center
      justify-center
      p-6
      "
    >

      <button
        className="
        absolute
        top-6
        right-8
        text-5xl
        text-white
        z-10
        "
      >
        ×
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="
        relative
        w-full
        max-w-7xl
        h-[85vh]
        "
      >

        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-contain"
        />

      </div>

    </div>
  );
}