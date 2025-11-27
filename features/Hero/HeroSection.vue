<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from 'vue'

// Composables
import useHeroAnimations from './composables/useHeroAnimations'

// General State
const heroAnimations = useHeroAnimations()
const root = ref<HTMLElement | null>(null)

// Components
import HeroText from './components/HeroText.vue'
import HeroPicture from './components/HeroPicture.vue'
import HeroContact from './components/HeroContact.vue'

// Hooks
onBeforeMount((): void => {
	if (!heroAnimations.timeline) heroAnimations.createTimeline()
})

onMounted((): void => {
	heroAnimations.start()
})
</script>

<template>
	<div class="section-hero" ref="root">
		<div class="c-container">
			<div class="c-hero">
				<hero-text />
				<hero-picture />
				<hero-contact />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoints;

.section-hero {
  position: relative;
  width: 100%;
  background-color: $color-white;
  color: $color-woodsmoke-default;

  @include breakpoints.up("lg") {
    padding-bottom: 8rem;
    height: calc(100svh - 6.5rem);
  }

  @include breakpoints("xl") {
    padding-bottom: 6rem;
  }

  @include breakpoints.up("2xl") {
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

  @include breakpoint.up("lg") {
    display: grid;
    grid-template-rows: repeat(12, minmax(0, 1fr));
    grid-template-columns: repeat(2, 4rem) repeat(10, minmax(0, 1fr));
    gap: 1rem;
    height: 100%;
  }
}
</style>
