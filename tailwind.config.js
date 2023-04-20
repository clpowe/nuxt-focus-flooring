/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,vue}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: false,
		themes: false,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: ''
	}
}
