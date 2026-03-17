"use client";

import { motion } from "framer-motion";
import {
  EyeOff,
  Mic,
  Brain,
  Monitor,
  Keyboard,
  MessageSquare,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: EyeOff,
    title: "Invisible to Screen Sharing",
    description:
      "Stealth mode hides Neura X from Zoom, Google Meet, Teams, and any screen recording software. Completely undetectable.",
  },
  {
    icon: Mic,
    title: "Real-Time Transcription",
    description:
      "Captures both your voice and the interviewer's audio simultaneously. Powered by Deepgram Nova-3 for instant, accurate speech-to-text.",
  },
  {
    icon: Brain,
    title: "AI-Powered Answers",
    description:
      "Uses context from the live transcript to generate relevant, thoughtful answers. Supports 11+ LLM providers including GPT-4, Claude, and Gemini.",
  },
  {
    icon: Monitor,
    title: "Screenshot Analysis",
    description:
      "Capture any part of your screen and send it to the AI. Perfect for coding challenges, whiteboard problems, or reading shared documents.",
  },
  {
    icon: Keyboard,
    title: "Global Shortcuts",
    description:
      "Control everything with customizable keyboard shortcuts. Start recording, capture screenshots, and submit to AI without leaving your interview window.",
  },
  {
    icon: MessageSquare,
    title: "Quick Actions",
    description:
      'One-click actions: "What should I say?", "Follow up", and "Recap". Get instant AI suggestions based on the current conversation context.',
  },
  {
    icon: Zap,
    title: "Streaming Responses",
    description:
      "AI responses stream in real-time so you can start reading immediately. No waiting for the full response to generate.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Everything runs locally on your machine. Audio processing, screenshot capture, and data storage never leave your device.",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description:
      "Native desktop app for macOS, Windows, and Linux. Built with Tauri for minimal resource usage and maximum performance.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Everything you need to
            <br />
            <span className="gradient-text">ace the interview.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            A complete toolkit designed for high-stakes technical interviews.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/15 transition-colors">
                <feature.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white/90 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
