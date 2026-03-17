"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Neura X really invisible to screen sharing?",
    a: "Yes. Neura X uses native OS-level APIs on macOS, Windows, and Linux to make itself completely invisible to Zoom, Google Meet, Teams, and any screen recording software. The stealth mode also hides the app from the taskbar and app switcher.",
  },
  {
    q: "Does it work with any video call platform?",
    a: "Yes. Neura X captures system audio at the OS level, so it works with Zoom, Google Meet, Microsoft Teams, WebEx, and any other platform that plays audio through your speakers.",
  },
  {
    q: "What AI models does it support?",
    a: "Neura X supports 11+ LLM providers out of the box: OpenAI (GPT-4), Anthropic (Claude), Google (Gemini), Mistral, Cohere, Groq, Perplexity, OpenRouter, Ollama, and more. You can also add custom providers via curl templates.",
  },
  {
    q: "Is my data stored on your servers?",
    a: "No. All audio processing, transcription, and data storage happens locally on your machine. Chat history is stored in a local SQLite database. The only data sent externally is to the AI provider you choose for generating responses.",
  },
  {
    q: "How does the real-time transcription work?",
    a: "Neura X captures audio from your microphone and system speaker simultaneously. Voice Activity Detection (VAD) runs locally to identify speech segments, which are then transcribed using Deepgram's Nova-3 model for real-time, accurate speech-to-text.",
  },
  {
    q: "Does it require an internet connection?",
    a: "An internet connection is required for AI responses and real-time transcription (Deepgram). Audio capture, VAD, and screenshot features work entirely offline.",
  },
  {
    q: "How do I get a license key?",
    a: "License keys are available through our portal. Contact us at support@f1jobs.io to get started.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left cursor-pointer"
      >
        <span className="text-white/80 font-medium pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-white/30 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/40 leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Frequently asked
            <br />
            <span className="gradient-text">questions.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
