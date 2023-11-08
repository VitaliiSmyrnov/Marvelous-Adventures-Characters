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
        sm: "335px",
        md: "600px",
        lg: "1000px",
        xl: "1440px",
        dpr: {
          raw: "screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx)",
        },
      },
      fontFamily: {
        jomolhari: ["Jomolhari", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        bg: "#141A19",
        but: "#394014",
        grey: "#5A5959",
      },
      fontSize: {
        12: ["12px", { lineHeight: "16.8px", letterSpacing: "0.12px" }],
      },
      backgroundImage: {
        mirror: "var(--bg-hero-mirror)",
        modal: "url('../images/mob/mob-reviews.jpg'), var(--bg-modal)",
      },
    },
  },
  plugins: [Myclass],
};
