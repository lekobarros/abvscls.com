<template>
  <NuxtLink class="c-button" :to="props.to" target="_blank">
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  to: string | object
}>()

</script>

<style lang="scss">
.c-button {
  background-color: white;
  color: $color-woodsmoke-default;
  font-size: 0.875rem;
  border-radius: 9999px;
  padding: 0.5rem 0.875rem;
  cursor: pointer;
}
</style>
