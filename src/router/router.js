import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '@/App.vue'
import Green from '../components/lamp/v-lamp-green.vue'
import Red from '../components/lamp/v-lamp-red.vue'
import Yellow from '../components/lamp/v-lamp-yellow.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/green',
    name: 'green',
    component: Green
  },
  {
    path: '/red',
    name: 'red',
    component: Red
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: Yellow
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router