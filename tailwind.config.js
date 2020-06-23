const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        gray: '#767676'
      }
    },
    container: {
      center: true,
      padding: '2rem'
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const containers = {
        '.container': {
          width: '90%',
          maxWidth: '980px',
          marginLeft: 'auto',
          marginRight: 'auto'
        },

        '.container-lg': {
          width: '90%',
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      }

      addUtilities(containers, ['responsive'])
    })
  ],
  corePlugins: {
    container: false
  }
}
