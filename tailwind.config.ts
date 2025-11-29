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
        // Gymbox Noordwijk brand colors
        'primary': '#F5B800',        // Primary - geel/goud (buttons, accenten)
        'gymbox-black': '#1A1A1A',   // Tekst, headings
        'gymbox-white': '#FFFFFF',   // Achtergronden
        'gymbox-gray-light': '#F5F5F5', // Secundaire achtergronden
        'gymbox-gray': '#9CA3AF',    // Subtiele elementen, secundaire tekst
        // Legacy color mappings for compatibility
        'cinnabar': '#F5B800',       // Map to primary gold
        'verdigris': '#1A1A1A',      // Map to black
        'jonquil': '#F5B800',        // Map to primary gold
        'chinese-violet': '#9CA3AF', // Map to gray
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
