"use client";

import { motion } from "framer-motion";
import { AppleIcon, WindowsIcon, LinuxIcon } from "./icons";

const VERSION = "0.1.5";

const platforms = [
  {
    name: "macOS",
    subtitle: "Apple Silicon",
    icon: AppleIcon,
    url: "/download/macos",
    ext: ".dmg",
    note: "macOS 10.13+",
  },
  {
    name: "macOS",
    subtitle: "Intel",
    icon: AppleIcon,
    url: "/download/macos-intel",
    ext: ".dmg",
    note: "macOS 10.13+",
  },
  {
    name: "Windows",
    subtitle: "64-bit",
    icon: WindowsIcon,
    url: "/download/windows",
    ext: ".exe",
    note: "Windows 10+",
  },
  {
    name: "Linux",
    subtitle: "Debian/Ubuntu",
    icon: LinuxIcon,
    url: "/download/linux",
    ext: ".deb",
    note: "Ubuntu 22.04+",
  },
  {
    name: "Linux",
    subtitle: "AppImage",
    icon: LinuxIcon,
    url: "/download/linux-appimage",
    ext: ".AppImage",
    note: "Any distro",
  },
];

export function Platforms() {
  return (
    <section id="download" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Download for
            <br />
            <span className="gradient-text">your platform.</span>
          </h2>
          <p className="text-lg text-white/40">
            Native performance on every operating system.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {platforms.map((p) => (
            <a
              key={`${p.name}-${p.subtitle}`}
              href={p.url}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-300"
            >
              <p.icon className="w-8 h-8 text-white/50 group-hover:text-cyan-400 transition-colors" />
              <div className="text-center">
                <p className="font-semibold text-white/90">{p.name}</p>
                <p className="text-sm text-white/40">{p.subtitle}</p>
              </div>
              <span className="text-xs font-mono text-white/25 px-2 py-1 rounded bg-white/[0.03] border border-white/[0.05]">
                {p.ext}
              </span>
              <p className="text-xs text-white/25">{p.note}</p>
            </a>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-white/25 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          v{VERSION}
        </motion.p>
      </div>
    </section>
  );
}
