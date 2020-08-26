// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      'roboto': ['raleway', 'arial', 'san-serif'],//added raleway font post development
      'source': ['source sans pro', 'arial', 'san-serif'],
      'raleway': ['source sans pro', 'arial', 'san-serif'],
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
      },
      boxShadow: {
        'outline-brand': '0 0 0 3px #d61f69;'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/custom-forms')
  ],
}
