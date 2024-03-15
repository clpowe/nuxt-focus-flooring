/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,vue}', './node_modules/preline/preline.js'],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				midnight: '#171d1a',
				focusyellow: {
					500: '#cce70b',
					400: '#e1f555'
				}
			}
		}
	},
	darkMode: 'class',
	plugins: [require('preline/plugin')]
}
