// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=500, initial-scale=1',
			title: 'Focus Floring',
			meta: [
				// <meta name="description" content="My amazing site">
				{ name: 'description', content: 'My amazing site.' }
			]
		}
	},
	css: ['@/assets/styles/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: '@import "@/assets/styles/_variables.scss"'
				}
			}
		}
	},
	modules: ['@vueuse/nuxt', '@formkit/nuxt', '@nuxtjs/google-fonts'],
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
	}
})
