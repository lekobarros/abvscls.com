<script lang="ts" setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'

// Components
import TheOrganismHero from '@/components/Organisms/Section/Hero/index.vue'
import TheProject from '@/components/Project/index.vue'
import OrganismSectionHorizontalScroll from '@/components/Organisms/Section/HorizontalScroll/index.vue'
import OrganismSectionHeading from '@/components/Organisms/Section/Heading/index.vue'

const root = ref<HTMLElement | null>(null)
const lenis = ref<any>(null)

// Provide
provide('globalRoot', root)

// onMounted(() => {
// 	gsap.registerPlugin(ScrollTrigger)

// 	lenis.value = new Lenis({
// 		duration: 0.5, // Reduced duration for faster scrolling
// 		easing: (t) => t, // Linear easing for smoother scrolling
// 		infinite: false,
// 	})

// 	lenis.value.on('scroll', () => {
// 		ScrollTrigger.update()
// 	})

// 	function raf(time) {
// 		lenis.value.raf(time)
// 		requestAnimationFrame(raf)
// 	}

// 	requestAnimationFrame(raf)

// 	ScrollTrigger.scrollerProxy(document.body, {
// 		scrollTop(value) {
// 			if (arguments.length) {
// 				lenis.value.scrollTo(value, { immediate: true })
// 			}
// 			return lenis.value.scroll
// 		},
// 		getBoundingClientRect() {
// 			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
// 		}
// 	})

// 	ScrollTrigger.defaults({ scroller: document.body })
// 	ScrollTrigger.refresh()
// })

// onUnmounted(() => {
// 	if (lenis.value) {
// 		gsap.ticker.remove(lenis.value.raf)
// 		lenis.value.destroy()
// 	}
// })
</script>

<template>
  <main class="c-main" ref="root">
    <TheOrganismHero />
    <OrganismSectionHorizontalScroll />
  <!-- <OrganismSectionHeading /> -->
    <TheProject />
  </main>
</template>

<style lang="scss">
.c-main {
  position: relative;
  padding-top: 6.5rem;
  width: 100vw;
  // will-change: transform;

  @media screen and (min-width: $breakpoint-screen-lg) {
    // position: fixed;
  }
}
</style>
