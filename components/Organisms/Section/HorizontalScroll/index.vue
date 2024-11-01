<script setup>
import { inject, ref, useTemplateRef, onMounted, onUpdated } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { chunk } from 'lodash'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Components
import horizontalItems from '@/src/data/horizontalSingle'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isGreaterOrEqualLarge = breakpoints.greaterOrEqual('lg')
console.log(isGreaterOrEqualLarge.value)
// const laptop = breakpoints.between('laptop', 'desktop')
// Data
const root = useTemplateRef('root')
const pinned = useTemplateRef('pinned')
const horizontalRows = useTemplateRef('singleRow')
const globalRoot = inject('globalRoot')
const items = ref([])
// eslint-disable-next-line no-undef
const img = useImage()

// Chunk the array into smaller arrays
const chunkedPaths = chunk(horizontalItems, horizontalItems.length / 2)

// Mapping and generating CSS variables for each chunk
const generateCSSPath = path => {
	const imgUrl = img(path, { format: 'webp' })
	return { backgroundImage: `url('${imgUrl}')` }
}

const getItemsPath = chunkedPaths.map(chunk => {
	return chunk.map(({ backgroundImage, video }) => {
		if (backgroundImage) return { backgroundImage: generateCSSPath(backgroundImage) }
		else if (video) return { video }
	})
})

const createHorizontalRow = (elementss, index, trigger) => {
	const elements = pinned.value.querySelectorAll('.horizontal-single__row')
	// const elPinned = pinned.value.querySelector('.horizontal-items')
	// const start = trigger.getBoundingClientRect().top + 128 * (index + 1)
	// const cols = elements[0].querySelectorAll('.horizontal-single__col')
	console.log(root.value)
	const tl = gsap
		.timeline({
			scrollTrigger: {
				trigger: root.value,
				start: () => '750px 80%',
				end: '+=200% 30%',
				scrub: 4,
				pin: true,
				pinSpacing: true,
				markers: true
			}
		})
		.addLabel('start')

    	// const tlOpacity = gsap
	// 	.timeline({
	// 		scrollTrigger: {
	// 			id: 'opacity',
	// 			trigger: trigger,
	// 			start: () => 'top bottom',
	// 			end: '15% 95%',
	// 			scrub: 4,
	// 			markers: true
	// 		}
	// 	})
	// 	.addLabel('start')

	// tl.to(
	// 	elements[0],
	// 	{
	// 		x: '-20vw',
	// 		duration: 1
	// 	},
	// 	'start'
	// )

	tl.to(
		elements,
		{
			x: (index) => index % 2 ? '-22vw' : '25vw',
			duration: 1
		},
		'start'
	)

	// cols.forEach(col => {
	// 	tlOpacity.fromTo(
	// 		col,
	// 		{
	// 			autoAlpha: 0
	// 		},
	// 		{
	// 			autoAlpha: 1,
	// 			duration: 0.45,
	// 			stagger: 0.1
	// 		},
	// 		'start'
	// 	)
	// })
}

onMounted(() => {
	const trigger = root.value
	// const sections = document.querySelectorAll('.horizontal-single__row')

	if (isGreaterOrEqualLarge.value) createHorizontalRow(null, null, trigger, '128px top')
})

onUpdated(() => {
	ScrollTrigger.refresh()
	// .kill
})
</script>

<template>
  <div ref="root">
    <div class="section horizontal-items" ref="pinned">
      <div class="horizontal-single__row" ref="items">
        <div class="horizontal-single__col" v-for="({ backgroundImage, video }, key) in getItemsPath[0]" :key="`horizontal-single-row-1-item-${key}`">
          <div class="horizontal-single__item">
            <div class="horizontal-single__project" :style="{ ...(backgroundImage ? backgroundImage : null) }">
              <video :src="video" autoplay loop muted playsinline v-if="video" />
            </div>
          </div>
        </div>
      </div>
      <div class="horizontal-single__row" ref="items">
        <div class="horizontal-single__col" v-for="({ backgroundImage, video }, key) in getItemsPath[1]" :key="`horizontal-single-row-1-item-${key}`">
          <div class="horizontal-single__item">
            <div class="horizontal-single__project" :style="{ ...(backgroundImage ? backgroundImage : null) }">
              <video :src="video" autoplay loop muted playsinline v-if="video" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: $breakpoint-screen-xl) {
  .horizontal-items {
    position: relative;
    --section-padding: clamp(5em, 21vh, 12em);
    --gap-padding: clamp(1.5em, 4vw, 2.5em);

    .horizontal-single__row {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: 120vw;
      will-change: transform;

      &:first-child {
        left: -25vw;
      }

      &:last-child {
        left: 0;
      }
    }

    .horizontal-single__col {
      width: 25%;
      height: 500px;
      padding: calc(var(--gap-padding) / 2);
      padding: 1.25vw;
      will-change: transform;
    }

    .horizontal-single__item {
      position: relative;

      &::before {
        content: '';
        display: block;
        padding-top: 75%;
      }

      & > .horizontal-single__project {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 16px;

        & > video {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
