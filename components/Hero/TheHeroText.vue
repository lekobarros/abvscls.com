<template>
  <div class="hero-text space-y-4 md:space-y-0">
    <h1 class="hero-text-heading">A Front-end Developer <span class="md:block">based Dublin, IE.</span></h1>
    <p class="hero-text-subtitle">Developing and specialize in creating visually appealing and highly functional websites and Single Page Applications (SPAs).</p>
  </div>
</template>

<style lang="scss">
.hero-text {
  position: relative;
  z-index: 20;

  // Screen Medium
  @media screen and (min-width: $breakpoint-screen-md) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.25rem;
  }

  // Screen Large
  @media screen and (min-width: $breakpoint-screen-lg) {
    grid-area: 2 / 1 / 8 / 7;
  }
}

.hero-text-heading {
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 1;

  // Screen Medium
  @media screen and (min-width: $breakpoint-screen-md) {
    font-size: 3rem;
  }

  // Screen Large
  @media screen and (min-width: $breakpoint-screen-lg) {
    font-size: 3.75rem;
  }

  // Screen Extra Large
  @media screen and (min-width: $breakpoint-screen-xl) {
    font-size: 4.75rem;
  }

  // Screen Double Extra Large
  @media screen and (min-width: $breakpoint-screen-2xl) {
    font-size: 6rem;
  }
}

.hero-text-subtitle {
  width: 100%;
  max-width: 48rem;
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
