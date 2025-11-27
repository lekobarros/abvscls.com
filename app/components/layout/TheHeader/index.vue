<script lang="ts" setup>
import gsap from '@@/src/plugins/gsap'
import useGlobalStore from '@@/src/stores/global'
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

// General State
const globalStore = useGlobalStore()
const { isLoaded } = storeToRefs(globalStore)
const root = ref<HTMLElement | null>(null)

watch(isLoaded, newVal => {
	if (newVal) createHeroAnimation()
})

onMounted((): void => {
	if (!globalStore.isLoaded) doResetAnimation()
})

// Methods
const createHeroAnimation = (): void => {
	const tl = gsap.timeline({ paused: !0 })
	const query = gsap.utils.selector(root.value)
	const children = [ query('.c-nav-logo-text'), query('.c-nav-button') ]

	// Start Timeline
	tl.addLabel('start', '>')
	tl.heroFadeIn(children, {}, 'start+=0.05')

	tl.play()
}

const doResetAnimation = (): void => {
	const query = gsap.utils.selector(root.value)
	const children = [ query('.c-nav-logo-text'), query('.c-nav-button') ]

	gsap.set(children, { opacity: 0, translateY: '15%', rotate: '1deg' })
}
</script>

<template>
	<header ref="root" class="c-nav">
		<nav class="c-nav-container">
			<!-- Home Link -->
			<nuxt-link to="/" class="c-nav-logo-text">
				abvscls
			</nuxt-link>
			<!-- Redirect: Linkedin -->
			<a href="https://www.linkedin.com/in/lekobarros/"
				target="_blank"
				class="c-nav-button"
			>
				<div class="c-nav-button-emoji" aria-label="Say Hello">👋</div>
				<div class="c-nav-button-text">Say Hello</div>
			</a>
		</nav>
	</header>
</template>

<style lang="scss">
@use '@@/src/scss/variables' as *;

.c-nav {
  position: absolute;
  z-index: 100;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  // Screen Extra Large
  @media screen and (min-width: $breakpoint-screen-xl) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

.c-nav-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  // Screen Large
  @media screen and (min-width: $breakpoint-screen-lg) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  // Screen Extra Large
  @media screen and (min-width: $breakpoint-screen-xl) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.c-nav-logo-text {
  color: #161618;
  text-transform: none;
  font-family: 'Satoshi', sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-decoration: none;
}

.c-nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 2.8em;
  min-width: 3.2em;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  overflow: hidden;
}

.c-nav-button-emoji {
  width: 0.9em;
  height: 0.9em;
  justify-content: center;
  align-items: center;
  font-size: 1.6em;
  line-height: 0.6;
  display: flex;
  transform-origin: bottom center;
}

@keyframes rotate90Deg {
  25% {
    transform: rotate(90deg);
  }

  75% {
    transform: rotate(-90deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
