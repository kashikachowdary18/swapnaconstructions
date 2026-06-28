"use client";

import { motion } from "framer-motion";
import { type ReactNode, type MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-brand-yellow text-brand-black hover:bg-brand-yellow/90 shadow-[0_0_30px_rgba(244,180,0,0.3)]",

  outline:
    "border border-brand-yellow/60 text-brand-yellow hover:bg-brand-yellow/10 hover:border-brand-yellow",

  ghost:
    "text-white/80 hover:text-brand-yellow",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs tracking-[0.15em]",

  md: "px-7 py-3.5 text-sm tracking-[0.15em]",

  lg: "px-9 py-4 text-sm tracking-[0.2em]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {

  const classes = `
    inline-flex
    items-center
    justify-center
    font-heading
    font-bold
    uppercase
    transition-all
    duration-300
    rounded-none
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (href) {

    const handleAnchorClick = (
      e: MouseEvent<HTMLAnchorElement>
    ) => {

      if (href.startsWith("#")) {

        e.preventDefault();

        const section = document.querySelector(href);

        if (section) {

          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }

      onClick?.();

    };

    return (

      <motion.a
        href={href}
        className={classes}
        onClick={handleAnchorClick}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
      >

        {children}

      </motion.a>

    );
  }

  return (

    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >

      {children}

    </motion.button>

  );
}