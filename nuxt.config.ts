// vite svg
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config#ssr
  ssr: false,

  // https://nuxt.com/docs/api/configuration/nuxt-config#runtimeconfig
  runtimeConfig: {
    APP_URL: "https://sastrala.id",
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#app
  app: {
    buildAssetsDir: "/_sastrala-web",
    // Global page headers: https://nuxt.com/docs/api/configuration/nuxt-config#head
    head: {
      htmlAttrs: {
        lang: "id",
      },
      title: "Sastrala - Sastra Kawula",
      meta: [
        { name: "title", content: "Sastrala - Sastra Kawula" },
        {
          name: "description",
          content:
            "Sastrala: Ekstrakurikuler Jurnalistik SMKN 13 Bandung. Sebuah Tempat Seru untuk Menemukan Inspirasi, Menggali Bakat, dan Mewujudkan Potensimu. Ayo Bergabung dengan Kami dan Temukan Dunia Kreasi yang Mengasyikkan!",
        },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // another meta tag
        {
          name: "keywords",
          content:
            "Sastrala, Ekstrakurikuler jurnalistik, SMKN 13 Bandung, Kreativitas siswa, Pengembangan keterampilan, Kreativitas remaja, Eksplorasi talenta, Reporter, Wartawan, jurnalis, podcast, sarcast",
        },

        // open graph tag / facebook
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Sastrala - Sastra Kawula" },
        {
          property: "og:description",
          content:
            "Sastrala: Ekstrakurikuler Jurnalistik SMKN 13 Bandung. Sebuah Tempat Seru untuk Menemukan Inspirasi, Menggali Bakat, dan Mewujudkan Potensimu. Ayo Bergabung dengan Kami dan Temukan Dunia Kreasi yang Mengasyikkan!",
        },
        { property: "og:image", content: "https://sastrala.id/banner.jpg" },
        { property: "og:locale", content: "id" },

        // twitter tag
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://sastrala.id/" },
        { property: "twitter:title", content: "Sastrala - Sastra Kawula" },
        {
          property: "twitter:description",
          content:
            "Sastrala: Ekstrakurikuler Jurnalistik SMKN 13 Bandung. Sebuah Tempat Seru untuk Menemukan Inspirasi, Menggali Bakat, dan Mewujudkan Potensimu. Ayo Bergabung dengan Kami dan Temukan Dunia Kreasi yang Mengasyikkan!",
        },
        {
          property: "twitter:image",
          content: "https://sastrala.id/banner.jpg",
        },

        // verification purpose
        {
          name: "p:domain_verify",
          content: "6aa257c4335252e9211c845785517776",
        },
        {
          name: "facebook-domain-verification",
          content: "09uwc6m1eaisg3gj1kn2xejq85gq70",
        },
      ],
    },
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: [
    // CSS file in the project
    "@/assets/css/main.css",
  ],

  // https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: [
    // https://nuxt.com/modules/security
    "nuxt-security",
    // https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",
    // https://google-fonts.nuxtjs.org/
    "@nuxtjs/google-fonts",
    // https://pinia.vuejs.org/ssr/nuxt.html
    "@pinia/nuxt",
    // https://content.nuxtjs.org/
    "@nuxt/content",
  ],

  // nuxt-security configuration
  security: {
    headers: {
      crossOriginEmbedderPolicy: "unsafe-none",
      contentSecurityPolicy: {
        "img-src": ["'self'", "https://*"],
      },
    },
  },

  // google font config
  googleFonts: {
    families: {
      Nunito: {
        wght: [400, 700],
        ital: [400, 700],
      },
      Merriweather: {
        wght: [400, 700],
        ital: [400, 700],
      },
    },
  },

  // vite config
  vite: {
    plugins: [svgLoader()],
  },
});
