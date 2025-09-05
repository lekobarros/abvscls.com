import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
import { GSDevTools } from 'gsap/GSDevTools'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin(nuxtApp => {
	if (import.meta.client) {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

		nuxtApp.provide('gsap', gsap)
		nuxtApp.provide('ScrollTrigger', ScrollTrigger)
		nuxtApp.provide('ScrollSmoother', ScrollSmoother)
		nuxtApp.provide('SplitText', SplitText)
	}

	if (import.meta.client && import.meta.env.DEV && import.meta.env.GSDEVTOOL === 'true') {
		gsap.registerPlugin(GSDevTools)
		GSDevTools.create()
	}
})
