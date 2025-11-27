<script lang="ts" setup>
import { useNuxtApp } from '#app'
import { onMounted, ref } from 'vue'

// Composables
import useHeroAnimations from '../composables/useHeroAnimations'

// General State
const nuxtApp = useNuxtApp()
const splitText = nuxtApp.$SplitText
const heroAnimations = useHeroAnimations()
const root = ref<HTMLElement | null>(null)

// Hooks
onMounted((): void => {
	const { value: el } = root as { value: HTMLElement | null }

	if (!el) return console.warn('Element or timeline not found')

	const elTextFollow = el.querySelector('.c-hero__contact-text span') as HTMLElement
	const elTextContactLine = el.querySelector('.c-hero__contact-line') as HTMLElement
	const split = splitText.create(elTextFollow, { type: 'chars' })

	heroAnimations.set('.c-hero__contact-rotate', { opacity: 0, rotate: '-80deg' })
	heroAnimations.set(split.chars, { opacity: 0, translateX: 0, rotate: '-3deg' })
	heroAnimations.set(elTextContactLine, { opacity: 0, width: 0 })
})
</script>

<template>
	<div ref="root" class="c-hero__contact">
		<div class="c-hero__contact-text">
			<span>Contact Me</span>
		</div>
		<div class="c-hero__contact-line" />
	</div>
</template>

<style lang="scss">
.c-hero__contact {
  position: relative;
  z-index: 1;
}
</style>
