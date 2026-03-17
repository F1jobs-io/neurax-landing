"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo-128.png" alt="Neura X" width={28} height={28} />
          <span className="text-xl font-bold text-white/90 tracking-tight">Neura X</span>
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm text-white/40">
          <a href="#features" className="hover:text-white/70 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white/70 transition-colors">
            How it works
          </a>
          <a href="#faq" className="hover:text-white/70 transition-colors">
            FAQ
          </a>
        </div>

        <a
          href="#download"
          className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Download
        </a>
      </div>
    </motion.nav>
  );
}
