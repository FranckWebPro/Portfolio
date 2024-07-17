import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bricolageGrotesque: ['"Bricolage Grotesque", sans-serif'],
    },
    extend: {
      backgroundImage: {
        hero: "url('/bg1.webp')",
        glassmorphism: "url('/bg2.webp')",
      },
      colors: {
        primaryColor: "#f464e3",
        primaryLight: "#f464e3cc",
        primaryExtraLight: "#f464e399",
        secondaryColor: "#10ddf7",
        secondaryLight: "rgba(16, 221, 247, 0.7)",
        darkColor: "#0e0e0e",
        lightColor: "#e7e7e7",
      },
      keyframes: {
        blur: {
          "0%": { backdropFilter: "blur(0px)" },
          "100%": { backdropFilter: "blur(10px)" },
        },
      },
      animation: {
        blur: "blur 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
