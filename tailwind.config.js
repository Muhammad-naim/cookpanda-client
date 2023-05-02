/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      alias: {
        "card-content-container": "text-white"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}

