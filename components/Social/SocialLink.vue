<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'SocialLink',
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		target: {
			type: String,
			default: '_self'
		}
	}
})
</script>

<template>
  <div class="social-link">
    <nuxt-link class :to="to" :target="target">
      <p><slot /></p>
      <p><slot /></p>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.social-link {
  position: relative;
  overflow: hidden;

  a {
    display: block;
    height: 1.5rem;
    overflow: hidden;

    p {
      color: $color-woodsmoke-default;
      font-size: 1rem;
      transition: transform 0.4s ease;
    }

    &:hover p {
      transform: translateY(-100%);
    }
  }

  // Bottom Line
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $color-woodsmoke-default;
    transform: translateX(-100%);
    transition: transform 0.4s ease;
  }

  &:hover::after {
    transform: translateX(0);
  }
}
</style>
