import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#E5D9C9",
      secondary: "#D8DBE2",
      white: "#F5FBF7",
      silver: "#8D8698",
      black: "#2D2A32",
      "advanced-darkness": "#1E1C21"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(250px, 1fr))',
      }
    },
  },
  plugins: [],
};
export default config;
