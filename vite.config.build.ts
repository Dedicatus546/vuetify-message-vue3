import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: "./plugin/*.vue",
    }),
    dts({
      entryRoot: "plugin",
      include: "./plugin/**",
    }),
  ],
  build: {
    lib: {
      entry: "./plugin/index.ts",
      name: "VuetifyMessageVue3",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["vuetify", "vue"],
      output: {
        globals: {
          vue: "vue",
          vuetify: "vuetify",
        },
      },
    },
  },
});
