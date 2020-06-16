
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },

      // 默认的meta
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // 禁止用户缩放屏幕
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      // 禁止用户调起电话
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // px2 所需的静态js
    script: [
      {
        src: '/flexible.js',
        type: 'text/javascript',
        charset: 'utf-8'
      },

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 项目里要用的 CSS 文件
    '@/assets/css/main.css',
    // 项目里要使用的 SCSS 文件
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/axios',
    '~plugins/vant.js',
    '~/plugins/route'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Simple usage
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true
  },
  proxy: {
    '/api/': {
      target: '192.168.103.121:8083',
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    postcss: [
      require('postcss-px2rem')({
        remUnit: 37.5
      })
    ],
  }
}
