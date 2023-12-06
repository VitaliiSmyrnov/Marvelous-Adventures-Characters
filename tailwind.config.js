/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

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
        xs: { min: "320px", max: "374px" },
        ss: { max: "374px" },
        sm: "375px",
        md: "768px",
        lg: "1440px",
        dpr2: {
          raw: "screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx)",
        },
        dpr3: {
          raw: "screen and (min-device-pixel-ratio: 3), screen and (min-resolution: 288dpi), screen and (min-resolution: 3dppx)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "#0C0B0B",
        light: "#FAFAFA",
        "light-bg": "#171717",
        accent: "#34387F",
        input: "#171717",
        "accent-t": "#4B50AD",
        "grey-50": "rgba(250, 250, 250, 0.50)",
      },
      fontSize: {
        "10s": ["10px", { lineHeight: "12px" }],
        10: ["10px", { lineHeight: "12px", letterSpacing: "0.2px" }],
        "12s": ["12px", { lineHeight: "14px", letterSpacing: "-0.24px" }],
        12: ["12px", { lineHeight: "14px" }],
        "12L": ["12px", { lineHeight: "16px" }],
        "14s": ["14px", { lineHeight: "18px", letterSpacing: "-0.28px" }],
        14: ["14px", { lineHeight: "18px" }],
        16: ["16px", { lineHeight: "18px" }],
        "16L": ["16px", { lineHeight: "20px", letterSpacing: "0.32px" }],
        "18s": ["18px", { lineHeight: "24px", letterSpacing: "-0.36px" }],
        18: ["18px", { lineHeight: "28.8px" }],
        24: ["24px", { lineHeight: "24px", letterSpacing: "-0.48px" }],
        28: ["28px", { lineHeight: "32px", letterSpacing: "-0.56px" }],
        44: ["44px", { lineHeight: "44px", letterSpacing: "-0.88px" }],
        50: ["50px", { lineHeight: "50px", letterSpacing: "-1px" }],
        60: ["60px", { lineHeight: "60px", letterSpacing: "-1.2px" }],
        80: ["80px", { lineHeight: "80px", letterSpacing: "-1.6px" }],
        128: ["128px", { lineHeight: "128px", letterSpacing: "-2.56px" }],
        150: ["150px", { lineHeight: "150px", letterSpacing: "-3px" }],
      },
      backgroundImage: {
        "back-panther": "var(--bg-back-panther)",
        "hero-mob": "url('src/assets/images/mob/mob-hero.jpg'), var(--bg-hero)",
        "hero-mob2x":
          "url('src/assets/images/mob/mob-hero@2x.jpg'), var(--bg-hero)",
        "hero-mob3x":
          "url('src/assets/images/mob/mob-hero@3x.jpg'), var(--bg-hero)",
        "hero-tab": "url('src/assets/images/tab/tab-hero.jpg'), var(--bg-hero)",
        "hero-tab2x":
          "url('src/assets/images/tab/tab-hero@2x.jpg'), var(--bg-hero)",
        "hero-tab3x":
          "url('src/assets/images/tab/tab-hero@3x.jpg'), var(--bg-hero)",
        "hero-desk":
          "url('src/assets/images/desk/desk-hero.jpg'), var(--bg-hero)",
        "hero-desk2x":
          "url('src/assets/images/desk/desk-hero@2x.jpg'), var(--bg-hero)",
        "hero-desk3x":
          "url('src/assets/images/desk/desk-hero@3x.jpg'), var(--bg-hero)",
      },
    },
  },
  plugins: [Myclass],
};
