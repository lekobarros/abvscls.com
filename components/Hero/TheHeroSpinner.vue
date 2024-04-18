<script lang="ts" setup>
import gsap from '@/src/plugins/gsap'
import useGlobalStore from '@/src/store/global'
import { computed, ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

// General State
const globalStore = useGlobalStore()
const { isLoaded } = storeToRefs(globalStore)
const root = ref<HTMLElement | null>(null)

const computedClassList = computed(() => {
	return [
		'c-hero__spinner',
		{
			'c-hero__spinner--rotate': globalStore.isLoaded
		}
	]
})

watch(isLoaded, newVal => {
	if (newVal) createHeroAnimation()
})

onMounted((): void => {
	if (!globalStore.isLoaded) doResetAnimation()
})

// Methods
const createHeroAnimation = (): void => {
	const tl = gsap.timeline({ paused: !0 })
	const el = root.value

	// Start Timeline
	tl.addLabel('start', '>')
	tl.heroFadeIn(el, {}, 'start+=0.05')

	tl.play()
}

const doResetAnimation = (): void => {
	const el = root.value

	gsap.set(el, { opacity: 0, translateY: '15%', rotate: '3deg' })
}
</script>

<template>
  <div :class="computedClassList" ref="root">
    <NuxtImg src="/img/spinner.svg" format="webp" width="265" height="265" alt="spinner circle nonsense words - kill off the average - mediocrity is way boring" />
  </div>
</template>

<style lang="scss">
.c-hero__spinner {
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  visibility: hidden;

  @media screen and (min-width: $breakpoint-screen-lg) {
    visibility: visible;

    &--rotate {
      img {
        animation: rotate 16s linear 0s infinite;
      }
    }
  }
}
</style>
