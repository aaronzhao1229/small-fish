/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jasmine: '#fdd175',
        'hunyadi-yellow': '#e8b866',
        'princeton-orange': '#fc9432',
        'safety-orange': '#fd8021',
        pumpkin: '#fe6f1b',
        'giants-orange': '#f95818',
        'chili-red': '#e33a14',
        'raisin-black': '#141c2b',
      },
    },
  },
  plugins: [require('daisyui')],
}
