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
        "primary-text": "var(--primary-text)",
        "primary-text-muted": "var(--primary-text-muted)",
        "primary-bg": "var(--primary-bg)",
        "secondary-bg": "var(--secondary-bg)",
        pastel: {
          red: "var(--pastel-red)",
          orange: "var(--pastel-orange)",
          yellow: "var(--pastel-yellow)",
          green: "var(--pastel-green)",
          blue: "var(--pastel-blue)",
          purple: "var(--pastel-purple)",
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
