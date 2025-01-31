import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pastel: {
          red: "#FFADAD",
          orange: "#FFD6A5",
          yellow: "#FDFFB6",
          green: "#E4F1EE",
          blue: "#D9EDF8",
          purple: "#DEDAF4",
        },
      },
      borderWidth: {
        ...defaultTheme.borderWidth,
        base: "3px",
      },
    },
  },
  plugins: [],
};
