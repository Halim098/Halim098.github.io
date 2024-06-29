/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'text': '#304463',
        'background': '#F0EBE3',
        'button': '#576F72',
       },
      fontSize: {
        sm: '0.600rem',
        base: '0.8rem',
        xl: '1.066rem',
        '2xl': '1.421rem',
        '3xl': '1.894rem',
        '4xl': '2.525rem',
        '5xl': '3.366rem',
      },
      fontFamily: {
        metro: ['Metrophobic', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}

