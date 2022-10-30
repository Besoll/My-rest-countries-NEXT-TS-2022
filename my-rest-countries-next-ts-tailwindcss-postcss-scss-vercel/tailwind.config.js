/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", //dark-blue
        primaryDark: "var(--primaryDark)", //very-dark-blue
        primaryLight: "var(--primaryLight)", //very-dark-blue-light
        secondary: "var(--secondary)", //dark-gray
        secondaryLight: "var(--secondaryLight)", //very-light-gray
      },
    },
  },
  plugins: [],
};
