"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Truck,
  Construction,
  Hammer,
  Mountain,
  Cog,
  Car,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { MACHINERY } from "@/lib/constants";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

import { SectionHeading } from "@/components/ui/SectionHeading";

import {
  staggerContainer,
  fadeInUp,
} from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Construction,
  Hammer,
  Mountain,
  Cog,
  Car,
  Wrench,
};

const machineryImages: Record<string, string> = {
  Excavators:
    "/images/machinery/excavators.jpg",

  "JCB Equipment":
    "/images/machinery/jcb-equipment.jpg",

  "Rock Breakers":
    "/images/machinery/rock-breakers.jpg",

  "Earthmoving Equipment":
    "/images/machinery/earthmoving-equipment.jpg",

  Tippers:
    "/images/machinery/tippers.jpg",

  "Heavy Machinery":
    "/images/machinery/heavy-machinery.jpg",

  "Support Vehicles":
    "/images/machinery/support-vehicles.jpg",

  "Site Equipment":
    "/images/machinery/site-equipment.jpg",
};

const imagePosition: Record<string, string> = {

  Excavators:
    "object-center",

  "JCB Equipment":
    "object-center",

  "Rock Breakers":
    "object-center",

  "Earthmoving Equipment":
    "object-center",

  Tippers:
    "object-center",

  "Heavy Machinery":
    "object-center",

  "Support Vehicles":
    "object-center",

  "Site Equipment":
    "object-center",
};

export function Machinery() {

  const fleetBanner =
    "/images/machinery/fleet-banner.jpg";

  const [activeImage,setActiveImage] =
    useState(fleetBanner);

  const [activeTitle,setActiveTitle] =
    useState("Machinery Fleet");

  const resetFleet = () => {

    setActiveImage(fleetBanner);

    setActiveTitle(
      "Machinery Fleet"
    );

  };

  return (

    <AnimatedSection

      id="machinery"

      className="
      relative

      overflow-hidden

      bg-gradient-to-b

      from-brand-dark

      via-brand-black

      to-brand-dark

      py-16

      sm:py-20

      md:py-32
      "
    >

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

        w-full

        max-w-7xl

        px-4

        sm:px-5

        md:px-8
        "
      >

        <SectionHeading

          label="Our Fleet"

          title="Machinery & Equipment"

          description="Modern machinery ready for every project."

        />

        {/* BIG IMAGE */}

        <motion.div

          className="
          mt-10

          mb-12
          "

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}
        >

          <div

            className="
            relative

            overflow-hidden

            rounded-3xl

            border

            border-white/10

            min-h-[260px]

            sm:min-h-[340px]

            md:min-h-[500px]

            shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            "
          >

            <Image

              key={activeImage}

              src={activeImage}

              alt={activeTitle}

              fill

              priority

              sizes="100vw"

              className="
              object-cover

              transition-all

              duration-700
              "
            />

            <div

              className="
              absolute

              inset-0

              bg-gradient-to-t

              from-black/80

              via-black/20

              to-transparent
              "
            />

            <div

              className="
              absolute

              bottom-5

              left-5

              md:bottom-10

              md:left-10
              "
            >

              <p

                className="
                text-[10px]

                md:text-sm

                uppercase

                tracking-[0.35em]

                text-brand-yellow
                "
              >

                FEATURED EQUIPMENT

              </p>

              <h3

                className="
                mt-2

                font-heading

                text-2xl

                sm:text-4xl

                md:text-5xl

                font-bold

                uppercase

                text-white
                "
              >

                {activeTitle}

              </h3>

            </div>

          </div>

        </motion.div>

        {/* GRID */}

        <motion.div

          className="
          grid

          grid-cols-1

          gap-5

          sm:grid-cols-2

          lg:grid-cols-4
          "

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once:true,
          }}
        >

          {MACHINERY.map((item)=>{

            const Icon =
              iconMap[item.icon];

            return (

              <motion.div

                key={item.name}

                variants={fadeInUp}

                className="
                group

                cursor-pointer
                "

                onMouseEnter={()=>{

                  setActiveImage(
                    machineryImages[
                      item.name
                    ]
                  );

                  setActiveTitle(
                    item.name
                  );

                }}

                onMouseLeave={
                  resetFleet
                }

                onClick={()=>{

                  setActiveImage(
                    machineryImages[
                      item.name
                    ]
                  );

                  setActiveTitle(
                    item.name
                  );

                }}

              >

                <div

                  className="
                  relative

                  overflow-hidden

                  rounded-3xl

                  border

                  border-white/10

                  h-[220px]

                  sm:h-[170px]

                  md:h-[160px]

                  transition-all

                  duration-500

                  group-hover:-translate-y-2

                  group-hover:border-brand-yellow/40

                  group-hover:shadow-[0_15px_40px_rgba(244,180,0,0.15)]
                  "
                >

                  <Image

                    src={
                      machineryImages[
                        item.name
                      ]
                    }

                    alt={item.name}

                    fill

                    sizes="
                    (max-width:640px) 100vw,

                    (max-width:1024px) 50vw,

                    25vw
                    "

                    className={`
                    object-cover

                    ${imagePosition[item.name]}

                    transition-all

                    duration-700

                    group-hover:scale-105
                    `}
                  />

                  <div

                    className="
                    absolute

                    inset-0

                    bg-gradient-to-t

                    from-black/70

                    via-black/20

                    to-transparent
                    "
                  />

                  <div

                    className="
                    absolute

                    right-3

                    top-3

                    flex

                    h-10

                    w-10

                    items-center

                    justify-center

                    rounded-xl

                    border

                    border-brand-yellow/30

                    bg-black/70
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

                <h3

                  className="
                  mt-3

                  font-heading

                  text-[11px]

                  sm:text-xs

                  font-bold

                  uppercase

                  tracking-[0.18em]

                  text-white/80

                  transition-all

                  duration-300

                  group-hover:text-brand-yellow
                  "
                >

                  {item.name}

                </h3>

              </motion.div>

            );

          })}

        </motion.div>

      </div>

    </AnimatedSection>

  );

}