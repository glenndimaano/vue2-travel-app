<template>
  <div class="experience-details">
      <h1>{{ experience.name }}</h1>
      <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
      <p>{{ experience.description }}</p>
  </div>
</template>

<script>
import store from '@/store'
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experiencesSlug: {
        type: String,
        required: true
    }
  },
  computed: {
      destinations() {
        return store.destinations.find(destination => destination.slug === this.slug)
      },
      experience() {
        return this.destinations.experiences.find(experience => experience.slug === this.experiencesSlug)
      } 
  }
}
</script>