"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = () =>
    setIsMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          isScrolled
            ? "border-white/10 bg-black/45 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            : "border-white/5 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 xl:px-10">

          {/* ================= Logo ================= */}

          <div className="w-[220px] xl:w-[250px] flex-shrink-0">

            <a
              href="#hero"
              className="group flex items-center transition-transform duration-300 hover:scale-[1.03]"
            >

              <Image
                src="/images/logo/logo.png"
                alt="Swapna Construction"
                width={330}
                height={120}
                priority
                className="
                h-14
                md:h-16
                xl:h-[72px]
                w-auto
                object-contain
                transition-all
                duration-300
                "
              />

            </a>

          </div>

          {/* ================= Desktop Navigation ================= */}
                    <ul className="hidden flex-1 items-center justify-center gap-10 xl:gap-14 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                  relative
                  font-heading
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-white/85
                  transition-all
                  duration-300
                  hover:text-brand-yellow
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-brand-yellow
                  after:transition-all
                  hover:after:w-full
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ================= Desktop CTA ================= */}

          <div className="hidden w-[220px] xl:w-[250px] justify-end lg:flex">
            <Button
              href="#contact"
              className="min-w-[170px] px-6 py-3 text-[11px] tracking-[0.22em]"
            >
              Request A Quote
            </Button>
          </div>

          {/* ================= Mobile Menu Button ================= */}

          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label="Toggle Menu"
            className="
            relative
            z-50
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            lg:hidden
            "
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-brand-yellow" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

        </nav>

      </motion.header>
            {/* ================= Mobile Menu ================= */}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="
            fixed
            inset-0
            z-40
            flex
            flex-col
            items-center
            justify-center
            bg-black/95
            backdrop-blur-3xl
            lg:hidden
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
          >
            {/* Mobile Logo */}

            <motion.div
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-14"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Swapna Construction"
                width={320}
                height={140}
                priority
                className="
                h-20
                w-auto
                object-contain
                "
              />
            </motion.div>

            {/* Mobile Navigation */}

            <nav>
              <ul className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="
                      relative
                      font-heading
                      text-2xl
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-white
                      transition-all
                      duration-300
                      hover:text-brand-yellow
                      "
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: NAV_LINKS.length * 0.08,
                  }}
                >
                  <Button
                    href="#contact"
                    onClick={handleNavClick}
                    className="mt-6 min-w-[180px]"
                  >
                    Request A Quote
                  </Button>
                </motion.li>
              </ul>
            </nav>

            {/* Bottom Tagline */}

            <motion.p
              className="
              absolute
              bottom-10
              px-6
              text-center
              font-heading
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-white/30
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
            >
              {COMPANY.tagline}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}