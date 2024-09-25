<script setup>
import { ref, computed, onMounted, onBeforeUnmount, inject, watch } from 'vue'
import { useNuxtApp } from '#app'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const { locoScroll } = inject('locoScroll')
// const x  = inject('locoScroll')
const root = ref(null)

// Hooks
// watch(
// 	locoScroll, (newLocoScroll) => { 
// 		console.log('newLocoScroll', newLocoScroll)
// 		locoScroll.value.on('scroll', () => {
// 			console.log('Scroll event triggered 2') // Debug log
// 			ScrollTrigger.update() // Atualiza o ScrollTrigger a cada scroll
// 		})
// 	}
// )

// onMounted(() => {
// 	const el = root.value

// 	// Criação da animação com ScrollTrigger aqui
// 	gsap.to('.section-heading', {
// 		scrollTrigger: {
// 			trigger: '.section.horizontal-items', // Elemento que acionará a animação
// 			scroller: '.section.horizontal-items',
// 			start: 'top top+=80%', // Posição de início
// 			// end: '+=100%', // Posição de término
// 			// pin: true, // Fixa o elemento na viewport
// 			scrub: true, // Ativa a animação durante o scroll
// 			markers: true,
// 			id: 'section-heading',
// 			onEnter: () => {
// 				console.log('Element entered the viewport')
// 			},
// 		},
// 		// opacity: 1, // Propriedade a ser animada
// 		y: '-300%' // Propriedade a ser animada
// 	})

// 	console.log(location.value)

// })

// onBeforeUnmount(() => {
// 	ScrollTrigger.getAll().forEach(trigger => trigger.kill())
// })
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
