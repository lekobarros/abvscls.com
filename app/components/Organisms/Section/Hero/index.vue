<script lang="ts" setup>
import { onBeforeMount, onMounted } from 'vue'

// Composables
import useHeroAnimations from '~/composables/useHeroAnimations'

// General State
const heroAnimations = useHeroAnimations()
const root = ref<HTMLElement | null>(null)

// Components
import TheHeroText from './TheHeroText.vue'
import TheHeroPicture from './TheHeroPicture.vue'
import TheHeroSpinner from './TheHeroSpinner.vue'
import TheHeroContact from './TheHeroContact.vue'

// Hooks
onBeforeMount((): void => {
	if (!heroAnimations.timeline) heroAnimations.createTimeline()
})

onMounted((): void => {
	heroAnimations.start()
})
</script>

<template>
	<div class="section-hero">
		<div class="c-container">
			<div class="c-hero">
				<the-hero-text />
				<the-hero-picture />
				<the-hero-contact />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@use '@@/src/scss/variables' as *;
@use '@@/src/scss/colors' as *;

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
