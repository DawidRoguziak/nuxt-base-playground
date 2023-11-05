// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    ['@pinia/nuxt',{
      autoImport: ['defineStore', 'acceptHMRUpdate']
    }]
  ],
  image: {
    domains: ['m.media-amazon.com']
  },
  routeRules: {
    '/spa': {ssr: false},
    '/static': {prerender: true},
    '/swr': {swr: true},
  }
})
