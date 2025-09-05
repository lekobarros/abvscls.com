<script lang="ts" setup>
import gsap from '@/src/plugins/gsap'
import useGlobalStore from '@/src/stores/global'
import { ref, onBeforeMount, onMounted } from 'vue'

const randPhrases = [
	'Building user-friendly interfaces for web applications',
	'Creating visually appealing and interactive layouts',
	'Designing intuitive navigation and user flow',
	'Implementing features and functionality using Vue.js',
	'Optimizing website performance and speed',
	'Creating responsive and mobile-friendly layouts using CSS3 and HTML5',
	'Creating dynamic user interfaces with JavaScript and front-end frameworks.',
	'Designing and coding beautiful and responsive landing pages.',
	'Using front-end development tools and technologies to improve website functionality.',
	'Ensuring cross-browser compatibility and accessibility',
	'Collaborating with designers and developers on projects',
	'Transforming wireframes and mockups into functional code',
	'Troubleshooting and debugging front-end issues',
	'Creating and maintaining documentation for front-end code',
	'Keeping up-to-date with the latest front-end trends and technologies',
	'Providing user feedback and testing during development process',
	'Creating a seamless user experience through responsive design',
	'Designing and implementing UI/UX elements using Vue.js'
]

const doGenerateRandomPharses = (): string[] => {
	let randomItems: string[] = []
	let localRandPharses = [...randPhrases]

	// Get 3 random items from the array
	for (let i = 0; i < 3; i++) {
		let randomIndex = Math.floor(Math.random() * localRandPharses.length)
		randomItems.push(localRandPharses[randomIndex])
		localRandPharses.splice(randomIndex, 1)
	}

	return randomItems
}

// General State
const globalStore = useGlobalStore()
const generatedPharses = ref<string[] | null>(null)
const pharses = ref<HTMLElement | null>(null)
const backgroundColor = ref<HTMLElement | null>(null)
const animationFinished = ref<boolean>(false)
const tl = gsap.timeline({
	paused: !0,
	onUpdate: function () {
		if (!globalStore.isLoaded && this.progress() >= 0.9) globalStore.setLoad(true)
	},
	onComplete: () => {
		animationFinished.value = true
	}
})

// Hooks
onBeforeMount((): void => {
	generatedPharses.value = doGenerateRandomPharses()
})

onMounted((): void => {
	if (!globalStore.isLoaded) createLoadAnimation()
})

// Methods
const createLoadAnimation = (): void => {
	tl.addLabel('start', '>')

	// Query
	const queryWords = gsap.utils.selector(pharses.value)
	const children: HTMLUListElement[] = queryWords('div') as HTMLUListElement[]

	// Reset El
	gsap.set(children, { opacity: 0 })
	gsap.set(backgroundColor.value, { translateY: '0%' })

	// Timeline
	tl.textFadeIn(children, { opacity: 1, translateY: 0, duration: 1 }, 'start')
	tl.textFadeOut(children, { opacity: 0, translateY: '-1rem', duration: 0.5 }, 'start+=1')
	tl.to(backgroundColor.value, { translateY: '-100%', duration: 1.5, ease: 'Expo.easeInOut' }, '>-=0.5')

	// Scale animation in development
	// if (process.env.NODE_ENV !== 'production') tl.timeScale(2)

	// Play on TL
	tl.play()
}
</script>

<template>
  <div :class="[$style.boxLoader, animationFinished && 'hidden']">
    <!-- Generated Phartses -->
    <div ref="pharses">
      <div
        v-for="(pharse, key) in generatedPharses"
        :key="`box-loader-text-${key}`"
        :class="$style.boxLoaderText"
      >
        {{ pharse }}
      </div>
    </div>
    <!-- Background Delay -->
    <div ref="backgroundColor" class="absolute z-50 inset-0 bg-woodsmoke-900" />
  </div>
</template>

<style lang="scss" module>
.boxLoader {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: $color-white;
  z-index: 999;
  pointer-events: none;
}

.boxLoaderText {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100vw;
  max-width: $breakpoint-screen-sm;
  color: $color-white;
  font-size: 3vh;
  line-height: 1.25;
  text-align: center;
  opacity: 0;
  transform: translate(-50%, -50%);
}
</style>
