// ============================================================================
// TAILWIND DESIGN SYSTEM (LOGO-MATCHED PALETTE + MODERN EDITORIAL FONTS)
// ============================================================================
// Colors sampled directly from your LegalEra logo:
// - Crimson Red (#D02028)         -> "LEGAL ERA" wordmark
// - Deep Ocean Blue (#183E63)     -> Upper eagle globe
// - Night Ocean (#0C233B)         -> Dark utility bars, spotlight & footer
// - Globe Azure (#0078B0 / #5CC4F2) -> Lower glowing globe & steel ring
// ============================================================================

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Blues from Eagle Globe
        primary: "#183E63",
        "on-primary": "#FFFFFF",
        "primary-container": "#E7F2FA",
        "on-primary-container": "#123252",
        secondary: "#0C233B",
        "on-secondary": "#FFFFFF",

        // Glowing Globe Sky-Blue & Cerulean
        accent: "#5CC4F2",
        "on-accent": "#081C30",
        "accent-dark": "#006CA3",
        "accent-container": "#E5F5FC",
        "on-accent-container": "#0B3B5E",

        // Wordmark Crimson Red from "LEGAL ERA"
        breaking: "#D02028",
        "breaking-dark": "#A8161D",
        "on-breaking": "#FFFFFF",
        "breaking-container": "#FDF0F1",
        "on-breaking-container": "#7D1016",

        // Paper & Cool Steel Neutrals
        surface: "#FFFFFF",
        "on-surface": "#0F172A",
        "surface-container-low": "#F5F8FB",
        "surface-container": "#EBF2F7",
        "surface-container-high": "#DCE6EF",
        "on-surface-variant": "#475569",
        outline: "#8FA6B8",
        "outline-variant": "#DDE6EE",

        success: "#15803D",
        "on-success": "#FFFFFF",
      },
      borderRadius: {
        none: "0px",
        sm: "3px",
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
        xl: "14px",
        full: "9999px",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        headline: ["var(--font-display)", "system-ui", "sans-serif"],
        title: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
        label: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": ["40px", { lineHeight: "46px", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-lg-mobile": ["28px", { lineHeight: "34px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["34px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md-mobile": ["24px", { lineHeight: "30px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-lg": ["24px", { lineHeight: "30px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-md": ["20px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-sm": ["17px", { lineHeight: "23px", letterSpacing: "-0.005em", fontWeight: "700" }],
        "title-lg": ["17px", { lineHeight: "23px", letterSpacing: "-0.005em", fontWeight: "700" }],
        "title-md": ["15px", { lineHeight: "21px", letterSpacing: "0em", fontWeight: "700" }],
        "title-sm": ["14px", { lineHeight: "19px", letterSpacing: "0em", fontWeight: "600" }],
        "body-lg": ["17px", { lineHeight: "28px", letterSpacing: "0em", fontWeight: "400" }],
        "body-md": ["14.5px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "19px", letterSpacing: "0em", fontWeight: "400" }],
        "label-lg": ["13px", { lineHeight: "18px", letterSpacing: "0.02em", fontWeight: "700" }],
        "label-md": ["11px", { lineHeight: "15px", letterSpacing: "0.05em", fontWeight: "700" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.07em", fontWeight: "700" }],
        "mono-sm": ["11.5px", { lineHeight: "16px", letterSpacing: "0.01em", fontWeight: "500" }],
      },
      transitionDuration: {
        "state-change": "150ms",
        "surface-enter": "220ms",
      },
    },
  },
  plugins: [],
};
