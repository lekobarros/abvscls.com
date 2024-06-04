<template>
  <button class="c-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
	name: 'CButton'
}
</script>

<style lang="scss">
.c-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  // padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;
}
</style>