// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Castoro: true,
          'Markazi Text': [400, 700],
          'Josefin+Sans': true,
        },
        display: 'swap',
        prefetch: true,
        preload: true,
        inject: true,
      },
    ],
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  image: {
    dir: 'src/assets/images',
  },
})
