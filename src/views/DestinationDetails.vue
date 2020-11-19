<template>
  <div class="destination-details">
    <GoBack />
      <h1>{{ destination.name }}</h1>
      <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
      <p>{{ destination.description }}</p>

      <div>
        <h2>Destination Experiences</h2>
        
        <div v-for="experience in destination.experiences" :key="experience.id">
          <router-link :to="{name : 'ExperienceDetails', params: { experiencesSlug: experience.slug} }">
            <h3>{{ experience.name }}</h3>
          </router-link>
          <img :src="require(`@/assets/${experience.image}`)" :alt="destination.name">

        </div>
         <router-view :key="$route.path" />
      </div>    
  </div>
</template>

<script>
import store from '@/store'
import GoBack from '@/components/GoBack'
export default {
  components: {
    GoBack
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
      destination() {
        return store.destinations.find(destination => destination.slug === this.slug)
      }
  }
}
</script>