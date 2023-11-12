/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backdrop-hidden": {
      visibility: "hidden",
      opacity: 0,
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
        dpr: {
          raw: "screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "#0C0B0B",
        light: "#FAFAFA",
        accent: "#34387F",
      },
      fontSize: {
        10: ["10px", { lineHeight: "12px", letterSpacing: "0.2px" }],
        12: ["12px", { lineHeight: "14px" }],
        "12L": ["12px", { lineHeight: "16px" }],
        14: ["14px", { lineHeight: "18px" }],
        16: ["16px", { lineHeight: "18px" }],
        18: ["18px", { lineHeight: "28.8px" }],
        44: ["44px", { lineHeight: "44px", letterSpacing: "-0.88px" }],
        80: ["80px", { lineHeight: "80px", letterSpacing: "-1.6px" }],
      },
      backgroundImage: {
        mirror: "var(--bg-hero-mirror)",
        modal: "url('../images/mob/mob-reviews.jpg'), var(--bg-modal)",
      },
    },
  },
  plugins: [Myclass],
};
