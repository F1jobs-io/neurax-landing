"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Apple, Monitor, ChevronDown } from "lucide-react";

type Platform = "macos" | "windows" | "linux" | "unknown";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "macos";
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  return "unknown";
}

const VERSION = "0.1.5";

const downloadLinks: Record<string, { label: string; url: string; icon: React.ReactNode }> = {
  macos_arm: {
    label: "macOS (Apple Silicon)",
    url: "/download/macos",
    icon: <Apple className="w-5 h-5" />,
  },
  macos_intel: {
    label: "macOS (Intel)",
    url: "/download/macos-intel",
    icon: <Apple className="w-5 h-5" />,
  },
  windows: {
    label: "Windows",
    url: "/download/windows",
    icon: <Monitor className="w-5 h-5" />,
  },
  linux_deb: {
    label: "Linux (.deb)",
    url: "/download/linux",
    icon: <Monitor className="w-5 h-5" />,
  },
  linux_appimage: {
    label: "Linux (.AppImage)",
    url: "/download/linux-appimage",
    icon: <Monitor className="w-5 h-5" />,
  },
};

function getPrimaryDownload(platform: Platform) {
  switch (platform) {
    case "macos":
      return downloadLinks.macos_arm;
    case "windows":
      return downloadLinks.windows;
    case "linux":
      return downloadLinks.linux_deb;
    default:
      return downloadLinks.macos_arm;
  }
}

export function Hero() {
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const primary = getPrimaryDownload(platform);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-fade" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            v{VERSION} — Now available for macOS, Windows & Linux
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your AI interview
          <br />
          <span className="gradient-text">copilot.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real-time transcription, AI-powered answers, and complete invisibility
          to screen sharing. Neura X sits on your desktop and helps you
          ace every technical interview.
        </motion.p>

        {/* Download buttons */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Primary download */}
          <a
            href={primary.url}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-white/90 transition-all duration-200 glow"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Download for {platform === "unknown" ? "macOS" : platform === "macos" ? "macOS" : platform === "windows" ? "Windows" : "Linux"}
          </a>

          {/* Other platforms toggle */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/60 transition-colors cursor-pointer"
          >
            Other platforms
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>

          {/* All downloads */}
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-wrap justify-center gap-3 mt-2"
            >
              {Object.entries(downloadLinks).map(([key, link]) => (
                <a
                  key={key}
                  href={link.url}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm text-white/70 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}

          <p className="text-xs text-white/25 mt-2">
            Free to download. Requires a license key to activate.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown className="w-6 h-6 text-white/20 animate-bounce" />
      </motion.div>
    </section>
  );
}
