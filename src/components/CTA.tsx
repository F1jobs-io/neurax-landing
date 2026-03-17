"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-12 rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to ace your next interview?
            </h2>
            <p className="text-white/40 mb-8 max-w-lg mx-auto">
              Download Neura X and get AI-powered assistance that stays
              completely invisible. Your secret advantage starts now.
            </p>
            <a
              href="#download"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-white/90 transition-all duration-200 glow"
            >
              <Download className="w-5 h-5" />
              Download Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
