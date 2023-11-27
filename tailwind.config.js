/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      gridTemplateColumns: {
        1_30: '1fr 30%',
        30_1: '30% 1fr',
        1_40: '1fr 40%'
      },
      fontFamily: {
        primary:  "'Raleway', sans-serif",
      },
      colors: {
        'primary': '#EBE3D5',
        'secondary': '#F3EEEA', 
        'lightSecondary': '#F9F6F3',  
        'darkBlue' : '#001524'

      },
      boxShadow: {
        'primary': '0 10px 10px -2px white',
        'secondary': '0 8px 16px 0 white',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      keyframes: {
        'scale-110' : {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
      'scale-110' : 'scale-110 12s ease-in-out infinite'
      }
    },

  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}