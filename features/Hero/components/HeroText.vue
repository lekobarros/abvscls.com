<script lang="ts" setup>
import { onMounted, ref } from 'vue'

// Composables
import useHeroAnimations from '../composables/useHeroAnimations'

// General State
const heroAnimations = useHeroAnimations()
const root = ref<HTMLElement | null>(null)

// Hooks
onMounted((): void => {
	const { value: el } = root as { value: HTMLElement | null }

	if (!el) return

	const x = el.querySelector('div')
	heroAnimations.set(x, { opacity: 0, translateY: '15%', rotate: '3deg' })
	heroAnimations.add(x, { stagger: 0 })
})
</script>

<template>
	<div ref="root" class="c-hero__text space-y-4 md:space-y-0">
		<div class="flex flex-col gap-4 md:gap-6">
			<h1 class="c-hero__text-heading">
				A Front-end Engineer <span class="md:block">based BH, BR.</span>
			</h1>
			<p class="c-hero__text-subtitle">
				Developing and specialize in creating visually appealing and highly functional websites and Single Page Applications (SPAs).
			</p>
		</div>
	</div>
</template>
