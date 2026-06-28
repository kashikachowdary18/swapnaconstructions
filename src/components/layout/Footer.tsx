"use client";

import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-brand-dark via-brand-black to-black">

      {/* Background Watermark */}

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="
          select-none
          font-heading
          text-[18vw]
          font-bold
          uppercase
          leading-none
          text-white/[0.02]
          "
        >
          SWAPNA
        </span>
      </div>

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-0
        h-[450px]
        w-[450px]
        -translate-x-1/2
        rounded-full
        bg-brand-yellow/5
        blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20">

        {/* Logo */}

        <div className="flex flex-col items-center text-center">

          <a
            href="#hero"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Swapna Construction"
              width={320}
              height={120}
              priority
              className="
              h-16
              w-auto
              md:h-24
              "
            />
          </a>

          <p
            className="
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-white/50
            md:text-base
            "
          >
            {COMPANY.tagline}
          </p>

          <div
            className="
            mt-8
            h-px
            w-44
            bg-gradient-to-r
            from-transparent
            via-brand-yellow
            to-transparent
            "
          />
        </div>

        {/* Bottom */}

        <div
          className="
          mt-12
          flex
          flex-col
          items-center
          justify-between
          gap-5
          border-t
          border-white/5
          pt-8
          text-center
          md:flex-row
          md:text-left
          "
        >

          <p
            className="
            text-xs
            tracking-wide
            text-white/40
            "
          >
            © {year} {COMPANY.shortName}. All Rights Reserved.
          </p>

          <p
            className="
            max-w-md
            text-xs
            leading-6
            text-white/30
            "
          >
            {COMPANY.address}
          </p>

        </div>

      </div>
    </footer>
  );
}