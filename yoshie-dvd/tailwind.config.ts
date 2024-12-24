import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        'ball': 'inset -3px -6px 5px 0 rgba(0, 0, 0, 0.333)',
      },
    },
  },
  plugins: [],
} satisfies Config;
