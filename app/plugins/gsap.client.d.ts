import type { gsap as GSAP } from 'gsap'
import type { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ScrollSmoother } from 'gsap/ScrollSmoother'
import type { SplitText } from 'gsap/SplitText'

declare module '#app' {
	interface NuxtApp {
		$gsap: typeof GSAP
		$ScrollTrigger: typeof ScrollTrigger
		$ScrollSmoother: typeof ScrollSmoother
		$SplitText: typeof SplitText
	}
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$gsap: typeof GSAP
		$ScrollTrigger: typeof ScrollTrigger
		$ScrollSmoother: typeof ScrollSmoother
		$SplitText: typeof SplitText
	}
}

export {}
