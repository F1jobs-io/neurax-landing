import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neura X — AI-Powered Interview Assistant",
  description:
    "Ace every interview with real-time AI assistance. Invisible to screen sharing, works with any video call platform. Download for macOS, Windows, and Linux.",
  keywords: [
    "interview assistant",
    "AI interview help",
    "real-time transcription",
    "screen sharing invisible",
    "interview copilot",
    "Neura X",
  ],
  openGraph: {
    title: "Neura X — AI-Powered Interview Assistant",
    description:
      "Ace every interview with real-time AI assistance. Invisible to screen sharing.",
    url: "https://neurax.shop",
    siteName: "Neura X",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neura X — AI-Powered Interview Assistant",
    description:
      "Ace every interview with real-time AI assistance. Invisible to screen sharing.",
  },
  metadataBase: new URL("https://neurax.shop"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: { url: "/logo.png", sizes: "512x512", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
