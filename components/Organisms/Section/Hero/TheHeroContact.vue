<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import useOrganismHeroStore from './useAnimation'
import { LIST_SOCIAL_DATA } from '@/src/constants/social'
import * as animations from '@/src/constants/animations'

// General State
const heroStore = useOrganismHeroStore()
const root = ref<HTMLElement | null>(null)
const socialData = ref(LIST_SOCIAL_DATA)

// Hooks
onMounted((): void => {
	const { value: el } = root as { value: HTMLElement | null }
	const { tl } = heroStore

	if (!el || !tl) return console.warn('Element or timeline not found')
	else if (heroStore.isFinished) return

	const query = gsap.utils.selector(el)

	heroStore.set(['.c-hero__contact-text', '.c-hero__contact-navbar'], { opacity: 0, translateX: '-15%', rotate: '5deg' })
	heroStore.set(query('.c-hero__contact-navbar li'), { opacity: 0, scale: 0.5, rotate: '1deg' })
	heroStore.add(['.c-hero__contact-text', '.c-hero__contact-navbar'], { translateX: 0 }, animations.HERO_START)
	heroStore.add(query('.c-hero__contact-navbar li'), { scale: 1, delay: 0.3, stagger: 0.15, duration: 0.3 }, animations.HERO_START)
})
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
  z-index: 20;

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
    transform-origin: bottom;

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

      & > a {
        display: block;
        transition-timing-function: ease-in-out;
        transition-delay: 0.1s;

        &:hover {
          transform: scale3d(1.5, 1.5, 1.5);
          transition-duration: 0.1s;
          transition-delay: 0s;
        }
      }

      .nuxt-icon svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>
