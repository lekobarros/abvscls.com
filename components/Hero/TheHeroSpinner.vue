<template>
  <div class="c-hero__spinner">
    <NuxtImg width="265" height="265" src="/img/spinner.svg" format="webp" sizes="265px" alt="spinner circle nonsense words - kill off the average - mediocrity is way boring" />
  </div>
</template>

<style lang="scss">
.c-hero__spinner {
  position: absolute;
  z-index: 100;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);

  & > img {
    animation: rotate 16s linear 4s infinite;
  }
}
</style>
