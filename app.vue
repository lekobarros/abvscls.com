<script lang="ts" setup>
import useGlobalStore from '@/src/store/global'

// Components
import ThePreLoader from '@/components/layout/ThePreLoader/index.vue'
import TheHeader from '@/components/layout/TheHeader/index.vue'
import TheFooter from '@/components/layout/TheFooter/index.vue'

// General State
const globalStore = useGlobalStore()
const nuxtApp = useNuxtApp()

// Nuxt Hooks
nuxtApp.hook('page:finish', () => {
	window.scrollTo(0, 0)
})
</script>

<template>
  <div>
    <!-- Pre Loader -->
    <ThePreLoader />
    <!-- <TheHeader /> -->

    <!-- Content -->
    <div id="app">
      <NuxtPage />
      <TheFooter />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Satoshi', sans-serif;
}
</style>
