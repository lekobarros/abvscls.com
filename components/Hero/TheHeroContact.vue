<script lang="ts" setup>
import gsap from '@/src/plugins/gsap'
import useGlobalStore from '@/src/store/global'
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { LIST_SOCIAL_DATA } from '@/src/constants/social'

// General State
const globalStore = useGlobalStore()
const { isLoaded } = storeToRefs(globalStore)
const root = ref<HTMLElement | null>(null)
const socialData = ref(LIST_SOCIAL_DATA)

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
	const children = [...query('.c-hero__contact-navbar li a'), ]

	// Start Timeline
	tl.addLabel('start', '>')
	tl.heroFadeIn('.c-hero__contact-text', {}, 'start+=0.3')
	tl.to(children, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.3, 			ease: 'circ.inOut',  }, 'start+=0.45')

	tl.play()
}

const doResetAnimation = (): void => {
	const query = gsap.utils.selector(root.value)
	const children = [...query('.c-hero__contact-navbar li a')]

	gsap.set('.c-hero__contact-text', { opacity: 0, translateY: '15%', rotate: '1deg' })
	gsap.set(children, { scale: 0.5 })
}
</script>

<template>
  <div class="c-hero__contact" ref="root">
    <div class="c-hero__contact-rotate">
      <div class="c-hero__contact-text">
        <span class="text-xl">Follow Me</span>
        <div class="c-hero__contact-line" />
      </div>

      <ul class="c-hero__contact-navbar" role="list">
        <li v-for="({ name, url }, key) in socialData" :key="`social-link-${name}`">
          <a :href="url" target="_blank">
            <span class="sr-only">Icon for Alex's {{ name }}</span>
            <nuxt-icon :name="`social/${key}`" filled></nuxt-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.c-hero__contact {
  position: relative;
  z-index: 10;

  @media screen and (max-width: $breakpoint-screen-lg) {
    order: 2;
  }

  @media screen and (min-width: $breakpoint-screen-lg) {
    grid-area: 10 / 1 / 12 / 13;
  }

  @media screen and (min-width: $breakpoint-screen-xl) {
    grid-area: 1 / 1 / 13 / 1;
  }

  &-rotate {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;

    @media screen and (min-width: $breakpoint-screen-lg) {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }

    @media screen and (min-width: $breakpoint-screen-xl) {
      position: absolute;
      z-index: 50;
      left: 0;
      bottom: 0;
      padding-top: 1.125rem;
      padding-bottom: 1.125rem;
      transform-origin: left bottom;
      transform: rotate(-90deg) translateY(100%);
    }
  }

  &-text {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > span {
      min-width: 6rem;
    }

    @media screen and (min-width: $breakpoint-screen-lg) {
      justify-content: center;
    }
  }

  &-line {
    width: 5rem;
    height: 2px;
    background-color: $color-woodsmoke-950;
  }

  &-navbar {
    display: flex;
    gap: 1.5rem;

    li {
      position: relative;
      transition-timing-function: ease-in-out;
      transition-delay: 0.1s;

      &:hover {
        transform: scale3d(1.1, 1.1, 1.1);
        transition-duration: 0.1s;
        transition-delay: 0s;
      }

      .nuxt-icon svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>
