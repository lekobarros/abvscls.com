<script lang="ts" setup>
import Lenis from '@studio-freight/lenis'
import { onMounted } from 'vue'

// Components
import TheHero from '@/components/Hero/index.vue'
import TheProject from '@/components/Project/index.vue'

// Off
onMounted(() => {
	const lenis = new Lenis()

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)
})

useHead({
	title: 'Alex Vasconcelos — Front-end Developer',
	titleTemplate: '%s'
})
</script>

<template>
  <main class="c-main">
    <TheHero />
		<TheProject />
	</main>
</template>

<style lang="scss">
.c-main {
	padding-top: 6.5rem;
}
</style>