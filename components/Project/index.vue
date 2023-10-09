<template>
  <section class="relative">
    <!-- Header -->
    <header class="c-container mb-6">
      <h2 class="text-woodsmoke-500 font-medium text-2xl capitalize">Featured Works</h2>
    </header>

    <!-- Project Items -->
    <div class="c-project">
      <ProjectItem
        @onProjectEnter="setCurrentProjectView"
        v-for="(item, key) in projects"
        :key="`c-project-${key}`"
        :id="key"
        :title="item.website"
        :subtitle="item.subtitle || null"
        :description="item.short_description"
        :date="item.years"
        :url="item.url"
        :color="item.color"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import projects from '@/src/data/projects'
// Components
import ProjectItem from './ProjectItem.vue'
// Methods
const setCurrentProjectView = (id: string): void => {
	currentProjectView.value = id
}
</script>

<style lang="scss">
.c-project {
  position: relative;
  z-index: 10;
}
</style>
