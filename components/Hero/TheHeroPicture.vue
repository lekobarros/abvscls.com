<template>
  <div class="c-hero__picture">
    <NuxtPicture
      format="webp"
      src="/img/hero-abvscls.jpg"
      :imgAttrs="{
        alt: 'Alex Vasconcelos standing in front of a large screen'
      }"
      width="3420"
      height="2013"
      sizes="100vw sm:360px md:1859px lg:2816px xl:3420px"
    />
  </div>
</template>

<style lang="scss">
.c-hero__picture {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;

  @media screen and (max-width: $breakpoint-screen-lg) {
    order: 0;
  }

  @media screen and (min-width: $breakpoint-screen-lg) {
    grid-area: 1 / 4 / 13 / 13;
  }

  @media screen and (min-width: $breakpoint-screen-xl) {
    grid-area: 2 / 5 / 12 / 13;
  }

  @media screen and (min-width: $breakpoint-screen-2xl) {
    grid-area: 2 / 6 / 12 / 13;
  }

  @media screen and (min-width: $breakpoint-screen-3xl) {
    grid-area: 1 / 6 / 13 / 13;
  }
}
</style>
