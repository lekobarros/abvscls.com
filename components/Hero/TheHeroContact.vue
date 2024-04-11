<script lang="ts" setup>
import gsap from '@/src/plugins/gsap'
import useGlobalStore from '@/src/store/global'
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
	const contactBar = query('.contact-bar')
	const children = [query('.contact-bar-item')]

	// Start Timeline
	tl.addLabel('start', '>')
	tl.heroFadeIn(contactBar, { duration: 0.3 }, 'start+=0.3')
	tl.heroFadeIn(children, { duration: 1.3 }, 'start+=0.3')

	tl.play()
}

const doResetAnimation = (): void => {
	const query = gsap.utils.selector(root.value)
	const contactBar = query('.contact-bar')
	const children = [query('.contact-bar-item')]

	gsap.set([contactBar, ...children], { opacity: 0, translateY: '15%', rotate: '1deg' })
}
</script>

<template>
  <div class="hero-contact" ref="root">
    <ul role="list" class="contact-bar">
      <li class="contact-bar-item">Contact</li>
      <li class="contact-bar-item"><a href="mailto:lekobarros@outlook.com" class="contact-bar-link">E-mail</a></li>
      <li class="contact-bar-item"><a href="https://www.linkedin.com/in/lekobarros/" target="_blank" class="contact-bar-link">LinkedIn</a></li>
      <li class="contact-bar-item"><a href="https://github.com/lekobarros" target="_blank" class="contact-bar-link">Github</a></li>
    </ul>
  </div>
</template>

<style lang="scss">
.hero-contact {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
}

.contact-bar {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgba($color-woodsmoke-500, 1);

  @media screen and (min-width: $breakpoint-screen-lg) {
    flex-direction: row;
    gap: 3rem;
    border-bottom: 2px solid rgba($color-woodsmoke-300, 0.1);
  }
}

.contact-bar-item {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;

  &:first-child {
    display: none;

    @media screen and (min-width: $breakpoint-screen-lg) {
      display: block;
      margin-right: auto;
    }
  }

  @media screen and (max-width: $breakpoint-screen-lg) {
    border-top: 1px solid rgba($color-woodsmoke-300, 0.1);

    &:last-child {
      border-bottom: 1px solid rgba($color-woodsmoke-300, 0.1);
    }
  }
}

.contact-bar-link {
  display: inline-block;
  color: rgba($color-woodsmoke-50, 1);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: rgba($color-woodsmoke-300, 1);
  }

  // Screen Extra Large
  @media screen and (min-width: $breakpoint-screen-xl) {
    &:hover {
      transform: translateY(-10%);
    }
  }
}
</style>
