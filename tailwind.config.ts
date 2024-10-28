import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
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
export default config
