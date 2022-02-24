import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  define: {
    "process.env": {
      VUE_APP_BASE_API: "https://test-wxminiapi.ruleye.com",
    },
  },
});
