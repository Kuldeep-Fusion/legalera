// ============================================================================
// ROOT LAYOUT (FONTS + GLOBAL HEADER & FOOTER)
// ============================================================================
// Modern crisp font pairing matching the clean editorial Hero style:
// 1. Plus Jakarta Sans -> Sharp, geometric modern headlines
// 2. Inter             -> Ultra-clean, readable body copy & UI labels
// 3. Red Hat Mono      -> Crisp tabular monospace for dates & citations
// ============================================================================

import { Inter, Plus_Jakarta_Sans, Red_Hat_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import BackToTop from "@/components/layout/BackToTop";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: "LEGAL ERA — India's Premier Legal News, Corporate Affairs & Media Platform",
  description:
    "Authoritative legal news, Supreme Court & High Court judgments, corporate M&A deals, LegalEra Magazine, and flagship legal awards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${redHatMono.variable}`}>
      <body className="bg-surface text-on-surface font-body min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-accent-container selection:text-primary">
        <SiteHeader />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
