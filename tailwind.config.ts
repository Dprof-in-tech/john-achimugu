import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "data.ts",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      display: ['group-hover'],
    }
  },
  theme: {
    extend: {
      fontFamily: {
        moonwalk: ['Moonwalk', 'sans-serif'],
        sans: ['Epilogue', 'sans-serif'],
      },
      backgroundImage: {
        'work-bg': "url('/images/work-background.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        'shine': 'shine 1.5s ease-in-out',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(25deg)' },
          '100%': { transform: 'translateX(100%) rotate(25deg)' },
        },
      },

    },
  },
  plugins: [],
};
export default config;
