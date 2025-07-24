import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Start-Framework/", // ← لازم يكون اسم الريبو بالظبط هنا
  plugins: [react()],
});
