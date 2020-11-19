import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      path: '/user',
      name: 'User',
      component: () => import(/* webpackChunkName: 'User' */ "../views/User.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: 'Login' */ "../views/Login.vue"),
    },
    { 
      path: '/404',
      alias: "*",
      name: "notFound",
      component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
    }
  ]
  
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // need auth
    if (!store.user) {
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else {
    next()
  }
   
  
})

export default router
