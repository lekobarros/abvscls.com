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
	modules: ['@nuxtjs/fontaine', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/eslint-module', '@zadigetvoltaire/nuxt-gtm'],
	fontMetrics: {
		fonts: ['Satoshi']
	},
	gtm: {
		id: process.env.GTM_TAG as string,
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
	},
	nitro: {
		prerender: {
			routes: [
				'/_ipx/s_1536x880/assets/images/hero_abvscls.jpg',
				'/_ipx/s_1x1/assets/images/hero_abvscls.jpg',
				'/_ipx/s_2x2/assets/images/hero_abvscls.jpg', 
				'/_ipx/s_595x341/assets/images/hero_abvscls.jpg',
				'/_ipx/s_768x440/assets/images/hero_abvscls.jpg',
				'/_ipx/s_1190x682/assets/images/hero_abvscls.jpg',
				'/_ipx/s_1536x880/assets/images/hero_abvscls.jpg',
				'_ipx/q_50&blur_3&s_10x10/assets/images/hero_abvscls.jpg'
			]
		}
	}
})
