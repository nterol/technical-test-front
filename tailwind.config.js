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
    fontFamily: {
      sans: ['var(--font-roboto)'],
    },
    // from: https://github.com/tailwindlabs/tailwindcss/discussions/8705#discussioncomment-3886756
    gridTemplateColumns: ({ theme }) => {
      const spacing = theme('spacing');
      return Object.keys(spacing).reduce((acc, spacingKey) => {
        
        return {
          ...acc,
          [`fill-${spacingKey}`]: `repeat(auto-fill, minmax(${spacing[spacingKey]}, 1fr))`,
        };
      }, {});
    },
  },
  plugins: [],
};
