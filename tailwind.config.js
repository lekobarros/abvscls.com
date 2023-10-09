/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		colors: {
			'athens-gray': {
				DEFAULT: '#EBEBEC',
				50: '#F5F5F6',
				100: '#EBEBEC',
				200: '#CECED1',
				300: '#B1B1B5',
				400: '#95959A',
				500: '#78787E',
				600: '#5D5D62',
				700: '#414145',
				800: '#262628',
				900: '#0B0B0B',
				950: '#000000'
			},
			'woodsmoke': {
				DEFAULT: '#161618',
				50: '#6E6E78',
				100: '#64646D',
				200: '#515158',
				300: '#3D3D43',
				400: '#2A2A2D',
				500: '#161618',
				600: '#141415',
				700: '#111113',
				800: '#0F0F10',
				900: '#0C0C0D',
				950: '#0B0B0C'
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {},
	},
	plugins: [],
}

