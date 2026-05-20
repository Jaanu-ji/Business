"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#showcase" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#050508]/80 backdrop-blur-2xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.35)] group-hover:shadow-[0_0_24px_rgba(99,102,241,0.55)] transition-all duration-400">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14.928 5.5V10.5L8 15L1.072 10.5V5.5L8 1Z" fill="white" />
              </svg>
            </div>
            <span className="text-[15px] font-bold tracking-[-0.02em] text-white">
              AXIOM
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[13px] text-zinc-500 hover:text-zinc-100 transition-colors duration-300 font-medium tracking-[-0.01em] pb-0.5"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-white hover:bg-zinc-100 text-[#080810] text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1.5 text-zinc-500 hover:text-white transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-14 z-30 bg-[#050508]/95 backdrop-blur-2xl border-b border-white/[0.04] md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-zinc-300 hover:text-white font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-5 py-3 rounded-full bg-white text-center text-[#080810] font-semibold text-[13px]"
                onClick={() => setMobileOpen(false)}
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
