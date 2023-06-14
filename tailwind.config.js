/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      desktop: '1440px',
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
      lg: ['56px', { fontWeight: '200' }],
      xl: ['56px', { fontWeight: '700' }],
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#141a1f',
      blue: {
        main: '#64829B',
        dark: '#28343e',
        sky: '#a0c4dc',
        'sky-70': '#a0c4dcb3',
        'sky-80': '#a0c4dccc',
      },
      grey: {
        light: '#F6F4F5',
        main: '#C5BAA9',
        dark: '#9e9587',
      },
      olive: {
        main: '#686C33',
        light: '#777b47',
      },
    },
    extend: {
      fontFamily: {
        NotoSans: ['Noto Sans', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '333ms',
      },
      backgroundImage: {
        menu: "url('images/menu.jpg')",
      },
    },
  },
  plugins: [],
};
