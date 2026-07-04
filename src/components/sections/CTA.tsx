"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-brand-grey via-brand-dark to-brand-black py-24 md:py-32"
    >
      {/* Glow effects */}
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/5 blur-[100px]"
        aria-hidden="true"
      />

      {/* Diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(244,180,0,0.5) 60px, rgba(244,180,0,0.5) 61px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 inline-block font-heading text-xs font-bold uppercase tracking-[0.4em] text-brand-yellow">
           PROJECT INITIATION
          </span>

          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready To Commence
            <br />
            <span className="text-brand-yellow">Execution?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Delivering premium bulk earthworks, heavy excavation, and civil infrastructure solutions engineered to your precise engineering specifications.
          </p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button href="#contact" size="lg">
              Request A Proposal
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Side accents */}
      <div className="absolute left-0 top-1/2 h-24 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-brand-yellow/40 to-transparent" aria-hidden="true" />
      <div className="absolute right-0 top-1/2 h-24 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-brand-yellow/40 to-transparent" aria-hidden="true" />
    </section>
  );
}
