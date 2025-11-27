<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import useOrganismHeroStore from './useAnimation'
import * as animations from '@/src/constants/animations'

// General State
const heroStore = useOrganismHeroStore()
const root = ref<HTMLElement | null>(null)

// Computed
const computedClassList = computed(() => {
	return [
		'c-hero__spinner',
		{
			'c-hero__spinner--rotate': heroStore.isFinished
		}
	]
})

// Hooks
onMounted((): void => {
	const { value: el } = root as { value: HTMLElement | null }
	const { tl } = heroStore

	if (!el || !tl) return console.warn('Element or timeline not found')
	else if (heroStore.isFinished) return

	heroStore.set(el, { opacity: 0, translateY: '15%', rotate: '3deg' })
	heroStore.add(el, { delay: 0.3 }, animations.HERO_START)
})
</script>

<template>
  <div :class="computedClassList" ref="root" >
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
