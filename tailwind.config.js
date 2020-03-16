// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      'roboto': ['roboto', 'arial', 'san-serif'],
      'source': ['source sans pro', 'arial', 'san-serif'],
    },
    extend: {
      colors: {
        brand: '#72298f',
        'brand-50': '#72298f96'
      },
      borderRadius: {
        'xl': '1rem',
      },
      flex: {
        '2': '2 2 0%',
      }
    }
  },
  variants: {},
  plugins: [],
}
