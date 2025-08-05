/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          colorButton: '#E50914',
          colorButtonHover: '#c2060f',
          colorButtonCodeAccess: "rgb(107 114 128 / 0.4)",
          colorButtonCodeAccessHover: "rgb(63 63 70 / 0.6)"
        }
      },
    },
    plugins: [],
}