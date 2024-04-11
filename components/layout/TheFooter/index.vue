<script lang="ts">
// Data
import socialMedia from '@/src/data/socialMedia'

// Components
import socialLink from '~/components/Social/SocialLink.vue'
import FooterStartProject from './FooterStartProject.vue'
import footerGoTop from './FooterGoTop.vue'

export default {
	name: 'TheFooter',
	components: {
		socialLink,
		FooterStartProject,
		footerGoTop
	},
	data() {
		return {
			socialMedia
		}
	}
}
</script>

<template>
  <div class="container grid gap-[6.77em]">
    <div class="grid gap-4">
      <div class="flex gap-2 items-center">
        <div class="w-2 h-2 bg-iron-900 rounded-full"></div>
        <p>Share your creative ideas with me and get back beautiful designs that impress and engage.</p>
      </div>

      <footer-start-project />

    </div>

    <div class="my-[5.25em] w-full h-[1px] bg-iron-300"></div>

    <div class="flex flex-col md:flex-row gap-8 w-full">
      <!-- Social Media -->
      <div class="w-full md:w-5/12">
        <ul class="flex gap-4">
          <li v-for="(social, key) in socialMedia" :key="key">
            <social-link :to="social.url" target="_blank">{{ social.name }}</social-link>
          </li>
        </ul>
      </div>
      <!-- Scroll Top -->
      <div class="w-full md:w-2/12 md:text-center">
        <footer-go-top />
      </div>
      <!-- Copyright -->
      <div class="w-full md:w-5/12 md:text-right">
        <p class="text-iron-500">©2023 ABVSCLS, All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// https://codepen.io/atunnecliffe/pen/MxbPWb
</style>
