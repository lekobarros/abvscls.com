<template>
  <div class="hero-figure">
    <!-- Large Devices -->
    <NuxtImg src="/assets/images/hero_abvscls.jpg" width="1170" height="670" sizes="100vw sm:93vw md:100vw" densities="x1 x2" placeholder alt="Alex's featured picture." class="h-full object-cover"  />
  </div>
</template>

<style lang="scss">
.hero-figure {
  position: relative;
  z-index: 10;

  // Screen Large
  @media screen and (min-width: $breakpoint-screen-lg) {
    grid-area: 1 / 4 / 9 / 9;
  }
}
</style>
