<script lang="ts" setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'

import LocomotiveScroll from 'locomotive-scroll'
import Lenis from 'lenis'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Components
import TheOrganismHero from '@/components/Organisms/Section/Hero/index.vue'
import TheProject from '@/components/Project/index.vue'
import OrganismSectionHorizontalScroll from '@/components/Organisms/Section/HorizontalScroll/index.vue'
import OrganismSectionHeading from '@/components/Organisms/Section/Heading/index.vue'

const root = ref<HTMLElement | null>(null)
const lenis = ref<any>(null)
const locoScroll = ref<any>(null)

provide('locoScroll', { locoScroll })

// onMounted(() => {
// 	lenis.value = new Lenis()

// 	lenis.value.on('scroll', e => {
// 		console.log(e)
// 	})

// 	function raf(time) {
// 		lenis.value.raf(time)
// 		requestAnimationFrame(raf)
// 	}

// 	requestAnimationFrame(raf)

// 	locoScroll.value = new LocomotiveScroll({
// 		el: root.value,
// 		smooth: true
// 	})

// 	console.log('LocomotiveScroll instance:', locoScroll.value) // Debug log

// 	locoScroll.value.on('scroll', () => {
// 		console.log('Scroll event triggered') // Debug log
// 		ScrollTrigger.update()
// 	})

// 	new ResizeObserver(() => locoScroll.value.update()).observe(
// 		root.value
// 	)

// 	ScrollTrigger.scrollerProxy(root.value, {
// 		scrollTop(value) {
// 			return arguments.length ? locoScroll.value.scrollTo(value, 0, 0) : locoScroll.value.scroll.instance.scroll.y
// 		},
// 		getBoundingClientRect() {
// 			return {
// 				top: 0,
// 				left: 0,
// 				width: window.innerWidth,
// 				height: window.innerHeight
// 			}
// 		},
// 		pinType: root.value.style.transform ? 'transform' : 'fixed'
// 	})

// 	ScrollTrigger.addEventListener('refresh', () => {
// 		console.log('ScrollTrigger refresh event') // Debug log
// 		locoScroll.value.update()
// 	})

// 	ScrollTrigger.refresh()
// })

// onUnmounted(() => {
// 	if (lenis.value) lenis.value.destroy()
// 	if (locoScroll.value) locoScroll.value.destroy()
// })
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
