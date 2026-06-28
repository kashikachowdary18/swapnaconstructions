"use client";

import { motion } from "framer-motion";

import { Target, Eye } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-brand-black
      via-brand-dark
      to-brand-black
      py-24
      md:py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        h-full
        w-1/3
        bg-gradient-to-l
        from-brand-yellow/[0.03]
        to-transparent
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">

        {/* Top Section */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>

            <SectionHeading
              label="About Us"
              title="Building Strong Foundations Through Experience"
            />

          </div>

          <motion.div
            className="
            space-y-6
            text-lg
            leading-9
            text-white/70
            lg:pt-16
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <p>

              Swapna Construction is a trusted excavation and infrastructure support contractor with over 20 years of experience delivering reliable earthwork, excavation, land development, road works and drainage solutions.

            </p>

            <p>

              We specialize in supporting residential, commercial and infrastructure projects through efficient execution, skilled manpower and modern machinery.

            </p>

          </motion.div>

        </div>

        {/* Hover Section */}

        <div
          className="
          relative
          mt-24
          hidden
          h-[650px]
          lg:block
          group
          "
        >

          {/* Mission */}

          <div
            className="
            absolute
            top-0
            right-0

            z-10

            w-[46%]

            rounded-3xl

            border

            border-white/10

            bg-gradient-to-br

            from-brand-grey/50

            to-brand-dark

            p-10
            "
          >

            <div className="mb-5 flex items-center gap-4">

              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-brand-yellow/10
                "
              >

                <Target className="h-6 w-6 text-brand-yellow" />

              </div>

              <h3
                className="
                font-heading
                text-2xl
                font-bold
                uppercase
                text-white
                "
              >

                Mission

              </h3>

            </div>

            <p className="leading-8 text-white/60">

              To deliver safe, efficient and reliable excavation and infrastructure support services that help our clients build with confidence while maintaining high standards of quality and timely execution.

            </p>

          </div>

          {/* Vision */}

          <div
            className="
            absolute
            bottom-0
            right-0

            z-10

            w-[46%]

            rounded-3xl

            border

            border-white/10

            bg-gradient-to-br

            from-brand-dark

            to-brand-grey/50

            p-10
            "
          >

            <div className="mb-5 flex items-center gap-4">

              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-brand-yellow/10
                "
              >

                <Eye className="h-6 w-6 text-brand-yellow" />

              </div>

              <h3
                className="
                font-heading
                text-2xl
                font-bold
                uppercase
                text-white
                "
              >

                Vision

              </h3>

            </div>

            <p className="leading-8 text-white/60">

              To become the most trusted excavation and infrastructure support partner known for professionalism, dependable execution, modern equipment and commitment to every project we undertake.

            </p>

          </div>

          {/* Image */}

          <div
            className="
            absolute

            left-0

            top-14

            z-20

            h-[520px]

            w-[78%]

            transition-all

            duration-700

            ease-in-out

            hover:w-[48%]
            "
          >

            <ImagePlaceholder />

          </div>

        </div>

      </div>

    </AnimatedSection>
  );
}