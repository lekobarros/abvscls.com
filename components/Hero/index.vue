<script lang="ts" setup>
import gsap from '@/src/plugins/gsap'
import useGlobalStore from '@/src/store/global'
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

// Components
import TheHeroText from './TheHeroText.vue'
import TheHeroPicture from './TheHeroPicture.vue'
import TheHeroSpinner from './TheHeroSpinner.vue'
import TheHeroContact from './TheHeroContact.vue'

// General State
const globalStore = useGlobalStore()
const { isLoaded } = storeToRefs(globalStore)

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

	tl.heroFadeIn('.c-hero__text-heading', {}, 'start')
	tl.heroFadeIn('.c-hero__text-subtitle', {}, 'start+=0.1')
	tl.heroFadeIn('.c-hero__picture', {}, 'start+=0.05')

	tl.play()
}

const doResetAnimation = (): void => {
	gsap.set('.c-hero__text-heading', { opacity: 0, translateY: '15%', rotate: '1deg' })
	gsap.set('.c-hero__text-subtitle', { opacity: 0, translateY: '15%', rotate: '1deg' })
	gsap.set('.c-hero__picture', { opacity: 0, translateY: '15%', rotate: '3deg' })
}
</script>

<template>
  <div class="section-hero c-container">
    <div class="c-hero">
      <TheHeroText />
      <TheHeroPicture />
      <TheHeroSpinner />
      <TheHeroContact />
    </div>
  </div>
</template>

<style lang="scss">
.section-hero {
  position: relative;
  width: 100%;
  background-color: $color-white;
  color: $color-woodsmoke-default;

  @media screen and (min-width: $breakpoint-screen-lg) {
    padding-bottom: 8rem;
    height: calc(100svh - 6.5rem);
  }

  @media screen and (min-width: $breakpoint-screen-xl) {
    padding-bottom: 6rem;
  }

  @media screen and (min-width: $breakpoint-screen-3xl) {
    padding-bottom: 12rem;
  }
}

.c-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: $breakpoint-screen-lg) {
    display: grid;
    grid-template-rows: repeat(12, minmax(0, 1fr));
    grid-template-columns: repeat(2, 4rem) repeat(10, minmax(0, 1fr));
    gap: 1rem;
    height: 100%;
  }
}
</style>
