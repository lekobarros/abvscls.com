<script lang="ts" setup>
const props = defineProps<{
  to: string | object
}>()

</script>

<template>
	<nuxt-link class="c-button"
		:to="props.to"
		target="_blank"
	>
		<slot />
	</nuxt-link>
</template>

<style lang="scss">
@use '~/assets/scss/colors' as *;

.c-button {
  background-color: white;
  color: $color-woodsmoke-default;
  font-size: 0.875rem;
  border-radius: 9999px;
  padding: 0.5rem 0.875rem;
  cursor: pointer;
}
</style>
