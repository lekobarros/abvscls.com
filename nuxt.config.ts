// https://nuxt.com/docs/4.x/getting-started/configuration
export default defineNuxtConfig({
	// Rendering mode
	ssr: false,

	// Development tools
	devtools: {
		enabled: false,
	},

	// App configuration
	app: {
		head: {
			title: 'Alex Vasconcelos — Front-end Developer',
			titleTemplate: '%s | Alex Vasconcelos',
			meta: [
				{
					name: 'description',
					content: 'Expert Front-end Engineer in Vue.js and React, crafting captivating and responsive Single Page Applications (SPAs) with fluid animations.',
				},
				{
					name: 'theme-color',
					content: '#F8E098',
				},
			],
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			htmlAttrs: {
				lang: 'en',
			},
		},
	},

	// Global CSS files
	css: [ '~/assets/css/main.css', '~/assets/scss/main.scss' ],

	// Nuxt modules
	modules: [
		'@vueuse/nuxt',
		'@nuxtjs/fontaine',
		'@nuxt/image',
		'motion-v/nuxt',
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
	],

	// Fontaine configuration
	fontMetrics: {
		fonts: [ 'Satoshi' ],
	},

	// Nuxt Image configuration
	image: {
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			'2xl': 1536,
			'3xl': 1800,
			'4xl': 2100,
		},
	},

	// PostCSS configuration
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	// Vite configuration
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	},
})