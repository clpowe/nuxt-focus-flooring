import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-US'
			},
			charset: 'utf-16',
			viewport: 'width=500, initial-scale=1',
			title: 'Focus Floring',
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
	modules: [
		'@vueuse/nuxt',
		'@formkit/nuxt',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
		'@nuxtjs/robots',
		'@nuxt/image-edge',
		'@nuxtjs/tailwindcss'
	],
	googleFonts: {
		families: {
			Inter: [400, 700]
		}
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
	}
})
