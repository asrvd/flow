import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(bg|text|fill|hover:shadow|shadow)-.+/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        cursive: ["Smooch", "cursive"],
      },
      animation: {
        wavy: "wavy 30s ease-in-out infinite",
      },
      keyframes: {
        wavy: {
          "0%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(100px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
