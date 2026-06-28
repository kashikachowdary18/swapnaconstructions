"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function StatisticsStrip() {
  return (
    <section
      id="stats"
      className="relative z-10 bg-brand-yellow shadow-[0_-10px_40px_rgba(244,180,0,0.15)]"
      aria-label="Company statistics"
    >
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-brand-black/10 md:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="flex flex-col items-center justify-center px-4 py-8 text-center md:py-10"
          >
            <span className="font-heading text-3xl font-bold uppercase text-brand-black md:text-4xl lg:text-5xl">
              {stat.value}
            </span>
            <span className="mt-2 font-heading text-[10px] font-medium uppercase tracking-[0.25em] text-brand-black/60 md:text-xs">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
