<script lang="ts" setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Components
import TheOrganismHero from '@/components/Organisms/Section/Hero/index.vue'
import TheProject from '@/components/Project/index.vue'
import OrganismSectionHorizontalScroll from '@/components/Organisms/Section/HorizontalScroll/index.vue'
import OrganismSectionHeading from '@/components/Organisms/Section/Heading/index.vue'

const root = ref<HTMLElement | null>(null)
const locoScroll = ref(null)

provide('locoScroll', { locoScroll })

onMounted(() => {
	console.log('Root element:', root.value) // Debug log

	locoScroll.value = new LocomotiveScroll({
		el: root.value,
		smooth: true
	})

	console.log('LocomotiveScroll instance:', locoScroll.value) // Debug log

	locoScroll.value.on('scroll', () => {
		console.log('Scroll event triggered') // Debug log
		ScrollTrigger.update()
	})

	ScrollTrigger.scrollerProxy(root.value, {
		scrollTop(value) {
	  return arguments.length
				? locoScroll.value.scrollTo(value, 0, 0)
				: locoScroll.value.scroll.instance.scroll.y
		},
		getBoundingClientRect() {
	  return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
	  }
		},
		pinType: root.value.style.transform ? 'transform' : 'fixed',
	})

	ScrollTrigger.addEventListener('refresh', () => {
		console.log('ScrollTrigger refresh event') // Debug log
		locoScroll.value.update()
	})

	ScrollTrigger.refresh()
})

onUnmounted(() => {
	locoScroll.value.destroy()
})
</script>

<template>
  <main class="c-main" ref="root">
	<TheOrganismHero />
	<OrganismSectionHorizontalScroll />
	<OrganismSectionHeading />
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