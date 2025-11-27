<script lang="ts" setup>
// Components
import TheOrganismHero from '@/components/Organisms/Section/Hero/index.vue'
</script>

<template>
  <main ref="root" class="c-main">
    <TheOrganismHero />
  </main>
</template>

<style lang="scss">
@use '@@/src/scss/variables' as *;

.c-main {
  position: relative;
  padding-top: 6.5rem;
  width: 100vw;
  // will-change: transform;

  @media screen and (min-width: $breakpoint-screen-lg) {
    // position: fixed;
  }
}
</style>
