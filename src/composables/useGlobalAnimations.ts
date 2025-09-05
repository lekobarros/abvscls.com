import { onMounted, onUnmounted, ref } from 'vue'
import { useNuxtApp } from '#app'
import { useScrollStore } from '@/src/stores/useScrollStore'

interface ScrollSmootherInstance {
  kill: () => void
  scrollTo: (target: string | number | Element, options?: any) => void
  refresh: () => void
}

// Ref global singleton
const smoother = ref<ScrollSmootherInstance | null>(null)

const useGlobalAnimations = () => {
	const nuxtApp = useNuxtApp()
	const scrollStore = useScrollStore()

	onMounted(() => {
		const gsap = nuxtApp.$gsap
		const ScrollSmoother = nuxtApp.$ScrollSmoother as any

		if (gsap && ScrollSmoother && typeof ScrollSmoother.create === 'function') {
			if (!smoother.value) {
				smoother.value = ScrollSmoother.create({
					wrapper: '#__nuxt',
					content: '#content',
					smooth: 1.2,
					effects: true
				})

				scrollStore.setSmoother(smoother.value)
			}
		}
	})

	onUnmounted(() => {
		if (smoother.value) {
			smoother.value.kill()
			smoother.value = null
			scrollStore.clearSmoother()
		}
	})

	return { smoother }
}

export default useGlobalAnimations