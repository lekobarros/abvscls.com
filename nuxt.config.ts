// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: false },
	app: {
		head: {
			title: 'Alex Vasconcelos — Front-end Developer',
			titleTemplate: '%s | Alex Vasconcelos',
			meta: [
				{
					name: 'description',
					content: 'Expert Front-end Engineer in Vue.js and React, crafting captivating and responsive Single Page Applications (SPAs) with fluid animations.'
				},
				{
					name: 'theme-color',
					content: '#F8E098'
				}
			],
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			htmlAttrs: {
				lang: 'en'
			}
		}
	},
	css: ['~/assets/css/main.css', '@/src/scss/main.scss'],
	// Nuxt Modules
	modules: [  'nuxt-icons', '@vueuse/nuxt','@nuxtjs/fontaine', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/eslint-module', '@zadigetvoltaire/nuxt-gtm'],
	fontMetrics: {
		fonts: ['Satoshi']
	},
	gtm: {
		id: process.env.GTM_TAG as string
	},
	image: {
		screens: {
			'xs': 320,
			'sm': 640,
			'md': 768,
			'lg': 1024,
			'xl': 1280,
			'2xl': 1536,
			'3xl': 1800,
			'4xl': 2100,
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @import "@/src/scss/_variables.scss";
            @import "@/src/scss/_colors.scss";
          `
				}
			}
		}
	}
})