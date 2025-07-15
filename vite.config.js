import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import VueRouter from "unplugin-vue-router/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: [{ src: "src/pages" }],
    }),
    tailwindcss(),
    vue(),
  ],
});
