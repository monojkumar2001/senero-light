/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Kohinoor Bangla",
          "KohinoorBangla",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#D97706",
        "primary-dark": "#B45309",
        night: "#0B1220",
        "night-soft": "#121A2B",
        dark: "#0F172A",
        text: "#1E293B",
        muted: "#64748B",
        surface: "#FFFFFF",
        border: "#E2E8F0",
        glow: "#FBBF24",
        warning: "#F59E0B",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        card: "0 4px 16px rgba(15, 23, 42, 0.05)",
        glow: "0 0 40px rgba(251, 191, 36, 0.2)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
        marquee: "marquee 55s linear infinite",
      },
    },
  },
  plugins: [],
};
