/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit' : ['Kanit', 'sans-serif'],
      },
      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem',
        '4xs': '.375rem',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'], // Change svg color
  },
  plugins: [],
}

