<template>
  <button class="c-btn-arrow">
    <svg width="0" height="0" class="absolute hidden" color-interpolation-filters="sRGB">
      <defs>
        <filter id="buttonFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="buttonFilter"></feColorMatrix>
          <feComposite in="SourceGraphic" in2="buttonFilter" operator="atop"></feComposite>
          <feBlend in="SourceGraphic" in2="buttonFilter"></feBlend>
        </filter>
      </defs>
    </svg>

    <div class="c-btn-arrow__underlay">
      <div class="c-btn-arrow__content">
        <span><slot /></span>
      </div>

      <div class="c-btn-arrow__append c-btn-arrow__append-circle"></div>
    </div>

    <div class="c-btn-arrow__append c-btn-arrow__append-icon">
      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
      </svg>
    </div>
  </button>
</template>

<script>
export default {
	name: 'CButtonArrow',

	props: {
		tag: {
			type: String,
			default: 'button',
			validator: (value) => ['button', 'a'].includes(value)
		},
		variant: {
			type: String,
			default: 'primary',
			validator: (value) => ['primary', 'secondary'].includes(value)
		},
	}
}
</script>

<style lang="scss">
.c-btn-arrow {
  position: relative;
  display: inline-flex;
  outline: 2px solid transparent;
  outline-offset: 2px;
  filter: url(#buttonFilter);

  &__underlay {
    display: flex;
  }

  &__content {
    flex: 1;
    position: relative;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #010202;
    line-height: 1.25;
    border-radius: 9999px;
    background-color: $color-ronchi-200;
  }

  // Append
  &__append {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.135, 0.9, 0.15, 1);
    transition-duration: 0.9s;
  }

  &__append-circle {
    margin-left: -0.25rem;
    background-color: $color-ronchi-200;
    border-radius: 9999px;
    overflow: hidden;
  }

  &:hover &__append-circle  {
    transform: translateX(0.75rem);
  }

  &__append-icon {
    position: absolute;
    top: 0;
    right: 0;

  }

  &:hover &__append-icon {
    transform: translateX(0.75rem) rotate(45deg);
  }

}
</style>
