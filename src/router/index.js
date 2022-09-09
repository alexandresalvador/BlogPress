import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumosView from '../views/ResumosView.vue'
import AboutView from '../views/AboutView.vue'
import ResuUmView from '../views/ResuUmView.vue'
import ResuDoisView from '../views/ResuDoisView.vue'
import ResuTresView from '../views/ResuTresView.vue'
import ResuQuatroView from '../views/ResuQuatroView.vue'
import ResuCincoView from '../views/ResuCincoView.vue'
import ResuSeisView from '../views/ResuSeisView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/resumos',
    name: 'todos-resumos',
    component: ResumosView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: AboutView
  },
  {
    path: '/sistemas-modulos-node',
    name: 'resumo-um',
    component: ResuUmView
  },
  {
    path: '/modulo-async',
    name: 'resumo-dois',
    component: ResuDoisView
  },
  {
    path: '/emissores-eventos',
    name: 'resumo-tres',
    component: ResuTresView
  },
  {
    path: '/quarto-resumo',
    name: 'resumo-quatro',
    component: ResuQuatroView
  },
  {
    path: '/quinto-resumo',
    name: 'resumo-cinco',
    component: ResuCincoView
  },
  {
    path: '/sexto-resumo',
    name: 'resumo-seis',
    component: ResuSeisView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
