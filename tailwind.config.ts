import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "glass-bg": "rgba(255, 255, 255, 0.02)",
        "border": "rgba(255,255,227,0.4)",
      },
      boxShadow: {
        "sha-btn": "0 4px 30px rgba(0,0,0,0.1)",
      },
      backdropBlur: {
        "custom-blur": "6.6px",
      },
      fontFamily: {
        "rale": ["Raleway", "sans-serif"],
        "jura": ["Jura", "sans-serif"],

      },
    },
  },
  plugins: [],
};
export default config;
