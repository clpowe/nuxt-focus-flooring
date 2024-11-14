import { base } from 'airtable'
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-US'
			},
			charset: 'utf-16',
			viewport: 'width=500, initial-scale=1',
			title: 'Focus Flooring',
			meta: [
				// <meta name="description" content="My amazing site">
				{ name: 'description', content: 'My amazing site.' }
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon-light.svg',
					media: '(prefers-color-scheme: dark)'
				},
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon-dark.svg',
					media: '(prefers-color-scheme: light)'
				}
			]
		}
	},
	css: ['@/assets/css/tailwind.scss'],
	vite: {
		plugins: [
			svgLoader() // https://github.com/jpkleemans/vite-svg-loader#readme
		],
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: '@import "@/assets/css/_variables.scss"'
				}
			}
		}
	},
	extends: ['@nuxt/ui-pro'],
	modules: [
		'@nuxt/devtools',
		'nuxt-vercel-analytics',
		'@vueuse/nuxt',
		'@formkit/nuxt',
		'@nuxt/ui',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
		'@nuxtjs/robots',
		'@nuxt/image-edge',
		'@nuxtjs/tailwindcss',
		'nuxt-schema-org',
		'nuxt-swiper',
		'@nuxt/image'
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
					swr: false,
				},
			},
			"/projects": {
				cache: {
					maxAge: 20 * 60 * 1000,
					swr: false,
				},
			},
		},
	},
	features: {
		devLogs: false
		// or 'silent' to allow you to handle yourself with `dev:ssr-logs` hook
	},
	colorMode: {
		preference: 'light'
	},
	plugins: ['~/plugins/preline.client.ts'],
	googleFonts: {
		families: {
			Inter: [400, 700]
		}
	},
	build: {
		transpile: ['@nuxt/image']
	},
	postcss: {
		plugins: {
			'postcss-preset-env': {
				stage: 3,
				features: {
					'nesting-rules': true
				}
			}
		}
	},
	formkit: {
		configFile: './formkit.config.ts'
	},
	image: {
		format: ['avif', 'webp'],
		imagekit: {
			baseURL: 'https://ik.imagekit.io/focusflooring/'
		}
	},
	schemaOrg: {
		host: 'https://focus-flooring.com'
	},
	devServer: {
		port: 8000
	},
	$development: {
		nitro: {
			storage: {
				projects: {
					driver: 'fs',
					base: 'projects'
				}
			}
		}
	}
})
