import { ref } from 'vue'
import gsap from 'gsap'

export default function useHeroAnimations() {
	const timeline = ref<gsap.core.Timeline | null>(null)

	const createTimeline = () => {
		timeline.value = gsap.timeline()
	}

	const set = (el: gsap.TweenTarget, params: gsap.TweenVars): void => {
		if (timeline.value) {
			gsap.set(el, params)
		}
	}

	const add = (el: gsap.TweenTarget, params: gsap.TweenVars, position?: string): void => {
		if (timeline.value) {
			timeline.value.to(el, params, position)
		}
	}

	return {
		timeline,
		createTimeline,
		set,
		add,
	}
}
