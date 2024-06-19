import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(180deg, #FFD3B6 0%, #FFE6E1 100%);",
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      colors: {
        darkOrange: "#FA4A0C",
        lightOrange: "#FFD6D6",
        orange: " #F96C3B",
        grayText: "#A6A6A6",
        darkHeading: "#191A15",
        yellowStar: "#FFC728",
      },
    },
  },
  plugins: [],
};
export default config;
