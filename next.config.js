const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: !isProd
    }
})

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/pomodoro',
          permanent: true,
        },
      ]
    },
  }