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

</style>
