<script setup>
import { inject, ref, onMounted } from 'vue'
import { chunk } from 'lodash'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Components
import horizontalItems from '@/src/data/horizontalSingle'

// Data
const root = ref(null)
const globalRoot = inject('globalRoot')

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

const createHorizontalRow = (element, index, trigger) => {
	const start = trigger.getBoundingClientRect().top + 128 * (index + 1)
	const end = window.innerHeight + element.getBoundingClientRect().height
	const cols = element.querySelectorAll('.horizontal-single__col')

	const tl = gsap
		.timeline({
			scrollTrigger: {
				trigger: trigger,
				start: `${start}px top`,
				end: `${end}px`,
				scrub: true,
				// pin: true,
				anticipatePin: 1,
				//markers: true,
				// onUpdate: self => {
				// 	console.log(`Section ${index} progress:`, self.progress)
				// }
			}
		}).addLabel('start')
		.to(element, {
			x: index % 2 === 0 ? '-20vw' : '20vw',
			duration: 1
		})

	cols.forEach((col) => {
		tl.fromTo(
			col,
			{
				autoAlpha: 0
			},
			{
				autoAlpha: 1,
				duration: 0.45,
				stagger: 0.1
			},
			'start'
		)
	})
}

onMounted(() => {
	const trigger = globalRoot.value
	const sections = document.querySelectorAll('.horizontal-single__row')

	sections.forEach((section, index) => {
		createHorizontalRow(section, index, trigger, '128px top')
	})
})
</script>

<template>
  <div class="section horizontal-items" ref="root">
    <div class="horizontal-single__row">
      <div class="horizontal-single__col" v-for="({ backgroundImage, video }, key) in getItemsPath[0]" :key="`horizontal-single-row-1-item-${key}`">
        <div class="horizontal-single__item">
          <div class="horizontal-single__project" :style="{ ...(backgroundImage ? backgroundImage : null) }">
            <video :src="video" autoplay loop muted playsinline v-if="video" />
          </div>
        </div>
      </div>
    </div>
    <div class="horizontal-single__row">
      <div class="horizontal-single__col" v-for="({ backgroundImage, video }, key) in getItemsPath[1]" :key="`horizontal-single-row-1-item-${key}`">
        <div class="horizontal-single__item">
          <div class="horizontal-single__project" :style="{ ...(backgroundImage ? backgroundImage : null) }">
            <video :src="video" autoplay loop muted playsinline v-if="video" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: $breakpoint-screen-xl) {
  .horizontal-items {
    --section-padding: clamp(5em, 21vh, 12em);
    --gap-padding: clamp(1.5em, 4vw, 2.5em);
    position: relative;
    display: block;
    overflow: hidden;

    .horizontal-single__row {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: 120vw;
      will-change: transform;

      &:first-child {
        left: 10vw;
      }

      &:last-child {
        left: -20vw;
      }
    }

    .horizontal-single__col {
      width: 25%;
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
