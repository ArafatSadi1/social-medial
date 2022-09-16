/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#44403c",
          secondary: "#7B7E86",
          accent: "#E5E7EB",
          neutral: "#34465D",
          "base-100": "#ffffff",
        },
        dark: {
          primary: "#DADADA",
          secondary: "#9CA3AF",
          accent: "#18191A",
          neutral: "#242526",
          "base-100": "#242526",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
