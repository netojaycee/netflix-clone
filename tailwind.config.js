/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E50914",
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./assets/images/movie-poster-background.jpg')",
      },

    },
  },
  plugins: [],
}