"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { HERO_SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Swapna Construction"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pt-28
          md:px-8
          md:pt-36
          lg:pt-24
        "
      >
        <div className="max-w-5xl">

          {/* Experience */}

          <motion.p
            className="
              mb-8
              font-heading
              text-[11px]
              md:text-sm
              font-bold
              uppercase
              tracking-[0.38em]
              text-brand-yellow
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            20+ YEARS OF INDUSTRY EXPERIENCE
          </motion.p>

          {/* Heading */}

          <motion.h1
            className="
              font-heading
              text-5xl
              sm:text-6xl
              md:text-7xl
              xl:text-[7rem]
              font-bold
              uppercase
              leading-[0.9]
              text-white
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            SWAPNA
          </motion.h1>

          <motion.h1
            className="
              font-heading
              text-5xl
              sm:text-6xl
              md:text-7xl
              xl:text-[7rem]
              font-bold
              uppercase
              leading-[0.9]
              text-brand-yellow
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            CONSTRUCTION
          </motion.h1>

          {/* Services */}

          <motion.div
            className="
              mt-10
              max-w-5xl
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <div className="flex flex-wrap gap-y-4 text-lg md:text-xl text-white">
              {HERO_SERVICES.map((service, index) => (
                <span
                  key={service}
                  className="mr-5"
                >
                  {service}

                  {index !== HERO_SERVICES.length - 1 && (
                    <span className="mx-5 text-brand-yellow">
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}

          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              href="#contact"
              variant="outline"
              className="px-8 py-4 text-[11px] tracking-[0.28em]"
            >
              PARTNER WITH US
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-brand-black to-transparent" />

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}