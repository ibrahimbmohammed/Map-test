/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-museo)"],
      },
      colors: {
        primaryColor: "var(--color-primaryColor)",
        primaryBlueColor: "var(--color-primaryBlueColor)",
        secondaryColor: "var(--color-secondaryColor)",
        backgroundColor: "var(--color-backgroundColor)",
        primary: "#5D17EB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "1lg": "1279px",
        "1xl": "1440px",
        "1.5xl": "1500px",
        "3xl": "1700px",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
