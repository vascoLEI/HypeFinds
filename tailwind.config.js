/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#f7efe2',
        cream: '#fffaf2',
        ink: '#17130f',
        cocoa: '#5f4734',
        gold: '#c7a86a',
        softgold: '#ead8ae',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(56, 39, 24, 0.12)',
      },
    },
  },
  plugins: [],
};
