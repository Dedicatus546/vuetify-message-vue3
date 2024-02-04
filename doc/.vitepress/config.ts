import { defineConfig } from "vitepress";
import { Vuetify3Resolver } from "unplugin-vue-components/resolvers";
import component from "unplugin-vue-components/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuetify Message Vue3",
  description: "A plugin to use snackbar quickly for vue3 and vuetify!",
  vite: {
    plugins: [
      component({
        dts: "./src/component.d.ts",
        resolvers: [Vuetify3Resolver()],
      }),
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    logo: {
      light: "/vuetify-logo-light.svg",
      dark: "/vuetify-logo-dark.svg",
    },

    sidebar: [
      { text: "Introduce", link: "/introduce" },
      { text: "Get Start", link: "/get-start" },
      { text: "API", link: "/api" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Dedicatus546/vuetify-message-vue3" },
    ],
  },
});
