import { onMounted, onUnmounted, ref } from 'vue'
import { useNuxtApp } from '#app'

interface ScrollSmootherInstance {
	kill: () => void
	scrollTo: (target: string | number | Element, options?: any) => void
	refresh: () => void
}

const smoother = ref<ScrollSmootherInstance | null>(null)

const useGlobalAnimations = () => {
	const nuxtApp = useNuxtApp()

	onMounted(() => {
		const gsap = nuxtApp.$gsap
		const ScrollSmoother = nuxtApp.$ScrollSmoother
		const ScrollTrigger = nuxtApp.$ScrollTrigger

		if (!gsap || !ScrollSmoother || !ScrollTrigger) {
			console.warn('GSAP, ScrollSmoother, or ScrollTrigger not available')
			return
		}

		try {
			// Initialize ScrollSmoother
			smoother.value = ScrollSmoother.create({
				wrapper: '#smooth-wrapper',
				content: '#smooth-content',
				smooth: 1.2,
				effects: true,
				smoothTouch: 0.1,
				normalizeScroll: true
			}) as ScrollSmootherInstance

			console.log('ScrollSmoother initialized successfully')
		} catch (error) {
			console.error('Error initializing ScrollSmoother:', error)
		}
	})

	onUnmounted(() => {
		if (smoother.value) {
			smoother.value.kill()
			smoother.value = null
		}
	})

	return { smoother }
}

export default useGlobalAnimations
