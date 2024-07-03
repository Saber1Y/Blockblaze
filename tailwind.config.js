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
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'mess': ["El Messiri"],
        'babs': ['Baloo 2', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/images/hero.png')",
        'assasins': "url('/images/assasins.png')",
        'people': "url('/images/people.png')",
        'gradient-custom': 'linear-gradient(to right, #0C6F56, #391F65)',
      },
      colors: {
        primary: '#118670',
        secondary: '#021611B5'
      },
    },
  },
  plugins: [],
};
