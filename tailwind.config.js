/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
import colors from "tailwindcss/colors";
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: "400px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "xxl+": "1500px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    extend: {
      colors: {
        primary: {
          50: "#e6f6f6",
          100: "#cdeded",
          200: "#81d3d3",
          300: "#4fc1c1",
          400: "#1cafaf",
          500: "#03a6a6",
          600: "#039595",
          700: "#027474",
          800: "#026464",
          900: "#025353",
        },
        secondary: colors.gray,
        success: colors.emerald,
        warning: colors.amber,
        danger: colors.rose,
        info: colors.indigo,
        dark: colors.gray,
      },

      keyframes: {
        "bounce-slow-top": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-top-2": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-200px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-down": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-left": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-right": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-up": {
          "100%": {
            transform: "translateY(-200%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-down": {
          "-100%": {
            transform: "translateY(200%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-right": {
          "100%": {
            transform: "translateX(-400%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
      },
      animation: {
        "spin-slow-1": "spin 10s linear infinite",
        "spin-slow-2": "spin 20s linear infinite",
        "spin-slow-3": "spin 30s linear infinite",
        "bounce-slow-top": "bounce-slow-top 3s linear infinite",
        "bounce-slow-top-2": "bounce-slow-top 4s linear infinite",
        "bounce-slow-down": "bounce-slow-down 3s linear infinite",
        "bounce-slow-right": "bounce-slow-right 3s linear infinite",
        "bounce-slow-left": "bounce-slow-left 3s linear infinite",
        "fade-slow-up": "fade-slow-up 20s linear infinite",
        "fade-slow-down": "fade-slow-down 20s linear infinite",
        "fade-slow-right": "fade-slow-right 20s linear infinite",
      },
      boxShadow: {
        1: "0px 6px 30px 0px rgba(5, 58, 43, 0.08)",
        2: "0px 20px 24px -4px rgba(5, 58, 43, 0.04), 0px 8px 11px -4px rgba(5, 58, 43, 0.04)",
      },
      fontFamily: {
        dm_sans: ["DM Sans", "sans-serif"],
      },
      spacing: {
        "1px": "1px",
        15: "60px",
        18: "72px",
        25: "100px",
        30: "120px",
      },
      borderWidth: {
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".transition-1": {
          transition: "all 0.5s ease-in-out",
        },
        ".transition-2": {
          transition: "all 0.7s ease-in-out",
        },
        ".transition-3": {
          transition: "all 1s ease-in-out",
        },
        ".transition-4": {
          transition: "all 1.5s ease-in-out",
        },
        ".transition-5": {
          transition: "all 2s ease-in-out",
        },
      });
    }),
  ],
};
