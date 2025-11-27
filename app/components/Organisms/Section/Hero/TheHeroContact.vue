<script lang="ts" setup>
import { useNuxtApp } from '#app'
import { onMounted, ref } from 'vue'

import { LIST_SOCIAL_DATA } from '@@/src/constants/social'
import * as animations from '@@/src/constants/animations'

// Composables
import useHeroAnimations from '~/composables/useHeroAnimations'

// General State
const nuxtApp = useNuxtApp()
const gsap = nuxtApp.$gsap as gsap
const splitText = nuxtApp.$SplitText as typeof gsap.plugins.SplitText
const heroAnimations = useHeroAnimations()
const root = ref<HTMLElement | null>(null)
const socialData = ref(LIST_SOCIAL_DATA)

// Hooks
onMounted((): void => {
	const { value: el } = root as { value: HTMLElement | null }

	if (!el) return console.warn('Element or timeline not found')

	const query = gsap.utils.selector(el)

	const elTextFollow = el.querySelector('.c-hero__contact-text span') as HTMLElement
	const elTextContactLine = el.querySelector('.c-hero__contact-line') as HTMLElement
	const split = splitText.create(elTextFollow, { type: 'chars' })

	heroAnimations.set('.c-hero__contact-rotate', { opacity: 0, rotate: '-80deg' })
	heroAnimations.set(split.chars, { opacity: 0, translateX: 0, rotate: '-3deg' })
	heroAnimations.set(elTextContactLine, { opacity: 0, width: 0 })

	// const timeline = heroAnimations.timeline
	// console.log('Hero Contact Timeline:', timeline)
	// const x = timeline.getTweensOf(split.chars, true)

	// console.log('Split Chars Animation Duration:', splitCharsDuration)
	// console.log('Split Text Chars:', x)

	// heroAnimations.set(query('.c-hero__contact-navbar li'), { opacity: 0, scale: 0.8 })
	// heroAnimations.add('.c-hero__contact-rotate', { opacity: 1, translateX: 0, rotate: '-90deg', duration: 0.3 }, animations.HERO_START)
	// heroAnimations.add(split.chars, { opacity: 1, stagger: 0.05, duration: 0.1 }, animations.HERO_START)
	// heroAnimations.add(elTextContactLine, { opacity: 1, width: '5rem', duration: 0.6, delay: 0.45 }, animations.HERO_START)

	// heroAnimations.add(query('.c-hero__contact-navbar li'), { opacity: 1, scale: 1, stagger: 0.05, duration: 0.1 }, animations.HERO_FIRST_INTERATION)
})
</script>

<template>
	<div ref="root" class="c-hero__contact">
		<div class="c-hero__contact-rotate">
			<div class="c-hero__contact-text">
				<span class="text-xl">Follow Me</span>
				<div class="c-hero__contact-line" />
			</div>

			<ul class="c-hero__contact-navbar" role="list">
				<li v-for="({ name, url }, key) in socialData" :key="`social-link-${name}`">
					<a :href="url" target="_blank">
						<span class="sr-only">Icon for Alex's {{ name }}</span>
						<icon name="uil:github" />
						<!-- <icon :name="`social/${key}`" filled /> -->
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss">
@use '@@/src/scss/variables' as *;
@use '@@/src/scss/colors' as *;

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

    &>span {
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

      &>a {
        display: block;
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(.55, .085, .68, .53);

        &:hover {
          transform: scale3d(1.5, 1.5, 1.5);
          transition-duration: 0.15s;
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
