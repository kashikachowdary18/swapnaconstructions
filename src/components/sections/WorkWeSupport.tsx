"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Route,
  Droplets,
  Layers,
  Building2,
  type LucideIcon,
} from "lucide-react";

import { WORK_SUPPORT } from "@/lib/constants";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Route,
  Droplets,
  Layers,
  Building2,
};

const imageMap: Record<string, string> = {
  "Transportation Infrastructure": "/images/support/road-construction.jpg",

  "HYDROLOGICAL & UTILITY SYSTEMS": "/images/support/drainage-systems.jpg",

  "URBAN & INDUSTRIAL DEVELOPMENTS": "/images/support/land-development.jpg",

  "COMMERCIAL & INDUSTRIAL SITE ENABLEMENT":
    "/images/support/commercial-site-preparation.jpg",
};

export function WorkWeSupport() {
  return (
    <AnimatedSection
      id="work"
      className="relative bg-brand-dark py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <SectionHeading
          label="Sectors Served"
          title="CORE PORTFOLIO EXPERTISE"
          description="Delivering high-performance foundational and civil engineering solutions across diverse industrial, commercial, and public infrastructure developments at any scale."
        />

        <div className="grid gap-6 md:grid-cols-2">

          {WORK_SUPPORT.map((item, index) => {

            const Icon = iconMap[item.icon];

            const isEven = index % 2 === 0;

            return (

              <motion.div
                key={item.title}
                className={`group relative overflow-hidden ${
                  isEven ? "md:mt-0" : "md:mt-12"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
              >

                <div
                  className="
                  relative
                  min-h-[280px]
                  overflow-hidden
                  border
                  border-white/10
                  md:min-h-[360px]
                  "
                >

                  {/* Background Image */}

                  <Image
                    src={imageMap[item.title]}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    "
                  />

                  {/* Dark Overlay */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/65
                    to-black/25
                    "
                  />

                  {/* Number */}

                  <span
                    className="
                    absolute
                    right-5
                    top-5
                    font-heading
                    text-[120px]
                    font-bold
                    leading-none
                    text-white/[0.05]
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Content */}

                  <div
                    className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-end
                    p-8
                    md:p-10
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                      mb-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      border
                      border-brand-yellow/20
                      bg-black/40
                      backdrop-blur-sm
                      "
                    >

                      {Icon && (
                        <Icon
                          className="
                          h-6
                          w-6
                          text-brand-yellow
                          transition-transform
                          duration-500
                          group-hover:scale-110
                          "
                        />
                      )}

                    </div>

                    {/* Title */}

                    <h3
                      className="
                      font-heading
                      text-2xl
                      font-bold
                      uppercase
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-brand-yellow
                      md:text-3xl
                      "
                    >

                      {item.title}

                    </h3>

                    {/* Description */}

                    <p
                      className="
                      mt-4
                      max-w-sm
                      text-sm
                      leading-relaxed
                      text-white/70
                      md:text-base
                      "
                    >

                      {item.description}

                    </p>

                    {/* Bottom Accent */}

                    <div
                      className="
                      mt-6
                      h-1
                      w-0
                      bg-brand-yellow
                      transition-all
                      duration-700
                      group-hover:w-full
                      "
                    />

                  </div>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>
    </AnimatedSection>
  );
}