import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
<<<<<<< HEAD
=======
	compatibilityDate: '2024-10-04',
	future: {
		compatibilityVersion: 4
	},
>>>>>>> 6dd3464 (update config)
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-US'
			},
			charset: 'utf-16',
<<<<<<< HEAD
			viewport: 'width=500, initial-scale=1',
			title: 'Focus Flooring',
			meta: [
				// <meta name="description" content="My amazing site">
				{ name: 'description', content: 'My amazing site.' }
=======
			viewport: 'width=device-width,initial-scale=1.0',
			title: 'Focus Flooring',
			meta: [
				{
					name: 'description',
					content:
						'Looking for reliable commercial flooring solutions? Focus Flooring in Tampa delivers projects on time and within budget. Our minority-owned business offers expert installation of carpet, wood, tile, stone, and more, ensuring precision, cost certainty. Contact us for top-quality, innovative flooring in healthcare, industrial, aviation, and other sectors.'
				}
>>>>>>> 6dd3464 (update config)
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
<<<<<<< HEAD
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
=======

	routeRules: {
		'/': { prerender: true },
		'/about-us': { prerender: true },
		'join-our-team': { prerender: true },
		'our-history': { prerender: true },
		'our-process': { prerender: true }
	},

	css: [
		'@/assets/css/tokens.css',
		'@/assets/css/reset.css',
		'@/assets/css/tailwind.css'
	],

	vite: {
		css: {
			lightningcss: {}
		},
		plugins: [
			svgLoader() // https://github.com/jpkleemans/vite-svg-loader#readme
		]
	},

	devtools: {
		componentInspector: true,
		enabled: true
	},

	sourcemap: {
		server: true,
		client: false
	},

	extends: ['@nuxt/ui-pro'],

	modules: [
		'nuxt-vercel-analytics',
		'@vueuse/nuxt',
		'@nuxt/ui',
		'@formkit/auto-animate/nuxt',
		'@nuxtjs/google-fonts',
		'@nuxt/icon',
>>>>>>> 6dd3464 (update config)
		'@nuxtjs/robots',
		'@nuxt/image-edge',
		'@nuxtjs/tailwindcss',
		'nuxt-schema-org',
<<<<<<< HEAD
		'nuxt-swiper',
		'@nuxt/image'
	],
	features: {
		devLogs: false
		// or 'silent' to allow you to handle yourself with `dev:ssr-logs` hook
	},
	colorMode: {
		preference: 'light'
	},
	plugins: ['~/plugins/preline.client.ts'],
	googleFonts: {
=======
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxtjs/sitemap'
	],

	nitro: {
		compressPublicAssets: true,
		devProxy: {
			host: '127.0.0.1'
		},
		routeRules: {
			'/team': {
				cache: {
					maxAge: 20 * 60 * 1000,
					swr: false
				}
			},
			'/projects': {
				cache: {
					maxAge: 20 * 60 * 1000,
					swr: false
				}
			}
		}
	},

	features: {
		devLogs: true
	},

	colorMode: {
		preference: 'light'
	},

	googleFonts: {
		display: 'swap',
>>>>>>> 6dd3464 (update config)
		families: {
			Inter: [400, 700]
		}
	},
<<<<<<< HEAD
	build: {
		transpile: ['@nuxt/image']
	},
=======
	$production: {
		scripts: {
			registry: {
				// googleAnalytics: {
				// 	id: 'G-43HSQWN2L1'
				// }
			}
		}
	},

	build: {
		transpile: ['@nuxt/image']
	},

>>>>>>> 6dd3464 (update config)
	postcss: {
		plugins: {
			'postcss-preset-env': {
				stage: 3,
				features: {
					'nesting-rules': true
				}
<<<<<<< HEAD
			}
		}
	},
	formkit: {
		configFile: './formkit.config.ts'
	},
=======
			},
			cssnano: {},
			autoprefixer: {}
		}
	},

>>>>>>> 6dd3464 (update config)
	image: {
		format: ['avif', 'webp'],
		imagekit: {
			baseURL: 'https://ik.imagekit.io/focusflooring/'
		}
	},
<<<<<<< HEAD
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
=======

	schemaOrg: {
		host: 'https://focus-flooring.com'
	},
	site: {
		url: 'https://focus-flooring.com',
		name: 'Focus Flooring'
	},
	sitemap: {}
>>>>>>> 6dd3464 (update config)
})
