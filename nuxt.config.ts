import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-US'
			},
			charset: 'utf-16',
			viewport: 'width=device-width,initial-scale=1.0',
			title: 'Focus Flooring',
			meta: [
				{
					name: 'description',
					content:
						'Discover advanced commercial flooring and wall tile solutions with Focus Flooring. Based in Tampa, Florida, our minority-owned firm guarantees risk elimination through precise processes, cost certainty, and real-time schedule management. Specializing in carpet, wood, ceramic, stone, concrete, LVT, resilient, and laminate flooring, we serve various sectors including industrial, healthcare, aviation, and more. Our "Zero Punch" philosophy ensures top-quality service with minimal quality punch list items. Partner with us for reliable and innovative flooring solutions. Contact us today!'
				}
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
	routeRules: {
		'/': { prerender: true }
	},
	css: [
		'@/assets/css/tokens.css',
		'@/assets/css/reset.css',
		'@/assets/css/tailwind.css'
	],
	vite: {
		plugins: [
			svgLoader() // https://github.com/jpkleemans/vite-svg-loader#readme
		]
	},
	devtools: {
		enabled: false
	},
	extends: ['@nuxt/ui-pro'],
	modules: [
		'nuxt-vercel-analytics',
		'@vueuse/nuxt',
		'@nuxt/ui',
		'@hebilicious/server-block-nuxt',
		'@hebilicious/form-actions-nuxt',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
		'@nuxtjs/robots',
		'@nuxt/image-edge',
		'@nuxtjs/tailwindcss',
		'nuxt-schema-org',
		'@nuxt/image',
		'@nuxtjs/partytown'
	],
	nitro: {
		compressPublicAssets: true
	},
	features: {
		devLogs: true
	},
	colorMode: {
		preference: 'light'
	},
	plugins: ['~/plugins/preline.client.ts'],
	googleFonts: {
		display: 'swap',
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
	image: {
		format: ['avif', 'webp'],
		imagekit: {
			baseURL: 'https://ik.imagekit.io/focusflooring/'
		}
	},
	schemaOrg: {
		host: 'https://focus-flooring.com'
	}
})
