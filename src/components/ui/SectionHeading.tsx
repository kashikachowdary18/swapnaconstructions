"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {label && (
        <motion.span
          className={`inline-block font-heading text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 ${
            light ? "text-brand-black/60" : "text-brand-yellow"
          }`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] tracking-tight ${
          light ? "text-brand-black" : "text-white"
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-brand-black/70" : "text-white/60"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        className={`mt-6 h-1 w-16 bg-brand-yellow ${align === "center" ? "mx-auto" : ""}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ originX: align === "center" ? 0.5 : 0 }}
      />
    </div>
  );
}
