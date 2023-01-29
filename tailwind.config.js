/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: false,
  theme: {
    extend: {
      colors: {
        // LG: '#A50034'
        LG: {
          DEFAULT: '#BB254A',
          100: '#FBF8F3',
          200: '#F6D0CE',
          300: '#F9A4A5',
          400: '#DE818C',
          500: '#ED5F73',
          600: '#BB254A',
          700: '#846058',
          800: '#7A3A31',
          900: '#6B3237'
        }
      }
    },
  },
  plugins: [],
}
