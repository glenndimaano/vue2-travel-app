import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: "destination" */ '../views/DestinationDetails.vue'),
    props: true,
    children: [{
      path: ":experiencesSlug",
      name: "ExperienceDetails",
      props: true,
      component: () => import(/* webpackChunkName: "detination" */ '../views/ExperienceDetails.vue')
    }],
    beforeEnter: (to, from, next) => {
      const exist = store.destinations.find(destination => destination.slug === to.params.slug)
      if (exist) {
        next()
      } else {
        next({ name: 'notFound'})
      }
    }
  },
  { 
    path: '/404',
    alias: "*",
    name: "notFound",
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
