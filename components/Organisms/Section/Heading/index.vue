<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const root = ref(null)

onMounted(() => {
	const el = root.value

	// Create parallax effect with ScrollTrigger
	gsap.to('.section-heading', {
		y: '-100%', // Adjust this value for desired parallax effect
		scrollTrigger: {
			trigger: '.section-heading', // Element that triggers the animation
			start: 'top bottom', // Start when the top of the element hits the bottom of the viewport
			end: '300%', // End when the bottom of the element hits the top of the viewport
			scrub: true, // Smooth scrubbing
			markers: true, // Remove this in production
		}
	})
})

onBeforeUnmount(() => {
	ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<template>
  <div data-scroll-section>
    <div class="section-heading" ref="root">
      <div class="c-container">
        <div class="text">
          <h3>I love building things for the web </h3>
          <p>
            Since 2019, I’ve been crafting digital solutions for a variety of companies, including websites, web applications, and progressive web apps. I’m passionate about building for the web—whether it’s websites, apps, or anything in between. My goal is always to create pixel-perfect, high-performance products that deliver exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-heading {
  padding-top: 20vh;
  padding-bottom: 20vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.75) 58%, rgba(255, 255, 255, 1) 100%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 15%, rgb(255, 255, 255) 100%);
  backdrop-filter: blur(50px);
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
  margin: 0 auto;
  max-width: 60vw;

  h3 {
    font-size: 60px;
    font-weight: 500;
  }

  p {
    font-size: 20px;
    text-align: center;
  }
}
</style>
