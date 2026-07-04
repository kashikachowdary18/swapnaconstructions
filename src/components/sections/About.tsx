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
              title="STRATEGIC INFRASTRUCTURE & EARTHWORK SOLUTIONS FOR INDIA’S LEADING ENTERPRISES."
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

              With over two decades of operational excellence, Swapna Construction is a premier partner for large-scale infrastructure and heavy civil engineering projects. We deliver turnkey earthworks, complex site development, roadway infrastructure, and advanced drainage solutions for high-value commercial, industrial, and civil mandates.

            </p>

            <p>

              We thoroughly understand the rigorous compliance and risk-mitigation demands of enterprise-level execution. By deploying an advanced heavy machinery fleet and a highly specialized workforce, we ensure stringent safety standards, absolute precision, and seamless project delivery from mobilization to handover.
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
To deliver world-class earthworks and civil infrastructure solutions through uncompromising EHS (Environment, Health & Safety) compliance, advanced technology, and operational precision-mitigating project risk while ensuring timely and reliable project delivery.

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

              To benchmark excellence in heavy civil infrastructure by continuously pioneering sustainable engineering practices, expanding our advanced asset base, and serving as the premier tier-1 foundational partner for India’s landmark corporate and industrial development

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