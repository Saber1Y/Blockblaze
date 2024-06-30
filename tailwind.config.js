const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.png')",
        // hero: "url('/public/images/hero-bg.png')"
      },
      colors: {
        primary: '#118670',
        secondary: '#021611B5'
      },
      fontFamily: {
        mess: ['El Messiri', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
