import { shallowRef } from 'vue'
import { gsap } from 'gsap'
import { defineStore } from 'pinia'

interface TimelineParams {
  opacity?: number
  translateY?: number
  rotate?: number
  duration?: number
  delay?: number
  stagger?: number
	scale?: number
	translateX?: number | string
}

export const useOrganismHeroStore = defineStore('organismHero', {
	state: () => ({
		tl: shallowRef<gsap.core.Timeline | null>(null),
		isFinished: false
	}),
	actions: {
		createTimeline(): void {
			this.tl = gsap.timeline({
				paused: true,
				onComplete: () => {
					this.isFinished = true
				}
			})
				.addLabel('start', '>') 
		},
		set(el: gsap.TweenTarget, params: gsap.TweenVars): void {
			gsap.set(el, { ...params })
		},
		add(el: gsap.TweenTarget, params: TimelineParams, position?: string): void {
			const config = { opacity: 1, translateY: 0, rotate: 0, duration: 0.8, delay: 0.1, stagger: 0.1 }
			if (this.tl) {
				this.tl.to(
					el,
					{
						opacity: config.opacity,
						translateY: config.translateY,
						rotate: config.rotate,
						duration: config.duration,
						delay: config.delay,
						ease: 'Power2.easeOut',
						stagger: config.stagger,
						...params
					},
					position
				)
			}
		},
		doPlayTimeline(): void {
			(this.tl as gsap.core.Timeline).play()
		}
	}
})

export default useOrganismHeroStore
