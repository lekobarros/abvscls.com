import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', {
	state: () => ({
		isLoaded: false
	}),
	actions: {
		setLoad(state: boolean) {
			this.isLoaded = state
		}
	}
})

export default useGlobalStore
