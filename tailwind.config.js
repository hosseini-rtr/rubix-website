/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-black": "#0a0a0a",
        "matte-black": "#141414",
        "soft-gray": "#1f1f1f",
        "medium-gray": "#2a2a2a",
        "light-gray": "#3f3f3f",
        "electric-blue": "#00d4ff",
        "neon-cyan": "#00ffff",
        "cyber-purple": "#a78bfa",
        "glow-blue": "#0ea5e9",
      },
      fontFamily: {
        sans: ["Inter", "Vazirmatn", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        persian: ["Vazirmatn", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark":
          "linear-gradient(to bottom right, #0a0a0a, #141414, #1f1f1f)",
        "glow-pulse":
          "radial-gradient(circle at center, rgba(0, 212, 255, 0.15), transparent 70%)",
      },
      boxShadow: {
        "neon-sm": "0 0 10px rgba(0, 212, 255, 0.3)",
        neon: "0 0 20px rgba(0, 212, 255, 0.5)",
        "neon-lg": "0 0 40px rgba(0, 212, 255, 0.6)",
        glow: "0 0 60px rgba(0, 212, 255, 0.4), 0 0 100px rgba(0, 212, 255, 0.2)",
        glass: "0 8px 32px 0 rgba(0, 212, 255, 0.1)",
        depth: "0 20px 60px -15px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow:
              "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)",
          },
          "100%": {
            boxShadow:
              "0 0 40px rgba(0, 212, 255, 0.8), 0 0 80px rgba(0, 212, 255, 0.4)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
