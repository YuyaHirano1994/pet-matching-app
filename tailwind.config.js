/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Dancing Script"],
        title: ["Lobster"],
        question: ["EB Garamond"],
      },
    },
  },
  plugins: [],
};
