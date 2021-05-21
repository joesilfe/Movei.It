const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins(
  [withPWA({
      pwa: {
        dest: 'public',
        disable: !isProd
      }
    }),
    {
      async redirects() {
        return [{
          source: '/',
          destination: '/pomodoro',
          permanent: true,
        }, ]
      }
    }
  ])