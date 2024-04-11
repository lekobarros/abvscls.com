<script lang="ts">
export default {
	name: 'FooterGoTop',
	methods: {
		scrollTop: function (): void {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}
	}
}
</script>

<template>
  <a href="#top" class="footer-go-top" @click.prevent="scrollTop">
    <!-- Slot -->
    <p>Top</p>
    <!-- Heroicon name: solid/chevron-up -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  </a>
</template>

<style lang="scss">
.footer-go-top {
  display: inline-block;
  padding: 0.25rem 0.875rem;
  height: 2.25rem;
  color: $color-iron-500;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 1.5rem;
  border: 2px solid $color-iron-300;
  transition: transform 0.3s $easing-ease-out-expo 0.1s, color 0.4s $easing-ease-out-expo, border-color 0.4s ease-in-out;
  overflow: hidden;

  p {
    font-size: 1em;
    line-height: 2;
  }

  p,
  svg {
    height: 100%;
    transition: transform 0.4s ease;
  }

  &:hover p,
  &:hover svg {
    transform: translateY(-100%);
  }

  &:hover {
    color: $color-iron-900;
    border-color: $color-iron-900;
    transform: scale(1.1);
  }
}
</style>
