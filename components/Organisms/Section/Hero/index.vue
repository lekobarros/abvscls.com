<script lang="ts" setup>
import { watch, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import useGlobalStore from '@/src/store/global'
import useOrganismHeroStore from './useAnimation'

// General State
const globalStore = useGlobalStore()
const heroStore = useOrganismHeroStore()
const { isLoaded } = storeToRefs(globalStore)

// Components
import TheHeroText from './TheHeroText.vue'
import TheHeroPicture from './TheHeroPicture.vue'
import TheHeroSpinner from './TheHeroSpinner.vue'
import TheHeroContact from './TheHeroContact.vue'

// Watch
watch(isLoaded, newVal => {
	if (newVal) heroStore.doPlayTimeline()
})

// Hooks
onBeforeMount((): void => {
	const { tl } = heroStore
	if (!isLoaded.value && !tl) heroStore.createTimeline()
})
</script>

<template>
  <div class="section-hero" data-scroll-section>
    <div class="c-container">
      <div class="c-hero">
        <TheHeroText />
        <TheHeroPicture />
        <TheHeroSpinner />
        <TheHeroContact />
      </div>
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

.c-container {
  height: 100%;
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
