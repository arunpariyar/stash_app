import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";

// dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    // exclude: [...configDefaults.exclude, "**/__test__/**"],
  },

  // define: {
  //   "process.env": process.env,
  // },
});
