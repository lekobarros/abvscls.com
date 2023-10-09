<script lang="ts" setup>
import { GSAPTimeline } from 'gsap'
import gsap from '@/src/plugins/gsap'
import useGlobalStore from '@/src/store/global'
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { PosTrackMouse } from '@/src/types/Hero'

import lerp from '@/src/utils/lerp'

// General State
const globalStore = useGlobalStore()
const { isLoaded } = storeToRefs(globalStore)
const root = ref<HTMLElement | null>(null)
const animationFinished = ref<boolean>(false)

const props = defineProps({
	posTrackMouse: Object
})

//
watch(isLoaded, newVal => {
	if (newVal) createHeroAnimation()
})

watch(
	() => props.posTrackMouse,
	newVal => {
		if (animationFinished.value) return

		const queryEl = gsap.utils.selector(root.value)
		const children: HTMLElement[] = queryEl('div') as HTMLDivElement[]

		const boundingRectParent = root.value?.getBoundingClientRect()
		const { innerWidth, innerHeight } = window
		const { clientX, clientY }: { clientX: number; clientY: number } = newVal

		children.forEach(child => {
			let x = clientX
			let y = clientY

			if (boundingRectParent) {
				const perX = (100 * clientX) / innerWidth || 0
				const perY = (100 * clientY) / innerHeight || 0

				x = lerp(boundingRectParent?.left, perX, 1.25)
				y = lerp(boundingRectParent?.top, perY, 1.25)
			}

			// Kill Animation
			gsap.killTweensOf(child)

			// Animate Again
			gsap.to(child, { x, y, ease: 'bounce.easeOut', duration: 0.6 })
		})
	}
)

// Lifecycle
onMounted((): void => {
	if (!globalStore.isLoaded) doResetAnimation()
})

// Methods
const createHeroAnimation = (): void => {
	const tl: GSAPTimeline = gsap.timeline({ paused: !0 })
	tl.addLabel('start', '>')

	// Elements
	const queryEl = gsap.utils.selector(root.value)
	const children: HTMLElement[] = queryEl('div') as HTMLDivElement[]

	//
	gsap.to(children, {
		startAt: {
			opacity: 0,
			scale: 0.75
		},
		opacity: 1,
		scale: 1,
		ease: 'Expo.sineInOut',
		duration: 0.8,
		onComplete: () => {
			animationFinished.value = true
		}
	})
}

const doResetAnimation = (): void => {
	gsap.set('.hero-radial-circle', { opacity: 0, translateY: '15%', rotate: '3deg' })
}
</script>

<template>
  <div class="c-hero_radial-wrap" ref="root">
    <div class="hero-radial-circle hero-radial-circle-first" />
    <div class="hero-radial-circle hero-radial-circle-second" />
  </div>
</template>

<style lang="scss">
.c-hero_radial-wrap {
  display: none;

  @media (min-width: $breakpoint-screen-lg) {
    display: inline;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    visibility: visible;
  }
}

.hero-radial-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 515px;
  height: 515px;
  filter: blur(60px);
  border-radius: 50%;
	background: radial-gradient(farthest-corner at center center, #f2c94c 0%, #fdf7e4 100%);
}

.hero-radial-circle-first {
  // background: radial-gradient(farthest-corner at center center, #f2c94c 0%, #fdf7e4 100%);
}

.hero-radial-circle-second {
  bottom: -215px;
  left: -215px;
  background: radial-gradient(farthest-corner at center center, rgba(101, 83, 67, 0.5) 0%, rgba(101, 83, 67, 0.5) 25%, rgba(155, 185, 168, 1) 100%);
}
</style>
