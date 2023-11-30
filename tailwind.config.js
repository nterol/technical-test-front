/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
    },
    extend: {
      colors: {
        primary: {
          main: '#283149',
        },
        secondary: {
          text: '#b8b9ba',
          main: '#404b69',
        },
        accent: '#00818a',
        light: '#dbedf3',
      },
    },
  },
  plugins: [],
};