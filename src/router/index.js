import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeChildren from './modules/HomeChildren'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      name: 'home'
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home'),
    meta: {
      name: 'home'
    },
    children: HomeChildren
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/project'),
    // children: HomeChildren
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('@/views/member'),
    // children: HomeChildren
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine'),
    // children: HomeChildren
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
