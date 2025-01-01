import { createRouter, createWebHistory } from 'vue-router'
import Connexion from '../views/Connexion.vue'
import Inscription from '../views/Inscription.vue'


const routes = [
      // { path: '/', name: 'home', component: Home, },
      { path: '/connexion', name: 'Connexion', component: Connexion },
      { path: '/inscription', name: 'Inscription', component: Inscription },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
