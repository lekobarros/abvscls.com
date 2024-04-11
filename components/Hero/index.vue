<script lang="ts" setup>
import gsap from '@/src/plugins/gsap'
import useGlobalStore from '@/src/store/global'
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

interface PosTrackMouse {
  clientX: number
  clientY: number
}

// Components
import TheHeroText from './TheHeroText.vue'
import TheHeroFigure from './TheHeroFigure.vue'
import TheHeroCircle from './TheHeroCircle.vue'
import TheHeroContact from './TheHeroContact.vue'

// General State
const globalStore = useGlobalStore()
const { isLoaded } = storeToRefs(globalStore)
const posTrackMouse = ref<PosTrackMouse>({ clientX: 0, clientY: 0 })

watch(isLoaded, newVal => {
	if (newVal) createHeroAnimation()
})

onMounted((): void => {
	if (!globalStore.isLoaded) doResetAnimation()
})

// Methods
const createHeroAnimation = (): void => {
	const tl = gsap.timeline({ paused: !0, onComplete: () => globalStore.setLoad(true) })
	tl.addLabel('start', '>')

	tl.heroFadeIn('.hero-text-heading', {}, 'start')
	tl.heroFadeIn('.hero-text-subtitle', {}, 'start+=0.1')
	tl.heroFadeIn('.hero-figure', {}, 'start+=0.05')

	tl.play()
}

const doResetAnimation = (): void => {
	gsap.set('.hero-text-heading', { opacity: 0, translateY: '15%', rotate: '1deg' })
	gsap.set('.hero-text-subtitle', { opacity: 0, translateY: '15%', rotate: '1deg' })
	gsap.set('.hero-figure', { opacity: 0, translateY: '15%', rotate: '3deg' })
}
</script>

<template>
  <div class="section-hero" @mousemove="({ clientX, clientY }) => (posTrackMouse = { clientX, clientY })">
    <div class="c-container">
      <div class="flex flex-col justify-between gap-4">
        <div class="c-hero">
          <!-- Hero: Text -->
          <TheHeroText />
          <!-- Hero: Figure -->
          <TheHeroFigure />
          <!-- Hero: Circles -->
          <TheHeroCircle :posTrackMouse="posTrackMouse" />
        </div>

        <TheHeroContact />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-hero {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  width: 100%;
  min-height: 100svh;
  background-color: $color-white;
  color: $color-woodsmoke-default;
  // overflow: hidden;
}

.c-hero {
  position: relative;

  // Screen Under Large
  @media screen and (max-width: $breakpoint-screen-lg) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1.5rem;
  }

  // Screen Larger
  @media screen and (min-width: $breakpoint-screen-lg) {
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
    min-height: 525px;
  }
}
</style>
