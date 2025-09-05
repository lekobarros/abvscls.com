<script setup lang="ts">
// import useGlobalAnimations from '@@/src/composables/useGlobalAnimations'

// Components
import ThePreLoader from '@/components/layout/ThePreLoader/index.vue'
import TheHeader from '@/components/layout/TheHeader/index.vue'

// Composables
// useGlobalAnimations()
</script>

<template>
  <div id="app">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <nuxt-page />
      </div>
    </div>

    <the-header />
    <!-- <the-pre-loader /> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Satoshi', sans-serif;
}
</style>
