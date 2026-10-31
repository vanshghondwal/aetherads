/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        surface: {
          about: '#101010',
          card: '#212121'
        },
        typo: {
          main: '#E1E0CC',
          nav: 'rgba(225, 224, 204, 0.8)'
        }
      },
      fontFamily: {
        sans: ['Almarai', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif']
      }
    },
  },
  plugins: [],
}
