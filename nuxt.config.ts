// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false, // Enable SPA mode
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Sports Leagues Directory',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Browse and filter sports leagues from around the world' }
      ]
    }
  }
})