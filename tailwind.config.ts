/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      desktop: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '48px',
      },
    },
    fontSize: {
      xs: ['14px', { fontWeight: '400' }],
      sm: ['20px', { fontWeight: '400' }],
      md: ['24px', { fontWeight: '500' }],
      lg: ['32px', { fontWeight: '400', lineHeight: '1' }],
      xl: ['56px', { fontWeight: '700' }],
    },
    colors: {
      transparent: 'transparent',
      white: '#FEF9F3',
      black: '#201C1B',
      // black: '#141413',
      accent: {
        main: '#2E7758',
        dark: '#1c4735',
        light: '#82ad9b',
      },
      grey: {
        light: '#e6e4e1',
        main: '#cdc8c2',
        dark: '#7b7874',
      },
      biege: {
        main: '#E8D9CA',
        light: '#f8f4ef',
      },
    },
    extend: {
      fontFamily: {
        NotoSans: ['Noto Sans', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '333ms',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.2s infinite',
      },
    },
  },
  plugins: [],
};
