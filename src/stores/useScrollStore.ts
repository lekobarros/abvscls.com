import { defineStore } from 'pinia'

interface SmootherLike {
	scrollTo: (target: string) => void
}

export const useScrollStore = defineStore('scroll', {
	state: () => ({
		smoother: null as SmootherLike | null,
	}),

	actions: {
		setSmoother(instance: SmootherLike) {
			this.smoother = instance
		},

		clearSmoother() {
			this.smoother = null
		},

		scrollTo(target: string) {
			if (this.smoother) this.smoother.scrollTo(target)
		},
	},
})