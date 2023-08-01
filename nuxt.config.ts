// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config#ssr
  ssr: false,

  // https://nuxt.com/docs/api/configuration/nuxt-config#app
  app: {
    buildAssetsDir: "/_sastrala-web",
    // Global page headers: https://nuxt.com/docs/api/configuration/nuxt-config#head
    head: {
      htmlAttrs: {
        lang: "id",
      },
      title: "Sastrala - Sastra Kawula Official Website Sastrala",
      meta: [
        { name: "title", content: "Sastrala - Sastra Kawula Official Website Sastrala" },
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
            "Sastrala, Ekstrakurikuler jurnalistik, SMKN 13 Bandung, Kreativitas siswa, Pengembangan keterampilan, Kreativitas remaja, Eksplorasi talenta, Reporter, Wartawan, jurnalis",
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
        {
          hid: "og:url",
          property: "og:url",
          content: "https://sastrala.id",
        },

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
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://sastrala.id",
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
    // https://nuxt.com/modules/gtag
    "nuxt-gtag"
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

  // google analytics configuration
  gtag: {
    id: 'G-CQQZ1X5WCD',
    config: {
      page_title: 'Sastrala-Web - sastrala.id'
    }
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
});
