/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22A089',
          50: '#F1FCF8',
          100: '#D1F6EB',
          200: '#A2EDDA',
          300: '#6BDDC3',
          400: '#3DC4A9',
          500: '#22A089',
          600: '#1A8775',
          700: '#196C60',
          800: '#18574E',
          900: '#194842',
          950: '#082B27',
        },
        dark: '#121212',
      },
    },
  },
  plugins: [],
}
