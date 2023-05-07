/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter, sans-serif"],
    },
    extend: {
      gridTemplateAreas: {
        layout: ["header header", "sidebar content"],
      },
      gridTemplateColumns: {
        layout: "var(--nav-width, 16rem) 1fr",
      },
      gridTemplateRows: {
        layout: "4rem 1fr",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        input: "rgba(241, 243, 244, 0.24)",
        content: "rgb(44, 44, 44)",
        gold: "hsl(44, 92%, 58%)",
        "primary-gray": "#c4c7c5",
        // white: "rgb(255, 255, 255",
        "secondary-gray": "rgb(68, 68, 68)",
        selected: "rgba(255,255,255,.3)",
        hovered: "rgba(255,255,255,.2)",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
