import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/api"),
            handler: "CacheFirst" as const,
            options: {
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
        ],
      },
    }),
  ],
});
