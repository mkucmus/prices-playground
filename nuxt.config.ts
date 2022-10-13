import PostCSSOptions from "./postcss.config";

export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@shopware-pwa/nuxt3-module"],
  css: ["@/assets/css/main.css"],
  build: {
    postcss: {
      postcssOptions: PostCSSOptions,
    },
  },
});
