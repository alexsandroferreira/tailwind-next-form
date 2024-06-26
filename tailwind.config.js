/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
      borderWidth: {
        6: '6px',
      },
      colors: {
        violet: { 25: '#fcfaff' },
        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },
      },

      keyframes: {
        slideDonwAnFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0px)' },
        },
        slideUpAnFade: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        moonGrow: {
          '0%': { backgroudSize: '18px 18px' },
          '50%': { backgroudSize: '14px 14px' },
          '100%': { backgroudSize: '18px 18px' },
        },
      },

      animation: {
        slideDonwAnFade: 'slideDonwAnFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAnFade: 'slideUpAnFade 1s linear',
        moonGrow: 'moonGrow 1s linear infinite',
      },

      backgroundImage: {
        'sun-icon': "url('/src/assets/img/sun.svg')",
        'moon-icon': "url('/src/assets/img/moon.svg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')],
}
