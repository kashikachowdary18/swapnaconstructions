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

      {/* Background Image */}

      <Image
        src="/images/hero.jpg"
        alt="Swapna Construction"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Additional Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      {/* Main Content */}

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
        md:px-8
        "
      >

        <div className="max-w-4xl">

          {/* Experience */}

          <motion.p

            className="
            mb-8
            font-heading
            text-sm
            font-bold
            uppercase
            tracking-[0.35em]
            text-brand-yellow
            "

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}

          >

            20+ Years Of Industry Experience

          </motion.p>

          {/* Heading */}

          <motion.h1

            className="
            font-heading
            text-6xl
            font-bold
            uppercase
            leading-none
            text-white
            md:text-8xl
            "

            initial={{
              opacity: 0,
              y: 50,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}

          >

            SWAPNA

          </motion.h1>

          <motion.h1

            className="
            font-heading
            text-6xl
            font-bold
            uppercase
            leading-none
            text-brand-yellow
            md:text-8xl
            "

            initial={{
              opacity: 0,
              y: 50,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: 0.15,
            }}

          >

            CONSTRUCTION

          </motion.h1>

          {/* Services */}

          <motion.p

            className="
            mt-10
            flex
            flex-wrap
            gap-y-3
            text-lg
            text-white
            md:text-xl
            "

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 0.5,
            }}

          >

            {HERO_SERVICES.map((service, index) => (

              <span
                key={service}
                className="mr-4"
              >

                {service}

                {index !== HERO_SERVICES.length - 1 && (

                  <span className="mx-4 text-brand-yellow">

                    •

                  </span>

                )}

              </span>

            ))}

          </motion.p>

          {/* Button */}

          <motion.div

            className="mt-12"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.7,
            }}

          >

            <Button
              href="#contact"
              variant="outline"
              size="lg"
            >

              Contact Us

            </Button>

          </motion.div>

        </div>

      </div>

      {/* Bottom Black Fade */}

      <div
        className="
        absolute
        bottom-0
        left-0
        h-32
        w-full
        bg-gradient-to-t
        from-brand-black
        to-transparent
        "
      />

      {/* Scroll Icon */}

      <motion.a

        href="#about"

        className="
        absolute
        bottom-8
        left-1/2
        z-20
        flex
        -translate-x-1/2
        text-white
        "

        animate={{
          y: [0, 10, 0],
        }}

        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}

      >

        <ChevronDown className="h-6 w-6" />

      </motion.a>

    </section>
  );
}