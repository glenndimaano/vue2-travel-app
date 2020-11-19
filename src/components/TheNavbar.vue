<template>
    <div id="nav">
      <ul class="nav-links">
          <li class="links"><router-link to="/">Home</router-link></li>
          <li class="links"><router-link to="/about">About</router-link></li>
          <li class="links" v-for="destination in destinations" :key="destination.name">
              <router-link :to="{name: 'DestinationDetails', params: { slug: destination.slug} }">{{ destination.name }}</router-link>
          </li>
          <li class="links"><router-link to="/user">Dashboard</router-link></li>
      </ul>
    </div>
    
      
      

</template>

<script>
import store from '@/store'
export default {
    data() {
        return {
            //destinationId: this.route.params.id,
            destinations: store.destinations
        }
    }
}
</script>

<style scoped>
    ul {
        display: flex;
       justify-content: center;
    }
    li {
        list-style: none;
        margin: 1em;
    }
</style>