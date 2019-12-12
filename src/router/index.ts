import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddSession from '../views/AddSession.vue'
import EditSession from '../views/EditSession.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/session/add',
    name: 'addSession',
    component: AddSession
  },
  {
    path: '/session/edit/:id',
    name: 'editSession',
    component: EditSession
  }
]

const router = new VueRouter({
  routes
})

export default router
