module.exports = {

  rewrites: [

      {

          source: 'api/:path*',
          destination: 'https://aryanguptasapi.vercel.app/api/:path*'

      },

  ]

}
