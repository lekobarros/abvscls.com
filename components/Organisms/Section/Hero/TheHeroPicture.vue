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

	heroStore.set(el, { opacity: 0, translateY: '15%', rotate: '3deg' })
	heroStore.add(el, {}, animations.HERO_START)
})
</script>

<template>
  <div class="c-hero__picture" ref="root">
    <NuxtPicture
      format="webp"
      src="/img/hero-abvscls.jpg"
      :imgAttrs="{
        alt: 'Alex Vasconcelos standing in front of a large screen'
      }"
      width="3420"
      height="2013"
      sizes="100vw sm:360px md:1859px lg:2816px xl:3420px"
    />
  </div>
</template>

<style lang="scss">
.c-hero__picture {
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;

  @media screen and (max-width: $breakpoint-screen-lg) {
    order: 0;
  }

  @media screen and (min-width: $breakpoint-screen-lg) {
    grid-area: 1 / 4 / 13 / 13;
  }

  @media screen and (min-width: $breakpoint-screen-xl) {
    grid-area: 2 / 5 / 12 / 13;
  }

  @media screen and (min-width: $breakpoint-screen-2xl) {
    grid-area: 2 / 6 / 12 / 13;
  }

  @media screen and (min-width: $breakpoint-screen-3xl) {
    grid-area: 1 / 6 / 13 / 13;
  }
}
</style>
