/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{html,js,vue}',
		'./node_modules/preline/preline.js',
		'./formkit.theme.ts'
	],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				midnight: {
					50: 'oklch(97.54% 0.00 197.14)',
					100: 'oklch(92.12% 0.01 155.09)',
					200: 'oklch(83.89% 0.02 155.75)',
					300: 'oklch(73.15% 0.03 157.13)',
					400: 'oklch(61.77% 0.03 158.54)',
					500: 'oklch(52.71% 0.03 161.23)',
					600: 'oklch(44.81% 0.03 159.56)',
					700: 'oklch(39.30% 0.02 158.72)',
					800: 'oklch(34.79% 0.02 161.50)',
					900: 'oklch(31.87% 0.02 161.13)',
					950: 'oklch(22.34% 0.01 163.83)'
				},
				focusyellow: {
					50: 'oklch(99.35% 0.03 106.98)',
					100: 'oklch(98.44% 0.07 110.21)',
					200: 'oklch(97.18% 0.13 112.35)',
					300: 'oklch(94.82% 0.18 114.42)',
					400: 'oklch(91.19% 0.20 116.11)',
					500: 'oklch(87.74% 0.20 117.97)',
					600: 'oklch(70.42% 0.17 119.20)',
					700: 'oklch(57.45% 0.13 119.46)',
					800: 'oklch(48.53% 0.11 118.86)',
					900: 'oklch(43.02% 0.09 120.48)',
					950: 'oklch(29.34% 0.07 121.42)'
				}
			}
		}
	},
	darkMode: 'class',
	plugins: [require('preline/plugin')]
}
