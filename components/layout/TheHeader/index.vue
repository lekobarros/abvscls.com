<script lang="ts" setup>
// import gsap from '@/src/plugins/gsap'
import useGlobalStore from '@/src/store/global'
import { computed, ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

// Const
import { APP_DARK_MODE } from '@/src/constants'
// Util
import { onClickOutside, useStorage } from '@vueuse/core'

// Components
import CBrand from '@/components/Shared/CBrand/index.vue'
import CButton from '@/components/Shared/CButton/index.vue'
import CButtonArrow from '@/components/Shared/CButtonArrow/index.vue'

// General State
const globalStore = useGlobalStore()
const { isLoaded } = storeToRefs(globalStore)
const root = ref<HTMLElement | null>(null)

onClickOutside(root, () => {
	if (isOpen.value) isOpen.value = false
})

// watch(isLoaded, newVal => {
// 	if (newVal) createHeroAnimation()
// })

const classList = computed(() => {
	return [
		'c-header',
		{
			'c-header--hidden': (headerDirection.value === 'down' && headerPosition.value > 400) || hideHeader.value,
			'c-header--visible': headerDirection.value === 'up' || headerPosition.value < 400,
			'c-header--small': headerSmall.value,
			'c-header--is-open': isOpen.value
		}
	]
})

const headerPosition = ref<number>(0)
const updatedHeaderPosition = ref<number>(0)
const headerDirection = ref<string>('')
const headerSmall = ref<boolean>(false)
const hideHeader = ref<boolean>(false)
const isOpen = ref<boolean>(false)

onMounted((): void => {
	// if (!globalStore.isLoaded) doResetAnimation()

	document.addEventListener('scroll', () => {
		if (window.scrollY > 10) {
			headerSmall.value = true

			headerPosition.value = window.scrollY

			if (headerPosition.value > updatedHeaderPosition.value) headerDirection.value = 'down'
			else headerDirection.value = 'up'

			updatedHeaderPosition.value = headerPosition.value
		} else {
			headerSmall.value = false
		}
	})
})

// Methods
// const createHeroAnimation = (): void => {
// 	const tl = gsap.timeline({ paused: !0 })
// 	const query = gsap.utils.selector(root.value)
// 	const children = [query('.c-nav-logo-text'), query('.c-nav-button')]

// 	// Start Timeline
// 	tl.addLabel('start', '>')
// 	tl.heroFadeIn(children, {}, 'start+=0.05')

// 	tl.play()
// }

// const doResetAnimation = (): void => {
// 	const query = gsap.utils.selector(root.value)
// 	const children = [query('.c-nav-logo-text'), query('.c-nav-button')]

// 	gsap.set(children, { opacity: 0, translateY: '15%', rotate: '1deg' })
// }

// Dark Mode
const darkMode = useStorage<boolean>(APP_DARK_MODE, false)

const setDarkMode = (bool: boolean): void => {
	darkMode.value = bool
}
</script>

<template>
  <div class="header-fixed">
    <div class="header-container">
      <header :class="classList" ref="root">
        <div class="c-header__brand">
          <NuxtLink to="/">
            <div class="sr-only">Alex Vasconcelos Logo link to home page</div>
            <CBrand class="w-24 h-8 | lg:w-28 lg:h-10" />
          </NuxtLink>
        </div>

        <nav class="c-header__nav">
          <ul>
            <li>
              <a href="#">About </a>
            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Works</a></li>
          </ul>
        </nav>

        <div class="c-header__actions">
          <div class="flex items-center justify-center w-10 h-12">
            <c-button @click="setDarkMode(!darkMode)">
              <nuxt-icon :name="darkMode ? 'hero/moon' : 'hero/sun'" filled />
            </c-button>
          </div>
          <div class="flex items-center justify-center w-10 h-12 | lg:hidden">
            <c-button @click="isOpen = !isOpen">
              <nuxt-icon name="hero/bars-3" class="h-4 w-4" filled />
            </c-button>
          </div>
          <div class="hidden md:flex md:items-center">
            <c-button-arrow to="https://www.linkedin.com/in/lekobarros/">Contact</c-button-arrow>
          </div>
        </div>

        <div class="c-header__nav-mobile | lg:!hidden">
          <ul>
            <li>
              <a href="#">About </a>
            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Works</a></li>
            <li>
              <a href="#" class="flex items-center gap-4"> <span>Contact</span> <nuxt-icon name="hero/arrow-top-right-on-square" /></a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  </div>
</template>

<style lang="scss">
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.header-container {
  position: relative;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media screen and (min-width: $breakpoint-screen-lg) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
}

.c-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 99vw;
  border-radius: 1rem;
  transition-property: transform, width;
  transition-timing-function: cubic-bezier(0.135, 0.9, 0.15, 1), cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 0.9s, 0.6s;

  @media screen and (min-width: $breakpoint-screen-lg) {
    padding: 1rem;
    border-radius: 9999px;
  }

  &--visible {
    transform: translateY(0);
  }

  &--hidden {
    transform: translateY(calc(-100% - 1rem));
  }

  &--small {
    width: 16rem;
    background-color: $color-woodsmoke-50;

    @media screen and (min-width: $breakpoint-screen-lg) {
      width: 60rem;
      background-color: rgba($color-woodsmoke-50, 0.8);
      backdrop-filter: blur(10px);
    }
  }

  &--is-open {
    width: 94vw;
    background-color: rgba($color-woodsmoke-50, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
  }

  // Brand
  &__brand {
    margin-left: 1rem;

    @media screen and (min-width: $breakpoint-screen-lg) {
      margin-left: 1rem;
    }
  }

  // Nav
  &__nav {
    display: none;

    @media screen and (min-width: $breakpoint-screen-lg) {
      display: none;
    }

    & > ul {
      display: flex;
      gap: 2rem;

      & > li {
        position: relative;

        & > a {
          font-weight: 300;

          &:before {
            content: '';
            background-color: currentColor;
            display: block;
            height: 1px;
            pointer-events: none;
            position: absolute;
            right: 0;
            bottom: 0;
            left: auto;
            width: 0;
            transition-property: width;
            transition-timing-function: cubic-bezier(0.135, 0.9, 0.15, 1);
            transition-duration: 0.9s;
          }

          &:hover:before {
            left: 0;
            right: auto;
            width: 100%;
          }
        }
      }
    }
  }

  // Actions
  &__actions {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-right: 0.5rem;

    @media screen and (min-width: $breakpoint-screen-lg) {
      gap: 1rem;
      padding-right: 1rem;
    }
  }

  // Nav Mobile
  &__nav-mobile {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition-property: height, opacity;
    transition-timing-function: cubic-bezier(0.135, 0.9, 0.15, 1), ease-out;
    transition-duration: 0.6s, 1s;
    transition-delay: 0, 1s;

    & > ul {
      padding: 2rem 1rem 1rem;

      & > li {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        color: $color-woodsmoke-700;
        font-size: 3rem;
        font-weight: medium;

        &:not(:last-child) {
          border-bottom: 2px solid $color-woodsmoke-100;
        }

        .nuxt-icon svg {
          margin-bottom: 0;
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  &--is-open &__nav-mobile {
    height: 30rem;
    opacity: 1;
    transition-delay: 0.3s, 1s;
    visibility: visible;
  }
}
</style>
