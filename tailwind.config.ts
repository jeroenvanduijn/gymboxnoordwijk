import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CrossFit Leiden brand colors
        'cinnabar': '#EF4C37',      // Primary - warm red/orange
        'verdigris': '#0CBABA',     // Secondary - turquoise
        'jonquil': '#F7CB15',       // Tertiary - yellow
        'chinese-violet': '#7B6D8D', // Tertiary - purple
      },
      fontFamily: {
        'heading': ['var(--font-heading)', 'sans-serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
