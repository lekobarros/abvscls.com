<script setup>
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref, computed, onMounted } from 'vue'
import { chunk } from 'lodash'
import horizontalItems from '@/src/data/horizontalSingle'

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
</script>

<template>
  <div class="section horizontal-items" data-scroll-section>
    <div class="c-container">
      <div class="horizontal-single__row" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <div class="horizontal-single__col" v-for="({ backgroundImage, video }, key) in getItemsPath[0]" :key="`horizontal-single-row-1-item-${key}`">
          <div class="horizontal-single__item">
            <div class="horizontal-single__project" :style="{ ...(backgroundImage ? backgroundImage : null) }">
              <video :src="video" autoplay loop muted playsinline v-if="video" />
            </div>
          </div>
        </div>
      </div>
      <div class="horizontal-single__row" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
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

<style lang="scss">
@media screen and (min-width: $breakpoint-screen-xl) {
  .horizontal-items {
    --section-padding: clamp(5em, 21vh, 12em);
    --gap-padding: clamp(1.5em, 4vw, 2.5em);

    position: relative;
    display: block;
    // padding-top: calc(var(--section-padding) * 0.75);
    // padding-bottom: calc(var(--section-padding) - 2.5vw);
    overflow: hidden;

    .horizontal-single__row {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: 120vw;
      left: -10vw;
      will-change: transform;
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
