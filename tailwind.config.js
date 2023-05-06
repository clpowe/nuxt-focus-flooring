/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,vue}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#171d1a',
					secondary: '#eceded',
					accent: '#CCE70B',
					neutral: '#fff',
					'base-100': '#f3f4f6',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272'
				}
			}
		]
	}
}
