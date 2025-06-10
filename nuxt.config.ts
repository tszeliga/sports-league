// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false, // Enable SPA mode
  router: {
    options: {
      hashMode: true
    }
  },
  app: {
    baseURL: '/sports-league/',
    head: {
      title: 'Sports Leagues Directory',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Browse and filter sports leagues from around the world' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Sports Leagues Directory' },
        { property: 'og:title', content: 'Sports Leagues Directory' },
        { property: 'og:description', content: 'Browse and filter sports leagues from around the world' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Sports Leagues Directory' },
        { name: 'twitter:description', content: 'Browse and filter sports leagues from around the world' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/sports-league/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true,
    strict: true
  },
  imports: {
    dirs: [
      'types/**'
    ]
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  experimental: {
    payloadExtraction: false
  }
})