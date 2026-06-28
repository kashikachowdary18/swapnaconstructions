"use client";

import { motion } from "framer-motion";

import {
  MapPinned,
  Phone,
  Mail,
  AtSign,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

import { SectionHeading } from "@/components/ui/SectionHeading";

const contactItems = [
  {
    icon: MapPinned,
    label: "Address",
    value: COMPANY.address,
  },

  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
  },

  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
  },

  {
    icon: AtSign,
    label: "Instagram",
    value: COMPANY.instagram,
    href: COMPANY.instagramUrl,
  },
];

export function Contact() {

  return (

    <AnimatedSection

      id="contact"

      className="
      relative

      scroll-mt-32

      bg-gradient-to-b

      from-brand-black

      to-brand-dark

      py-16

      sm:py-24

      md:py-32
      "
    >

      <div

        className="
        mx-auto

        w-full

        max-w-7xl

        px-4

        sm:px-6

        md:px-8
        "
      >

        <SectionHeading

          label="Get In Touch"

          title="Contact Us"

          description="Reach out to discuss your excavation, earthwork and infrastructure support requirements."

          align="center"

        />

        <motion.div

          className="
          mx-auto

          mt-12

          max-w-5xl
          "

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:0.7,
          }}
        >

          <div

            className="
            relative

            overflow-hidden

            rounded-[30px]

            border

            border-white/10

            bg-gradient-to-br

            from-brand-grey/40

            via-brand-dark

            to-brand-black

            p-5

            sm:p-8

            md:p-14

            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            "
          >

            {/* Glow */}

            <div

              className="
              absolute

              left-1/2

              top-1/2

              h-[300px]

              w-[300px]

              -translate-x-1/2

              -translate-y-1/2

              rounded-full

              bg-brand-yellow/5

              blur-[100px]
              "
            />

            {/* Corner Accents */}

            <div

              className="
              absolute

              left-0

              top-0

              h-16

              w-16

              md:h-20

              md:w-20

              border-l-2

              border-t-2

              border-brand-yellow/30
              "
            />

            <div

              className="
              absolute

              bottom-0

              right-0

              h-16

              w-16

              md:h-20

              md:w-20

              border-b-2

              border-r-2

              border-brand-yellow/30
              "
            />

            {/* Grid */}

            <div

              className="
              relative

              z-10

              grid

              grid-cols-1

              gap-5

              md:grid-cols-2
              "
            >

              {contactItems.map((item,index)=>{

                const Icon = item.icon;

                const content=(

                  <div

                    className="
                    group

                    flex

                    items-start

                    gap-4

                    rounded-3xl

                    border

                    border-white/5

                    bg-white/[0.02]

                    p-4

                    transition-all

                    duration-300

                    hover:border-brand-yellow/20

                    hover:bg-white/[0.04]
                    "
                  >

                    <div

                      className="
                      flex

                      h-14

                      w-14

                      shrink-0

                      items-center

                      justify-center

                      rounded-2xl

                      border

                      border-brand-yellow/20

                      bg-brand-yellow/5

                      transition-all

                      duration-300

                      group-hover:scale-105
                      "
                    >

                      <Icon

                        className="
                        h-6

                        w-6

                        text-brand-yellow
                        "
                      />

                    </div>

                    <div

                      className="
                      min-w-0

                      flex-1
                      "
                    >

                      <p

                        className="
                        font-heading

                        text-[10px]

                        uppercase

                        tracking-[0.35em]

                        text-white/30
                        "
                      >

                        {item.label}

                      </p>

                      <p

                        className="
                        mt-3

                        break-words

                        text-base

                        leading-relaxed

                        text-white/85

                        sm:text-lg
                        "
                      >

                        {item.value}

                      </p>

                    </div>

                  </div>

                );

                return(

                  <motion.div

                    key={item.label}

                    initial={{
                      opacity:0,
                      y:20,
                    }}

                    whileInView={{
                      opacity:1,
                      y:0,
                    }}

                    viewport={{
                      once:true,
                    }}

                    transition={{
                      delay:index*0.1,
                    }}
                  >

                    {item.href ? (

                      <a

                        href={item.href}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="block"
                      >

                        {content}

                      </a>

                    ) : (

                      content

                    )}

                  </motion.div>

                );

              })}

            </div>

          </div>

        </motion.div>

      </div>

    </AnimatedSection>

  );

}