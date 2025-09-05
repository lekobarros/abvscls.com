import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default defineNuxtPlugin(nuxtApp => {
	const isClient = import.meta.client || typeof window !== 'undefined'

	if (isClient) {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

		nuxtApp.provide('gsap', gsap)
		nuxtApp.provide('ScrollTrigger', ScrollTrigger)
		nuxtApp.provide('ScrollSmoother', ScrollSmoother)
	}
})
