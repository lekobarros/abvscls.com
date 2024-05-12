<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import useOrganismHeroStore from './useAnimation'
import * as animations from '@/src/constants/animations'

// General State
const heroStore = useOrganismHeroStore()
const root = ref<HTMLElement | null>(null)

// Hooks
onMounted((): void => {
	const { value: el } = root as { value: HTMLElement | null }
	const { tl } = heroStore

	if (!el || !tl) return console.warn('Element or timeline not found')
	else if (heroStore.isFinished) return

	const children = [el.querySelector('.c-hero__text-heading'), el.querySelector('.c-hero__text-subtitle')] as HTMLElement[]
	heroStore.set(children, { opacity: 0, translateY: '15%', rotate: '1deg' })
	heroStore.add(children, { stagger: 0.1 }, animations.HERO_START)
})
</script>

<template>
  <div class="c-hero__text space-y-4 md:space-y-0" ref="root">
    <h1 class="c-hero__text-heading">A Front-end Engineer <span class="md:block">based BH, BR.</span></h1>
    <p class="c-hero__text-subtitle">Developing and specialize in creating visually appealing and highly functional websites and Single Page Applications (SPAs).</p>
  </div>
</template>

<style lang="scss">
.c-hero__text {
  position: relative;
  z-index: 20;

  @media screen and (max-width: $breakpoint-screen-lg) {
    order: 2;
  }

  @media screen and (min-width: $breakpoint-screen-md) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.25rem;
  }

  @media screen and (min-width: $breakpoint-screen-lg) {
    grid-area: 6 / 1 / 10 / 9;
  }

  @media screen and (min-width: $breakpoint-screen-xl) {
    grid-area: 6 / 3 / 12 / 10;
  }

  // .c-hero__text-heading
  &-heading {
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1;

    @media screen and (min-width: $breakpoint-screen-md) {
      font-size: 3rem;
    }

    @media screen and (min-width: $breakpoint-screen-lg) {
      font-size: 3.75rem;
    }

    @media screen and (min-width: $breakpoint-screen-3xl) {
      font-size: 6rem;
    }
  }

  // .c-hero__text-subtitle
  &-subtitle {
    width: 100%;
    max-width: 48rem;
    font-size: 1.25rem;
    font-weight: 500;
  }
}
</style>
