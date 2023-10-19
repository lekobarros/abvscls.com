<template>
  <section class="relative" ref="root">
    <!-- Header -->
    <header class="c-container mb-6">
      <h2 class="text-woodsmoke-500 font-medium text-2xl capitalize">Featured Works</h2>
    </header>

    <!-- Featured Work Items -->
    <div class="relative z-10" @mouseenter="onImagesToggleOpacity(1)" @mouseleave="onImagesToggleOpacity(0)">
      <ProjectItem
        @onProjectEnter="setCurrentProjectView"
        v-for="(item, key) in projects"
        :key="`c-project-${key}`"
        :id="key"
        :title="item.website"
        :subtitle="item.subtitle || null"
        :description="item.short_description"
        :date="item.years"
        :url="item.url"
        :color="item.color"
        @mousemove="onMoveMouse"
      />
    </div>

    <!-- Featured Work Images -->
    <div class="lg:absolute lg:inset-0 hidden lg:flex lg:pointer-events-none">
      <div class="c-container">
        <div class="c-works-grid">
          <div class="c-works-grid_wrap">
            <!-- Work Spotlight -->
            <div class="c-works-spotlight" ref="spotlight">
              <div class="c-works-spotlight_images" ref="spotlightImage">
                <!-- Work Images -->
                <div class="c-works-spotlight_image" v-for="(item, key) in projects" :key="`c-project-${key}`">
                  <NuxtImg :src="item.frame" :alt="`Project ${key}`" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import projects from '@/src/data/projects'
import gsap from 'gsap'

// Components
import ProjectItem from './ProjectItem.vue'

// General State
const currentProjectView = ref<null | number>(0)

// Methods
const setCurrentProjectView = (id: number): void => {
	currentProjectView.value = id
}

// On Mouse increase X %
const root = ref<null | HTMLElement>(null)
const spotlight = ref<null | HTMLElement>(null)
const spotlightImage = ref<null | HTMLElement>(null)

watch(currentProjectView, value => {
	const id = currentProjectView.value ?? 0
	const currentId = `#c-project-${id}`

	// Get the width of the viewport
	const header = root.value?.querySelector('header')?.offsetHeight ?? 0 as number
	const elCurrentImage = root.value?.querySelector<HTMLElement>(currentId) as HTMLElement

	if (value !== null) {
		const wrapper = spotlight.value
		const image = spotlightImage.value

		if (wrapper instanceof HTMLElement && image instanceof HTMLElement) {
			const spotlightImageSize = 20 // units in rem
			const top = `${elCurrentImage.offsetTop + header}px`
			const translateY = `-${id * spotlightImageSize}rem`

			// Call Animation
			gsap.killTweensOf([wrapper, image])
			gsap.to(wrapper, { top, duration: 0.3, ease: 'cubic-bezier(0.86, 0, 0.07, 1)' })
			gsap.to(image, { translateY, duration: 0.3, ease: 'cubic-bezier(0.86, 0, 0.07, 1)' })
		}
	}
})

// Methods
const onImagesToggleOpacity = (opacity: number): void => {
	// const elspotlight = spotlight.value
	// if (elspotlight) {
	// 	console.log('inside', opacity)
	// 	gsap.killTweensOf(elspotlight)
	// 	gsap.set(elspotlight, { opacity: 0 })
	// 	gsap.to(elspotlight, {
	// 		opacity,
	// 		top: 0,
	// 		duration: 0.1,
	// 		ease: 'cubic-bezier(0.12, 0, 0.39, 0)',
	// 	})
	// }
}

const onMoveMouse = (event: MouseEvent) => {
	// Get the width of the viewport
	const viewportWidth = window.innerWidth
	const viewportHeight = window.innerHeight

	// Calculate the mouse position within the viewport
	const mouseX = event.clientX
	const mouseY = event.clientX

	// Calculate the position on the X-axis as a value between -1 and 1
	const axisX = (mouseX / viewportWidth) * 2 - 1
	const axisY = (mouseY / viewportHeight) * 2 - 1

	// Ensure the value stays within the range of -1 to 1
	console.log(Math.max(-1, Math.min(1, axisX)))

	// 2rem
	// console.log(positionOnXAxis * 2, 444)

	const wrapper = spotlight.value

	if (wrapper instanceof HTMLElement ) {
		const y = `${axisY * 0.5}rem`
		const x = `${axisX * 1.5}rem`
		console.log(x, y)
		// const spotlightImageSize = 20 // units in rem
		// const top = `${elCurrentImage.offsetTop + header}px`
		// const translateY = `-${id * spotlightImageSize}rem`

		// Call Animation
		// gsap.killTweensOf(wrapper)
		gsap.to(wrapper, { x,  transformOrigin:'0% 100%', duration: 0.3, ease: 'cubic-bezier(0.86, 0, 0.07, 1)' })
		// gsap.to(image, { translateY, duration: 0.3, ease: 'cubic-bezier(0.86, 0, 0.07, 1)' })
	}
}
</script>

<style lang="scss">
.c-works-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  width: 100%;
  height: 100%;
}

.c-works-grid_wrap {
  grid-column: 5 / 9;
  position: relative;
  // overflow: hidden;

  // Screen Extra Large
  @media screen and (min-width: $breakpoint-screen-xl) {
    grid-column: 4 / 9;
  }
}

// Spotlight
.c-works-spotlight {
  position: absolute;
  top: 0%;
  z-index: 10;
  width: 100%;
  height: 20rem;
  // opacity: 0;
  transition: transform 0.15s, top 0.3s, opacity 0.3s;
  border-radius: 0.875rem;
  overflow: hidden;
}

.c-works-spotlight_image {
  width: 100%;
  height: 20rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
