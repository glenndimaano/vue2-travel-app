<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations" v-for="destination in destinations" :key="destination.id">
      <h3>
        <router-link :to="{name: 'DestinationDetails', params: { slug : destination.slug}}">{{ destination.name }}</router-link>
      </h3>
      <router-link :to="{name: 'DestinationDetails', params: { slug : destination.slug}}">
        <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
      </router-link>
      
      <p>{{ destination.description }}</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'Home',
  data() {
   return {
      destinations : store.destinations,
    }
  }
} 
</script>
