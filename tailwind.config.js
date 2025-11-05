/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // remix routes, components, etc.
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm9pt: ["'DM Sans 9pt'", "sans-serif"],
        lego: ["'LEGO Typewell'", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}

