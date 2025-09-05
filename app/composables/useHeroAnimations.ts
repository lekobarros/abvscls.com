import { useNuxtApp } from '#app'
import { ref } from 'vue'

let timeline: gsap.core.Timeline | null = null

const useHeroAnimations = () => {
	const nuxtApp = useNuxtApp()
	const gsap = nuxtApp.$gsap as gsap

	const isFinished = ref(false)

	const createTimeline = (): void => {
		timeline = gsap.timeline({
			paused: true,
			onComplete: () => {
				isFinished.value = true
			}
		})
	}

	const start = (): void => {
		if (timeline) { 
			console.log('Starting hero timeline')
			timeline.play()
		}
	}

	const add = ( el: gsap.TweenTarget, params: TimelineParams, position?: string) : void => {
		const config = { opacity: 1, translateY: 0, rotate: 0, duration: 0.6, delay: 0.1, stagger: 0.1 }

		if (timeline) {
			timeline.to(
				el,
				{
					opacity: config.opacity,
					translateY: config.translateY,
					rotate: config.rotate,
					duration: config.duration,
					delay: config.delay,
					ease: 'Power3.easeOut',
					stagger: config.stagger,
					...params
				},
				position
			)
		}
	}

	const set = (target: string | HTMLElement[], vars: gsap.TweenVars): void => {
		gsap.set(target, vars)
	}

	return {
		timeline,
		start,
		createTimeline,
		isFinished,
		set,
		add
	}
}

export default useHeroAnimations
