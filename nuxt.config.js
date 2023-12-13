export default {
  head: {
    title: "System App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: [
    { src: "~plugins/antdv.js" },
    { src: "~plugins/v-mask.js", ssr: false },
    { src: "~plugins/vue-otp-input.js", ssr: false },
    { src: "~plugins/vue-drawer-layout.js", ssr: false },
  ],
  components: true,
  modules: ["@nuxtjs/axios"],
  buildModules: ["@nuxtjs/tailwindcss"],
  server: {
    host: "localhost",
    port: 8000,
  },
  build: {},
};
