<template>
  <div class="c-hero__text space-y-4 md:space-y-0">
    <h1 class="c-hero__text-heading">A Front-end Engineer <span class="md:block">based BH, BR.</span></h1>
    <p class="c-hero__text-subtitle">Developing and specialize in creating visually appealing and highly functional websites and Single Page Applications (SPAs).</p>
  </div>
</template>

<style lang="scss">
.c-hero__text {
  position: relative;
  z-index: 20;

  @media screen and (max-width: $breakpoint-screen-lg) {
    order: 2;
  }

  @media screen and (min-width: $breakpoint-screen-md) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.25rem;
  }

  @media screen and (min-width: $breakpoint-screen-lg) {
    grid-area: 6 / 1 / 10 / 9;
  }

  @media screen and (min-width: $breakpoint-screen-xl) {
    grid-area: 6 / 3 / 12 / 10;
  }

  // .c-hero__text-heading
  &-heading {
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1;

    @media screen and (min-width: $breakpoint-screen-md) {
      font-size: 3rem;
    }

    @media screen and (min-width: $breakpoint-screen-lg) {
      font-size: 3.75rem;
    }

    @media screen and (min-width: $breakpoint-screen-3xl) {
      font-size: 6rem;
    }
  }

  // .c-hero__text-subtitle
  &-subtitle {
    width: 100%;
    max-width: 48rem;
    font-size: 1.25rem;
    font-weight: 500;
  }
}
</style>
