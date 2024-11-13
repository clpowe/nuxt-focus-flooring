import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-04",
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1.0",
      title: "Focus Flooring",
      meta: [
        {
          name: "description",
          content:
            "Looking for reliable commercial flooring solutions? Focus Flooring in Tampa delivers projects on time and within budget. Our minority-owned business offers expert installation of carpet, wood, tile, stone, and more, ensuring precision, cost certainty. Contact us for top-quality, innovative flooring in healthcare, industrial, aviation, and other sectors.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon-light.svg",
          media: "(prefers-color-scheme: dark)",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon-dark.svg",
          media: "(prefers-color-scheme: light)",
        },
      ],
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/about-us": { prerender: true },
    "join-our-team": { prerender: true },
    "our-history": { prerender: true },
    "our-process": { prerender: true },
  },

  css: [
    "@/assets/css/tokens.css",
    "@/assets/css/reset.css",
    "@/assets/css/tailwind.css",
  ],

  vite: {
    css: {
      lightningcss: {},
    },
    plugins: [
      svgLoader(), // https://github.com/jpkleemans/vite-svg-loader#readme
    ],
  },

  devtools: {
    componentInspector: true,
    enabled: true,
  },

  sourcemap: {
    server: true,
    client: false,
  },

  extends: ["@nuxt/ui-pro"],

  modules: [
    "nuxt-vercel-analytics",
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxtjs/robots",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "nuxt-schema-org",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/sitemap",
  ],

  nitro: {
    compressPublicAssets: true,
    devProxy: {
      host: "127.0.0.1",
    },
    routeRules: {
      "/team": {
        cache: {
          maxAge: 20 * 60 * 1000,
          swr: true,
        },
      },
      "/projects": {
        cache: {
          maxAge: 20 * 60 * 1000,
          swr: true,
        },
      },
    },
  },

  features: {
    devLogs: true,
  },

  colorMode: {
    preference: "light",
  },

  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 700],
    },
  },
  $production: {
    scripts: {
      registry: {
        // googleAnalytics: {
        // 	id: 'G-43HSQWN2L1'
        // }
      },
    },
  },

  build: {
    transpile: ["@nuxt/image"],
  },

  postcss: {
    plugins: {
      "postcss-preset-env": {
        stage: 3,
        features: {
          "nesting-rules": true,
        },
      },
      cssnano: {},
      autoprefixer: {},
    },
  },

  image: {
    format: ["avif", "webp"],
    imagekit: {
      baseURL: "https://ik.imagekit.io/focusflooring/",
    },
  },

  schemaOrg: {
    host: "https://focus-flooring.com",
  },
  site: {
    url: "https://focus-flooring.com",
    name: "Focus Flooring",
  },
  sitemap: {},
});
