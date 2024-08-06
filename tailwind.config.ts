import type { Config } from "tailwindcss";
import fluid from "fluid-tailwind";

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
        glassmorphism2: "url('/bg3.webp')",
      },
      colors: {
        primaryColor: "#9037ea",
        primaryLight: "#cb98ffcc",
        primaryExtraLight: "#9037ea99",
        secondaryColor: "#10ddf7",
        secondaryLight: "rgba(16, 221, 247, 0.7)",
        darkColor: "#0e0e0e",
        lightColor: "#e7e7e7",
      },
      keyframes: {
        blur: {
          "0%": {
            backdropFilter: "blur(0px) contrast(100%)",
            WebkitBackdropFilter: "blur(0px) contrast(100%)",
          },
          "100%": {
            backdropFilter: "blur(10px) contrast(100%)",
            WebkitBackdropFilter: "blur(10px) contrast(60%)",
          },
        },
      },
      animation: {
        blur: "blur 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [fluid],
};
export default config;
