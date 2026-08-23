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
            50: "#f7f3f8",
            100: "#efe7f1",
            200: "#dfcfe3",
            300: "#c9adcf",
            400: "#a878b2",
            500: "#854493",
            600: "#6f267d",
            700: "#552064",
            800: "#3e174a",
            900: "#2d1236",
            950: "#211126",
          },
          gold: {
            50: "#fcf9ef",
            100: "#f7efd7",
            200: "#efdfad",
            300: "#e5ca7e",
            400: "#ddbb5e",
            500: "#d6b04e",
            600: "#b78d32",
            700: "#8f6b22",
            800: "#6d501b",
            900: "#563f19",
            950: "#30220d",
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
