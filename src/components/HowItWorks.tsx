"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Download & Install",
    description:
      "Get Neura X for your platform. Install it like any other app — takes less than a minute.",
  },
  {
    number: "02",
    title: "Activate Your License",
    description:
      "Enter your license key to unlock all features. The app runs entirely on your machine.",
  },
  {
    number: "03",
    title: "Join Your Interview",
    description:
      "Open Zoom, Meet, or Teams as usual. Toggle stealth mode so Neura X stays invisible.",
  },
  {
    number: "04",
    title: "Let AI Assist You",
    description:
      "Neura X transcribes the conversation in real-time and provides AI-powered answers you can reference naturally.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Up and running in
            <br />
            <span className="gradient-text">under a minute.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center">
                <span className="text-lg font-bold text-violet-400 font-mono">
                  {step.number}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-semibold text-white/90 mb-1">
                  {step.title}
                </h3>
                <p className="text-white/40 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
