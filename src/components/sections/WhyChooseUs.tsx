"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Truck,
  Users,
  Shield,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Truck,
  Users,
  Shield,
  CheckCircle,
};

export function WhyChooseUs() {
  return (
    <AnimatedSection
      id="why-us"
      className="relative bg-brand-black py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label="STRATEGIC ADVANTAGE"
            title="WHY INDUSTRY LEADERS PARTNER WITH US"
          />
          <motion.p
            className="max-w-md text-sm leading-relaxed text-white/40 lg:pb-4 lg:text-right md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Integrating a 20+ year legacy with a self-owned heavy fleet, we deliver compliant, zero-delay project execution at any scale.
          </motion.p>
        </div>

        <motion.div
          className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group relative border border-white/5 bg-gradient-to-b from-brand-grey/20 to-transparent p-8 transition-all duration-500 hover:border-brand-yellow/20 hover:bg-brand-grey/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-brand-yellow/15 bg-brand-yellow/5 transition-all duration-500 group-hover:border-brand-yellow/40 group-hover:shadow-[0_0_20px_rgba(244,180,0,0.15)]">
                  {Icon && (
                    <Icon className="h-5 w-5 text-brand-yellow/80 transition-colors group-hover:text-brand-yellow" />
                  )}
                </div>

                <h3 className="font-heading text-base font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-brand-yellow md:text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-yellow/0 to-transparent transition-all duration-500 group-hover:via-brand-yellow/30" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
