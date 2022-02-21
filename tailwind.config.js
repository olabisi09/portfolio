module.exports = {
  content: ['./index.html', './index.css', './tailwind.css', './main.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body': '#ffffff',
        'selected-text': '#A3A3FF',
        'theme': '#6180fe',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'lighter': '#374151',
        'actives': '#9aaefe'
      },
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif']
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },

}
