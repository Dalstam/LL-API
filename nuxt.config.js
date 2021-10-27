export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  prefix: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TringTring - Het nieuwe bakfiets bezorgnetwerk.',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "scripts/jquery/jquery.js" },
      { src: "scripts/bootstrap/js/transition.js" },
      { src: "scripts/bootstrap/js/carousel.js" },
      { src: "scripts/placeholders/placeholders.min.js" },
      { src: "scripts/jquery-validation/dist/jquery.validate.min.js" },
      { src: "scripts/jquery-validation/src/localization/messages_nl.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    subFolders: false
  }
}
