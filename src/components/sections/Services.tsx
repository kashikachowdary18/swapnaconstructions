"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Hammer,
  Pickaxe,
  Building2,
  Mountain,
  Layers,
  Route,
  Droplets,
  HardHat,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { SERVICES } from "@/lib/constants";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

import { SectionHeading } from "@/components/ui/SectionHeading";

import {
  staggerContainer,
  fadeInUp,
} from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Hammer,
  Pickaxe,
  Building2,
  Mountain,
  Layers,
  Route,
  Droplets,
  HardHat,
  Wrench,
};

const imageMap: Record<string, string> = {
  "01": "/images/services/rock-excavation.jpg",

  "02": "/images/services/hard-rock-cutting.jpg",

  "03": "/images/services/basement-excavation.jpg",

  "04": "/images/services/earthwork.jpg",

  "05": "/images/services/land-leveling.jpg",

  "06": "/images/services/roadworks.jpg",

  "07": "/images/services/drainage-works.jpg",

  "08": "/images/services/site-preparation.jpg",

  "09": "/images/services/infrastructure-support.jpg",
};

export function Services() {

  return (

    <AnimatedSection

      id="services"

      className="
      relative

      overflow-hidden

      bg-gradient-to-b

      from-brand-black

      to-brand-dark

      py-20

      md:py-32
      "
    >

      {/* Background Grid */}

      <div

        className="
        absolute

        inset-0

        opacity-[0.02]
        "

        style={{

          backgroundImage:

            "repeating-linear-gradient(90deg, transparent, transparent 200px, rgba(244,180,0,0.5) 200px, rgba(244,180,0,0.5) 201px)",

        }}
      />

      {/* Glow */}

      <div

        className="
        absolute

        left-1/2

        top-40

        h-[500px]

        w-[500px]

        -translate-x-1/2

        rounded-full

        bg-brand-yellow/5

        blur-[180px]
        "
      />

      <div

        className="
        relative

        mx-auto

        max-w-7xl

        px-5

        md:px-8
        "
      >

        <SectionHeading

          label="What We Do"

          title="Our Services"

          description="Comprehensive excavation and infrastructure support solutions for projects of every scale."

        />

        <motion.div

          className="
          grid

          gap-6

          sm:grid-cols-2

          lg:grid-cols-3
          "

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{

            once:true,

            margin:"-50px",

          }}
        >

          {SERVICES.map((service) => {

            const Icon =
              iconMap[service.icon];

            return (

              <motion.div

                key={service.number}

                variants={fadeInUp}

                className="
                group

                relative

                h-[320px]

                md:h-[340px]

                overflow-hidden

                rounded-3xl

                border

                border-white/10

                transition-all

                duration-500

                hover:-translate-y-2

                hover:border-brand-yellow/40

                hover:shadow-[0_15px_50px_rgba(244,180,0,0.18)]
                "
              >

                {/* Image */}

                <div

                  className="
                  absolute

                  inset-0

                  overflow-hidden
                  "
                >

                  <Image

                    src={
                      imageMap[
                        String(service.number).padStart(2,"0")
                      ]
                    }

                    alt={service.title}

                    fill

                    sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,33vw"

                    className="
                    object-cover

                    brightness-[0.7]

                    transition-all

                    duration-700

                    group-hover:scale-110

                    group-hover:brightness-[0.95]
                    "
                  />

                </div>

                {/* Overlay */}

                <div

                  className="
                  absolute

                  inset-0

                  bg-gradient-to-t

                  from-black/85

                  via-black/40

                  to-transparent
                  "
                />

                {/* Number */}

                <span

                  className="
                  absolute

                  right-4

                  top-0

                  text-8xl

                  font-bold

                  text-white/[0.05]

                  transition-all

                  duration-500

                  group-hover:text-brand-yellow/[0.12]
                  "
                >

                  {service.number}

                </span>

                {/* Content */}

                <div

                  className="
                  relative

                  z-20

                  flex

                  h-full

                  flex-col

                  justify-between

                  p-8
                  "
                >

                  {/* Top */}

                  <div

                    className="
                    flex

                    items-center

                    justify-between
                    "
                  >

                    <span

                      className="
                      text-xs

                      font-bold

                      text-brand-yellow
                      "
                    >

                      {service.number}

                    </span>

                    <div

                      className="
                      flex

                      h-12

                      w-12

                      items-center

                      justify-center

                      rounded-xl

                      border

                      border-brand-yellow/20

                      bg-black/50

                      backdrop-blur-md
                      "
                    >

                      {Icon && (

                        <Icon

                          className="
                          h-5

                          w-5

                          text-brand-yellow
                          "
                        />

                      )}

                    </div>

                  </div>

                  {/* Bottom */}

                  <div>

                    <h3

                      className="
                      font-heading

                      text-2xl

                      md:text-3xl

                      font-bold

                      uppercase

                      tracking-wide

                      text-white

                      transition-all

                      duration-300

                      group-hover:text-brand-yellow
                      "
                    >

                      {service.title}

                    </h3>

                    <div

                      className="
                      mt-4

                      h-[2px]

                      w-12

                      bg-brand-yellow

                      transition-all

                      duration-500

                      group-hover:w-24
                      "
                    />

                  </div>

                </div>

              </motion.div>

            );

          })}

        </motion.div>

      </div>

    </AnimatedSection>

  );

}