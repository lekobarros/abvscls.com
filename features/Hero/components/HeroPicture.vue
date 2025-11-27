<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import * as animations from '@/src/constants/animations'

// Composables
import useHeroAnimations from '../composables/useHeroAnimations'

// General State
const heroAnimations = useHeroAnimations()
const root = ref<HTMLElement | null>(null)

// Hooks
onMounted((): void => {
	const { value: el } = root as { value: HTMLElement | null }

	if (!el) return

	heroAnimations.set(el, { opacity: 0, translateY: '15%', rotate: '3deg' })
	heroAnimations.add(el, {}, animations.HERO_START)
})
</script>

<template>
	<div ref="root" class="c-hero__picture">
		<nuxt-picture 
			format="webp"
			src="/img/hero-abvscls.jpg" 
			:img-attrs="{
				alt: 'Alex Vasconcelos standing in front of a large screen'
			}"
			width="3420"
			height="2013"
			sizes="100vw sm:360px md:1859px lg:2816px xl:3420px"
		/>
	</div>
</template>
