import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo-128.png" alt="Neura X" width={24} height={24} />
          <span className="text-lg font-bold text-white/80">Neura X</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/30">
          <a href="#features" className="hover:text-white/60 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white/60 transition-colors">
            How it works
          </a>
          <a href="#download" className="hover:text-white/60 transition-colors">
            Download
          </a>
          <a href="#faq" className="hover:text-white/60 transition-colors">
            FAQ
          </a>
          <a
            href="mailto:support@f1jobs.io"
            className="hover:text-white/60 transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-xs text-white/15">
          &copy; {new Date().getFullYear()} Neura X. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
