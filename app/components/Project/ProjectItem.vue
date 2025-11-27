<script lang="ts" setup>
type Color = {
  primary: string
  secondary: string
}

const props = defineProps<{
  id: string | number
  title: string
  subtitle?: string | null
  description: string
  date?: string | null
  url?: string | null
  color: Color
}>()

// Components
import CButton from '@/components/Button/index.vue'

// General State
const emit = defineEmits([ 'onProjectEnter' ])

// Methods
const onMouseEnter = (): void => {
	emit('onProjectEnter', props.id)
}
</script>

<template>
	<div class="c-work"
		:id="`c-project-${props.id}`"
		@mouseenter="onMouseEnter"
	>
		<div class="c-work-bg" />
		<div class="c-container">
			<div class="c-work-wrap">
				<!-- Project Info -->
				<div class="c-work-heading">
					<h3 class="c-work-heading__title">{{ props.title }}</h3>
					<p class="mb-2" v-if="props.subtitle">{{ props.subtitle }}</p>
					<p class="text-xs font-medium" v-if="props.date">{{ props.date }}</p>
				</div>

				<!-- Project Description -->
				<div class="c-work-node">
					<p>{{ description }}</p>

					<div class="c-work-actions" v-if="props.url">
						<c-button :to="props.url">Live Website</c-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@use '@@/src/scss/variables' as *;
@use '@@/src/scss/colors' as *;

.c-work {
  position: relative;
  padding: 2rem 0;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  height: 16rem;
  transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);

  &:hover {
    padding-top: 2.5rem;
    // padding-bottom: 2.25rem;
    color: $color-white;
  }

  // .c-work-bg
  &:hover .c-work-bg {
    opacity: 1;
  }

  // .c-work-actions
  &:hover .c-work-actions {
    opacity: 1;
    visibility: visible;
  }
}

.c-work-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at bottom, v-bind('props.color.primary') 0, v-bind('props.color.secondary') 100%);
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}

.c-work-wrap {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  width: 100%;
  height: 16rem;
}

.c-work-heading {
  grid-area: span 1 / span 4 / span 1 / span 3;
  // align-self: center;
  // justify-self: start;

  @media screen and (min-width: $breakpoint-screen-xl) {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }

  // Heading
  &__title {
    font-size: 1.875rem;
    font-weight: 500;

    @media screen and (min-width: $breakpoint-screen-lg) {
      font-size: 2.25rem;
    }
  }
}

.c-work-node {
  grid-area: 1 / 9 / 1 / 13;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.875rem;

  @media screen and (min-width: $breakpoint-screen-xl) {
    font-size: 1.125rem;
  }
}

.c-work-actions {
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}
</style>
