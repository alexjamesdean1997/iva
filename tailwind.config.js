const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          default: '#767676',
          light: '#f6f6f8'
        }
      },
      screens: {
        '2xl': '1920px',
        '3xl': '2560px'
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
      const container = {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }

      const containers = {
        '.container': {
          ...container,
          maxWidth: '980px',
        },

        '.container-lg': {
          ...container,
          maxWidth: '1280px',
        }
      }

      addUtilities(containers, ['responsive'])
    })
  ],
  corePlugins: {
    container: false
  }
}
