/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4fbf8b',
        primaryDull: '#44ae7c',
      },
    },
  },
  plugins: [],
}
