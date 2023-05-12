const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      white: "white",
      black: "#060606",
      red: "#E93737",
      transparent: "transparent",
      grey: "#858585",
    },
    fontFamily: {
      "luckiest-guy": ["Luckiest Guy"],
      "bebas-neue": ["Bebas Neue"],
      cabin: ["Cabin"],
    },
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
      backgroundSize: {
        grow: "125%",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".border-fix": {
          "background-clip": "content-box",
          padding: "1px",
        },
      });
    }),
  ],
};
