import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePWA({
      registerType:"autoUpdate",
      injectRegister:"auto",
      workbox: {
        cleanupOutdatedCaches:true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}"]
      },
      manifest:{
        name:"MYAPP",
        short_name:"MYAPP",
        description:"MYAPP",
        theme_color:"#ff1150",
        display:"standalone",
        icons:[
          {
            src:"images/icon/logo.png",
            sizes:"192x192",
            type:"image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  define:{global:"window"}
})
