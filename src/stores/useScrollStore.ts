import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
	state: () => ({
		smoother: null as any,
	}),

	actions: {
		setSmoother(instance: any) {
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