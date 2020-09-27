import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    component: () => import('../views/Busqueda.vue'),
    alias : ['/search', '/searching' ]
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import('../views/Inventario.vue'),
    alias : ['/listado', '/stock', '/juguetes' ]
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import('../views/Ventas.vue'),
    alias : ['/sales', '/venta' ]
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
