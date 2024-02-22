/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,vue}', './node_modules/preline/preline.js'],
	theme: {
		container: {
			center: true
		},
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('preline/plugin'), require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#171d1a',
					secondary: '#eceded',
					accent: '#CCE70B'
				}
			}
			// {
			// 	mytheme: {
			// 		primary: '#171d1a',
			// 		secondary: '#eceded',
			// 		accent: '#CCE70B',
			// 		neutral: '#fff',
			// 		'base-100': '#f3f4f6',
			// 		info: '#3ABFF8',

			// 		success: '#36D399',

			// 		warning: '#FBBD23',

			// 		error: '#F87272'
			// 	}
			// }
		]
	}
}
