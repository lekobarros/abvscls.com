<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import useOrganismHeroStore from '../composables/useAnimation'
import * as animations from '@@/src/constants/animations'

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
	<div ref="root" :class="computedClassList">
		<nuxt-img 
			src="/img/spinner.svg"
			format="webp"
			width="265"
			height="265"
			alt="spinner circle nonsense words - kill off the average - mediocrity is way boring"
		/>
	</div>
</template>
