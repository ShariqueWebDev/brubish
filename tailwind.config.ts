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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ffb200",
        secondary: " #FFBA0C ",
        //  primary: "#ae0a46",
        // secondary: "#662372",
        primary1: "#2121bd",
        secondary1: "#FFD65C",

        greish: "#626262",
        primary2: "#6ED0E5",
        secondary2: "#F0B56C",
      },
    },
  },
  plugins: [],
};
export default config;
