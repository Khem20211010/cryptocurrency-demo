import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chain',
    name: 'chain',
    component: () => import(/* webpackChunkName: "about" */ '../views/chain.vue')
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: () => import(/* webpackChunkName: "about" */ '../views/transaction.vue')
  },
  {
    path: '/mining',
    name: 'mining',
    component: () => import(/* webpackChunkName: "about" */ '../views/mining.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.name=='login'||sessionStorage.getItem('port')){
    next()
  }else{
   
   router.push({name:'login'})
  }
})
export default router
