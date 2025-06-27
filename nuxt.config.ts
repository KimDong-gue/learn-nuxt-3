// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-quasar-ui'],
  typescript: {
    typeCheck: true,
  },
  quasar: {
    /* */
  },
});
