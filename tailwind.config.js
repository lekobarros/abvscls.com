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
			'cream-can': {
				DEFAULT: '#F2C94C',
				50: '#FEFDF7',
				100: '#FDF7E4',
				200: '#FAEBBE',
				300: '#F8E098',
				400: '#F5D472',
				500: '#F2C94C',
				600: '#EEB918',
				700: '#C0940E',
				800: '#8C6C0A',
				900: '#574306',
				950: '#3D2F04'
			},
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
			'cod-gray': {
				DEFAULT: '#1E1E1E',
				50: '#CBCBCB',
				100: '#C1C1C1',
				200: '#ADADAD',
				300: '#989898',
				400: '#848484',
				500: '#707070',
				600: '#5B5B5B',
				700: '#474747',
				800: '#323232',
				900: '#1E1E1E',
				950: '#101010'
			},
			'iron': {
				DEFAULT: '#E7E7E8',
				50: '#FFFFFF',
				100: '#FCFCFC',
				200: '#E7E7E8',
				300: '#CACACD',
				400: '#AEAEB1',
				500: '#919196',
				600: '#75757A',
				700: '#59595D',
				800: '#3E3E41',
				900: '#222224',
				950: '#151516'
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

