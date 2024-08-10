import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at var(--x, 50%) var(--y, 50%), #4c616b, #455a64 60%)",
      },
    },
  },
  plugins: [],
};
