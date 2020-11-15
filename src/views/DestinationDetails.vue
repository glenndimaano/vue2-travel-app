<template>
  <div class="destination-details">
      <h1>{{ destination.name }}</h1>
      <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
      <p>{{ destination.description }}</p>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      slug : this.$route.params.slug,
    }
  },
  computed: {
      destination() {
        return store.destinations.find(destination => destination.slug === this.slug)
      }
  }
}
</script>