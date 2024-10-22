<script lang="ts" setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'

import Lenis from 'lenis'

// Components
import TheOrganismHero from '@/components/Organisms/Section/Hero/index.vue'
import TheProject from '@/components/Project/index.vue'
import OrganismSectionHorizontalScroll from '@/components/Organisms/Section/HorizontalScroll/index.vue'
import OrganismSectionHeading from '@/components/Organisms/Section/Heading/index.vue'

const root = ref<HTMLElement | null>(null)
const lenis = ref<any>(null)

// Provide
provide('globalRoot', root)

onMounted(() => {
	lenis.value = new Lenis()

	lenis.value.on('scroll', e => {
		// console.log(e)
	})

	function raf(time) {
		lenis.value.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)
})

onUnmounted(() => {
	if (lenis.value) lenis.value.destroy()
})
</script>

<template>
  <main class="c-main" ref="root">
    <TheOrganismHero />
    <OrganismSectionHorizontalScroll />
    <OrganismSectionHeading />
    <TheProject />
  </main>
</template>

<style lang="scss">
.c-main {
  position: relative;
  padding-top: 6.5rem;
  width: 100vw;
  will-change: transform;

  @media screen and (min-width: $breakpoint-screen-lg) {
    // position: fixed;
  }
}
</style>
