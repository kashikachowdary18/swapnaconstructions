"use client";

import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";
import { SAFETY_QUALITY } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function SafetyQuality() {
  return (
    <AnimatedSection
      id="safety"
      className="relative overflow-hidden bg-brand-yellow py-20 md:py-28"
    >
      {/* Industrial pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #111 25%, transparent 25%),
            linear-gradient(-45deg, #111 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #111 75%),
            linear-gradient(-45deg, transparent 75%, #111 75%)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.div
              className="mb-6 flex h-14 w-14 items-center justify-center bg-brand-black/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Shield className="h-7 w-7 text-brand-black" />
            </motion.div>

            <motion.h2
              className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-brand-black sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
             EHS & QUALITY ASSURANCE
              <br />
              
            </motion.h2>

            <motion.p
              className="mt-6 max-w-md text-base leading-relaxed text-brand-black/60 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Every project is executed under rigid adherence to statutory safety frameworks and strict engineering benchmarks—safeguarding specialized technical personnel, heavy asset bases, and capital investments at any scale.
            </motion.p>
          </div>

          <motion.ul
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SAFETY_QUALITY.map((item) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                className="group flex items-center gap-5 border border-brand-black/10 bg-brand-black/5 p-5 transition-all duration-300 hover:border-brand-black/20 hover:bg-brand-black/10 md:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-black transition-colors duration-300 group-hover:bg-brand-black/90">
                  <Check className="h-5 w-5 text-brand-yellow" strokeWidth={3} />
                </div>
                <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-black md:text-base">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
