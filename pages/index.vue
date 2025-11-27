<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import Lenis from '@studio-freight/lenis'
// import LocomotiveScroll from 'locomotive-scroll'

// Components
import TheOrganismHero from '@/components/Organisms/Section/Hero/index.vue'
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
    <TheOrganismHero />
		<TheProject />
	</main>
</template>

<style lang="scss">
.c-main {
	position: relative;
	padding-top: 6.5rem;
	width: 100vw;
}
</style>