import vue from "@vitejs/plugin-vue";
import { Vuetify3Resolver } from "unplugin-vue-components/resolvers";
import component from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    component({
      dts: "./src/component.d.ts",
      resolvers: [Vuetify3Resolver()],
    }),
    vueDevTools(),
  ],
  build: {
    outDir: "doc",
  },
});
