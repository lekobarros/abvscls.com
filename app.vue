<script lang="ts" setup>
import useGlobalStore from '@/src/store/global'

// Components
import ThePreLoader from '@/components/layout/ThePreLoader/index.vue'
import TheHeader from '@/components/layout/TheHeader/index.vue'

// General State
const globalStore = useGlobalStore()
</script>

<template>
  <div>
    <!-- Pre Loader -->
    <ThePreLoader />
    <TheHeader />

    <!-- Content -->
    <div id="app">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Satoshi', sans-serif;
}
</style>