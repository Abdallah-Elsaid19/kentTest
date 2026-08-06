import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kbc: {
          purple: {
            50: "#f5f0f7",
            100: "#ebe0f0",
            200: "#d7c1e1",
            300: "#c3a2d2",
            400: "#af83c3",
            500: "#6f2ce9",
            600: "#5D19E3",
            700: "#4F2D7F",
            800: "#3905A1",
            900: "#261044",
            950: "#0F071D",
          },
          gold: {
            50: "#fdf8f0",
            100: "#fbf0e0",
            200: "#f7e1c1",
            300: "#f3d2a2",
            400: "#efc383",
            500: "#F5C94F",
            600: "#c8952b",
            700: "#B07822",
            800: "#805e0e",
            900: "#64480b",
            950: "#483208",
          },
          dark: {
            50: "#f6f6f6",
            100: "#e7e7e7",
            200: "#d1d1d1",
            300: "#b0b0b0",
            400: "#888888",
            500: "#6d6d6d",
            600: "#5d5d5d",
            700: "#4f4f4f",
            800: "#454545",
            900: "#1a1a1a",
            950: "#0f0f0f",
          },
        },
      },
      fontFamily: {
        heading: ['"Poppins"', "sans-serif"],
        body: ['"Poppins"', "sans-serif"],
      },
      screens: {
        xs: "475px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
