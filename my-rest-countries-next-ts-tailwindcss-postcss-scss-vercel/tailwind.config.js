/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: 'var(--font-sans)',
      },
      fontWeight: {
        Normal: 'var(--font-w-normal)',
        Bold: 'var(--font-w-bold)',
        Bolder: 'var(--font-w-bolder)',
      },
      fontSize: {
        Small: 'var(--text-sm)',
        Big: 'var(--text-md)',
        XL: 'var(--text-xl)',
      },
      colors: {
        Blue_Light: 'var(--Light-Blue)',
        Blue_Dark: 'var(--Dark-Blue)',
        Grey: 'var(--Dark-Grey)',
        White_Soft: 'var(--White98)',
        White: 'var(--White100)',
      },
      textColor: {
        Dark: 'var(--Light-Mode-Text)',
        Light: 'var(--Dark-Mode-Text)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
