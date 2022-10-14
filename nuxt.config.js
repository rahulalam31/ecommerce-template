export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "دیجی کالا-فروشگاه موبل و لوازم جانبی",
    htmlAttrs: {
      lang: "fa",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "دیجی کالا-فروشگاه موبل و لوازم جانبی دیجی کالا-فروشگاه موبل و لوازم جانبی",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "theme-color",
        content: "#ff6666",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: ["@nuxtjs/composition-api/module"],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
  ],
  styleResources: {
    scss: [
      "~/assets/style/scss/variables.scss",
      "~/assets/style/scss/general.scss",
      "~/assets/style/scss/breakpoint.scss",
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
