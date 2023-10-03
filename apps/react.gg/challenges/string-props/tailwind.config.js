const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("node:path");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').plugins} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "10px" },
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        "beige-10": "rgba(249, 244, 218, 0.1)",
        "beige-50": "rgba(249, 244, 218, 0.5)",
        "beige-75": "rgba(249, 244, 218, 0.75)",
        "beige-body": "#fffbe3",
        "brand-beige": "#f9f4da",
        "brand-blue": "#12b5e5",
        "brand-charcoal": "#231f20",
        "brand-charcoal-muted": "#1b1918",
        "brand-coal": "#0f0d0e",
        "brand-gray": "#262522",
        "brand-green": "#0ba95b",
        "brand-orange": "#fc7428",
        "brand-pink": "#f38ba3",
        "brand-purple": "#7b5ea7",
        "brand-red": "#ed203d",
        "brand-white": "#fff",
        "brand-yellow": "#fcba28",
        "charcoal-10": "rgba(35, 31, 32, 0.1)",
        "charcoal-50": "rgba(35, 31, 32, 0.5)",
        "gentle-peach-lol": "#f99157",
        "gray-100": "#e1e2e4",
        "gray-200": "#b1b4b9",
        "gray-25": "#f7f7f7",
        "gray-300": "#767980",
        "gray-400": "#5c6069",
        "gray-50": "#f3f3f5",
        "gray-500": "#383c44",
        "gray-600": "#1d2025",
        "gray-700": "#131519",
        "gray-75": "#e9eaec",
        "gray-800": "#0c0e10",
        "gray-900": "#000",
        "light-mode-blue": "#038282",
        "light-mode-green": "#178040",
        "light-mode-orange": "#a95525",
        "light-mode-pink": "#ca3e6a",
        "light-mode-purple": "#6c4c9f",
        "light-mode-red": "#d81f2e",
        "light-mode-yellow": "#7c7651",
        "magestic-purple": "#9d7dce",

        // eslint-disable-next-line sort-keys
        aqua: "#12b5e5",
        beige: "#f9f4da",
        black: "#0f0d0e",
        blue: "#12b5e5",
        charcoal: "#231f20",
        coal: "#0f0d0e",
        gold: "#fcba28",
        gray: "#262522",
        green: "#0ba95b",
        orange: "#fc7428",
        pink: "#f38ba3",
        purple: "#7b5ea7",
        red: "#ed203d",
        white: "#f9f4da",
        yellow: "#fcba28",
      },
      fontFamily: {
        primary: ["Outfit"],
      },
    },
  },
};
