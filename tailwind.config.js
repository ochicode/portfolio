/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'win95': {
          'desktop': '#008080',
          'window': '#c0c0c0',
          'white': '#ffffff',
          'light': '#dfdfdf',
          'dark': '#808080',
          'darkest': '#000000',
          'active': '#000080',
          'active-light': '#1084d0',
          'text': '#000000',
          'highlight': '#ffffff',
        }
      },
      fontFamily: {
        'sans': ['MS Sans Serif', 'Microsoft Sans Serif', 'sans-serif'],
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        'win95-inset': 'inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080',
        'win95-button': 'inset -1px -1px 0 #000000, inset 1px 1px 0 #dfdfdf, inset -2px -2px 0 #808080, inset 2px 2px 0 #ffffff',
        'win95-button-pressed': 'inset 1px 1px 0 #000000',
      },
    },
  },
  plugins: [],
}
