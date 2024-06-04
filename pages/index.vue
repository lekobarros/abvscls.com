<script lang="ts" setup>
// import useGlobalAnimation from './../src/composable/useGlobalAnimation'
import { ref, onMounted } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import Lenis from '@studio-freight/lenis'
import LocomotiveScroll from 'locomotive-scroll'

// Components
import TheOrganismHero from '@/components/Organisms/Section/Hero/index.vue'
import TheProject from '@/components/Project/index.vue'
import OrganismSectionHorizontalScroll from '@/components/Organisms/Section/HorizontalScroll/index.vue'

const root = ref<HTMLElement | null>(null)
const locomotive = ref(null)
const breakpoints = useBreakpoints(breakpointsTailwind)

// useGlobalAnimation()

// const onResizeDisplay = () => {
// 	console.log(locomotive.value)
// 	const isMobile = breakpoints.smallerOrEqual('lg').value
// 	console.log('isMobile', isMobile)
// 	if (isMobile) locomotive.value.destroy()
// 	else locomotive.value.init()
// }

onMounted(() => {
	// window.addEventListener('resize', onResizeDisplay)

	const lenis = new Lenis()

	locomotive.value = new LocomotiveScroll({
		el: root.value,
		smooth: true
	})

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)

	// onResizeDisplay()
})

useHead({
	title: 'Alex Vasconcelos — Front-end Developer',
	titleTemplate: '%s'
})
</script>

<template>
  <main class="c-main" ref="root" data-scroll-container>
    <TheOrganismHero />
    <OrganismSectionHorizontalScroll />
  </main>
</template>

<style lang="scss">
.c-main {
  position: relative;
  padding-top: 6.5rem;
  width: 100vw;
  will-change: transform;

  @media screen and (min-width: $breakpoint-screen-lg) {
    position: fixed;
  }
}
</style>
